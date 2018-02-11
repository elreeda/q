import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'

import RecitersByLetter from './recitersByLetter'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Reciters = ({ reciters }) => {
  const recitersList = R.map(
    letter => (
      <RecitersByLetter
        key={letter}
        letter={letter}
        reciters={reciters[letter]}
      />
    ),
    R.keys(reciters)
  )
  return <Container>{recitersList}</Container>
}

export default Reciters
