import React, {useState} from 'react';
import {MasterStyle} from './globals/styles.globals'
import { ControlGlobalStyle } from './controls/styles.controls';
import { ControledTextBox, ControledSelect } from './controls/input.controls';
import { ControledCheckbox } from './controls/checkbox';
import { Layout } from './globals/styles.globals';

import { FormProvider } from './controls/provider.controls';
import { TextBox, Select } from './controls/input.controls';




const App=()=>{
  const [testValue, setTestValue] = useState(new Object())
  const [readOnly, setReadOnly] = useState(true)
  return(
    <MasterStyle>
      <ControlGlobalStyle/>
      <span onClick={()=>setReadOnly(!readOnly)}>
        {readOnly.toString()}
      </span>
      <br />

      <FormProvider object={testValue} path='' readOnly={readOnly}>
        <TextBox label='Test box' prop='test' width='50%'/>
        <Select label= 'Test drop' prop='test' options={['Opt a', 'opt b']}/>

        <TextBox label='Test box' prop='test' width='50%' readOnly={true} />
      </FormProvider>
      

    </MasterStyle>
  )
}

export default App;
