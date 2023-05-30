import { createGlobalStyle } from "styled-components";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 2rem;
    font-family: ${openSans.style.fontFamily}
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
