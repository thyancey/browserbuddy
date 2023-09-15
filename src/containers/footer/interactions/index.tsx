import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import {
  addNewInteractionEvent,
  removeInteractionEvent,
  selectActiveCachedToggles,
  selectActiveInteractionDetail,
} from '../../../services/petstore';
import { PetInteractionDefinition } from '../../../types';
import { InteractionButton } from './interaction-button';

const ScInteractions = styled.ul`
  border-bottom: 0.25rem dashed black;
  display: flex;
  flex-wrap: wrap;

  > li {
    margin: 0.5rem;
    margin-left: 0.25rem;
    &:first-child {
      margin-left: 0.5rem;
    }
    flex: 1 auto;
    list-style: none;
  }
`;

export const Interactions = () => {
  const interactionDetails = useSelector(selectActiveInteractionDetail, shallowEqual);
  const activeToggles = useSelector(selectActiveCachedToggles, shallowEqual);

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

  // this is such a side-effect nightmare. Putting this in a thunk with a timeout was the only
  // way to get this work without erroring out hard. This is bad! Things are not goin well!
  
  /*
  if (activeBehavior?.id === 'BE_DEAD') {
    console.log('INTERACTIONS')
    setTimeout(() => {
      //@ts-ignore
      dispatch((thunkDispatch: Dispatch) => {
        thunkDispatch(killActivePet());
      });
    }, 1);
  }
  */

  return (
    <ScInteractions>
      {interactionDetails.map((iDetail) => (
        <InteractionButton
          key={iDetail.id}
          cooldownStatus={iDetail.cooldownStatus}
          isEnabled={iDetail.enabled}
          interaction={iDetail.definition}
          toggleState={activeToggles.find((toggle) => toggle.id === iDetail.id)}
          onClickHandler={() => addTemporaryInteraction(iDetail.definition)}
        />
      ))}
    </ScInteractions>
  );
};
