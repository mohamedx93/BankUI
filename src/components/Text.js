import React from "react";
import styled from "styled-components/native";
import { useFonts } from 'expo-font'
import { ActivityIndicator } from "react-native";
import { Switch } from "react-native-gesture-handler";


export const Text = ({ ...props }) => {
    let [fontsLoaded] = useFonts({
        'Avenir': require("../../assets/fonts/avenir_ff/AvenirLTStd-Roman.otf"),
    });
    if (!fontsLoaded) {
        return <ActivityIndicator />;
    } else {
        return (<TextStyle {...props}>{props.children}</TextStyle>);
    };

}
const TextStyle = styled.Text`
    color: ${(props) => props.color ?? "#dbdbdb"}
    font-family: "Avenir"
    margin: ${(props) => props.margin ?? 0}
    padding: ${(props) => props.padding ?? 0}
    ${({ title, large, medium, small, tiny }) => {
        switch (true) {
            case title:
                return `font-size: 32px`;
            case large:
                return `font-size: 18px`;
            case medium:
                return `font-size: 15px`;
            case small:
                return `font-size: 11px`;

            case tiny:
                return `font-size: 10px`;

            default:
                return `font-size: 13px`;
        }
    }}
    ${({ heavy }) => {
        switch (true) {
            case heavy:
                return `font-weight:bold`;
            default:
                return `font-weight: normal`
        }
    }}
    ${({ center, right }) => {
        switch (true) {
            case center:
                return `text-align: center`;

            case right:
                return `text-align: right`;

            default:
                return `text-align: left`;
        }
    }}
`
