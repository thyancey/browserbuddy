import styled from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';

import { selectDetailedActiveDeltaStatuses } from '../../services/petstore';
import { mixinColorBubble } from '../../themes';
import { AlertType } from '../../types';

const ScContainer = styled.div`
  position:absolute;
  right:0;
  bottom:1rem;
  z-index:1;
`;
const ScStatuses = styled.ul`
  max-width: 14rem;
  text-align: right;
`;

interface ScStatusProps {
  $bubbleColors: string[]
}
const ScStatus = styled.li<ScStatusProps>`
  /* display:inline-block; */
  white-space:nowrap;
  text-align:right;
  z-index:1;
  
  list-style:none;
  margin-top: -.5rem;
  margin-right: -1rem;
  font-weight:bold;
  font-size: 2rem;
  padding:.5rem 1rem;

  position:absolute;
  bottom:0;
  right:0;

  /* transition: transform .2s ease-in-out, bottom .2s ease-out; */
  -webkit-transition: all 0.2s cubic-bezier(.72,1.79,.4,.8);
  transition: all 0.2s cubic-bezier(.72,1.79,.4,.8);
  ${props => mixinColorBubble(props.$bubbleColors[0], props.$bubbleColors[1], props.$bubbleColors[2])}
`;

const getBubbleColors = (alertType?: AlertType) => {
  return [ '--theme-color-color1', '--theme-color-color2', '--theme-color-color2' ];
  switch(alertType){
    case 'alert': return [ '--theme-color-special', '--theme-color-special-border', '--theme-color-secondary-text' ];
    case 'warning': return [ '--theme-color-primary', '--theme-color-primary-border', '--theme-color-secondary-text' ];
    case 'reward': return [ '--theme-color-secondary', '--theme-color-secondary-border', '--theme-color-secondary-text' ];
    default: return [ '--theme-color-secondary', '--theme-color-secondary-border', '--theme-color-secondary-text' ];
  }
}

const getRotation = () => {
  return -5 + Math.random() * 5;
}
const getBottom = (index:number) => {
  return index * 35;
}

export const Statuses = () => {
  const activeDeltaStatuses = useSelector(selectDetailedActiveDeltaStatuses, shallowEqual);

  const withLabel = activeDeltaStatuses.filter((dS) => dS.label);
  
  return (
    <ScContainer>
      <ScStatuses>
        {withLabel.map((dS,i) => (
          <ScStatus 
            key={dS.id} 
            id={dS.id}
            $bubbleColors={getBubbleColors(dS.alertType)} 
            style={{ bottom: getBottom(i), transform: `rotate(${getRotation()}deg)`}}>
              {dS.label}
          </ScStatus>
        ))}
      </ScStatuses>
    </ScContainer>
  )
}
