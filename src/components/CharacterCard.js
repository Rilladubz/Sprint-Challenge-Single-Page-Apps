import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  // console.log(props)
  return (
    <Card>
    <Image src={props.value.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.value.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Species: {props.value.species}</span>
      </Card.Meta>
      <Card.Description>
       location: {props.value.location.name}
      </Card.Description>
      <Card.Description>
        Origin: {props.value.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes: {props.value.episode.length}
      </a>
    </Card.Content>
  </Card>
  )
}
