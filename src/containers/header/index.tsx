import styled from 'styled-components';
import { HeaderLabel } from './header-label';
import { HeaderTabs } from './header-tabs';
const ScHeader = styled.header`
  position: relative;

  display: grid;
  grid-template-columns: 5rem auto;
  grid-template-rows: 2.5rem auto;
  gap: 1rem;
`;

const ScActivePetMarker = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;

  > div {
    height: 100%;
    width: 100%;

    border: var(--border-width) solid var(--theme-color-color2);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
`;

const ScPetMarkers = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

const ScActivePet = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

export const Header = () => {
  return (
    <ScHeader>
      <ScActivePetMarker>
        <div>{'1'}</div>
      </ScActivePetMarker>
      <ScPetMarkers>
        <HeaderTabs />
      </ScPetMarkers>
      <ScActivePet>
        <HeaderLabel />
      </ScActivePet>
    </ScHeader>
  );
};
