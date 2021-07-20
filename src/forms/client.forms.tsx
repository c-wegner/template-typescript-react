import React, { useState, useContext, useEffect } from 'react'
import { FormStyle, EditButton } from './styles.forms'
import { FormProvider, ConditionalContent, FormContext, IFormContext } from '../controls/provider.controls'
import { Layout } from '../globals/styles.globals'
import { TextBox, TextArea } from '../controls/input.controls'
import { Checkbox, RadioCheckbox } from '../controls/checkbox.controls'
import { PivotProvider, PivotPage } from '../components/pivot/context.pivot'
import { Button } from '../controls/button.controls'
import { submitObject } from '../globals/firebase'
import { ClientCard } from '../models/_client.card.models'

import { Client } from '../models/client.models'

interface IClientForm{
  client: Client;
  displayReadOnly?: boolean;
  width?: string;
}

export const ClientForm: React.FC<IClientForm> = ({
  client,
  displayReadOnly = false,
  width = '100%'
}) => {
  const [readOnly, setReadOnly] = useState(displayReadOnly)
  const path = 'client'
  const req = ['name']

  useEffect(() => {
    setReadOnly(displayReadOnly)
  }, [client])

  return (
    <FormStyle width={width}>


      <FormProvider object={client} path={path} readOnly={readOnly}>
        <Layout.Row justifyContent='flex-end' alignItems='flex-end' paddingTop='0'>
          <EditButton readOnly={readOnly} setReadOnly={setReadOnly} showEditable={displayReadOnly} />
        </Layout.Row>

        <PivotProvider pages={[
          'General',
          'Billing',
          'Notes',
          'Options'
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
          <PivotPage id='Notes'>
            <TextArea label='Detailed notes' prop='detailedNots' rows={7} />
          </PivotPage>

          <PivotPage id='Options'>
            <Layout.Row justifyContent='center'>
              <Layout.Col width='50%'>
                <Layout.Row>

                  <Checkbox
                    label='Archived'
                    prop='isArchived'
                    columnStyleCheckbox

                  />
                </Layout.Row>

                <Layout.Row>
                  <Checkbox

                    label='Firm related'
                    prop='isFirmRelated'
                    columnStyleCheckbox

                  />
                </Layout.Row>

                <Layout.Row>

                  <Checkbox
                    label='Prospect'
                    prop='isProspect'
                    columnStyleCheckbox

                  />
                </Layout.Row>

                <Layout.Row>
                  <Checkbox

                    label='Flag'
                    prop='isFlagged'
                    columnStyleCheckbox

                  />
                </Layout.Row>

                <Layout.Row>
                  <Checkbox

                    label='Use alternate display'
                    prop='useAltDisplayName'
                    columnStyleCheckbox

                  />
                </Layout.Row>

                <Layout.Row>
                  <Checkbox
                    label='Use alternate short name'
                    prop='useAltShortName'
                    columnStyleCheckbox
                  />
                </Layout.Row>

              </Layout.Col>
            </Layout.Row>
            <Layout.Row>
              <ConditionalContent prop='useAltDisplayName' condition={true}>
                <TextBox label='Alternate display name' prop='altDisplayName' />
              </ConditionalContent>
            </Layout.Row>
            <Layout.Row>
              <ConditionalContent prop='useAltShortName' condition={true}>
                <TextBox label='Alternate short name' prop='altShortName' />
              </ConditionalContent>
            </Layout.Row>
          </PivotPage>
        </PivotProvider>
        <SubmitButton disabled={readOnly} path={path} req={req} />

      </FormProvider>
    </FormStyle>
  )
}

const SubmitButton = ({
  disabled = false,
  path, 
  req = []
}) => {
  const formContext: IFormContext = useContext(FormContext)
  const client = formContext.object

  if (client['id']===undefined || client['id'] === '') {
    client['id'] = new Date().getTime().toString()
  }

  const handleOnClick = () => {
    if (verifyRequirements(client, req)) {
      ClientCard.generateAndSave(client)
      formContext.submitObject(client)
    }
  }

  return (
    <Layout.Row justifyContent='flex-end'>
      <Button label='Submit' disabled={disabled} width={'40%'} onClick={() => handleOnClick()} />
    </Layout.Row>
  )
}

function verifyRequirements(obj, req: string[]): boolean {
  const l = req.length
  for (let i = 0; i < l; i++) {
    const r = obj[req[i]]
    if (r === undefined || r === '') {
      alert('Please answer ' + req[i])
      return false
    }
  }
  return true
}