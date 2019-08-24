import React from "react";
import { Card } from 'semantic-ui-react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  max-width: 30%;
`;

export default function EpisodeCard(props) {
    // console.log(props);
    return(
        <StyledDiv>
             <Card>
                <Card.Content>
                    <Card.Header>{props.value.name}</Card.Header>
                    <Card.Meta>Air Date: {props.value.air_date}</Card.Meta>
                    <Card.Description>
                     {props.value.episode} aired on {props.value.air_date} and 
                     featured {props.value.characters.length} characters from 
                     the Rick and Morty universe in it. 
                    </Card.Description>
                </Card.Content>
            </Card>
        </StyledDiv>
    )
}