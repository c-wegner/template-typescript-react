import React, {Fragment} from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const options = {
  color: "#222",
  backgroundColor: "#FFF",
  secondaryColor: "grey",
  secondaryBackgroundColor: "grey",
  border: "1px solid #222",
  borderRadius: "3px",
  padding: "7px",
  margin: "7px",
  inputHeight: "2.2rem",

  shadow: {
    standard: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    hover: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },

  screen: {
    sm: "555px",
    md: "825px",
    lg: "1000px"
  }
}

interface IGlobalStyle {
  fontSize?: string;
}

export const MobileWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
`;

interface ILayoutStyles {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  flexGrow?: string;
  padding?: string;
}

const LayoutStyles = {
  Row: styled.div<ILayoutStyles> `

  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${p => p.padding};

  @media (min-width: ${options.screen.md}) {
    flex-direction: row;
    justify-content: ${p => p.justifyContent};
    align-items: flex-end;
  }
`,

  Col: styled.div<ILayoutStyles>`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${options.screen.md}) {
    width: ${p => p.width};
    justify-content: ${p => p.justifyContent};
    align-items: ${p => p.alignItems};
    flex-grow: ${p => p.flexGrow};
    padding: ${p => p.padding};
  }
`,

  Form: styled.div<{ width: string }> `
    width: ${p => p.width};
    max-width: 100%;
    min-height: 95%;
  `
}

export const Layout = {
  options: options,

  Form: ({ width, children }) => (
    <LayoutStyles.Form width={width}>
      {children}
    </LayoutStyles.Form>
  ),

  Row: ({
    justifyContent = 'flex-start',
    alignItems = 'center',
    paddingTop = '7px',
    children
  }) => (
    <LayoutStyles.Row justifyContent={justifyContent} alignItems={alignItems} padding={paddingTop + ' 0 0 0'}>
      {children}
    </LayoutStyles.Row>
  ),

  Col: ({
    width = '100%',
    justifyContent = 'center',
    alignItems = 'flex-start',
    children
  }) => (
    <LayoutStyles.Col width={width} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </LayoutStyles.Col>
  )
}

const GlobalStyle = createGlobalStyle<IGlobalStyle> `
  :root{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: ${p => p.fontSize};
  }
  body, html {
    overflow-x: hidden;
    min-height:95vh;
  }

  textarea{
    resize: none;
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a{
    text-decoration: none;
    color: red;
  }

    ::-webkit-scrollbar {
      width: 0;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
      border-radius: 0;
    }
      
    ::-webkit-scrollbar-thumb {
      background: lightgrey; 
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: crimson; 
    }

`;

export const MasterStyle =({
  fontSize=17,
  children
})=>(
  <Fragment>
    <GlobalStyle fontSize={fontSize + 'px'} />
      {children}
  </Fragment>
)