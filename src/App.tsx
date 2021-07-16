import React, {useState} from 'react';
import {MasterStyle} from './globals/styles.globals'
import { ControlGlobalStyle } from './controls/styles.controls';
import { ControledTextBox, ControledSelect } from './controls/input';



const App=()=>{
  const [testValue, setTestValue] = useState('')
  return(
    <MasterStyle>
      <ControlGlobalStyle/>
    <ControledTextBox label='Test' value={testValue} onChange={setTestValue} required/>
    <ControledSelect label='Testing' value={testValue} onChange={setTestValue} options={['Option 1', 'Option 2']}  includeBlankOption/>
      Testing this symbol
    </MasterStyle>
  )
}

export default App;
