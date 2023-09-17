import styled from 'styled-components';
import { round } from '../../util/tools';

const ScContainer = styled.div`
  display: inline-block;
  width: calc(50% - 1rem);
  margin-right: 1rem;
  margin-top: 0.5rem;
`;

const ScLabel = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ScBar = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  padding: 0.25rem 0.5rem;
  height: 4rem;
  margin-top: 0.25rem;

  background-color: var(--theme-color-primary);
  color: var(--theme-color-secondary);
  border: 0.5rem solid var(--theme-color-primary-border);
`;

const ScBarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: width 0.3s ease-in-out, background-color 0.5s ease-in-out;
  background-color: var(--theme-color-secondary);
`;

const ScBarValueContainer = styled.div`
  position: absolute;
  inset: .25rem;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ScBarValue = styled.div`
  color: var(--theme-color-either-text);
  
  border-radius: .5rem; 
  padding: .5rem 2rem;

  font-weight: bold;
`;

type StatBarProps = {
  label: string;
  max: number;
  value: number;
  hideStats?: boolean;
};

export const StatBar = ({ label, max, value, hideStats = false }: StatBarProps) => {
  const percent = Math.round((value / max) * 1000) / 10;
  if (!label) return null;
  return (
    <ScContainer>
      <ScLabel>{label}</ScLabel>
      <ScBar>
        {!hideStats && (
          <ScBarValueContainer>
            <ScBarValue>
              <p>{`${round(value)} / ${max}`}</p>
              {/* <ScValuePercentage>{`${percent}%`}</ScValuePercentage> */}
            </ScBarValue>
          </ScBarValueContainer>
        )}
        <ScBarFill style={{ width: `${percent}%` }} />
      </ScBar>
    </ScContainer>
  );
};
