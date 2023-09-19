import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }

  /* prevent text selection */
  * {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
  
  html{
    --val-min-width: 35rem;
    --val-min-height: 60rem;

    --color-black: #0f0e0b;
    --color-white: #fef8dd;
    --color-blue: #1fb9f3;

    font-size: 70%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Cabin', sans-serif;

    --theme-color-primary: #0f0e0b;
    --theme-color-secondary: #fef8dd;
    --theme-color-highlight: #FFFFFF;
  
    --border-radius: 1rem;
    --border-radius-outer: 1.5rem;
    --border-width: .3rem;

    --font-display: 'Paytone One', 'sans-serif';
    --font-copy: 'Cabin', sans-serif;
    
    background-color: var(--theme-color-primary);
    color: var(--theme-color-secondary);
  }

  #root{
    margin:0 auto;
    /* for chrome extension */
    min-width:var(--val-min-width);
    min-height:var(--val-min-height);
  }
  h1, h2, h3, h4, h5, h6{
    font-family: var(--font-display);
  }
  a, p, span {
    font-family: var(--font-copy);
  }
  h1{
    font-size: 4rem;
  }
  h2{
    font-size: 3rem;
  }
  h3{
    font-size: 2.5rem;
  }
  h4{
    font-size: 2rem;
  }
  h5{
    font-size: 1.5rem;
  }
  p, span{
    font-size:1.5rem;
    line-height: 1.5rem;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    text-decoration: none;
    &:active {
      color: inherit;
    }
    &:visited {
      text-decoration: none;
    }
  }

  button {
    background-color: var(--theme-color-primary);
    color: var(--theme-color-secondary);

    border: var(--border-width) solid var(--theme-color-secondary);
    border-radius: var(--border-radius);

    cursor: pointer;

    &:hover{
      background-color: var(--theme-color-secondary);
      color: var(--theme-color-primary);
    }
  }
`;
