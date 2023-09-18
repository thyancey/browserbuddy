import { PetTabs } from './pet-tabs';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { selectPetList, setActiveIdx } from '../../services/petstore';
import { useDispatch, useSelector } from 'react-redux';

const ScContainer = styled.div`
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
`;

const ScTabs = styled.ul`
  list-style: none;

  > li {
    display: inline-block;
    margin-right: 1rem;
    border: var(--border-width) solid var(--theme-color-color2);
    border-radius: var(--border-radius);
    padding: 0.25rem 0.75rem;
    min-width: 3rem;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const ScResetButton = styled.div`
  display: inline-block;
  border: var(--border-width) solid var(--theme-color-color2);
  border-radius: var(--border-radius);
  padding: 0.25rem 0.75rem;
  min-width: 3rem;
  font-size: 1.5rem;
  text-align: center;

  color: var(--theme-color-color2);
`;

export const HeaderTabs = () => {
  const petList = useSelector(selectPetList);
  const dispatch = useDispatch();

  return (
    <ScContainer>
      <ScTabs>
        {petList.map((p, idx) => (
          <li key={idx} onClick={() => dispatch(setActiveIdx(idx))}>
            {idx + 1}
          </li>
        ))}
      </ScTabs>
      <Link to={'/about'}>
        <h1>{'BrowserBuddy'}</h1>
        <ScResetButton>
          <span>{'?'}</span>
        </ScResetButton>
      </Link>
    </ScContainer>
  );
};
