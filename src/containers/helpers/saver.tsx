import { useEffect } from 'react';

import useLocalStorage from '../../util/hooks/useLocalStorage';
import { selectNewSavePayload, setCachedPayload } from '../../services/petstore';
import { DEFAULT_LOCALSTORAGE_STATE } from '../../services/store';
import { useDispatch, useSelector } from 'react-redux';

let lastSaved = 0;

export const Saver = () => {
  const [ , setLocalStorage ] = useLocalStorage('browserbuddy', DEFAULT_LOCALSTORAGE_STATE);
  const savePayload = useSelector(selectNewSavePayload);
  const dispatch = useDispatch();

  useEffect(() => {
    // this check avoids trying to save the initialState on first load, maybe there's a better way around this.
    // it used to check activePet, but resetting a specific pet created some issues there
    if(savePayload && savePayload.config.lastSaved > -1){
      // the line below used to be here (and not within the next if block) to accomodate the split rendering vs saving intervals
      // however, it was causing a stack overflow when resetting a pet (clearing it's definition from storage)
      // the whole caching/rendering system needs to be reworked.
      // setLocalStorage(() => savePayload);
      if(lastSaved !== savePayload.config.lastSaved){
        setLocalStorage(() => savePayload);
        lastSaved = savePayload.config.lastSaved;
        dispatch(setCachedPayload(savePayload));
      }
    }
  }, [ savePayload, dispatch, setLocalStorage ])

  return null;
}
