import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectActiveCachedPet, selectActiveInfo } from '../../services/petstore';

const ScContainer = styled.div`
  width:100%;
  height:100%;
  
  color:var(--color-white);
  background-color: var(--color-blue);
  border:.5rem solid var(--color-white);
  border-radius: 1rem;
  position:relative;
  padding:0.5rem 1rem;

  display:flex;
  box-shadow: .25rem .25rem .25rem .05rem var(--color-grey);

  >div{
    display:inline-block;
    vertical-align:middle;
    height:100%;
  }
`;

const ScLabel = styled.div`
  flex:1;

  >p{
    font-style:italic;
  }

  >h4{
    margin-top:-.5rem;
    margin-bottom: -.5rem;
  }
`

const ScPetLevel = styled.div`
  text-align:right;
  color: var(--color-white);
  
  >h4{
    margin:0;
    line-height: 5rem;
  }
`;

const ScPetName = styled.h4`
  text-align:left;
  display:inline-block;
  flex:1;
`;


const ScBornOn = styled.p`
  
`

const getDateLabel = (epoch?: number) => {
  if(!epoch){
    return null;
  }else{
    const date = new Date(epoch);    
    return date.toLocaleString("en-us");
  }
};

export const HeaderBottom = () => {
  const petInfo = useSelector(selectActiveInfo);
  const cachedInfo = useSelector(selectActiveCachedPet);

  const level = cachedInfo?.stats.find(s => s.id === 'level')?.value;

  return (
    <ScContainer>
      {petInfo && (
        <>
          <ScLabel>
            <ScPetName>{petInfo.name}</ScPetName>
            {cachedInfo?.bornOn && <ScBornOn>{`born on: ${getDateLabel(cachedInfo.bornOn)}`}</ScBornOn>}
            {cachedInfo?.diedOn && <ScBornOn>{`died on: ${getDateLabel(cachedInfo.diedOn)}`}</ScBornOn>}
          </ScLabel>
          <ScPetLevel>
            {level && <h4>{`Level: ${level}`}</h4>}
          </ScPetLevel>
        </>
      )}
    </ScContainer>
  )
}
