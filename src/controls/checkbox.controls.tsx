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
  height: ${Layout.options.inputHeight};
  align-items: ${p => p.align};
  padding-top: .3rem;
`

const ContainerStyle = styled.div<{ padding: string }> `
  display: flex;
  padding: ${p => p.padding};
`

const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  padding-bottom: .2rem;
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
  cursor: pointer;
  border-radius: 1px;
`

export const Checkbox=({
  label,
  prop,
  readOnly = false,
  report=null,
  setValue=false,
  padding = '0',
  right = false,
  boxLast = false
})=>{
  const formContext = useContext(FormContext)

  let value = formContext[prop]
  if(value===undefined){
    value= setValue
  }

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
      boxLast = {boxLast}
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
}) => {
  const handleOnChange = () => {
    if (!readOnly) {
      onChange(!value)
    }
  }

  return (
    <StageStyle align={right ? 'flex-end' : 'flex-start'}>
      <ContainerStyle padding={padding}>
        <BoxRegionStyle>
          {
            !boxLast &&
            <LabelStyle>
              {label}
            </LabelStyle>
          }
          <BoxStyle borderColor={value ? 'white' : 'lightgray'} backgroundColor={value ? 'white' : 'whitesmoke'} onClick={() => handleOnChange()}>
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
  const checkState = formContext.state[prop]===radioValue

  const handleClick=(val)=>{
    formContext.updateState(prop,val, radioValue)
  }

  return (
    <ControledCheckbox label={label} value={checkState} onChange={handleClick} readOnly={readOnly}  boxLast={boxLast} right={right} padding={padding}/>
  )
}