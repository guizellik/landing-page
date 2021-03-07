import styled from 'styled-components'

import { CardWrapperProps, CardProps } from './index'

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: CardWrapperProps) => props.backgroundColor};
  font-family: 'Nunito', sans-serif;
  color: #4B5D68;
  font-size: 14px;
  border-radius: 30% 18% 15% 15% / 70% 15% 15% 15%;
  width: 269px;
  height: 217px;
  margin-left: 80px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  margin-right: 20px;
  width: 70%;
  height: 70%;
  margin-left: -80px;
`;

export const CardTitle = styled.p`
  font-family: 'Helvetica', sans-serif;
  font-weight: 400;color: #212353;
  font-size: 16px;
  margin: 0;
`;

export const CardText = styled.p`
  margin: 0;
  padding: 10px 0;
  font-size: 14px;


`;

export const CardTitleText = styled.div`

`;