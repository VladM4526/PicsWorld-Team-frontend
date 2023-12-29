import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import './font.css';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}

button {
  border: none;
  outline: none;
  display: block;
}
`;
