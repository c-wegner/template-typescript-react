import React from 'react'
import styled from 'styled-components'
import { ControlContainer } from './styles.controls'

const TextBoxStyle = styled.input<{textAlign: string, backgroundColor?: string}> `
  text-align: ${p=>p.textAlign};
  background-color: ${p=>p.backgroundColor};
`

const getBackgroundColor=(readOnly: boolean, normalColor:string, readOnlyColor: string)=>{
  return readOnly? readOnlyColor: normalColor
}

export const ControledTextBox=({
  label,
  value,
  onChange,
  width='100%',
  required = false,
  readOnly = false,
  inputType = 'text',
  padding='0',
  alignText = 'left'
})=>{
  return(
    <ControlContainer
    width={width}
    label={label}
    required={required}
    padding={padding}
    >
      <TextBoxStyle 
        textAlign={(inputType==='number')? 'right': 'left'}
        value={value}
        onChange={e=>onChange(e.target.value)}
        readOnly={readOnly}
        type={inputType}
        backgroundColor={getBackgroundColor(readOnly, 'whitesmoke', 'white')}
        />
    </ControlContainer> 
  )
}