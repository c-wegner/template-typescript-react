import React, { useState } from 'react';
import { MasterStyle } from './globals/styles.globals'
import { ControlGlobalStyle } from './controls/styles.controls';
import { ControledTextBox, ControledSelect } from './controls/input.controls';
import { ControledCheckbox } from './controls/checkbox.controls';
import { Layout } from './globals/styles.globals';

import { FormProvider, ConditionalContent } from './controls/provider.controls';
import { TextBox, Select } from './controls/input.controls';
import { Panel } from './components/panel/styles.panel';
import { DialogBox } from './components/dialog/style.diablog';




const App = () => {
  const [testValue, setTestValue] = useState(new Object())
  const [readOnly, setReadOnly] = useState(true)
  const [showPanel, setShowPanel] = useState('')
  const [showBox, setShowBox] = useState('')

  return (
    <MasterStyle>
      <ControlGlobalStyle />
      <span onClick={() => setShowBox('Test box')}>
        {showBox} dddddddddd
      </span>
      <br />
      <Panel id='Test One' currentPanel={showPanel} onExit={()=>setShowPanel('')}>
        Yes
      </Panel>
      <DialogBox id='Test box' currentDialog={showBox} onExit={setShowBox}>
          HI
        </DialogBox>
      <FormProvider object={testValue} path='' readOnly={readOnly}>
        <TextBox label='Test box' prop='test' width='50%' />
        <ConditionalContent prop='test' condition='howdy' invertCondition>
          <Select label='Test drop' prop='test' options={['Opt a', 'opt b']} />

          <TextBox label='Test box' prop='test' width='50%' readOnly={true} />
        </ConditionalContent>


      </FormProvider>


    </MasterStyle>
  )
}

export default App;
