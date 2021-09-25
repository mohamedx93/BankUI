import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../components'

export function CardsScreen() {
    const myCards = [
        {
            id: "1",
            color: "#5750f0",
            number: "1234",
            exp: "10/2020",
            logo: require("../../assets/visa.png")
        },
        {
            id: "2",
            color: "#c84ff1",
            number: "5678",
            exp: "08/2022",
            logo: require("../../assets/amazon.png")
        },
        {
            id: "3",
            color: "#5298f7",
            number: "9012",
            exp: "04/2023",
            logo: require("../../assets/paypal.png")
        },
        {
            id: "4",
            color: "#974ff2",
            number: "3456",
            exp: "12/2020",
            logo: require("../../assets/mastercard.png")
        },
    ]

    const renderCard = ({ item }) => (
        <CardContainer>
            <CardInfo>
                <CardLogoContainer bgColor={item.color} >
                    <CardLogo source={item.logo} resizeMode="contain" />
                </CardLogoContainer>
                <CardDetails>
                    <Text heavy>
                        &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
                        <Text medium heavy>{` ` + item.number}</Text>
                    </Text>
                    <Text small heavy color="#727479" margin="4px 0 0 0">{item.exp}</Text>
                </CardDetails>
            </CardInfo>
            <CardActions>
                <Remove>
                    <Text heavy color="#727479">Remove</Text>
                </Remove>
                <Update>
                    <Text heavy >Update</Text>
                </Update>
            </CardActions>
        </CardContainer>
    )

    return (
        <Container>
            <Text center large heavy margin="16px 0 0 0">CardsScreen</Text>
            <StatusBar barStyle="light-content" />
            <Cards data={myCards} renderItem={renderCard} />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`
const Cards = styled.FlatList`
    padding: 0 8px;
    margin: 32px;
`
const CardContainer = styled.View`
    background-color: #292929;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
`
const CardInfo = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #393939;
    padding-bottom: 12px;
    margin-bottom: 12px;
`

const CardLogoContainer = styled.View`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: white/*${(props) => props.bgColor}*/;
    align-items: center;
    justify-content: center;

`

const CardLogo = styled.Image`
    width: 40px;
    height: 40px;
`

const CardDetails = styled.View`
    flex: 1;
    align-items: flex-end;
`

const CardActions = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const Remove = styled.TouchableOpacity`
    margin-right: 32px;
`

const Update = styled.TouchableOpacity`
    background-color: #3d3d3d;
    padding: 8px 16px;
    border-radius: 6px;
`



const StatusBar = styled.StatusBar``