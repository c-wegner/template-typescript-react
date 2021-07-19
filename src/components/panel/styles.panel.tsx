import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../globals/styles.globals'
import { Cancel, DoubleRightArrow } from '../../globals/icons'

const ContainerStyle=styled.div<{width: string; boxShadow: string}> `
  display: flex;
  width: ${p=>p.width};
  position: fixed;

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
  flex-grow: 1;
  width: 100%;
 
`


const ExitBarStyle = styled.div<{display: string}> `
  display: ${p=>p.display};
  flex-direction: column;
  color: black;

  align-items: center;
  padding-top: 10px;
  background-color: #222;

  border-right: 1px solid;
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

      <ExitBarStyle display={showExitBar? 'flex': 'none'}>
        <DoubleRightArrow onClick={()=>onExit()} size='1rem' color='white'/>
      </ExitBarStyle>
      <PanelContentContainerStyle>
      {
        display&&
        children
      }
      </PanelContentContainerStyle>

    </ContainerStyle>
  )
}