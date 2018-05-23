import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'

import RecitersByLetter from './recitersByLetter'

const Container = styled.div`
  max-width: 1000px;
  padding: 0 20px;
  margin: 0 auto 100px;
`

const Reciters = ({ reciters }) => {
  const recitersList = R.map(
    letter =>
      reciters[letter].length > 0 ? (
        <RecitersByLetter
          key={letter}
          letter={letter}
          reciters={reciters[letter]}
        />
      ) : null,
    R.keys(reciters)
  )
  return <Container>{recitersList}</Container>
}

export default Reciters
