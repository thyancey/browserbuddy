import { PetTabs } from './pet-tabs';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const ScResetButton = styled.div`
  padding: 1rem;
  padding-bottom: 1.5rem;
  margin-bottom: -1rem;

  border-radius: 1rem 1rem 0 0;
  background-color: var(--theme-color-secondary);
  color: var(--theme-color-secondary-text);


  text-decoration: none;
  &:visited {
    text-decoration: none;
  }

  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 2rem;
  border: 0.5rem solid var(--theme-color-secondary-border);

  cursor: pointer;
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
