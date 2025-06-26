import { View, Text, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { styles } from './styles'

interface TempData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export default function Temperatura () {
    const [c1, setC1] = useState("-22.5046");
    const [c2, setC2] = useState("-43.1823");
    const [temp, setTemp] = useState<TempData | null>(null);
    const key = "fdf30c1772db7445747e63fbdd10a324";

    const buscar = async () => {
        try {
            const response = await api.get(`/weather?lat=${c1}&lon=${c2}&appid=${key}&units=metric&lang=pt_br`);
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
    <View style={styles.container}>
    {temp ? (
      <>
        <Text>Cidade: {temp.name}</Text>
        <Text>Temperatura: {temp.main.temp} °C</Text>
        <Text>Descrição: {temp.weather[0].description}</Text>
        <Text>Umidade: {temp.main.humidity}%</Text>
          
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png` }}
            style={{ width: 100, height: 100, marginTop: 10 }}
          />
      </>
    ) : (
      <Text>Carregando dados...</Text>
    )}
  </View>
  )
}