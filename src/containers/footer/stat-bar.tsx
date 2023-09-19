import { useMemo } from 'react';
import styled from 'styled-components';
import { StatDisplayType } from '../../types';

const ScContainer = styled.div``;

const ScLabel = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ScBarContainer = styled.div`
  margin-top: 0.25rem;
  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius);
  overflow: hidden;
`;
const ScBar = styled.div`
  position: relative;
  height: 4rem;
  width: calc(100% - 5.7rem);
`;

const ScBarFill = styled.div`
  position: absolute;
  /* top: 0; */
  top: 0.3rem;
  left: 0.3rem;
  bottom: 0.3rem;
  z-index: 1;
  transition: width 0.3s ease-in-out, background-color 0.5s ease-in-out;
  background-color: var(--theme-color-secondary);
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 0.5rem;
  border-radius: 0.5rem;

  span {
    color: var(--theme-color-primary);
    font-size: 2rem;
    font-family: var(--font-display);

    /* tiny % symbol */
    &:nth-child(2) {
      font-size: 1rem;
      margin-left: 0.25rem;
      margin-top: 0.75rem;
    }
  }
`;

const ScBarBg = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--theme-color-primary);
  right: -4rem;
`;

const getRando = () => {
  const val = Math.random();
  if (val > 0.66) return 100;
  if (val > 0.33) return 50;
  return 0;
};

type StatBarProps = {
  label: string;
  max: number;
  value: number;
  displayType?: StatDisplayType;
};
export const StatBar = ({ label, displayType = 'value', max, value }: StatBarProps) => {
  const percent = Math.round((value / max) * 1000) / 10;
  // const percent = getRando();

  const ValueMarkup = useMemo(() => {
    if (displayType === 'percent') {
      return (
        <>
          <span>{percent}</span>
          <span>{'%'}</span>
        </>
      );
    } else if (displayType === 'roundedValue') {
      return (
        <>
          <span>{Math.round(value)}</span>
        </>
      );
    } else {
      return (
        <>
          <span>{value}</span>
        </>
      );
    }
  }, [displayType, percent, value]);

  if (!label) return null;
  return (
    <ScContainer>
      <ScLabel>{label}</ScLabel>
      <ScBarContainer>
        <ScBar>
          <ScBarFill style={{ width: `calc(${percent}% + 5rem)` }}>{ValueMarkup}</ScBarFill>
          <ScBarBg />
        </ScBar>
      </ScBarContainer>
    </ScContainer>
  );
};
