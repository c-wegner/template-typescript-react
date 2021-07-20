import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../globals/styles.globals'
import { ClientCard } from '../../models'
import {CardStyle, Line, Text} from './styles.cards'

interface ICardClient{
  client: ClientCard;
  current?: ClientCard;
  handleOnClickSelect?: any;
}

export const CardClient: React.FC<{ICardClient}>=({
  client,
  current= null,
  handleOnClickSelect = null
})=>{
  const color='#222'
  const background = 'white'
  const getExpanded=()=>{
    if(current){
      if(current.id===client.id){
        return true
      }
    }
    return false
  }

  const getOpacity=()=>{
    if(current){
      if(client.id===current.id || current.id===''){
        return 1
      }
      return .59
    }
    return 1
  }

  const getShadow=()=>{
    if(getExpanded()){
      return Layout.options.shadow.hover
    }else{
      return Layout.options.shadow.standard
    }
  }

  const handleClickClientDisplay=()=>{
    if(handleOnClickSelect){
      handleOnClickSelect()
    }else{

    }
  }

  return(
    <CardStyle opacity={getOpacity()} color={color} background={background} shadow={getShadow()}>
      <Line displayWhenCollapsed expanded={getExpanded()}>
        <Text color={color} onClick={()=>handleClickClientDisplay()} fontWeight='549'>
        {client.display}
        </Text>
        <Text justify={'flex-end'}>
          {client.shortName}
        </Text>
      </Line>

      <Line expanded={getExpanded()}>
        <Text color={color}>
        {client.display}ddddddddd
        </Text>
      </Line>
    </CardStyle>
  )
}