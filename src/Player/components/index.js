import React from 'react'
import styled, {css} from 'styled-components'

const StyleBase = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  color: #FFF;
  background-color: #016bcf;
  padding: 10px 30px;
  > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .control {
    display: flex;
    > div {
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      margin-left: 15px;
      cursor: pointer;
      transition: 0.15s ease;
    }
    .player-next {
      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yIDF2MTRsMTAtN3oiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyIDFoMnYxNGgtMnYtMTR6Ii8+Cjwvc3ZnPgo=);
    }
    .player-prev {
      transform: rotate(180deg);
      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yIDF2MTRsMTAtN3oiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyIDFoMnYxNGgtMnYtMTR6Ii8+Cjwvc3ZnPgo=);
    }
  }
`

const playing = css`
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDM1Ni45MTkgMzU2LjkxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzU2LjkxOSAzNTYuOTE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzgiPgoJCTxwYXRoIGQ9Ik0zMDEuMjAxLDcuNzIxVjM0OS4xOWMwLDQuMjY5LTMuNDU3LDcuNzI5LTcuNzE1LDcuNzI5aC02My43MDVjLTQuMjY4LDAtNy43MjctMy40Ni03LjcyNy03LjcyOVY3LjcyMSAgICBjMC00LjI2MywzLjQ1OS03LjcyMSw3LjcyNy03LjcyMWg2My43MDVDMjk3Ljc0NCwwLDMwMS4yMDEsMy40NTgsMzAxLjIwMSw3LjcyMXogTTEyNy4xNDIsMEg2My40MzggICAgYy00LjI2NiwwLTcuNzIxLDMuNDU4LTcuNzIxLDcuNzIxVjM0OS4xOWMwLDQuMjY5LDMuNDU1LDcuNzI5LDcuNzIxLDcuNzI5aDYzLjcwM2M0LjI2NSwwLDcuNzIzLTMuNDYsNy43MjMtNy43MjlWNy43MjEgICAgQzEzNC44NjQsMy40NTgsMTMxLjQwNywwLDEyNy4xNDIsMHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
`

const PlayerControl = styled.div`
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDM3My4wMDggMzczLjAwOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzczLjAwOCAzNzMuMDA4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzhfMTZfIj4KCQk8cGF0aCBkPSJNNjEuNzkyLDIuNTg4QzY0Ljc3MSwwLjg2NCw2OC4xMDUsMCw3MS40NDQsMGMzLjMzLDAsNi42NjMsMC44NjQsOS42NTUsMi41ODhsMjMwLjExNiwxNjcuMiAgICBjNS45NjMsMy40NDUsOS42NTYsOS44MjMsOS42NTYsMTYuNzE5YzAsNi44OTUtMy42ODMsMTMuMjcyLTkuNjU2LDE2LjcxM0w4MS4wOTksMzcwLjQyN2MtNS45NzIsMy40NDEtMTMuMzM0LDMuNDQxLTE5LjMwMiwwICAgIGMtNS45NzMtMy40NTMtOS42Ni05LjgzMy05LjY2LTE2LjcyNFYxOS4zMDVDNTIuMTM3LDEyLjQxMyw1NS44MTgsNi4wMzYsNjEuNzkyLDIuNTg4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
  &:hover {
    transform: scale(1.2);
  }
  ${props => props.isPlaying && playing};
`

const Progress = styled.div`
  display: flex;
  width: calc(100% - 243px);
  align-items: center;
  margin-left: 50px;
  justify-content: center;
  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 13px;
  }
`

const ProgressBar = styled.div`
  height: 3px;
  width: 70%;
  background-color: #bdb2b2;
  margin: 0 20px;
  border-radius: 3px;
  > div {
    background-color: #FFF;
    height: 3px;
    transition-property: width, background-color;
    transition-duration: 0.1s;
    transition-timing-function: cubic-bezier(1,0,.7,1);
    width: ${props => props.progress.toFixed(4)}%;
  }
`

const Details = styled.div`
  margin-left: 20px;
  width: 150px;
  height: 40px;
  letter-spacing: .9px;
  h5, h3 {
    margin: 0;
  }
  h5 {
    font-size: 12px;
    color: #f6f9fc;
  }
  h3 {
    font-size: 14px;
  }
`

const Player = ({playback, currentTime, duration, resumeTrack, pauseTrack}) => {
  const { currentTrack } = playback.queue
  const currentTimeString = new Date(currentTime * 1000).toISOString().substr(11, 8)
  const durationString = new Date((duration || 0) * 1000).toISOString().substr(11, 8)
  return (
    <StyleBase>
      <div>
        <div className="control">
          <div className='player-prev' />
          <PlayerControl
            onClick={
              playback.player
              ? playback.player.paused
                ? resumeTrack
                : pauseTrack
              : undefined
            }
            isPlaying={playback.player && !playback.player.paused} />
          <div className='player-next' />
        </div>
        <Progress>
          <span className='current'>{currentTimeString}</span>
          <ProgressBar progress={duration > 0 ? (currentTime / duration ) * 100 : 0}>
            <div />
          </ProgressBar>
          <span className='ends'>{durationString}</span>
        </Progress>
        <Details>
          <h5>{currentTrack && currentTrack.reciterName}</h5>
          <h3>{currentTrack && currentTrack.name}</h3>
        </Details>
      </div>
    </StyleBase>
  )
}

export default Player
