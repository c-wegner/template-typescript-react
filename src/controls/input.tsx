import React from 'react'
import styled from 'styled-components'
import { options } from '../globals/styles.globals'
import { ControlContainer } from './styles.controls'

const TextBoxStyle = styled.input<{ textAlign: string, backgroundColor?: string }> `
  text-align: ${p => p.textAlign};
  background-color: ${p => p.backgroundColor};
  `

const SelectStyle = styled.select<{ textAlign: string, backgroundColor?: string }> `
  text-align: ${p => p.textAlign};
  background-color: ${p => p.backgroundColor};
`


const getBackgroundColor = (readOnly: boolean, normalColor: string, readOnlyColor: string) => {
  return readOnly ? readOnlyColor : normalColor
}

export const ControledTextBox = ({
  label,
  value,
  onChange,
  width = '100%',
  required = false,
  readOnly = false,
  inputType = 'text',
  padding = '0',
  alignText = 'left'
}) => {

  return (
    <ControlContainer
      width={width}
      label={label}
      required={required}
      padding={padding}
    >
      <TextBoxStyle
        textAlign={alignText}
        value={value}
        onChange={e => onChange(e.target.value)}
        readOnly={readOnly}
        type={inputType}
        backgroundColor={getBackgroundColor(readOnly, 'whitesmoke', 'white')}
      />
    </ControlContainer>
  )
}

export const ControledSelect = ({
  label,
  value,
  onChange,
  width = '100%',
  required = false,
  readOnly = false,
  padding = '0',
  includeBlankOption = false,
  options=[]
}) => {
  const handleOnChange=(val)=>{
    if(!readOnly){
      onChange(val)
    }
  }

  const getValue=(itm, prop:string)=>{
    if(itm[prop]===undefined) return itm
    return itm[prop]
  }

  return (
    <ControlContainer
      width={width}
      label={label}
      required={required}
      padding={padding}
    >
      <SelectStyle
        value={value}
        onChange={e=>handleOnChange(e.target.value)}
        backgroundColor={getBackgroundColor(readOnly, 'whitesmoke', 'white')}
      >
        <DisplayOptions
          readOnly={readOnly}
          includeBlankOption={includeBlankOption}
          value={value}
        >
          {
            options.map(x=>(
              <option value={getValue(x, 'value')}>
                {getValue(x, 'display')}
              </option>
            ))
          }
        </DisplayOptions>
      </SelectStyle>
    </ControlContainer>
  )
}

const DisplayOptions=({
  children,
  readOnly = false,
  includeBlankOption= false,
  value,
})=>{
  if(readOnly){
    return(
      <option value={value}>
        {value}
      </option>
    )
  }

  if(includeBlankOption){
    return(
      <React.Fragment>
        <option value='' key='blank'></option>
        {children}
      </React.Fragment>
    )
  }else{
    return(
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}