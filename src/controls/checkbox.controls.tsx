import React, {useContext} from 'react'
import styled from 'styled-components'
import { Check } from '../globals/icons'
import { Layout } from '../globals/styles.globals'
import { IFormContext, FormContext} from './provider.controls' 

const StageStyle = styled.div<{ align: string }> `
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  justify-context: center;
  height: ${p=>p.height};
  align-items: ${p => p.align};
  padding-top: .3rem;
`

const ContainerStyle = styled.div<{ padding: string }> `
  display: flex;
  padding: ${p => p.padding};
  cursor: pointer;
`

const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  padding-bottom: .2rem;
  cursor: pointer;
`

const BoxRegionStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BoxStyle = styled.div<{ borderColor: string; backgroundColor: string }> `
  border: 1px solid ${p => p.borderColor};
  background-color: ${p => p.backgroundColor};
  height: 1rem;
  width: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7px 0 7px;

  border-radius: 1px;
`

export const Checkbox=({
  label,
  prop,
  readOnly = false,
  report=null,
  padding = '0',
  right = false,
  boxFirst = false,
  height=Layout.options.inputHeight
})=>{
  const formContext = useContext(FormContext)

  let value = formContext.object[prop]

  let isReadOnly= formContext.readOnly
  if(readOnly){isReadOnly= true}

  const handleOnChange=()=>{
    if(report){
      report(!value)
    }
    formContext.updateObject(prop, !value)
  }

  return(
    <ControledCheckbox
      label = {label}
      value={value}
      onChange={handleOnChange}
      padding={padding}
      readOnly={isReadOnly}
      right={right}
      boxLast = {boxFirst}
      height={height}
    />
  )

}

export const ControledCheckbox = ({
  label,
  value,
  onChange,
  right = false,
  readOnly = false,
  padding = '0',
  boxLast = false,
  height=Layout.options.inputHeight
}) => {
  const handleOnChange = () => {
    if (!readOnly) {
      onChange(!value)
    }
  }

  return (
    <StageStyle align={right ? 'flex-end' : 'flex-start'} height={height}>
      <ContainerStyle padding={padding} onClick={() => handleOnChange()}>
        <BoxRegionStyle>
          {
            !boxLast &&
            <LabelStyle>
              {label}
            </LabelStyle>
          }
          <BoxStyle borderColor={value ? 'white' : 'lightgray'} backgroundColor={value ? 'white' : 'whitesmoke'} >
            <Check color={value ? 'blue' : 'whitesmoke'} size='1.3rem' />
          </BoxStyle>
          {
            boxLast &&
            <LabelStyle>
              {label}
            </LabelStyle>
          }

        </BoxRegionStyle>
      </ContainerStyle>
    </StageStyle>
  )
}

export const RadioCheckbox =({
  label = '',
  prop,
  readOnly = false,
  boxLast = false,
  right = false,
  padding = '0',
  radioValue
}) => {
  const formContext = useContext(FormContext)
  const checkState = formContext.object[prop]===radioValue

  const handleClick=(val)=>{
    formContext.updateObject(prop,val, radioValue)
  }

  return (
    <ControledCheckbox label={label} value={checkState} onChange={handleClick} readOnly={readOnly}  boxLast={boxLast} right={right} padding={padding}/>
  )
}