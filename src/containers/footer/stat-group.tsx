import styled from 'styled-components';
import { StatBar } from './stat-bar';
import { selectCachedDeltaStats } from '../../services/petstore';
import { useSelector } from 'react-redux';

const ScStats = styled.div`
  width:100%;
`;

export const StatGroup = () => {
  const activeStats = useSelector(selectCachedDeltaStats) || [];
  console.log('activeStats', activeStats);

  return (
    <ScStats>
      {activeStats.map((s, idx) => (
        <StatBar 
          key={idx}
          label={s.label}
          max={s.max}
          value={s.value}
        />
      ))}
    </ScStats>
  )
}
