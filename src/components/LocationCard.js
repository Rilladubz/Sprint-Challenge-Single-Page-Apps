import React from "react";
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components';


const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  max-width: 30%;
`;

export default function LocationCard(props) {
  // console.log(props)
  return (
    <StyledDiv>
      <Card className='card'>
        <Card.Content header={props.value.name} />
        <Card.Content description={props.value.type} />
        <Card.Content description={props.value.dimension} />
        <Card.Content extra>
          <Icon name='user' /># of residents: {props.value.residents.length}
        </Card.Content>
      </Card>
    </StyledDiv>
  )
}
