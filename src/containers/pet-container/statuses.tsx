import styled, { css } from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';

import { selectDetailedActiveDeltaStatuses } from '../../services/petstore';
// import { AlertType } from '../../types';

const ScContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 1rem;
  z-index: 1;
`;
const ScStatuses = styled.ul`
  max-width: 14rem;
  text-align: right;
`;

interface ScStatusProps {
  $bubbleColors: string[];
}
const ScStatus = styled.li<ScStatusProps>`
  /* display:inline-block; */
  white-space: nowrap;
  text-align: right;
  z-index: 1;

  list-style: none;
  margin-top: -0.5rem;
  margin-right: -1rem;
  font-weight: bold;
  font-size: 2rem;
  padding: 0.5rem 1rem;

  position: absolute;
  bottom: 0;
  right: 0;

  /* transition: transform .2s ease-in-out, bottom .2s ease-out; */
  -webkit-transition: all 0.2s cubic-bezier(0.72, 1.79, 0.4, 0.8);
  transition: all 0.2s cubic-bezier(0.72, 1.79, 0.4, 0.8);
  ${(p) => css`
    border-radius: var(--border-radius);
    border: var(--border-width) solid;
    border-color: var(${p.$bubbleColors[1]});
    color: var(${p.$bubbleColors[2]});
    background-color: var(${p.$bubbleColors[0]});
  `}
`;

// const getBubbleColors = (alertType?: AlertType) => {
const getBubbleColors = () => {
  return ['--theme-color-primary', '--theme-color-secondary', '--theme-color-secondary'];
};

const getRotation = () => {
  return -5 + Math.random() * 5;
};
const getBottom = (index: number) => {
  return index * 35;
};

export const Statuses = () => {
  const activeDeltaStatuses = useSelector(selectDetailedActiveDeltaStatuses, shallowEqual);

  const withLabel = activeDeltaStatuses.filter((dS) => dS.label);

  return (
    <ScContainer>
      <ScStatuses>
        {withLabel.map((dS, i) => (
          <ScStatus
            key={dS.id}
            id={dS.id}
            // $bubbleColors={getBubbleColors(dS.alertType)}
            $bubbleColors={getBubbleColors()}
            style={{ bottom: getBottom(i), transform: `rotate(${getRotation()}deg)` }}
          >
            {dS.label}
          </ScStatus>
        ))}
      </ScStatuses>
    </ScContainer>
  );
};
