import styled, { createGlobalStyle } from 'styled-components'

export const Box = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #282740;
  padding: 30px;
  color: #f5eaea;
  border-radius: 10px;

`

export const GlobalStyle = createGlobalStyle`
  body {
    max-width: 600px;
    margin: 0 auto;
    background-color:#0C0826;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
  }

  div {
    width: 100%;
  }

  input {
    box-sizing: border-box;
  }

  input, select {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
  }

  .todo .content {
    display: flex;
    
  }

  .content {
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }

  .MuiButton-root {
    width: max-content;
    background-color: #333974;
    color: #fff;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s
  }

  .buttons:hover {
    opacity: 1;
  }
`