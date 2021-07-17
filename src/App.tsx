import React, {useState} from 'react';
import {MasterStyle} from './globals/styles.globals'
import { ControlGlobalStyle } from './controls/styles.controls';
import { ControledTextBox, ControledSelect } from './controls/input';
import { ControledCheckbox } from './controls/checkbox';
import { Layout } from './globals/styles.globals';




const App=()=>{
  const [testValue, setTestValue] = useState('')
  const [checkTest, setCheckTest] = useState(false)
  return(
    <MasterStyle>
      <ControlGlobalStyle/>
    <ControledSelect label='Testing' value={testValue} onChange={setTestValue} options={['Option 1', 'Option 2']}  includeBlankOption/>
      Testing this symbol
      <Layout.Row justifyContent='flex-end'>
      <ControledCheckbox
        label='Testing'
        value={checkTest}
        onChange={setCheckTest}
        right
      />
      </Layout.Row>

      <Layout.Row>
      <ControledTextBox label='Test' value={testValue} onChange={setTestValue} required width='50%'/>

      <ControledCheckbox
        label='Testing'
        value={checkTest}
        onChange={setCheckTest}
        boxLast
      />
            <ControledCheckbox
        label='Testing'
        value={checkTest}
        onChange={setCheckTest}
        boxLast
      />
</Layout.Row>

    </MasterStyle>
  )
}

export default App;
