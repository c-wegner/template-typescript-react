import { submitObject, retrieveDocument } from "../globals/firebase";
import { utilities } from "./utilities.models";

export class ClientCard{
  id=''
  name=''
  isBusiness = true;
  display= ''
  shortName = ''
  contact = ''
  contactTitle = ''
  phone = ''
  email=''

  isArchived = false;
  isProspect = false;
  isFlagged = false;
  isFirmRelated = false;

  lastSaveAt = 0;

  get path(){
    return 'clientCard'
  }

  get age() {
    return utilities.getAge(this.id)
  }

  get client(){
  
    return retrieveDocument('client', this.id)
  }


  static generateAndSave(client: any){
    const temp = new ClientCard()
    temp.id=client.id
    temp.name = client.name;
    temp.isBusiness = client.isBusiness;
    temp.display = getDisplay(client)
    temp.shortName = getShortName(client)
    temp.contact = client.contact
    temp.phone = formatPhoneNumber(client.phone)
    temp.email = client.email
    temp.isArchived = client.archived
    temp.isProspect = client.isProspect
    temp.isFirmRelated = client.isFirmRelated
    temp.isFlagged= client.isFlagged
    temp.lastSaveAt= new Date().getTime()

    submitObject(temp, temp.path)
  }

  static dbPath='clientCard'
}

function getDisplay(obj): string {
  if (obj.useAltDisplayName) { return obj.altDisplayName }
  if (obj.isBusiness) { return obj.name }
  const fullName = obj.name.trim().split(' ')
  const l = fullName.length
  if (l < 2) { return obj.name }
  const lastName = fullName[l - 1]
  return lastName + ', ' + obj.name.replace(lastName, '').trim()
}

function getShortName(obj) {
  if (obj.useAltShortName) {
    return obj.altShortName
  }
  const tempName = obj.name.trim()
  const fullName = tempName.split(' ');
  const l = fullName.length;
  if (l < 2) {
    return obj.name;
  }
  const lastName = fullName[l - 1];
  if (obj.isBusiness) {
    if (checkEnding(lastName)) {
      return obj.name.replace(lastName, "").trim();
    } else {
      return obj.name;
    }
  } else {
    return lastName
  }
}

function formatPhoneNumber(pho) {
  const l = pho.length;
  let temp = '';
  for (let i = 0; i < l; i++) {
    const c = pho[i]
    if (!isNaN(c)) {
      temp = temp + c
    }
  }

  const tl = temp.length;
  if (tl === 7) {
    return temp.substring(0, 3) + '-' + temp.substring(3)
  }
  if (tl === 10) {
    return '(' + temp.substring(0, 3) + ') ' + temp.substring(3, 6) + '-' + temp.substring(6)
  }

  if (tl === 11) {
    return ' (' + temp.substring(0, 4) + ')' + temp.substring(4, 7) + '-' + temp.substring(7)
  }
  return pho.replace(' ', '')
}



const businessEndings = [".", " LL", " PL", " INC", " CORP", " LTD"];

function checkEnding(str: string): boolean {
const comp = " " + str.toUpperCase();
for (let s of businessEndings) {

  if (comp.includes(s)) return true
}
return false;
}