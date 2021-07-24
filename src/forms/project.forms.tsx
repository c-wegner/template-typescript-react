import React, { useState, useContext, useEffect } from 'react'
import { FormStyle, EditButton } from './styles.forms'
import { FormProvider, ConditionalContent, FormContext, IFormContext } from '../controls/provider.controls'
import { Layout } from '../globals/styles.globals'
import { TextBox, TextArea } from '../controls/input.controls'
import { Checkbox, RadioCheckbox } from '../controls/checkbox.controls'
import { PivotProvider, PivotPage } from '../components/pivot/context.pivot'
import { Select } from '../controls/input.controls'
import { Button } from '../controls/button.controls'

import { Project } from '../models/_project.models'
import { ClientContext } from '../models'

interface IProjectForm {
  project: Project;
  displayReadOnly?: boolean;
  width?: string;
}

export const ProjectForm: React.FC<IProjectForm> = ({
  project,
  displayReadOnly = false,
  width = '100%'
}) => {
  const [readOnly, setReadOnly] = useState(displayReadOnly)
  const book = useContext(ClientContext)

  const req = ['clientDisplay, description']

  useEffect(() => {
    setReadOnly(displayReadOnly)
  }, [project])

  return (
    <FormStyle width={width}>
      <FormProvider object={project} path={Project.collection} readOnly={readOnly}>
      <Layout.Row justifyContent='flex-end' alignItems='flex-end' paddingTop='0'>
          <EditButton readOnly={readOnly} setReadOnly={setReadOnly} showEditable={displayReadOnly} />
        </Layout.Row>
        <PivotProvider pages={[
          'General',
          'Billing',
          'Notes',
          'Options'
        ]}>
          <Layout.Row justifyContent='flex-start'>
            <Checkbox label='Urgent' prop='isUrgent'/>
          </Layout.Row>
          <PivotPage id='General'>
            <Layout.Row justifyContent='flex-end'>
              <Select label='Lane' prop='lane' width='40%' options={['@Wegner Law PLLC', '@Client', '@3rd party']}/>
            </Layout.Row>
            <Layout.Row>
              <Select label='Client' prop='clientDisplay' width='40%' options={book.clients}/>
              <TextBox label='Description' width='60%' prop='description' padding='0 0 0 4px'/>
            </Layout.Row>
            <Layout.Row>
              <TextBox label='Assignment' prop='assignment'/>
            </Layout.Row>
            <Layout.Row>
              <TextBox label='Task' prop='task'/>
            </Layout.Row>
            <Layout.Row>
              <TextArea label='Detail' prop='detail' rows={2}/>
            </Layout.Row>
            <Layout.Row justifyContent='space-between'>
              <Select label='Assigned to' prop='assignedTo' width='40%' options={['cwegner', 'cthomson']}/>
              <TextBox label='Current contact' prop='laneContact' width='40%'/>
            </Layout.Row>
            <Layout.Row justifyContent='flex-end'>
              <Checkbox label='Check in on project' prop='isCheckedInOn' />
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

        </PivotProvider>
        <SubmitButton disabled={readOnly} path={Project.collection} req={req} />
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
  const project = formContext.object

  if (project['id']===undefined || project['id'] === '') {
    project['id'] = new Date().getTime().toString()
  }

  const handleOnClick = () => {
    if (verifyRequirements(project, req)) {
  //    ClientCard.generateAndSave(client)
      formContext.submitObject(project)
    }
  }

  return (
    <Layout.Row justifyContent='flex-end'>
      <Button label='Submit' disabled={disabled} width={'40%'} onClick={() => handleOnClick()} />
    </Layout.Row>
  )
}

const convertToProject=(obj: any)=>{
  const temp = new Project()
  for(let prop in obj){
    temp[prop] = obj[prop]
  }
  return temp
}

const EnterButton =({
  disabled = false,
  req=[]
})=>{
  const formContext: IFormContext = useContext(FormContext)
  const project = convertToProject(formContext.object)

  const bookOfCards = useContext(ClientContext)
  const client = bookOfCards.getClient(project.clientDisplay)

  const clientProjects = client

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