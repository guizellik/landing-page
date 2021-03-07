import React from 'react'

import SecondImage from '../../assets/image2.png'
import * as S from './styles'

const SecondContainer = () => {
  return (
    <S.ContainerWrapper>
      <S.Image src={SecondImage} alt='SecondImage' className="sr"/>
      <S.ContainerData>
        <S.Title>We are a high-level data storage bank</S.Title>
        <S.Paragraph>The place to store various data that you can access at any time through the internet  and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </S.Paragraph>
      </S.ContainerData>
    </S.ContainerWrapper>
  )
}

export default SecondContainer