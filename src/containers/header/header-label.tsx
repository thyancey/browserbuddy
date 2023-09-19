import { useSelector } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import { selectActiveDeltaPet, selectActiveInfo } from '../../services/petstore';

const ScContainer = styled.div`
  position: relative;
  min-height: 6rem;
  /* for animation, should accomodate both born on and died on dates */
  max-height: 8rem;

  border: var(--border-width) solid var(--theme-color-color2);
  border-radius: var(--border-radius);

  transition: max-height 0.3s ease-out;

  &.bio-visible {
    max-height: 15rem;
  }
`;

const ScBioButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 0.75rem;
  bottom: 0.75rem;
  padding: 0rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-display);
  font-size: 2rem;

  .bio-visible & {
    background-color: var(--theme-color-color2);
    color: var(--theme-color-color1);
    border-color: var(--theme-color-color1);

    &:hover {
      background-color: var(--theme-color-color1);
      color: var(--theme-color-color2);
    }
  }
`;

const ScDescription = styled.div`
  padding: 0.5rem 4rem 0.5rem 1.5rem;
`;

const ScBio = styled.div`
  background-color: var(--theme-color-color2);
  color: var(--theme-color-color1);
  opacity: 0;

  padding: 1.25rem 7rem 1.25rem 1.5rem;

  line-height: 1.75rem;

  span:first-child {
    font-family: var(--font-display);
    font-size: 2rem;
  }
  span:last-child {
    margin-left: 0.5rem;
  }

  .bio-visible & {
    opacity: 1;
  }
`;

const ScPetName = styled.h4`
  text-align: left;
  display: inline-block;
  flex: 1;
`;

const getDateLabel = (epoch?: number) => {
  if (!epoch) {
    return null;
  } else {
    const date = new Date(epoch);
    return date.toLocaleString('en-us');
  }
};

export const HeaderLabel = () => {
  const petInfo = useSelector(selectActiveInfo);
  const deltaInfo = useSelector(selectActiveDeltaPet);
  const [bioVisible, setBioVisible] = useState(false);

  if (!petInfo) return null;

  return (
    <ScContainer className={bioVisible ? 'bio-visible' : ''}>
      {bioVisible ? (
        <ScBio>
          <span>{petInfo.name}</span>
          <span>{petInfo.bio}</span>
        </ScBio>
      ) : (
        <ScDescription>
          <ScPetName>{petInfo.name}</ScPetName>
          {deltaInfo?.bornOn && <p>{`born on: ${getDateLabel(deltaInfo.bornOn)}`}</p>}
          {deltaInfo?.diedOn && <p>{`died on: ${getDateLabel(deltaInfo.diedOn)}`}</p>}
        </ScDescription>
      )}
      <ScBioButton onClick={() => setBioVisible((prev) => !prev)}>{bioVisible ? 'X' : '?'}</ScBioButton>
    </ScContainer>
  );
};
