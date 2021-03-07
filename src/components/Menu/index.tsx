import React from 'react'

import * as S from './styles'

const menuOptions = ['About', 'Help', 'Features', 'Signup']

const Menu = () => {
  return (
    <S.MenuWrapper data-testid='menuWrapper'>
      <S.MenuList>
        {
          menuOptions.map(option =>
            <S.MenuListItem key={option}>
              <S.MenuListLink href="#">{option}</S.MenuListLink>
            </S.MenuListItem>
          )
        }
      </S.MenuList>
    </S.MenuWrapper>
  )
}

export default Menu