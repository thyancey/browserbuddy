import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectActiveDeltaPet, selectActiveInfo } from '../../services/petstore';

const ScContainer = styled.div`
  width:100%;
  height:100%;
  
  color:var(--theme-color-primary-text);
  background-color: var(--theme-color-primary);
  border:.5rem solid var(--theme-color-primary-border);
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
  color: var(--theme-color-primary-text);
  
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
  const deltaInfo = useSelector(selectActiveDeltaPet);

  const level = deltaInfo?.stats.find(s => s.id === 'level')?.value;

  return (
    <ScContainer>
      {petInfo && (
        <>
          <ScLabel>
            <ScPetName>{petInfo.name}</ScPetName>
            {deltaInfo?.bornOn && <ScBornOn>{`born on: ${getDateLabel(deltaInfo.bornOn)}`}</ScBornOn>}
            {deltaInfo?.diedOn && <ScBornOn>{`died on: ${getDateLabel(deltaInfo.diedOn)}`}</ScBornOn>}
          </ScLabel>
          <ScPetLevel>
            {level && <h4>{`Level: ${level}`}</h4>}
          </ScPetLevel>
        </>
      )}
    </ScContainer>
  )
}
