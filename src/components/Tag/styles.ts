import styled from 'styled-components'
import { Cores } from '../../style'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.verde};
  color: ${Cores.branca};
  font-size: 10px;
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 8px;
`
