import useInterval from '../../util/hooks/useInterval';
import { pingStore } from '../../services/petstore';
import { useDispatch } from 'react-redux';
import { log } from '../../util/tools';

export const SAVE_RATE = 2000;

export const Pinger = () => {
  const dispatch = useDispatch();

  useInterval(() => {
    const t = new Date().getTime();

    log(`----SAVE: ${t}------- `);
    dispatch(pingStore({ time: t }));
  }, SAVE_RATE);

  return null;
}
