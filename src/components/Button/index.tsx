import React from 'react'
import * as S from './styles'

export interface ButtonProps {
  backgroundColor: string,
  fontColor: string,
  shadow?: boolean,
  children: React.ReactNode
  style?: Record<string, string | number>;
}

const Button = (props: ButtonProps) => {
  const { backgroundColor, fontColor, shadow, children, style } = props

  return (
    <S.Button
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      shadow={shadow}
      style={{...style}}
    >
      {children}
    </S.Button>
  )
}

export default Button