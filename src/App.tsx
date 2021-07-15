import React, {useState} from 'react';
import {MasterStyle} from './globals/styles.globals'
import { ControlGlobalStyle } from './controls/styles.controls';
import { ControledTextBox } from './controls/input';



const App=()=>{
  const [testValue, setTestValue] = useState('')
  return(
    <MasterStyle>
      <ControlGlobalStyle/>
    <ControledTextBox label='Test' value={testValue} onChange={setTestValue} required/>

      Testing this symbol
    </MasterStyle>
  )
}

export default App;
