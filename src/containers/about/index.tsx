// import { useHistory } from 'react-router-dom';
import { getColor } from '../../themes/';

import styled from 'styled-components';
import { clearSave } from '../../services/petstore';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ScContainer = styled.div`
  padding: 1rem;
  color: ${getColor('blue')};
  min-width: 30rem;
`;

const ScLogo = styled.h1`
  font-size: 2rem;
  text-align: left;
`;

const ScButton = styled.button`
  border: 0;
  margin: 0;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: ${getColor('green')};
  border: 0.5rem solid ${getColor('white')};
  border-radius: 1rem;

  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
`;

export const About = () => {
  const dispatch = useDispatch();

  return (
    <ScContainer>
      <ScLogo>{'About BrowserPet'}</ScLogo>
      <p>{'© Tom Yancey 2022'}</p>
      <ScButton>
        <Link to={'/'}>{'BACK'}</Link>
      </ScButton>
      <ScButton
        onClick={() => {
          dispatch(clearSave());
        }}
      >
        {'Clear Save'}
      </ScButton>
    </ScContainer>
  );
};
