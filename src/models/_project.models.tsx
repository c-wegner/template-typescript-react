import { submitObject, editObject } from "./firebase";
import { utilities } from "./utilities.models";

export class Project{
  id='';
  projectNumber='';
  clientId = ''
  clientName = ''
  clientDisplay = ''
  clientShortName = ''
  description = ''
  notes = '';
  isOpen = true;
  closedOn = '';
  isWindingDown = false;
  isOnHold = false;

  task ='';
  subTask=''
  lane = '@Wegner Law PLLC'
  laneContact = ''
  laneNotes = ''
  enteredLaneOn=0;

  assignedTo = 'cwegner'
  checkInOn = false

  followUpOn = false;
  followUpPhone = false;
  followUpSendEmail = false;
  followUpReadEmail = false
  followUpNotes = ''

  isFirmRelated = false
  isFlagged = false
  isUrgent = false

  lastSaveAt=0;

  get classType(){return 'project'}
  static collection = 'project'

  get display(){
    return this.projectNumber + ' ' + this.description
  }

  save(){
    if(this.id===undefined || this.id===''){
      this.id = new Date().getTime().toString()
    }
    this.lastSaveAt = new Date().getTime()
    submitObject(this, Project.collection)
  }
}

export class Projects{
  projects: Project[] = []
}

function generateProjectNumber(num, lengthOfProjectNum = 5){
  let temp = num.toString()
  const l = 5 - temp.length;
  for(let i=0; i<l; i++){
    temp = '0' + temp
  }

  return temp
}