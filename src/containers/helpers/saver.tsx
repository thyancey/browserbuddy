import { useEffect } from 'react';

import useLocalStorage from '../../util/hooks/useLocalStorage';
import { selectLastSaved, selectNewSavePayload, setCachedPayload } from '../../services/petstore';
import { DEFAULT_LOCALSTORAGE_STATE } from '../../services/store';
import { useDispatch, useSelector } from 'react-redux';

let lastSaved = 0;

export const Saver = () => {
  const [ , setLocalStorage ] = useLocalStorage('browserbuddy', DEFAULT_LOCALSTORAGE_STATE);
  const savePayload = useSelector(selectNewSavePayload);
  const rLastSaved = useSelector(selectLastSaved);
  const dispatch = useDispatch();

  useEffect(() => {
    // this check avoids trying to save the initialState on first load, maybe there's a better way around this.
    // it used to check activePet, but resetting a specific pet created some issues there
    

    if(savePayload && savePayload.config.lastSaved > -1){
      if(lastSaved !== rLastSaved){
        console.log('>> save')
        lastSaved = rLastSaved;
        setLocalStorage(() => savePayload);
        dispatch(setCachedPayload(savePayload));
      }
    }
  }, [ savePayload, dispatch, setLocalStorage, rLastSaved ])

  return null;
}
