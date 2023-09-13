import styled from 'styled-components';

import { getColor } from '../themes/';

import Helpers from './helpers';
import { Footer } from './footer';
import { PetContainer } from './pet-container';
import { Header } from './header';

const ScContainer = styled.div`
  position: absolute;
  inset: 0;
  margin: auto auto;
  padding: 1rem;
  min-width:var(--val-min-width);
  min-height:var(--val-min-height);
  max-width: 90rem;
  max-height: 100rem;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10rem auto 20rem;
  grid-template-areas:
    'header'
    'body'
    'footer';
    
  color: ${getColor('blue')};

  > div {
    position: relative;
  }
`;

const ScHeader = styled.div`
  grid-area: header;
`;

const ScBody = styled.div`
  grid-area: body;
`;

const ScFooter = styled.div`
  grid-area: footer;
`;

export const Main = () => {
  return (
    <ScContainer>
      <Helpers />
      <ScHeader>
        <Header />
      </ScHeader>
      <ScBody>
        <PetContainer />
      </ScBody>
      <ScFooter>
        <Footer />
      </ScFooter>
    </ScContainer>
  );
};
