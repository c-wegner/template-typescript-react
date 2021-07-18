import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../globals/styles.globals'
import { Cancel } from '../../globals/icons'

const ContainerStyle=styled.div<{width: string; boxShadow: string}> `
  display: flex;
  width: ${p=>p.width};
  position: fixed;
  flex-direction: column;
  top:0;
  right: 0;
  bottom: 0;
  transition: width .25s;
  overflow-x: hidden;
  box-shadow: ${p=>p.boxShadow};
  border-left: 1px solid slategray;
  background-color: white;
`

const PanelContentContainerStyle=styled.div `
  margin: 30px;
`


const ExitBarStyle = styled.div<{display: string}> `
  display: ${p=>p.display};
  justify-content: flex-end;
  color: black;
  width: 100%;
`

export const Panel=({
  children,
  id,
  currentPanel,
  width='700px',
  onExit = null,
})=>{
  const display= (id===currentPanel)
  const showExitBar = onExit!==null

  return(
    <ContainerStyle width={display? width : '0'} boxShadow={display? Layout.options.shadow.hover : ''}>
      <PanelContentContainerStyle>
      <ExitBarStyle display={showExitBar? 'flex': 'none'}>
        <Cancel onClick={()=>onExit()} size='1.8rem' hoverColor='red'/> 
      </ExitBarStyle>
      {
        display&&
        children
      }
      </PanelContentContainerStyle>

    </ContainerStyle>
  )
}