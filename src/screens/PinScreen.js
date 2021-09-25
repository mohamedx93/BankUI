import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, NumberPad } from '../components'
import { Fontisto } from '@expo/vector-icons'
import { set } from 'react-native-reanimated'

export function PinScreen({ navigation }) {
    const [pinCount, setPinCount] = useState(0)
    const TOTAL_PINS = 6

    useEffect(() => {
        if (pinCount == TOTAL_PINS) {
            navigation.navigate('Tabs')
        }
    }, [pinCount])

    const renderPins = () => {
        const pins = []
        for (let x = 1; x <= TOTAL_PINS; x++) {
            pins.push(
                x <= pinCount ? (
                    <PinContainer key={x}>
                        <Pin />
                    </PinContainer>
                ) :
                    (
                        <PinContainer key={x} />
                    )
            )

        }
        return pins;
    }

    const pressKey = (_, index) => {
        setPinCount((prev) => {
            switch (prev) {
                case 7:
                    prev = 6;
                    break;
                case -1:
                    prev = 0;
                    break;
                default:
                    break;
            }
            return index != 10 ? prev + 1 : prev - 1;



        })
    }


    return (
        <Container>
            <Text heavy title center color="#964ff0" margin="32px 0 0 0">mybank</Text>
            <Text center medium heavy margin="32px 0 0 0">Enter your PIN code.</Text>
            <AccessPin>
                {renderPins()}
            </AccessPin>
            <Text heavy center margin="8px 0 0 0" color="#9c9c9f">Forgot PIN?</Text>
            <UseTouch onPress={() => { navigation.navigate('Touch') }}>
                <Fontisto name="locked" color="#964ff0" size={16} />
                <Text heavy margin="0 0 0 8px" color="#964ff0">Use Touch ID</Text>
            </UseTouch>
            <NumberPad onPress={pressKey} />
            <StatusBar barStyle="light-content" />

        </Container>
    )
}

const Container = styled.View`
    flex:1;
    
    background-color: #1e1e1e;
`
const AccessPin = styled.View`
    
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 64px 16px 64px;

`
const UseTouch = styled.TouchableOpacity`
    margin: 32px 0 64px 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const StatusBar = styled.StatusBar` `

const PinContainer = styled.View`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-color: #5196f4;
    align-items: center;
    justify-content: center;
`

const Pin = styled.View`
   width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #5196f4;
 
`