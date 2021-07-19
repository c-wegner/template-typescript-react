import React, { useState, useContext, useEffect } from 'react';
import { MasterStyle } from './globals/styles.globals'
import { ControlGlobalStyle } from './controls/styles.controls';
import { ControledTextBox, ControledSelect } from './controls/input.controls';
import { ControledCheckbox } from './controls/checkbox.controls';
import { Layout } from './globals/styles.globals';

import { FormProvider, ConditionalContent } from './controls/provider.controls';
import { TextBox, Select } from './controls/input.controls';
import { Panel } from './components/panel/styles.panel';
import { DialogBox } from './components/dialog/style.diablog';
import { ClientForm } from './forms/client.forms';

import { ClientContext } from './models';




const App = () => {
  const [testValue, setTestValue] = useState(new Object())
  const [readOnly, setReadOnly] = useState(true)
  const [showPanel, setShowPanel] = useState('')
  const [showBox, setShowBox] = useState('')

  let fThis = 'WHAT'

  const [currentClient, setCurrentClient]=useState(null)

  useEffect(()=>{}, [currentClient])

  if(currentClient){
    console.table(currentClient)
    fThis= currentClient['name']
  }

  const testClient = new Object()
  const book = useContext(ClientContext)
  return (
    <MasterStyle>
      <ControlGlobalStyle />
      <span onClick={() => setShowPanel('Test box')}>
        {showBox} Show panel
      </span>
      <br />
      <Panel id='Test box' currentPanel={showPanel} onExit={()=>setShowPanel('')}>
        <ClientForm client={testClient} displayReadOnly/>
      </Panel>
      {fThis}
xxxxxxxxx
        <br />
        <br />

      <DialogBox id='Test box' currentDialog={showBox} onExit={setShowBox}>
          HI
        </DialogBox>

        {

          book.clients.map(x=>(
            <div onClick={()=>setCurrentClient(x.client)}>
                    {x.display}
            </div>

          ))
        }



    </MasterStyle>
  )
}

export default App;
