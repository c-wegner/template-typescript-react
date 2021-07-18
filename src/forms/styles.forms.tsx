import React, {useState} from 'react'
import styled from 'styled-components'
import { Pen, Cancel } from '../globals/icons'

const EditButtonContainerStyle = styled.div `
  color: ${p=>p.color};
  display: ${p=>p.display};
  align-items: center;
  cursor: pointer;
  font-size: .9rem;
  align-item: flex-start;
`



export const EditButton=({
  readOnly,
  setReadOnly,
  showEditable
})=>{
  const color= readOnly? 'blue' : 'red'
  const getIcon=()=>{
    if(readOnly){
      return(
        <>
        <Pen  margin='0 2px 0 0' size='.9rem'/> Edit
        </>
      )
    }else{
      return(
        <>
        <Cancel  size='1.2rem'/> Cancel
        </>
      )
    }
  }
  return(
    <EditButtonContainerStyle color={color} display={showEditable? 'flex': 'none'} onClick={()=>setReadOnly(!readOnly)}>
        {getIcon()}
    </EditButtonContainerStyle>
  )
}

export const FormStyle = styled.div `
  display: flex;
  flex-direction: column;
  width: ${p=>p.width};
`