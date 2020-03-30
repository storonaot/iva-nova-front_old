import React from 'react'
import { LangRoot, LangInner, LangItem } from './styles'

const Lang = () => (
  <LangRoot>
    <LangInner>
      <LangItem>Eng</LangItem>
      <LangItem isActive>Ru</LangItem>
    </LangInner>
  </LangRoot>
)

export default Lang
