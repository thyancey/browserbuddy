import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScWrapper = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`;

const ScProgressBg = styled.div`
  background-color:var(--theme-color-secondary);
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`;

const ScProgressBar = styled.div`
  background-color:var(--theme-color-primary);
  position:absolute;
  height:100%;
  left:0;

  &.full{
    width:100% !important;
    background-color: var(--theme-color-primary);
  }
  z-index:1;
`

type ProgressBarProps = {
  startProgress: number,
  duration: number
}

export const ProgressBar = ({startProgress, duration}: ProgressBarProps) => {
  const [ loaded, setLoaded ] = useState(false);
  useEffect(() => {
    if(!loaded) {
      window.setTimeout(() => setLoaded(true), 1);
    }
  }, [ loaded, setLoaded ]);

  return (
    <ScWrapper>
      <ScProgressBar 
        className={loaded ? 'full' : ''} 
        style={{ transition: `all ${duration}s linear`, width: `${startProgress * 100}%` }} />
      <ScProgressBg />
    </ScWrapper>
  )
}
