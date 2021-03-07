import React from 'react'
import { FiArrowRight } from 'react-icons/fi';

import Logo from '../../assets/Logo.png'
import Button from '../Button'
import Menu from '../Menu'
import * as S from './styles'

export const ARROW_STYLE = { marginLeft: 20, color: '#9C69E2', width: 20, height: 40 }

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.MenuWrapper>
        <S.Logo src={Logo} alt='logo'/>
        <Menu />
      </S.MenuWrapper>
      <Button
        backgroundColor='#FFFFFF'
        fontColor='#212353'
        shadow
      >
        Request Demo
        <FiArrowRight style={{ ...ARROW_STYLE }} />
      </Button>
    </S.HeaderWrapper>
  )
}

export default Header
