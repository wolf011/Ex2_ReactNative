import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'

interface CoordData {
    c1:  string;
    c2:  string;
}

export default function Temperatura () {
    const [c1, setC1] = useState("43.1042");
    const [c2, setC2] = useState("22.3017");
    const [temp, setTemp] = useState<CoordData | null>(null);
    const key = "";

    const buscar = async () => {
        try {
            const response = await api.get(`/onecall?lat=${c1}&lon=${c2}&eappid=${key}`);
            if ((await response).data.erro) {
                setTemp(null);
                Alert.alert("Coordenadas inválidas")
            }
            setTemp(response.data);
        } catch (error) {
            console.error("Error: " + error);
        }
    }

    useEffect(() => {
        buscar();
    }, [])

  return (
    <View>
        <Text>{JSON.stringify(temp)}</Text>
    </View>
  )
}