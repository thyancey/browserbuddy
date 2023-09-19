import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectActiveDeltaStats, selectActiveInfo } from '../../services/petstore';
import { Interactions } from './interactions';
import { StatBar } from './stat-bar';

const ScContainer = styled.div`
  position: absolute;
  inset: 0;
  padding: 1rem;

  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius-outer);

  overflow: hidden;

  h3 {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  hr {
    /* margin: 1rem 0; */
  }

  display: flex;
  flex-direction: column;
`;

const ScInteractions = styled.div`
  &:after {
    content: '';
    display: block;
    border-top: var(--border-width) dashed var(--theme-color-secondary);
    width: 100%;
    margin-top: 1rem;
  }
`;

const ScPetInfo = styled.div`
  margin-top: 1rem;
  overflow-y: auto;
  h3 {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
`;

const ScStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-right: 1rem;
  > div {
    /* flex: 1; */
    width: calc(50% - 0.5rem);
  }
`;

export const Footer = () => {
  const petInfo = useSelector(selectActiveInfo);
  const activeStats = useSelector(selectActiveDeltaStats) || [];
  if (!petInfo) return null;

  return (
    <ScContainer>
      <ScInteractions>
        <Interactions />
      </ScInteractions>
      <ScPetInfo>
        <h3>{'stats'}</h3>
        <ScStats>
          {activeStats.map((s, idx) => (
            <StatBar key={idx} label={s.label} max={s.max} value={s.value} displayType={s.displayType} />
          ))}
        </ScStats>
      </ScPetInfo>
    </ScContainer>
  );
};
