import {Search} from './components/Search'

import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;

function App() {
  return (
    <div>
        <GlobalStyle />  
          <Search />
    </div>
  );
}

export default App;
