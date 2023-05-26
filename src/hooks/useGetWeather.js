import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { API_KEY } from '@env'

export const useGetWeather = () => {

    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])

    const fetchWeatherData = async () => {
        try {

            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`
            )
            const data = await res.json()
            setWeather(data)

        } catch (err) {
            setError('Could not fetch weather')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }

            let locationArea = await Location.getCurrentPositionAsync({});
            setLocation(locationArea);
            await fetchWeatherData()
        })();
    }, [location]);

    return [loading, error, weather]
}