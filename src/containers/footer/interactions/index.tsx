import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import {
  addNewInteractionEvent,
  removeInteractionEvent,
  selectActiveToggles,
  selectActiveInteractionDetail,
  selectIsActivePetAlive,
} from '../../../services/petstore';
import { PetInteractionDefinition } from '../../../types';
import { InteractionButton } from './interaction-button';

const ScInteractions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  > li {
    flex: 1 auto;
    list-style: none;
  }
`;

export const Interactions = () => {
  const interactionDetails = useSelector(selectActiveInteractionDetail, shallowEqual);
  const activeToggles = useSelector(selectActiveToggles, shallowEqual);
  const isActivePetAlive = useSelector(selectIsActivePetAlive);

  // thunk madness, cause I don't know how else to do this.
  const dispatch = useDispatch();
  const addTemporaryInteraction = (interaction: PetInteractionDefinition) => {
    const now = new Date().getTime();
    // @ts-ignore
    dispatch((thunkDispatch: Dispatch) => {
      thunkDispatch(
        addNewInteractionEvent({
          interaction: interaction,
          time: now,
        })
      );
      if (interaction.cooldown) {
        window.setTimeout(() => {
          thunkDispatch(removeInteractionEvent(interaction.id));
        }, interaction.cooldown);
      }
    });
  };

  return (
    <ScInteractions>
      {interactionDetails.filter(iDetail => iDetail.visible).map((iDetail) => (
        <InteractionButton
          key={iDetail.id}
          cooldownStatus={iDetail.cooldownStatus}
          isEnabled={isActivePetAlive ? iDetail.enabled : false}
          interaction={iDetail.definition}
          toggleState={activeToggles.find((toggle) => toggle.id === iDetail.id)}
          onClickHandler={() => addTemporaryInteraction(iDetail.definition)}
        />
      ))}
    </ScInteractions>
  );
};
