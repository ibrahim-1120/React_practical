import React, { useState } from 'react'
import Container from './Healthy_foods/Container'
import Title from './Healthy_foods/Title'
import Input from './Healthy_foods/Input'
import ErrorMessage from './Healthy_foods/ErrorMessage'
import FoodItems from './Healthy_foods/FoodItems'

export default function App() {

    const [Fooditems, setFooditems] = useState([])

    const inputhandler = (e) => {
        if (e.key === 'Enter') {
            const newarray = [...Fooditems, e.target.value]
            setFooditems(newarray)
            e.target.value = "";

        }
    }


    const removehandeler = (item) => {
        let updatelist = Fooditems.filter(ele => ele != item)
        setFooditems(updatelist)
    }
    return (<>
        <Container>
            <Title></Title>
            <Input inputhandler={inputhandler}></Input>
            <ErrorMessage Fooditems={Fooditems}></ErrorMessage>
            <FoodItems Fooditems={Fooditems} removehandeler={removehandeler}></FoodItems>

        </Container>
    </>
    )
}
