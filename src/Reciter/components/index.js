import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'

import Header from './header'
import SurahsList from './surahs/surahsList'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const ReciterDetails = ({
  reciter,
  onStartTrack,
  onPauseStrack,
  currentTrack,
  player,
  resumeTrack,
  handleStartPlaylist,
  handleAddToQueue
}) => {
  if (R.equals(reciter, 404)) {
    return <h1>Not Found</h1>
  }
  const { id, name, count, rewaya, suras } = reciter
  return (
    <Container>
      <Header
        player={player}
        resumeTrack={resumeTrack}
        onPauseStrack={onPauseStrack}
        handleStartPlaylist={handleStartPlaylist}
        name={name}
        currentTrack={currentTrack}
        reciterId={id}
        rewaya={rewaya}
        count={count} />
      <SurahsList
        player={player}
        handleAddToQueue={handleAddToQueue}
        currentTrack={currentTrack}
        onStartTrack={onStartTrack}
        resumeTrack={resumeTrack}
        onPauseStrack={onPauseStrack}
        reciterId={id}
        suras={suras} />
    </Container>
  )
}

export default ReciterDetails
