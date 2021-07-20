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
  margin: 2px 7px 3px 7px;
  border-radius: 2px;
`

export const LineStyle = styled.div<{height: string, justify}> `
  max-height: ${p=>p.height};
  display: flex;
  justify-content: ${p=>p.justify};
  color: inherit;
  overflow-x: hidden;
  margin: 2px 7px;

  transition: max-height .25s;
`

export const Line:React.FC=({
  children,
  justify='space-between',
  displayWhenCollapsed = false,
  expanded= true,
})=>{
  const getLineHeight=()=>{
    const maxHeight = '1.5rem'
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
  font-weight: ${p=>p.fontWeight};
  justify-content: ${p=>p.justify};
  cursor: ${p=>p.cursor};
  flex-grow: 1;
  display: flex;

`

export const Text =({
  children,
  color='inherit',
  fontSize='.9rem',
  fontWeight='inherit',
  justify='',
  onClick=null,
  right = false
})=>{
  const getCursorType=()=>{
    if(onClick){
      return 'pointer'
    }else{
      return 'inherit'
    }
  }

  const getJustify=()=>{
    if(right){return 'flex-end'}
    if(justify===''){

      return 'flex-start'
    }else{
      return justify
    }
  }

  const handleClick=()=>{
    if(onClick) {onClick()}
  }

  return(
    <TextStyle
      color={color}
      fontSize={fontSize}
      fontWeight={ fontWeight}
      justify={getJustify()}
      cursor={getCursorType()}
      onClick={()=>handleClick()}
    > 
      {children}
    </TextStyle>
  )
}