import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons'
import { ActivityIndicator } from "react-native";
import { LineChart } from 'react-native-chart-kit'
import { Line } from 'react-native-svg'
import { useFonts } from 'expo-font'
import PurchaseData from '../../purchases'
import { Text } from '../components'

export function HomeScreen() {
    const renderPurchase = ({ item }) => (
        <Purchase>
            <PurchaseInfo>
                <Text heavy>{item.product}</Text>
                <Text margin="2px 0">{item.store}</Text>
                <Text small color="#727479">{item.address}</Text>
            </PurchaseInfo>
            <Text heavy>{item.price}</Text>
        </Purchase>
    )
    let [fontsLoaded] = useFonts({
        'Avenir': require("../../assets/fonts/avenir_ff/AvenirLTStd-Roman.otf"),
    });
    if (!fontsLoaded) {
        return <ActivityIndicator />;
    } else {

        return (
            <Container>
                <Header>
                    <ProfilePhoto source={require("../../assets/profile.jpg")} />
                    <Welcome>
                        <Text heavy medium>Welcome, </Text>
                        <Text>Mr. Mohammed</Text>
                    </Welcome>
                    <FontAwesome5 name='cog' size={24} color="#565656" />
                </Header>
                <Text center title heavy>$9,184.17</Text>
                <Text center bold color="#727479">Current Balance</Text>
                <Chart>
                    <LineChart
                        data={{
                            labels: ["May", "June", "July", "Aug", "Sept", "Oct"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 10,
                                        Math.random() * 10,
                                        Math.random() * 10,
                                        Math.random() * 10,
                                        Math.random() * 10,
                                        Math.random() * 10,
                                    ]

                                }
                            ]
                        }}
                        width={Dimensions.get("window").width}
                        height={250}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        chartConfig={{
                            backgroundGradientFrom: "#1e1e1e",
                            backgroundGradientTo: "#1e1e1e",
                            color: (opacity = 1) => (`rgba(81, 150, 244, ${opacity})`),
                            labelColor: () => `rgba(255,255,255,0.2)`,
                            strokeWidth: 3,

                        }}
                        withVerticalLines={false}
                        withHorizontalLines={false}
                        bezier

                    />
                </Chart>
                <Purchases
                    ListHeaderComponent={
                        <>
                            <TransactionHeader>
                                <Text>Last Purchases</Text>
                                <MaterialIcons name="sort" size={24} color="#5196f4" />
                            </TransactionHeader>

                            <SearchContainer>
                                <AntDesign name="search1" size={18} color="#5196f4" />
                                <Search placeholder="Search Transactions" />
                            </SearchContainer>
                        </>
                    }
                    data={PurchaseData}
                    renderItem={renderPurchase}
                    showsVerticalScrollIndicator={false}
                />
                <StatusBar barStyle="light-content" />
            </Container>
        )
    }
};

const Container = styled.View`
    flex: 1;
    background-color: #1e1e1e;


`
const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 16px 32px 16px 16px;


`
const ProfilePhoto = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`

const Welcome = styled.View`
    flex: 1;
    padding: 0 16px;

`
const StatusBar = styled.StatusBar` `


const TransactionHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const SearchContainer = styled.View`
    background-color: #3d3d3d;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    border-radius: 6px;
    margin: 16px 0; 

`

const Search = styled.TextInput`
    flex: 1;
    padding: 8px 16px ;
    font-family: "Avenir";
    color: #dbdbdb;
`
const Purchases = styled.FlatList`
    background-color: #2c2c2c;
    padding: 16px;
`

const Purchase = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #393939;
    padding-bottom: 12px;
    margin-bottom: 12px;
    
`

const PurchaseInfo = styled.View`
    flex: 1;
`

const Chart = styled.View`
    margin: 32px 0;
`