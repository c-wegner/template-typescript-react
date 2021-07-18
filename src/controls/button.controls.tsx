import React from 'react'
import styled from 'styled-components'
import { Layout } from '../globals/styles.globals'
import { controlStyleOptions } from './styles.controls'

const ButtonStyle = styled.div`
  min-height: ${controlStyleOptions.inputHeight};
  border-radius: 1px;
  font-size: 1.2rem;
  padding: ${controlStyleOptions.padding};
  display: flex;
  width: ${p => p.width};
  border: ${p => p.border};
  cursor: pointer;
  color: ${p => p.color};
  background-color: ${p => p.background};
  justify-content: center;
  font-size: .9rem;
  font-weight: 500;
  margin: ${p=>p.margin};
  opacity: ${p=>p.opacity};

  &:hover{
    box-shadow: ${Layout.options.shadow.standard};
  }
`

export const Button = ({
  label,
  onClick,
  disabled = false,
  width = '100%',
  color = 'inherit',
  background = 'whitesmoke',
  border = '1px solid whitesmoke',
  margin='0'
}) => {
  const handleOnClick = () => {
    if (disabled) return
    if (onClick) onClick()
  }

  return (
    <ButtonStyle width={width} border={border} color={color} background={background} onClick={()=>handleOnClick()} margin={margin} opacity={disabled? .6 : 1}>
      {label}
    </ButtonStyle>
  )
}