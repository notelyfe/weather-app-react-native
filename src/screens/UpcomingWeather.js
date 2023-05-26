import React from "react"
import { SafeAreaView, StyleSheet, FlatList, ImageBackground } from "react-native"
import Item from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {

    const renderItem = ({ item }) => (

        <Item
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/UpComing-background.jpg')}
                style={styles.image}
            >
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather