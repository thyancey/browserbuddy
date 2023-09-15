import styled from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';

import { selectDetailedActiveDeltaStatuses } from '../../services/petstore';
import { mixinColorBubble } from '../../themes';
import { AlertType } from '../../types';

const ScContainer = styled.div`
  color:var(--color-black);
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
  color:var(--color-black);
  margin-top: -.5rem;
  margin-right: -1rem;
  font-weight:bold;
  font-size: 2rem;

  /* border-top-left-radius: 0; */
  border-bottom-right-radius: 0;
  padding:.5rem 1rem;

  position:absolute;
  bottom:0;
  right:0;

  /* transition: transform .2s ease-in-out, bottom .2s ease-out; */
  -webkit-transition: all 0.2s cubic-bezier(.72,1.79,.4,.8);
  transition: all 0.2s cubic-bezier(.72,1.79,.4,.8);
  ${props => mixinColorBubble(props.$bubbleColors[0], props.$bubbleColors[1])}
`;

const getBubbleColors = (alertType?: AlertType) => {
  switch(alertType){
    case 'alert': return [ '--color-red', '--color-yellow' ];
    case 'warning': return [ '--color-yellow', '--color-red' ];
    case 'reward': return [ '--color-green', '--color-white' ];
    default: return [ '--color-white', '--color-grey' ];
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
