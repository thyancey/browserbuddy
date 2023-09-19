import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearSave } from '../../services/petstore';

const ScContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  inset: 0rem;

  h2:not(:first-child) { 
    margin-top: 2rem;
  }

  > div {
    padding: 1rem 2rem;
    &:first-child {
      border-bottom: var(--border-width) dashed var(--theme-color-secondary);
      display: flex;
      align-items: center;

      h1 {
        display: inline;
        margin-left: 2rem;
        line-height: 4rem;
      }
    }
    &:nth-child(2) {
      flex: 1;
      overflow-y: auto;
    }
    &:nth-child(3) {
      border-top: var(--border-width) dashed var(--theme-color-secondary);
    }
  }

  hr {
    margin: 2rem 0;
    border: 0;
    border-top: var(--border-width) dashed var(--theme-color-secondary);
    color: var(--theme-color-secondary);
    width: 100%;
    display: block;
  }

  p,
  li {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  ol li {
    margin-left: 3rem;
  }
`;

const ScButton = styled.button`
  font-size: 2rem;
  padding: 0.75rem 1rem 0.5rem 1rem;
  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius);

  text-align: center;
`;

const ScClearSave = styled.div`
  text-align: center;

  ${ScButton} {
    font-size: 3rem;
    border-width: 0.75rem;
    border-radius: 3rem;
    padding: 1rem 2rem;
    font-family: var(--font-display);
  }

  p {
    margin-top: 2rem;
  }
`;

const ScPortfolio = styled.div`
  text-align: center;

  > a {
    font-size: 2rem;
    color: var(--theme-color-secondary);

    &:visited {
      color: var(--theme-color-secondary);
    }

    &:hover {
      color: var(--theme-color-highlight);
    }
  }
`;

export const About = () => {
  const dispatch = useDispatch();

  return (
    <ScContainer>
      <div>
        <Link to={'/'}>
          <ScButton>{'Back'}</ScButton>
        </Link>
        <h1>{'BrowserBuddy'}</h1>
      </div>
      <div>
        <h2>{'What is this thing?'}</h2>
        <p>{'A simple webpage you can visit from time to time, to grow critters and try to keep em alive.'}</p>
        <h2>{'How does it work?'}</h2>
        <p>{`When you close the webpage, your pet will still keep eatin and shiddin' while you're away. The code isn't running in the background - whenever you load it back up, information stored in a cookie determines how long it has been since it was last open. "It has been 200 minutes since last opened, this pet gets 1 point of hungry every minute, so add 200 points of hungry to the pet. It's a little more complicated than that, but that's basically it.`}</p>
        <br />
        <p>{'Only the currently selected pet will "age" when you leave. Pets not currently selected will be paused'}</p>
        <br />
        <p>{`If you're a little tech savvy, and want to see the schema for a pet (it's very flexible!) open the web inspector and look for a "data.json" files for each pet. Hot Doug currently has the most complicated one.`}</p>
        <h2>{'How to play'}</h2>
        <ol>
          <li>{'watch the meters, click interaction buttons (directly below the pet) to make things better'}</li>
          <li>
            {
              'some of the meters can kill the pet if they get to either the minimum or maximum value. The pet description ("?" next to name) should tell you what to be careful about.'
            }
          </li>
        </ol>
        <hr />
        <ScClearSave>
          <ScButton
            onClick={() => {
              dispatch(clearSave());
            }}
          >
            {'Clear Save'}
          </ScButton>
          <p>{'Erases data for all pets. Use it when you have bugs, cause man.. this thing is buggy'}</p>
        </ScClearSave>
      </div>
      <ScPortfolio>
        <a href='https://www.thomasyancey.com' target='_blank'>
          {'© Tom Yancey 2023'}
        </a>
      </ScPortfolio>
    </ScContainer>
  );
};
