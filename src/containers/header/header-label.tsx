import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectActiveDeltaPet, selectActiveInfo } from '../../services/petstore';

const ScContainer = styled.div`
  display: flex;
  border: var(--border-width) solid var(--theme-color-color2);
  border-radius: var(--border-radius);
  padding: 1rem 1.5rem;
`;

const ScLabel = styled.div`
  flex: 1;
  > p {
    /* font-style: italic; */
  }

  > h4 {
    margin-top: -0.25rem;
    margin-bottom: 0.25rem;
  }
`;

const ScPetLevel = styled.div`
  text-align: right;

  > h4 {
    margin: 0;
    line-height: 5rem;
  }
`;

const ScPetName = styled.h4`
  text-align: left;
  display: inline-block;
  flex: 1;
`;

const ScBornOn = styled.p``;

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

  // const level = deltaInfo?.stats.find((s) => s.id === 'level')?.value;
  const level = null;

  if (!petInfo) return null;

  return (
    <ScContainer>
      <ScLabel>
        <ScPetName>{petInfo.name}</ScPetName>
        {deltaInfo?.bornOn && <ScBornOn>{`born on: ${getDateLabel(deltaInfo.bornOn)}`}</ScBornOn>}
        {deltaInfo?.diedOn && <ScBornOn>{`died on: ${getDateLabel(deltaInfo.diedOn)}`}</ScBornOn>}
      </ScLabel>
      <ScPetLevel>{level && <h4>{`Level: ${level}`}</h4>}</ScPetLevel>
    </ScContainer>
  );
};
