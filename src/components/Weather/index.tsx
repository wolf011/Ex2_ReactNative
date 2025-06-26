import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { styles } from './styles';

interface ClimaData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export default function Temperatura() {
    const [longi, setLongi] = useState("-43.175480");
    const [lat, setLat] = useState("-22.509911");
    const [clima, setClima] = useState<ClimaData | null>(null);
    const key = "";

    const buscar = async () => {
        if (!longi && !lat) {
            Alert.alert("O cnpj deve ter 14 dígitos!")
        }
        try {
            const response = await api.get(`/forecast?lat=${lat}&lon=${longi}&cnt=1&appid=${key}&units=metric`);
            if ((await response).data.erro) {
                setClima(null);
                Alert.alert("Coordenadas inválidas")
            }
            setClima(response.data.list[0].main);
        } catch (error) {
            console.error("Error: " + error);
        }
    }

    useEffect(() => {
        buscar();
    }, [])

    return (
        <View style={styles.container}>
            {clima &&(<View style={styles.bloco}>
                <Text>Temperatura: {clima?.temp}ºC</Text>
                <Text>Humidade: {clima?.humidity}%</Text>
                <Text>Sensação Térmica: {clima?.feels_like}ºC</Text>
                <Text>Máx: {clima?.temp_max}ºC</Text>
                <Text>Min: {clima?.temp_min}ºC</Text>
            </View>)}
        </View>
    )
}