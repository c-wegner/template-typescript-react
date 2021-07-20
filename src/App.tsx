import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components'
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

import { ClientCard, ClientContext } from './models';

import { AuthContext } from './models/_auth.models';
import { Client } from './models/client.models'
import { CardClient } from './components/cards/client.cards';

const Lane = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`

const Stage = styled.div`
  display: flex;
`


const App = () => {
  const [testValue, setTestValue] = useState(new Object())
  const [readOnly, setReadOnly] = useState(true)
  const [showPanel, setShowPanel] = useState('')
  const [showBox, setShowBox] = useState('')
  const authContext = useContext(AuthContext)

  let fThis = 'WHAT'

  const [currentClient, setCurrentClient] = useState(new Client())

  useEffect(() => { }, [currentClient])

  if (currentClient) {
    fThis = currentClient['name']
  }

  const handleSelectClient = (client) => {
    if (client.id === currentClient.id) {
      setCurrentClient(new ClientCard())
    } else {
      client.getClient(setCurrentClient)
    }
  }

  const book = useContext(ClientContext)
  return (
    <React.Fragment>
      <span onClick={() => setShowPanel('Test box')}>
        {showBox} Show panel
      </span>
      <Stage>

        <br />
        <Panel id='Test box' currentPanel={showPanel} onExit={() => setShowPanel('')}>
          <ClientForm client={currentClient} displayReadOnly={!(currentClient.id === '')} />
        </Panel>


        <DialogBox id='Test box' currentDialog={showBox} onExit={setShowBox}>
          HI
        </DialogBox>
        <Lane>
          {

            book.clients.map(x => (
              <CardClient client={x} current={currentClient} handleOnClickSelect={() => handleSelectClient(x)} />

            ))
          }

        </Lane>

        <Lane>
          {

            book.clients.map(x => (
              <CardClient client={x} current={currentClient} handleOnClickSelect={() => handleSelectClient(x)} />

            ))
          }

        </Lane>

        <Lane>
          {

            book.clients.map(x => (
              <CardClient client={x} current={currentClient} handleOnClickSelect={() => handleSelectClient(x)} />

            ))
          }

        </Lane>

        <Lane>
          {

            book.clients.map(x => (
              <CardClient client={x} current={currentClient} handleOnClickSelect={() => handleSelectClient(x)} />

            ))
          }

        </Lane>

      </Stage>
    </React.Fragment>
  )
}

export default App;
