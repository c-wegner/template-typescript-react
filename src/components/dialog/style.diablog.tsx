import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../globals/styles.globals'
import { Cancel } from '../../globals/icons'

const StageContainer= styled.div `
  display: ${p=>p.display};
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.4);
  justify-content: center;
  padding: 7%;
  z-index: 5;
`

const DialogBoxStyle = styled.div `
  width: ${p=>p.width};
  height: ${p=>p.height};
  box-shadow: ${Layout.options.shadow.hover};
  padding: 25px;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const ExitBarStyle = styled.div `
  display: ${p=>p.display};
  justify-content: flex-end;
`

export const DialogBox=({
  id,
  currentDialog,
  width='777px',
  onExit=null, 
  children
})=>{
  const display= id===currentDialog
  const showExitBar= true 

  return(
    <StageContainer display={display? 'flex': 'none'}>
      <DialogBoxStyle width={width} height='300px'>
        <ExitBarStyle display={showExitBar? 'flex': 'none'}>
          <Cancel size='1.7rem' onClick={()=>onExit()}/>
        </ExitBarStyle>
      </DialogBoxStyle>
    </StageContainer>
  )


}