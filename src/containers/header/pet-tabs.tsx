import styled, { css } from 'styled-components';

import { selectPetList, setActiveIdx } from '../../services/petstore';
import { useDispatch, useSelector } from 'react-redux';

type ScTabProps = {
  $isActive?: boolean;
};
const ScTab = styled.li<ScTabProps>`
  list-style: none;
  position: relative;
  z-index: 1;
  min-width: 3rem;
  text-align: center;

  cursor: pointer;

  display: inline-block;
  vertical-align: bottom;

  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  padding: 0.2rem 0.2rem 1rem 0.2rem;
  margin: 0 -0.75rem -3.25rem 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem var(--color-black);

  border-radius: 1rem 1rem 0 0;

  background-color: var(--theme-color-primary);
  color: var(--theme-color-primary-text);
  border: 0.5rem solid var(--theme-color-primary-border);

  transition: all 0.3s;

  ${(props) =>
    props.$isActive &&
    css`
      cursor: default;
      background-color: var(--theme-color-secondary);
      color: var(--theme-color-secondary-text);
      border: 0.5rem solid var(--theme-color-secondary-border);

      padding: 0.75rem;
      transition: all 0.2s ease-out;
      font-size: 2.5rem;
      z-index: 2;
      margin-left: 0.25rem;
      margin-right: -1.25rem;
      margin-bottom: -2rem;

      border-radius: 1rem;
      box-shadow: 0.2rem 0.2rem 0.4rem 0.05rem var(--color-black);

      :first-child {
        margin-left: 0rem;
      }
    `};
`;

export const PetTabs = () => {
  const petList = useSelector(selectPetList);
  const dispatch = useDispatch();

  return (
    <ul>
      {petList.map((p, idx) => (
        <ScTab key={idx} onClick={() => dispatch(setActiveIdx(idx))} $isActive={p.isActive}>
          {idx + 1}
        </ScTab>
      ))}
    </ul>
  );
};
