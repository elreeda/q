import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'



import Header from './header'
import SurahsList from './surahs/surahsList'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const ReciterDetails = ({reciter}) => {
  if (R.equals(reciter, 404)) {
    return <h1>Not Found</h1>
  }
  const {name, count, rewaya, suras} = reciter
  return (
    <Container>
      <Header name={name} rewaya={rewaya} count={count} />
      <SurahsList suras={suras} />
    </Container>
  )
}

export default ReciterDetails
