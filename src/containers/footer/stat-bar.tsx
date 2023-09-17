import styled from 'styled-components';
import { round } from '../../util/tools';

const ScContainer = styled.div`
  display:inline-block;
  width:calc(50% - 1rem);
  margin-right:1rem;
`;

const ScLabel = styled.h4`
  font-size: 1rem;
`;

const ScBar = styled.div`
  position:relative;
  border:.5rem solid var(--color-white);
  border-radius: 1rem;
  overflow:hidden;
  padding:.25rem .5rem;
  text-align:center;
  background-color: var(--color-white);

  box-shadow: 0px -2px 4px var(--color-grey-light);
`;

const ScBarValue = styled.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  z-index:1;
`;

const ScBarFill = styled.div`
  position:absolute;
  top:0;
  left:0;
  height:100%; 
  transition: width .3s ease-in-out, background-color .5s ease-in-out;
  background-color: var(--color-blue);
`;

const ScValueProgress = styled.p`
`;

const ScValuePercentage = styled.p`
  opacity:.5;
  margin-top:.125rem;
  margin-bottom:0rem;
  font-size:1.25rem;
`;


type StatBarProps = {
  label: string,
  max: number,
  value: number,
  hideStats?: boolean
};

export const StatBar = ({label, max, value, hideStats = false}: StatBarProps) => {
  const percent = Math.round((value / max) * 1000) / 10;
  if(!label) return null;
  return (
    <ScContainer>
      <ScLabel>{label.toLocaleUpperCase()}</ScLabel>
      <ScBar>
          {!hideStats && (
            <ScBarValue>
              <ScValueProgress>{`${round(value)} / ${max}`}</ScValueProgress>
              <ScValuePercentage>{`${percent}%`}</ScValuePercentage>
            </ScBarValue>
          )}
        <ScBarFill style={{width:`${percent}%`}} />
      </ScBar>
    </ScContainer>
  )
}
