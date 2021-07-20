import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../globals/styles.globals'

export const CardStyle = styled.div<{opacity: number, shadow: string, color: string, background: string}> `
  display: flex;
  flex-direction: column;
  box-shadow: ${p=>p.shadow};
  opacity: ${p=>p.opacity};
  border: 2px solid #222;
  color: ${p=>p.color};
  background-color: ${p=>p.background};
  margin: 3px 7px 4px 7px;
  border-radius: 2px;
`

export const LineStyle = styled.div<{height: string, justify}> `
  max-height: ${p=>p.height};
  display: flex;
  justify-content: ${p=>p.justify};
  color: inherit;
  overflow-x: hidden;
  margin: 2px 2px;

  transition: max-height .25s;
`

export const Line:React.FC=({
  children,
  justify='space-between',
  displayWhenCollapsed = false,
  expanded= true,
})=>{
  const getLineHeight=()=>{
    const maxHeight = '2rem'
    if(expanded || displayWhenCollapsed){
      return maxHeight
    }
    return '0'
  }

  return(
    <LineStyle height={getLineHeight()} justify={justify}>
      {children}
    </LineStyle>
  )
}

export const TextStyle=styled.div `
  color: ${p=>p.color};
  font-size: ${p=>p.fontSize};
  font-width: ${p=>p.fontWidth};
`