import { createGlobalStyle, css } from 'styled-components';

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
    --color-grey: #373737;
    --color-grey-light: #A39F8E;
    --color-white: #fef8dd;
    --color-blue: #1fb9f3;
    --color-blue-light: #80cbe7;
    --color-green: #51f249;
    --color-yellow: #fff249;
    --color-red: #F55658;
    --color-red-light: #f18283;
    --color-purple: #6b1ff3;

    font-size: 70%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Cabin', sans-serif;

    --theme-color-color1: #0077B6;
    --theme-color-color2: #90E0EF;
    --theme-color-color-white: #FFFFFF;

    --theme-color-primary: var(--color-blue);
    --theme-color-primary-border: var(--color-white);
    --theme-color-primary-text: var(--color-white);

    --theme-color-secondary: var(--color-green);
    --theme-color-secondary-border: var(--color-white);
    --theme-color-secondary-text: var(--color-black);
    
    --theme-color-either-text: var(--color-black);
    
    --theme-color-special: var(--color-purple);
    --theme-color-special-border: var(--color-white);
    --theme-color-special-text: var(--color-black);

    --theme-color-bg: var(--color-secondary);


    --border-radius: 1rem;
    --border-radius-outer: 1.5rem;
    --border-width: .3rem;

    --font-display: 'Paytone One', 'sans-serif';
    --font-copy: 'Cabin', sans-serif;
    
    background-color: var(--theme-color-color1);
    color: var(--theme-color-color2);
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
    background-color: var(--theme-color-color1);
    color: var(--theme-color-color2);

    border: var(--border-width) solid var(--theme-color-color2);
    border-radius: var(--border-radius);

    cursor: pointer;

    &:hover{
      background-color: var(--theme-color-color2);
      color: var(--theme-color-color1);
    }
  }
`;

const shadows = {
  z1: '-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.16)',
  z2: '-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.36)',
  z3: '-.2rem .5rem 1rem .2rem rgba(0,0,0,.36)',
};

const breakpoints = {
  mobile_tiny: '300px',
  mobile_medium: '400px',
  mobile_large: '500px',
  tablet: '768px',
  desktop: '1024px',
};

type ThemeStore = {
  shadows: typeof shadows;
  breakpoints: typeof breakpoints;
};

export const store: ThemeStore = {
  shadows: shadows,
  breakpoints: breakpoints,
};

export const mixinBorders = () => css`
  border: var(--border-width) solid var(--theme-color-color2);
  border-radius: var(--border-radius);
`;

export const mixinFontFamily = (style: 'details' | 'display') => {
  switch (style) {
    case 'details':
      return css`
        font-family: 'Cabin', sans-serif;
      `;
    case 'display':
      return css`
        font-family: 'Paytone One', sans-serif;
      `;
    default:
      return css`
        font-family: 'Cabin', sans-serif;
      `;
  }
};

export const mixinColorBubble = (
  background: string,
  border: string = '--color-white',
  text: string = '--color-white'
) => {
  return css`
    border-radius: var(--border-radius);
    border: var(--border-width) solid;
    border-color: var(${border});
    color: var(${text});
    background-color: var(${background});
  `;
};
