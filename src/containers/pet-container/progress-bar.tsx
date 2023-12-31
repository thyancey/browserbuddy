import { useEffect, useState } from 'react';
import styled from 'styled-components';

type ScProgressBarProps = {
  startWidth: string
}

const ScWrapper = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`;

const ScProgressBg = styled.div`
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`;

const ScProgressBar = styled.div<ScProgressBarProps>`
  position:absolute;
  height:100%;
  left:0;
  width: ${p => p.startWidth};

  &.full{
    width:100% !important;
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
        startWidth={`${startProgress * 100}%`} 
        className={loaded ? 'full' : ''} 
        style={{ transition: `all ${duration}s linear` }} />
      <ScProgressBg />
    </ScWrapper>
  )
}
