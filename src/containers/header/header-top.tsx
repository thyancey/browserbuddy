import { PetTabs } from './pet-tabs';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const ScResetButton = styled.div`
  padding: 1rem;
  padding-bottom: 1.5rem;
  margin-bottom: -1rem;

  border-radius: 1rem 1rem 0 0;
  background-color: var(--color-red);
  color: var(--color-white);


  text-decoration: none;
  &:visited {
    text-decoration: none;
  }

  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 2rem;
  text-shadow: 1px 1px 1px var(--color-black);
  border: 0.5rem solid var(--color-white);

  cursor: pointer;
  &:hover {
    background-color: var(--color-red-light);
  }
`;

const ScContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  > ul {
    flex: 1;
  }
`;

export const HeaderTop = () => {
  return (
    <ScContainer>
      <PetTabs />
      <Link to={'/about'}>
        <ScResetButton>{'?'}</ScResetButton>
      </Link>
    </ScContainer>
  );
};
