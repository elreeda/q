import styled from 'styled-components'

export const RecitersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
`

export const ReciterCard = styled.div`
  width: 33.33%;
  margin: 15px 0;
  line-height: 1.15;
  span, strong {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #6b7c93;
  }
  h3 {
    margin: 0;
    a {
      text-decoration: none;
      color: #116ecc
    }
    &:hover a {
      text-decoration: underline;
    }
  }
`

export const Letter = styled.h1`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #9aa9bc;
`
