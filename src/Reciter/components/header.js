import React from 'react'
import styled from 'styled-components'

const StyleBase = styled.div`
  margin: 100px 0 50px;
  text-align: center;
  h1 {
    margin: 5px 0 15px;
    font-size: 44px;
    color: #6b7c93;
  }
  span, strong, button {
    font-family: 'Roboto', sans-serif;
  }
  span {
    font-size: 13px;
    color: #929090;
  }
  strong {
    color: #929090;
    display: block;
  }
  button {
    display: block;
    margin: 30px auto 0;
    background-color: #116ecc;
    color: #FFF;
    border-radius: 50px;
    border: 0;
    padding: 10px 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: .15s ease;
    text-transform: uppercase; 
    &:hover {
      box-shadow: 1px 1px 5px 1px rgba(0,0,0,.3);
    } 
  }
`

const Header = ({name, count, rewaya}) => {
  return (
    <StyleBase>
      <span>{rewaya}</span>
      <h1>{name}</h1>
      <strong>{count} surahs</strong>
      <button>Play</button>
    </StyleBase>
  )
}

export default Header
