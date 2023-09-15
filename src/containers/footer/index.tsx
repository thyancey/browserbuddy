import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { StatGroup } from './stat-group';
import { selectActiveInfo } from '../../services/petstore';
import { Interactions } from './interactions';

const ScContainer = styled.div`
  position:absolute;
  left:0;
  right:0;
  top:-2rem;
  bottom:0;

  background-color:var(--color-green);
  border:.5rem solid var(--color-white);
  border-radius:2rem;
  overflow:hidden;

  box-shadow: .25rem .25rem .55rem .45rem var(--color-grey);
`

const ScPetInfo = styled.div`
  width:100%;
  height:16rem;

  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight:500;
  padding: 1rem;
  padding-top: .5rem ;
  
  color: var(--color-black);
  

  overflow-y:auto;

  hr{
    border-color:var(--color-blue);
    border-style:dashed;
    margin-top:.5rem;
    margin-bottom:.5rem;

    margin-left:10%;
    width:80%;
  }
`

const ScBio = styled.div`
  width:100%;
`;

const ScBioName = styled.h4`
  margin-top:1rem;
  margin-bottom:.5rem;
`;

const ScBioInfo = styled.p`
  margin-top:1rem;
  padding-left:1rem;
`;

const ScInteractions = styled.div`
  min-height:5rem;
  width:100%;
`;

export const Footer = () => {
  const petInfo = useSelector(selectActiveInfo);
  if(!petInfo) return null;

  return (
    <ScContainer>
      <ScInteractions>
        <Interactions />
      </ScInteractions>
      <ScPetInfo>
        <StatGroup />
        <hr/>
        <ScBio>
          <ScBioName>{'Description'}</ScBioName>
          <ScBioInfo>{petInfo.bio}</ScBioInfo>
        </ScBio>
      </ScPetInfo>
    </ScContainer>
  )
}
