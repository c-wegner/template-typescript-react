import React, { useState, useContext } from 'react'
import { FormStyle, EditButton } from './styles.forms'
import { FormProvider, ConditionalContent, FormContext, IFormContext } from '../controls/provider.controls'
import { Layout } from '../globals/styles.globals'
import { TextBox, TextArea } from '../controls/input.controls'
import { Checkbox, RadioCheckbox } from '../controls/checkbox.controls'
import { PivotProvider, PivotPage } from '../components/pivot/context.pivot'
import { Button } from '../controls/button.controls'
import { submitObject } from '../globals/firebase'
import { Client } from '../models/_client.models'

export const ClientForm = ({
  client,
  displayReadOnly = false,
  width = '100%'
}) => {
  const [readOnly, setReadOnly] = useState(displayReadOnly)
  const path = 'client'

  return (
    <FormStyle width={width}>


      <FormProvider object={client} path={path} readOnly={readOnly}>
        <Layout.Row justifyContent='space-between' alignItems='flex-end' paddingTop='0'>
          <EditButton readOnly={readOnly} setReadOnly={setReadOnly} showEditable={displayReadOnly} />
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
          <PivotPage id='Billing'>
            <Layout.Row justifyContent='flex-end'>
              <Checkbox
                label='Billable'
                prop='isBillable'
                right
              />
            </Layout.Row>
            <ConditionalContent prop='isBillable' condition={true}>
              <Layout.Row paddingTop='17px'>
                <RadioCheckbox label='Hourly' prop='billType' radioValue='Hourly' right />
                <RadioCheckbox label='Fixed fee' prop='billType' radioValue='Fixed fee' right />
                <RadioCheckbox label='Subscription' prop='billType' radioValue='Subscription' right />
                <RadioCheckbox label='Hybrid' prop='billType' radioValue='Hybrid' right />
                <RadioCheckbox label='Other' prop='billType' radioValue='Other' right />
              </Layout.Row>
              <ConditionalContent prop='billType' condition='Hourly'>
                <Layout.Row paddingTop='27px'>
                  <TextBox label='Partner hourly rate' width='50%' prop='billPartnerRate' padding='0 2px 0 0' />
                  <TextBox label='Associate hourly rate' width='50%' prop='billPartnerRate' padding='0 0 0 2px' />
                </Layout.Row>
              </ConditionalContent>
              <ConditionalContent prop='billType' condition='Hybrid'>
                <Layout.Row paddingTop='27px'>
                  <TextBox label='Partner hourly rate' width='50%' prop='billPartnerRate' padding='0 2px 0 0' />
                  <TextBox label='Associate hourly rate' width='50%' prop='billPartnerRate' padding='0 0 0 2px' />
                </Layout.Row>
              </ConditionalContent>

              <ConditionalContent prop='billType' condition='Hourly' invertCondition>
                <Layout.Row paddingTop='27px'>
                  <TextBox label='Fee' width='100%' prop='billFee' />
                </Layout.Row>
              </ConditionalContent>
              <Layout.Row>
                <TextArea
                  label='Billing terms'
                  prop='billTerms'
                />
              </Layout.Row>
              <Layout.Row>
                <TextArea
                  label='Initial estimate'
                  prop='initialQuote'
                />
              </Layout.Row>
            </ConditionalContent>
          </PivotPage>
        </PivotProvider>
        <SubmitButton disabled={readOnly} path={path} />

      </FormProvider>
    </FormStyle>
  )
}

const SubmitButton = ({
  disabled = false,
  path
}) => {
  const formContext: IFormContext = useContext(FormContext)
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