import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #f5f5f5;
    --black: #000000;

}

a {
    text-decoration: none;
}

#root{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    align-items: center;
}


h1,h2,h3,h4,h5,h6,p{
    font-family: 'Press Start 2P', cursive;
    font-weight: 700;
}

button {
    cursor: pointer;
}
`;
