import styled, { css } from 'styled-components';
import { ActiveToggleState, InteractionCooldownStatus, PetInteractionDefinition } from '../../../types';
import { ProgressBar } from './progress-bar';

type ScToggleProps = {
  $toggleStyle?: string;
};

type ScInteractionProps = {
  $isEnabled?: boolean;
};

const ScButton = styled.div<ScToggleProps>`
  padding: 1rem 0.5rem;
  p {
    font-family: var(--font-display);
  }

  position: relative;
  overflow: hidden;
  cursor: pointer;

  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius);

  background-color: var(--theme-color-secondary);
  color: var(--theme-color-primary);

  ${(p) =>
    p.$toggleStyle === 'on' &&
    css`
      background-color: var(--theme-color-secondary);
      color: var(--theme-color-primary);
    `}
  ${(p) =>
    p.$toggleStyle === 'off' &&
    css`
      background-color: var(--theme-color-primary);
      color: var(--theme-color-secondary);
    `}
`;

const ScCooldownButton = styled(ScButton)`
  background-color: var(--theme-color-secondary);
  color: var(--theme-color-primary);

  cursor: not-allowed;
`;

const ScInteraction = styled.li<ScInteractionProps>`
  text-align: center;

  ${(p) =>
    !p.$isEnabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

const ScLabel = styled.p`
  display: block;
  position: relative;
  z-index: 2;
  font-size: 2rem;
`;

type InteractionButtonProps = {
  cooldownStatus?: InteractionCooldownStatus;
  interaction: PetInteractionDefinition;
  isEnabled: boolean;
  toggleState?: ActiveToggleState;
  onClickHandler?: () => void;
};

export const InteractionButton = ({
  cooldownStatus,
  isEnabled,
  interaction,
  toggleState,
  onClickHandler,
}: InteractionButtonProps) => {
  let label = interaction.label;
  const toggleStyle = toggleState ? toggleState.state : undefined;
  if (toggleState) {
    label = `${label} (status: ${toggleState.state})`;
  }
  if (cooldownStatus) {
    const total = cooldownStatus.endAt - cooldownStatus.startAt;
    const progress = (total - (cooldownStatus.endAt - new Date().getTime())) / total;
    const timeLeft = (cooldownStatus.endAt - new Date().getTime()) / 1000;

    return (
      <ScInteraction $isEnabled={isEnabled}>
        <ScCooldownButton $toggleStyle={toggleStyle}>
          <ScLabel>{label}</ScLabel>
          <ProgressBar startProgress={progress} duration={timeLeft} />
        </ScCooldownButton>
      </ScInteraction>
    );
  } else {
    return (
      <ScInteraction $isEnabled={isEnabled} onClick={() => onClickHandler && onClickHandler()}>
        <ScButton $toggleStyle={toggleStyle}>
          <ScLabel>{`${label}`}</ScLabel>
        </ScButton>
      </ScInteraction>
    );
  }
};
