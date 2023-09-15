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
    // console.log('SAVER');
    // this check avoids trying to save the initialState on first load, maybe there's a better way around this.
    if(savePayload && !!savePayload.config.activePet){
      // console.log('saving with ', savePayload.pets[0])
      // console.log('> setLocalStorage', savePayload.config.lastSaved, savePayload);
      setLocalStorage(() => savePayload);
      if(lastSaved !== savePayload.config.lastSaved){
        lastSaved = savePayload.config.lastSaved;
        dispatch(setCachedPayload(savePayload));
      }
    }
  }, [ savePayload, dispatch, setLocalStorage ])

  return null;
}
