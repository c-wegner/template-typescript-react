import React, {useState} from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import { Person, Folder, Clock, CashCoin, Gear, Speedometer, PersonPlus, FolderPlus } from '../../globals/icons'
import {Panel} from '../panel/styles.panel';

import { Layout } from '../../globals/styles.globals'
import { Project } from '../../models/_project.models';
import { ProjectForm } from '../../forms/project.forms';

const MenuBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left:0;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 2.5rem;
  padding: 10px 0;
  background-color: #222;
`

export const MenuBarOptionsStyle = styled.nav`
  display: flex;
  flex-direction: column;
`

export const MenuBar = ({

}) => {
  const history = useHistory()

  const [currentProject, setCurrentProject] = useState(new Project())

  const handleOnClickMenuOption = (path: string) => {
    history.push(path)
  }

  const [panelTest, setPanelTest] = useState('')

  return (
    <React.Fragment>
          <Panel id='Test panel' currentPanel={panelTest} onExit={()=>setPanelTest('')}>
      <ProjectForm project={currentProject} displayReadOnly/>
    </Panel>
    <MenuBarStyle>
      <MenuBarOptionsStyle>
        <Speedometer size='1.4rem' onClick={() => handleOnClickMenuOption('/clients')} margin='0 0 7px 0' hoverColor='crimson' />
        <Person size='1.5rem' onClick={() => handleOnClickMenuOption('/clients')} margin='7px 0' hoverColor='crimson' />
        <Folder size='1.5rem' onClick={() => handleOnClickMenuOption('/projects')} margin='7px 0' hoverColor='crimson' />
        <Clock size='1.5rem' onClick={() => handleOnClickMenuOption('/time')} margin='7px 0' hoverColor='crimson' />
        <CashCoin size='1.5rem' onClick={() => handleOnClickMenuOption('/projects')} margin='7px 0' hoverColor='crimson' />
        <Gear size='1.5rem' onClick={() => handleOnClickMenuOption('/projects')} margin='7px 0' hoverColor='crimson' />
      </MenuBarOptionsStyle>
      <MenuBarOptionsStyle>
        <PersonPlus size='1rem' onClick={()=>setPanelTest('Test panel')} margin='7px 0'/>
        <FolderPlus size='1rem' onClick={()=>setPanelTest('Test panel')} margin='7px 0'/>
        <Clock size='1rem' onClick={() => setPanelTest('/time')} margin='7px 0' hoverColor='crimson' />
      </MenuBarOptionsStyle>
    </MenuBarStyle>

    </React.Fragment>
  )
}