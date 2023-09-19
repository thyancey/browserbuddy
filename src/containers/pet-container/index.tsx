import styled, { css } from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  selectActiveBehavior,
  selectActiveBg,
  killActivePet,
  selectActivePet,
  selectDetailedActiveDeltaStatuses,
  createPet,
} from '../../services/petstore';

import { Statuses } from './statuses';
import { useCallback, useEffect } from 'react';
import { ThemeStrings } from '../../types';

const ScClipper = styled.div`
  position: absolute;
  inset: 0;
  color: green;
  overflow: hidden;
  background-color: var(--theme-color-primary);
  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius-outer);
`;

const ScWastedBtn = styled.div`
  display: block;
  padding: 3rem;
  text-align: center;

  background-color: var(--theme-color-primary);
  border: 1rem dashed var(--theme-color-secondary);
  border-radius: 3rem;
  color: var(--theme-color-secondary);

  transform: rotate(2deg) translateY(200%);
  opacity: 0;
  transition: transform 0.3s ease-out, opacity 0.2s, background-color 0.3s;

  font-family: var(--font-display);

  span {
    font-size: 6rem;
  }

  &:before {
    content: 'WASTED';
    font-size: 6rem;
  }

  &:hover {
    background-color: var(--theme-color-secondary);
    color: var(--theme-color-primary);

    &:before {
      content: 'RESET?';
    }
  }
`;

interface ScOverlayProps {
  $isActive?: boolean;
}
const ScOverlay = styled.div<ScOverlayProps>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;

  ${ScWastedBtn} {
    transform: rotate(7deg) translateY(100%);
  }

  ${(p) =>
    p.$isActive &&
    css`
      pointer-events: all;

      ${ScWastedBtn} {
        transform: rotate(-7deg) translateY(0%);
        opacity: 1;
        cursor: pointer;
      }
    `}
`;

const ScPetImage = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  text-align: center;

  position: absolute;
  bottom: 0;
  left: 0;
`;

const ScBehavior = styled.p`
  font-size: 2rem;
  opacity: 0.5;

  position: absolute;
  top: 1rem;
  right: 1rem;
`;

interface ScFgImageProps {
  $isActive: boolean;
}

const ScStatusImages = styled.div<ScFgImageProps>`
  opacity: 0;
  transition: opacity 0.5s;

  ${(p) =>
    p.$isActive &&
    css`
      opacity: 1;
    `}
`;

interface ScOverlayImageProps {
  $bgImageUrl?: string;
}
const ScOverlayImage = styled.div<ScOverlayImageProps>`
  position: absolute;
  inset: 0;
  /* z-index: 9; */

  ${(p) =>
    p.$bgImageUrl &&
    css`
      background-size: cover;
      background-position: center;
      background-image: url(${p.$bgImageUrl});
    `}
`;

const setTheme = (theme?: ThemeStrings) => {
  if (theme) {
    const root = document.documentElement;

    Object.keys(theme).forEach((themeKey) => {
      root.style.setProperty(`--theme-${themeKey}`, theme[themeKey]);
    });
  }
};

export const PetContainer = () => {
  const dispatch = useDispatch();
  const activePet = useSelector(selectActivePet, shallowEqual);
  const activeBehavior = useSelector(selectActiveBehavior, shallowEqual);
  const statuses = useSelector(selectDetailedActiveDeltaStatuses, shallowEqual);
  const { imageUrl, bgColor } = useSelector(selectActiveBg, shallowEqual);

  const bgImages = statuses.filter((status) => status.bgImage).map((status) => status.bgImage);
  const fgImages = statuses.filter((status) => status.fgImage).map((status) => status.fgImage);

  // STOP EVERYTHING AND DIE
  useEffect(() => {
    if (activeBehavior?.type === 'dead') {
      dispatch(killActivePet());
    }
  }, [activeBehavior?.type, dispatch]);

  useEffect(() => {
    activePet && setTheme(activePet.theme);
  }, [activePet]);

  const onResetPet = useCallback(() => {
    // @ts-ignore
    const rawPetDef = (window.rawPetsJson as RawPetJSON[]).find((rpj) => rpj.id === activePet.id);
    console.log('resetting', rawPetDef);
    dispatch(
      createPet({
        isActive: true,
        petDefinition: rawPetDef,
        initialState: null,
      })
    );
  }, [dispatch, activePet?.id]);

  if (!activeBehavior) {
    return null;
  }

  const backgroundStyles = {
    backgroundImage: `url(${activeBehavior.imageUrl})`,
    backgroundColor: bgColor || 'initial',
    backgroundPosition: `${activeBehavior.position}`,
    left: `${activeBehavior.offsetX}px`,
    bottom: `${activeBehavior.offsetY}px`,
  };

  return (
    <>
      <ScClipper>
        <ScOverlayImage $bgImageUrl={imageUrl} />
        <ScStatusImages $isActive={bgImages.length > 0}>
          {bgImages.map((imageUrl, idx) => (
            <ScOverlayImage key={idx} $bgImageUrl={imageUrl} />
          ))}
        </ScStatusImages>
        {/* just some debug text */}
        <ScBehavior>{`behavior: ${activeBehavior.id}`}</ScBehavior>
        <ScPetImage style={backgroundStyles} />
        <ScStatusImages $isActive={fgImages.length > 0}>
          {fgImages.map((imageUrl, idx) => (
            <ScOverlayImage key={idx} $bgImageUrl={imageUrl} />
          ))}
        </ScStatusImages>
      </ScClipper>
      <ScOverlay $isActive={activeBehavior.type === 'dead'}>
        <ScWastedBtn onClick={() => onResetPet()}></ScWastedBtn>
      </ScOverlay>
      <Statuses />
    </>
  );
};
