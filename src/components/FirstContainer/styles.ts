import styled from 'styled-components'

import firstImage from '../../assets/image1.png'

export const ContainerWrapper = styled.div`
  display: flex;
  margin-top: 120px;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${firstImage});
  background-repeat: no-repeat;
  background-size: 60% 100%;
  background-position: right;
`;

export const Title = styled.h1`
  color: #212353;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  font-size: 55px;
  line-height: 110%;
  width: 60%;
  margin-top: -30px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: #4B5D68;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  width: 36%;
`