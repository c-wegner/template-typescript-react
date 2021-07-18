import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'

const PivotContainerStyle = styled.div`
  display: flex;
  flex-direction: column;

`

const PivotMenuStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: .9rem;
  border-top: 1px solid lightgrey;
`

const PivotOptionStyle = styled.div<{ borderColor }> `
  padding: 0 0 2px 0;
  margin:0 0 0 17px;
  color: ${p => p.borderColor};
  cursor: pointer;
`

const PivotPageStyle = styled.div<{ display: string }> `
  display: ${p => p.display};
  flex-direction: column;
`

export class IPivotContext {
  pages: string[] = [];
  currentPage = '';
}

export const PivotContext = createContext(new IPivotContext())

export const PivotProvider = ({
  pages = [],
  children,
  forcePage = -1,
  setForcePage= null
}) => {
  const [currentPage, setCurrentPage] = useState(pages[0])

  useEffect(()=>{
    if(forcePage>-1 && forcePage<pages.length){
      setCurrentPage(pages[forcePage])
    }
  }, [forcePage])

  const pivotContext: IPivotContext = {
    pages: pages,
    currentPage: currentPage,
  }

  const handleClickOnPage=(page:string)=>{
    if(setForcePage){
      setForcePage(-1)
    }
    setCurrentPage(page)
  }

  return (
    <PivotContext.Provider value={pivotContext}>
      <PivotContainerStyle>
        <PivotMenuStyle>
          {
            pages.map(x => {
              return (
                <PivotOption label={x} current={currentPage} onClick={() => handleClickOnPage(x)} key={x} />
              )
            })
          }
        </PivotMenuStyle>
        {children}
      </PivotContainerStyle>
    </PivotContext.Provider>
  )
}

const PivotOption = ({
  label,
  current,
  onClick
}) => {
  const getBorderColor = () => {
    if (label === current) {
      return 'blue'
    } else {
      return 'black'
    }
  }

  return (
    <PivotOptionStyle borderColor={getBorderColor()} onClick={() => onClick()}>
      {label}
    </PivotOptionStyle>
  )
}

export const PivotPage=({
  id='',
  children
})=>{
  const formContext = useContext(PivotContext)

  const display = id=== formContext.currentPage? 'flex' : 'none';

  return(
    <PivotPageStyle display={display}>
      {children}
    </PivotPageStyle>
  )
}