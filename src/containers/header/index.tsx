import styled, { css } from 'styled-components';
import { HeaderLabel } from './header-label';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveInfo, selectPetList, setActiveIdx } from '../../services/petstore';
import { Link } from 'react-router-dom';
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

  display: flex;
  flex-direction: row;
  height: 100%;

  > ul {
    flex: 1;
  }

  h1 {
    font-size: 2rem;
    text-align: right;
    margin-right: 1rem;
    color: var(--theme-color-color2);
    display: inline-block;
  }

  a {
    &:hover {
      h1 {
        color: var(--theme-color-color-white);
      }
    }
  }
`;

const ScActivePet = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

interface ScTabProps {
  $isActive?: boolean;
}
const ScTab = styled.li<ScTabProps>`
  display: inline-block;
  margin-right: 1rem;
  border: var(--border-width) solid var(--theme-color-color2);
  border-radius: var(--border-radius);
  padding: 0.25rem 0.75rem;
  min-width: 3rem;
  font-size: 1.5rem;
  text-align: center;

  transition: color 0.3s ease, background-color 0.3s ease;

  cursor: pointer;

  ${(p) =>
    p.$isActive &&
    css`
      background-color: var(--theme-color-color2);
      color: var(--theme-color-color1);
    `}

  &:hover {
    background-color: var(--theme-color-color2);
    color: var(--theme-color-color1);
  }
`;

const ScTabs = styled.ul`
  list-style: none;
`;

export const Header = () => {
  const activePet = useSelector(selectActiveInfo);
  const petList = useSelector(selectPetList);
  const dispatch = useDispatch();

  const petIdx = activePet?.idx || 0;

  return (
    <ScHeader>
      <ScActivePetMarker>
        <div>{petIdx + 1}</div>
      </ScActivePetMarker>
      <ScPetMarkers>
        <ScTabs>
          {petList.map((_, idx) => (
            <ScTab key={idx} $isActive={idx === petIdx} onClick={() => dispatch(setActiveIdx(idx))}>
              {idx + 1}
            </ScTab>
          ))}
        </ScTabs>
        <Link to={'/about'}>
          <h1>{'BrowserBuddy'}</h1>
        </Link>
      </ScPetMarkers>
      <ScActivePet>
        <HeaderLabel />
      </ScActivePet>
    </ScHeader>
  );
};
