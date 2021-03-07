import React from 'react'

import Button from '../Button'
import * as S from './styles'

const FirstContainer = () => {
  return (
    <S.ContainerWrapper>
      <S.InformationWrapper>
        <S.Title>Save your data storage here.</S.Title>
        <S.Text>Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.</S.Text>
        <Button
          backgroundColor='#9C69E2'
          fontColor='#FFFFFF'
          style={{ marginBottom: 40, marginTop: 20 }}
        >
          Learn More
        </Button>
      </S.InformationWrapper>
    </S.ContainerWrapper>

  )
}

export default FirstContainer