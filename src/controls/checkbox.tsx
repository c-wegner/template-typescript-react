import React from 'react'
import styled from 'styled-components'
import { ControlContainer } from './styles.controls'

const StageStyle = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: .3rem;
  justify-content: flex-end;

`

const ContainerStyle = styled.div<{justify: string}> `
  display: flex;
  justify-content: ${p => p.justify};
  align-items: center;
`

const LabelStyle = styled.label `
  display: flex;
  align-items: center;
  padding-bottom: .2rem;
`

const BoxRegionStyle = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const BoxStyle= styled.div<{ borderColor: string; backgroundColor: string }> `
  border: 1px solid ${p => p.borderColor};
  background-color: ${p=>p.backgroundColor};
  height: 1.2rem;
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 7px;
  cursor: pointer;
  border-radius: 3px;
`