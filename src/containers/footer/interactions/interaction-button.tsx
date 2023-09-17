import styled, { css } from 'styled-components';
import { ActiveToggleState, InteractionCooldownStatus, PetInteractionDefinition } from '../../../types';
import { ProgressBar } from './progress-bar';

type ScToggleProps = {
  $toggleStyle?: string
}

type ScInteractionProps = {
  $isEnabled?: boolean
}

const ScButton = styled.div<ScToggleProps>`
  font-weight:bold;
  font-size: 2rem;

  padding:1rem .5rem;

  position:relative;
  overflow: hidden;
  cursor:pointer;

  
  background-color: var(--theme-color-primary);
  border: .5rem solid var(--theme-color-primary-border);
  color: var(--theme-color-either-text);
  border-radius: 1rem;

  ${p => p.$toggleStyle === 'on' && css`
    background-color: var(--theme-color-primary);
  `}
  ${p => p.$toggleStyle === 'off' && css`
    background-color: var(--theme-color-secondary);
    color: var(--theme-color-secondary-text);
    border: .5rem solid var(--theme-color-secondary-border);
  `}
`;

const ScCooldownButton = styled(ScButton)`
  background-color: var(--theme-color-primary);
  border-color: var(--theme-color-primary-border);
  color: var(--theme-color-either-text);
  
  cursor:not-allowed;
`;

const ScInteraction = styled.li<ScInteractionProps>`
  text-align:center;

  ${p => !p.$isEnabled && css`
    opacity: .5;
    pointer-events:none;
  `}
`;

const ScLabel = styled.p`
  display:block;
  position:relative;
  z-index:2;
  font-size: 2rem;
`;

type InteractionButtonProps = {
  cooldownStatus?: InteractionCooldownStatus,
  interaction: PetInteractionDefinition,
  isEnabled: boolean,
  toggleState?: ActiveToggleState,
  onClickHandler?: () => void
}

export const InteractionButton = ({cooldownStatus, isEnabled, interaction, toggleState, onClickHandler}: InteractionButtonProps) => {
  let label = interaction.label;
  const toggleStyle = toggleState ? toggleState.state : undefined;
  if(toggleState){
    label = `${label} (status: ${toggleState.state})`;
  }
  if(cooldownStatus){
    const total = cooldownStatus.endAt - cooldownStatus.startAt; 
    const progress = (total - (cooldownStatus.endAt - new Date().getTime())) / total;
    const timeLeft = (cooldownStatus.endAt - new Date().getTime()) / 1000;

    return(
      <ScInteraction $isEnabled={isEnabled} >
        <ScCooldownButton $toggleStyle={toggleStyle} >
          <ScLabel>{label}</ScLabel>
          <ProgressBar startProgress={progress} duration={timeLeft} />
        </ScCooldownButton>
      </ScInteraction>
    );
  }else{
    return(
      <ScInteraction $isEnabled={isEnabled} onClick={() => onClickHandler && onClickHandler()} >
        <ScButton $toggleStyle={toggleStyle} >
          <ScLabel>{`${label}`}</ScLabel>
        </ScButton>
      </ScInteraction>
    );
  }
}
