import React from 'react'
import styled, { css } from 'styled-components'
import * as R from 'ramda'

const StyledBase = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 720px;
  margin: 120px auto 100px;
`

const activeTrack = css`
  color: #116ecc;
  font-weight: 600;
`

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  color: #6b7c93;
  ${props => props.active && activeTrack};
  &.header {
    span {
      font-size: 14px;
      text-transform: uppercase;
    }
  }
  span.number {
    width: 60px;
  }
  span.name {
    width: calc(100% - 60px);
  }
`

const Surahs = ({suras, reciterId, currentTrack, onStartTrack}) => {
  if (!suras) return null
  const surahsList = suras.map(x => (
    <Row active={R.equals(x, currentTrack)} onDoubleClick={() => onStartTrack(x)} key={x.id}>
      <span className='number'>{x.id}</span>
      <span className='name'>{x.name}</span>
    </Row>
  ))
  return (
    <StyledBase>
      <Row className='header'>
        <span className='number'>Nº</span>
        <span className='name'>Name</span>
      </Row>
      {surahsList}
    </StyledBase>
  )
}

export default Surahs
