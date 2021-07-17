import React, {useEffect, useState, createContext, useContext} from "react";
import { editObject, submitObject } from '../models/firebase'

export class IFormContext{
  object: any;
  updateObject: any;
  submitObject: any;
  resetObject: any;
  readOnly: boolean;
}

export const FormContext= createContext(new IFormContext())

export const FormProvider=({
  object,
  path,
  required =[],
  nextObject= {},
  children,
  readOnly = false
})=>{
  const [obj, setObj] = useState(cloneObject(object))

  useEffect(()=>{
    setObj(cloneObject(object))
  }, [object])



  const resetObject=()=>{
    setObj(cloneObject(object)) 
  }

  const context: IFormContext={
    object: obj,
    updateObject: (prop:string, val: any, radioValue='')=>{
      if(radioValue===''){
        setObj(updateObject(obj, prop, val))
      }else{
        setObj(updateObject(obj, prop, radioValue))
      }
    },
    submitObject: (editedObject = null)=>{
      if(editedObject){
        if(validateObject(editedObject, required)){
          submitObject(editedObject, path)
          setObj(cloneObject(nextObject))
        }else{
          alert('Please complete remaining required fields')
        }
      }else{
        if(validateObject(obj, required)){
          submitObject(obj, path)
          setObj(cloneObject(nextObject))
        }else{
          alert('Please complete remaining required fields')
        }
      }
    },
    resetObject: ()=>{resetObject()},
    readOnly: readOnly
  }

  return(
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  )

}

function cloneObject(obj:any): any{
  const temp = {}
  for(let prop in obj){
    temp[prop] = obj[prop]
  }
  return temp;
}

function updateObject(obj: any, prop: string, val: any):any{
  const temp = cloneObject(obj)
  temp[prop] = val
  return temp
}

function validateObject(obj:any, required=[]):boolean{
  const l = required.length
  for(let i=0; i<l; i++){
    const r = required[i]
    if(obj[r]===undefined || obj[r]===''){
      return false
    }
  }
  return true
}