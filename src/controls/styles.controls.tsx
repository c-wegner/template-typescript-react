import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Layout } from '../globals/styles.globals'

const controlStyleOptions = {
  color: Layout.options.color,
  borderColor: Layout.options.color,
  inputHeight: Layout.options.inputHeight,
  padding: Layout.options.padding,
}

export const ControlGlobalStyle = createGlobalStyle`
  input, textarea, select{
    min-height: ${controlStyleOptions.inputHeight};
    border: none;
    border-bottom: 1px solid;
    border-radius: 0;
    background-color: whitesmoke;
    font-size: 1.2rem;
    padding: ${controlStyleOptions.padding};
    color: ${controlStyleOptions.color};
    border-color: ${controlStyleOptions.borderColor};
  } 
`

const ControlContainerStyle = styled.div<{ width: string; padding: string }> `
  display: flex;
  flex-direction: column;
  padding: ${p => p.padding};
  width: ${p => p.width}; 
`

const ControlLabelRowStyle = styled.div `
  display: flex;
  padding-left: 5px;
`

const ControlLabelStyle = styled.label `
  font-size: .9rem;
`

const RequiredStyle = styled.div<{color: string}> `
  color: ${p=>p.color};
  font-weight: 700;
`

interface IControlContainer{
  label: string;
  width?: string;
  children: any;
  required?: boolean;
  padding?: string;
}

export const ControlContainer:React.FC<IControlContainer>=({
  label,
  width='100%',
  children,
  required = false,
  padding='0' 
})=>{
  return(
    <ControlContainerStyle width={width} padding={padding}>
    <ControlLabelRowStyle>
      <ControlLabelStyle>
        {label}
      </ControlLabelStyle>
      <RequiredStyle color={required? 'red': 'white'}>
        *
      </RequiredStyle>
    </ControlLabelRowStyle>
    {children}
  </ControlContainerStyle>  
  )
}