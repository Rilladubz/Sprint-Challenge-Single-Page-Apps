import React from "react";
import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard(props) {
  // console.log(props)
  return (
    <div>
      <Card>
        <Card.Content header={props.value.name} />
        <Card.Content description={props.value.type} />
        <Card.Content description={props.value.dimension} />
        <Card.Content extra>
          <Icon name='user' /># of residents: {props.value.residents.length}
        </Card.Content>
      </Card>
    </div>
  )
}
