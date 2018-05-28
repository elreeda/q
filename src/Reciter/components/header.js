import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyleBase = styled.div`
  margin: 100px 0 50px;
  text-align: center;
  @media screen and (max-width: 760px) {
    margin-top: 50px;
  }
  h1 {
    margin: 5px 0 15px;
    font-size: 44px;
    color: #6b7c93;
  }
  span,
  strong,
  button {
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
    color: #fff;
    border-radius: 50px;
    border: 0;
    padding: 10px 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: 0.15s ease;
    text-transform: uppercase;
    &:hover {
      box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
    }
    &:focus {
      outline: 0;
    }
  }
`

const Bacc = styled.div`
  width: 30px;
  height: 30px;
  background-size: 30px;
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ5NCAzMS40OTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ5NCAzMS40OTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMTAuMjczLDUuMDA5YzAuNDQ0LTAuNDQ0LDEuMTQzLTAuNDQ0LDEuNTg3LDBjMC40MjksMC40MjksMC40MjksMS4xNDMsMCwxLjU3MWwtOC4wNDcsOC4wNDdoMjYuNTU0ICBjMC42MTksMCwxLjEyNywwLjQ5MiwxLjEyNywxLjExMWMwLDAuNjE5LTAuNTA4LDEuMTI3LTEuMTI3LDEuMTI3SDMuODEzbDguMDQ3LDguMDMyYzAuNDI5LDAuNDQ0LDAuNDI5LDEuMTU5LDAsMS41ODcgIGMtMC40NDQsMC40NDQtMS4xNDMsMC40NDQtMS41ODcsMGwtOS45NTItOS45NTJjLTAuNDI5LTAuNDI5LTAuNDI5LTEuMTQzLDAtMS41NzFMMTAuMjczLDUuMDA5eiIgZmlsbD0iIzZiN2M5MyIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
`

const Header = ({
  name,
  count,
  rewaya,
  onPauseStrack,
  player,
  handleStartPlaylist,
  resumeTrack,
  reciterId,
  currentTrack
}) => {
  return (
    <StyleBase>
      <Link to='/'> <Bacc /></Link>
      <span>{rewaya}</span>
      <h1>{name}</h1>
      <strong>{count} surahs</strong>
      {player && !player.paused && currentTrack.reciterId === reciterId ? (
        <button onClick={onPauseStrack}>Pause</button>
      ) : (
        <button
          onClick={player && player.paused && currentTrack.reciterId === reciterId ? resumeTrack : handleStartPlaylist}>
          Play
        </button>
      )}
    </StyleBase>
  )
}

export default Header
