import React from 'react';
import {MasterStyle} from './globals/styles.globals'
import { ControlGlobalStyle } from './controls/styles.controls';
import { ControlContainer } from './controls/styles.controls';


const App=()=>{
  return(
    <MasterStyle>
      <ControlGlobalStyle/>
      <ControlContainer   
        label='Testing'
        required
      >
      <input />
        </ControlContainer>

      Testing this symbol
    </MasterStyle>
  )
}

export default App;
