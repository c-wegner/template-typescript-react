import React, { useState, useContext } from 'react'
import { FormStyle, EditButton } from './styles.forms'
import { FormProvider, ConditionalContent, FormContext, IFormContext } from '../controls/provider.controls'
import { Layout } from '../globals/styles.globals'
import { TextBox, TextArea } from '../controls/input.controls'
import { Checkbox } from '../controls/checkbox.controls'
import { PivotProvider, PivotPage } from '../components/pivot/context.pivot'
import { Button } from '../controls/button.controls'
import { submitObject } from '../globals/firebase'

export const ClientForm = ({
  client,
  displayReadOnly = false,
  width = '100%'
}) => {
  const [readOnly, setReadOnly] = useState(displayReadOnly)
  const path ='yesy'

  return (
    <FormStyle width={width}>


      <FormProvider object={client} path={path} readOnly={readOnly}>
        <Layout.Row justifyContent='space-between' alignItems='flex-end' paddingTop='0'>
          <EditButton readOnly={readOnly} setReadOnly={setReadOnly} showEditable={displayReadOnly} />
          <Checkbox
            label='Flag client'
            prop='isFlagged'
            right
            height=''
          />
        </Layout.Row>

        <PivotProvider pages={[
          'General',
          'Billing',
          'Follow up',
          'Notes'
        ]}
        >

          <PivotPage id='General'>
            <Layout.Row justifyContent='flex-end' paddingTop='0'>
              <Checkbox
                label='Business'
                prop='isBusiness'
                padding='0 4px'
                
              />

            </Layout.Row>
            <Layout.Row>
              <TextBox label='Client name' prop='name' />
            </Layout.Row>
            <ConditionalContent prop='isBusiness' condition={true}>
              <Layout.Row>
                <TextBox label='Contact' prop='contact' padding='0 4px 0 0' width='60%' />
                <TextBox label='Position' prop='position' width='40%' />
              </Layout.Row>
            </ConditionalContent>
            <Layout.Row>
                <TextBox label='Phone number' prop='phone' padding='0 2px' width='50%' />
                <TextBox label='Email' prop='email' padding='0 2px' width='50%' />
              </Layout.Row>
              <Layout.Row>
                <TextArea
                  label='Address'
                  prop='address'
                  rows={4}
                />
              </Layout.Row>
              <Layout.Row>
                <TextArea
                  label='Notes'
                  prop='notes'
                  rows={4}
                />
              </Layout.Row>
          </PivotPage>

        </PivotProvider>
        <SubmitButton disabled={readOnly} path={path}/>

      </FormProvider>
    </FormStyle>
  )
}

const SubmitButton = ({
  disabled = false,
  path
}) => {
  const formContext:IFormContext = useContext(FormContext)
  const client = formContext.object


  const handleOnClick = () => {
    submitObject(client, path)
  }

  return (
    <Layout.Row justifyContent='flex-end'>
      <Button label='Submit' disabled={disabled} width={'40%'} onClick={() => handleOnClick()} />
    </Layout.Row>
  )
}