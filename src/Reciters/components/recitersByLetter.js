import React from 'react'
import * as R from 'ramda'
import { Link } from 'react-router-dom'

import { ReciterCard, Letter, RecitersList } from './styles'

const RecitersByLetter = ({letter, reciters}) => {
  const recitersList = R.map(x => (
    <ReciterCard key={x.id}>
      <span>{x.rewaya}</span>
      <h3><Link to=''>{x.name}</Link></h3>
      <strong>{x.count} surah</strong>
    </ReciterCard>
  ), reciters)
  return (
    <div>
      <Letter>{letter}</Letter>
      <RecitersList>
        {recitersList}
      </RecitersList>
    </div>
  )
}

export default RecitersByLetter
