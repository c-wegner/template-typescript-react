
import styled from 'styled-components';

export const PivotTableContainerStyle= styled.div `
  display: flex;
  flex-direction: column;
`

export const PivotTableMenuBarStyle= styled.div `
  display: flex;
  justify-content: ${p=>p.justify};
`

export const PivotTableMenuStyle=styled.div `
  display: flex;
`

export const PivotTableOptionStyle = styled.div `
  padding: 0 10px 4px 10px;
  border: 3px solid ${p=>p.borderColor};
  color: ${p=>p.color};
  cursor: pointer;
`

export const PivotPageStyle = styled.div<{display: string}> `
  display: ${p=>p.display};
  flex-direction: column;
`