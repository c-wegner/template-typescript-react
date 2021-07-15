import { submitObject, editObject } from "./firebase";
import { utilities } from "./utilities.models";

export class Client {
  id = '';
  name = '';
  isBusiness = true;
  useAltDisplayName = false;
  altDisplayName = '';
  useAltShortName = false;
  altShortName = '';
  contact = '';
  contactTitle = '';
  phone = '';
  email = '';
  notes = '';

  billType='Hourly'
  billPartnerRate = 375;
  billAssociateRate = 275
  billFixedRate= 0;
  billTerms = ''
  initialQuote = '';

  isArchived = false;
  isFlagged = false;
  isProspect = false;
  isFirmRelated = false;

  lastSaveAt = 0;

  currentOpenProjects = 0

  get classType(){return 'client'}

  static collection = 'client'

  get display(): string {
    if (this.useAltDisplayName) { return this.altDisplayName }
    if (this.isBusiness) { return this.name }
    const fullName = this.name.trim().split(' ')
    const l = fullName.length
    if (l < 2) { return this.name }
    const lastName = fullName[l - 1]
    return lastName + ', ' + this.name.replace(lastName, '').trim()
  }

  get shortName() {
    if (this.useAltShortName) {
      return this.altShortName
    }
    const tempName = this.name.trim()
    const fullName = tempName.split(' ');
    const l = fullName.length;
    if (l < 2) {
      return this.name;
    }
    const lastName = fullName[l - 1];
    if (this.isBusiness) {
      if (checkEnding(lastName)) {
        return this.name.replace(lastName, "").trim();
      } else {
        return this.name;
      }
    } else {
      return lastName
    }
  }

  getAge() {
    return utilities.getAge(this.id)
  }

  save(){
    if(this.id===undefined || this.id===''){
      this.id = new Date().getTime().toString()
    }
    this.lastSaveAt = new Date().getTime()
    submitObject(this, Client.collection)
  }
}



const businessEndings = [".", " LL", " PL", " INC", " CORP", " LTD"];

function checkEnding(str: string): boolean {
  const comp = " " + str.toUpperCase();
  for (let s of businessEndings) {

    if (comp.includes(s)) return true
  }
  return false;
}