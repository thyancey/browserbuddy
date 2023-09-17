import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearSave } from '../../services/petstore';

const ScContainer = styled.div`
  padding: 1rem;
  color: var(--color-blue);
  min-width: 30rem;
`;

const ScLogo = styled.h1`
  font-size: 2rem;
  text-align: left;
`;

const ScButton = styled.button`
  border: 0;
  margin: 1rem;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-black);
  border: 0.5rem solid var(--color-white);
  border-radius: 1rem;

  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
`;

export const About = () => {
  const dispatch = useDispatch();

  return (
    <ScContainer>
      <ScLogo>{'About BrowserBuddy'}</ScLogo>
      <p>{'© Tom Yancey 2023'}</p>
      <div>
        <Link to={'/'}>
          <ScButton>{'Home'}</ScButton>
        </Link>
        <ScButton
          onClick={() => {
            dispatch(clearSave());
          }}
        >
          {'Clear Save'}
        </ScButton>
      </div>
    </ScContainer>
  );
};
