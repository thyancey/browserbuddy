import styled from 'styled-components';

import Helpers from './helpers';
import { Footer } from './footer';
import { PetContainer } from './pet-container';
import { Header } from './header';

const ScContainer = styled.div`
  position: absolute;
  inset: 0;
  margin: auto auto;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const ScHeader = styled.div`
  /* height: 10%; */
`;

const ScBody = styled.div`
  flex: 1;
  position: relative;
`;

const ScFooter = styled.div`
  flex: 0 0 33%;
  position: relative;
`;

export const Main = () => {
  return (
    <ScContainer>
      <Helpers />
      <Header />
      <ScBody>
        <PetContainer />
      </ScBody>
      <ScFooter>
        <Footer />
      </ScFooter>
    </ScContainer>
  );
};
