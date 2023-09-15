import styled, { css } from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { selectActiveBehavior, selectActiveBg, killActivePet } from '../../services/petstore';

import { Statuses } from './statuses';
import { useEffect } from 'react';

type ScContainerProps = {
  $bgImageUrl?: string;
};
const ScContainer = styled.div<ScContainerProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: -2rem;
  padding-top: 2rem;
  bottom: -2rem;
  padding-bottom: 2rem;
  background-color: var(--color-blue);
  border: 0.5rem solid var(--color-white);

  ${(p) =>
    p.$bgImageUrl &&
    css`
      background-size: cover;
      background-position: center;
      background-image: url(${p.$bgImageUrl});
    `}
`;

interface ScOverlayProps {
  $isActive?: boolean;
}
const ScOverlay = styled.div<ScOverlayProps>`
  position: absolute;
  inset: 0;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;

  > span {
    font-size: 8rem;
    color: var(--color-white);
    background-color: var(--color-red);
    display: block;
    padding: 6rem;
    border-radius: 5rem;
    border: 1rem solid var(--color-white);

    transform: rotate(2deg) translateY(200%);
    opacity: 0;
    transition: transform .3s ease-out, opacity .2s;

    ${p => p.$isActive && css`
      transform: rotate(-7deg) translateY(125%);
      opacity: 1;
    `}
  }
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
  color: var(--color-white);
  opacity: 0.5;

  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const PetContainer = () => {
  const dispatch = useDispatch();
  const activeBehavior = useSelector(selectActiveBehavior, shallowEqual);
  const { imageUrl, backgroundColor } = useSelector(selectActiveBg, shallowEqual);

  // STOP EVERYTHING AND DIE
  useEffect(() => {
    if (activeBehavior?.type === 'dead') {
      dispatch(killActivePet());
    }
  }, [activeBehavior?.type, dispatch]);

  if (!activeBehavior) {
    return <ScContainer $bgImageUrl={imageUrl} />;
  }

  const bgImageUrl = activeBehavior.bgImageUrl || imageUrl;
  const backgroundStyles = {
    backgroundImage: `url(${activeBehavior.imageUrl})`,
    backgroundPosition: `${activeBehavior.position}`,
    left: `${activeBehavior.offsetX}px`,
    bottom: `${activeBehavior.offsetY}px`,
    backgroundColor: backgroundColor || 'initial',
  };

  return (
    <ScContainer $bgImageUrl={bgImageUrl}>
      <>
        <ScBehavior>{`behavior: ${activeBehavior.id}`}</ScBehavior>
        <Statuses />
        <ScPetImage style={backgroundStyles} />
        <ScOverlay $isActive={activeBehavior.type === 'dead'}>
          <span>{'WASTED'}</span>
        </ScOverlay>
      </>
    </ScContainer>
  );
};
