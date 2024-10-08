import styled from 'styled-components'

import { Props } from '.'
import { Cores } from '../../style'
import { Card } from '../Products/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Cores.preta : Cores.cinza};
  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Cores.cinza : Cores.preta};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font: 18px;
  font-weight: bold;
`
