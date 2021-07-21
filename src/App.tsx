import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components'
import { MenuBar } from './components/navigation/menu.navigation';
import { Person, Folder, Clock, Gear } from './globals/icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { Layout } from './globals/styles.globals';

const AppStageStyle = styled.div`
  display: flex;
  flex-direction: column;
`




const App = () => {

  return (
    <Router>
      <AppStageStyle>
        <MenuBar>
          <Link to='/clients'>
          <Person size='1.5rem' color='white'/>
          </Link>
        </MenuBar>
      </AppStageStyle>
      <Switch>
        <Route path='/clients'>
          
        </Route>
        <Route path='/projects'>

        </Route>

        <Route exact path='/'>

        </Route>
      </Switch>
    </Router>

  )
}

export default App;
