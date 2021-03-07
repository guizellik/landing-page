import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import Button from '../Button'
import ARROW_STYLE from '../Header'

import * as S from './styles'

export interface CardProps {
  backgroundColor: string,
  image: string,
  children?: React.ReactNode,
  title: string
}

export interface CardWrapperProps {
  backgroundColor: string,
}


const Card = (props: CardProps) => {
  const { backgroundColor, image, children, title } = props

  return (
    <S.CardWrapper
      backgroundColor={backgroundColor}
      data-testid='cardWrapper'
    >
      <S.CardImage src={image} alt='cardImage' />
      <S.CardTitleText>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardText>{children}</S.CardText>
        <Button
          backgroundColor='rgba(0,0,0,0)'
          fontColor='#212353'
        >
          Learn More
          <FiArrowRight data-testid='arrowRightIcon' style={{ ...ARROW_STYLE }} />
        </Button>
      </S.CardTitleText>
    </S.CardWrapper>
  )
}

export default Card
