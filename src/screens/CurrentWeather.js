import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from '../utils/weatherType'

const CurrentWeather = ({ weatherData }) => {

    const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData

    const weatherCondition = weather[0]?.main

    return (
        <SafeAreaView style={[styles.wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}>
            <View style={styles.container}>
                <Feather
                    name={weatherType[weatherCondition]?.icon}
                    size={100}
                    color="white"
                />
                <Text style={styles.tempStyle}>{`${temp}°`}</Text>
                <Text style={styles.feels}>{`Feels Like ${feels_like}°`}</Text>
                <RowText
                    messageOne={`High: ${temp_max}° `}
                    messageTwo={`Low: ${temp_min}° `}
                    containerStyles={styles.highLowWrapper}
                    messageOneStyles={styles.highLow}
                    messageTwoStyles={styles.highLow}
                />
            </View>
            <RowText
                messageOne={weather[0]?.description}
                messageTwo={weatherType[weatherCondition]?.message}
                containerStyles={styles.bodyWrapper}
                messageOneStyles={styles.description}
                messageTwoStyles={styles.message}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        justifyContent: 'center'
    },
    wrapper: {
        flex: 1,
    },
    tempStyle: {
        color: 'white',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'white'
    },
    highLow: {
        fontSize: 20,
        color: 'white'
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 43,
        textTransform: 'capitalize',
        color: 'white'
    },
    message: {
        fontSize: 25,
        textTransform: 'capitalize',
        color: 'white'
    }
})

export default CurrentWeather;