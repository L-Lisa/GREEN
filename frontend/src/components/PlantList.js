import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PlantCard } from "./PlantCard"
import { plant } from "reducers/plantReducer"
import styled from "styled-components/macro";

const API_PLANTS = 'http://localhost:8080/plants'

const ListSection = styled.div`
width: 100%;
ul{
list-style: none;
align-items:center;
margin: 0 auto;
display: flex;
flex-direction: row;
align-self: center;
flex-wrap: wrap;
padding-inline-start: 0;
justify-content: center;
}
`

export const PlantList = () => {
    const allPlants = useSelector((store) => (store.plant.plants))
    
    if (!allPlants) {
        return <>Paitence, still loading.. </>
    }
    return (
        <ListSection>
            <ul>
                {allPlants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </ul>
        </ListSection>
    )
}
