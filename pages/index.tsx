import * as React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default class extends React.PureComponent<{},{}> {
  render() {
    return ( <Title>My page</Title>) }
}