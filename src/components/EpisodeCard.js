import React from "react";
import { Card } from 'semantic-ui-react'

export default function EpisodeCard(props) {
    // console.log(props);
    return(
        <div>
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
        </div>
    )
}