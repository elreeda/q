import React from 'react'
import * as R from 'ramda'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyleBase = styled.div`
  position: relative;
`
const RecitersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
  @media screen and (max-width: 540px) {
    display: block;
  }
`

const ReciterCard = styled.div`
  width: 33.33%;
  margin: 15px 0;
  line-height: 1.15;
  @media screen and (max-width: 780px) {
    width: 50%;
  }
  @media screen and (max-width: 540px) {
    width: auto;
    max-width: 340px;
    margin: 30px 10px 30px 40px;
  }
  span, strong {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #6b7c93;
  }
  h3 {
    margin: 0;
    letter-spacing: 1px;
    a {
      text-decoration: none;
      color: #116ecc;
    }
    &:hover a {
      text-decoration: underline;
    }
  }
`

const Letter = styled.h1`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #9aa9bc;
  position: sticky;
  top: 0;
  background-color: #f6f9fc;
`

const RecitersByLetter = ({letter, reciters}) => {
  const recitersList = R.map(x => (
    <ReciterCard key={x.id}>
      <span>{x.rewaya}</span>
      <h3><Link to={`/listen/${x.id}`}>{x.name}</Link></h3>
      <strong>{x.count} surah</strong>
    </ReciterCard>
  ), reciters)
  return (
    <StyleBase>
      <Letter>{letter}</Letter>
      <RecitersList>
        {recitersList}
      </RecitersList>
    </StyleBase>
  )
}

export default RecitersByLetter
