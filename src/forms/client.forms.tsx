import React, { useState } from 'react'
import { FormStyle, EditButton } from './styles.forms'
import { FormProvider, ConditionalContent } from '../controls/provider.controls'
import { Layout } from '../globals/styles.globals'
import { TextBox } from '../controls/input.controls'
import { Checkbox } from '../controls/checkbox.controls'
import { PivotProvider, PivotPage } from '../components/pivot/context.pivot'

export const ClientForm = ({
  client,
  displayReadOnly = false,
  width = '100%'
}) => {
  const [readOnly, setReadOnly] = useState(displayReadOnly)
  return (
    <FormStyle width={width}>
      <Layout.Row>
        <EditButton readOnly={readOnly} setReadOnly={setReadOnly} showEditable={displayReadOnly} />
      </Layout.Row>

      <FormProvider object={client} path='client' readOnly={readOnly}>
        <PivotProvider pages={[
          'General',
          'Billing',
          'Follow up',
          'Notes'
        ]}
        >
          <PivotPage id='General'>
            <Layout.Row justifyContent='flex-end'>
              <Checkbox
                label='Business'
                prop='isBusiness'
                right

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
          </PivotPage>

        </PivotProvider>


      </FormProvider>
    </FormStyle>
  )
}

