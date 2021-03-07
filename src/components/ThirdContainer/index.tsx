import React from 'react'

import Card from '../Card'
import * as S from './styles'

import Image1 from '../../assets/image3 1.png'
import Image2 from '../../assets/image3 2.png'
import Image3 from '../../assets/image3 3.png'
import Image4 from '../../assets/image3 4.png'

const ThirdContainer = () => {
  return (
    <S.ContainerWrapper>
      <Card
        backgroundColor='rgba(104,201,186,0.1)'
        image={Image1}
        children='Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'
        title='Search Data'
      />
      <Card
        backgroundColor='rgba(156,105,226,0.1)'
        image={Image2}
        children='Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.'
        title='24 Hours Access'
      />
      <Card
        backgroundColor='rgba(240,99,184,0.1)'
        image={Image3}
        children='Print out service gives you convenience if someday you need print data, just edit it all and just print it.'
        title='Print Out'
      />
       <Card
        backgroundColor='rgba(45,156,219,0.1)'
        image={Image4}
        children='Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.'
        title='Security Code'
      />
    </S.ContainerWrapper>
  )
}

export default ThirdContainer