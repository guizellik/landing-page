import styled from 'styled-components'

import { ButtonProps } from './index'


export const Button = styled.button`
  background: ${(props: ButtonProps) => props.backgroundColor};
  font-family: 'Nunito', sans-serif;
  box-shadow: ${(props: ButtonProps) => props.shadow ? '0px 5px 5px rgba(75, 93, 104, 0.1)' : ''};
  color: ${(props: ButtonProps) => props.fontColor};
  font-weight: 800;
  font-size: 16px;
  border-radius: 50px;
  border: none;
  height: 50px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
`;
