import { Text, Image, View, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>


        <Image style={{ width: "100%", height: 250 }} source={{
          uri: 'https://soupetropolis.com/wp-content/uploads/2022/07/Foto-Pal%C3%A1cio-S%C3%A9rgio-Fadel_Alan-Pacheco-1024x683.png'
        }} />

        <Text style={styles.titulo}>Turismo de Petrópolis</Text>

        <Text style={styles.texto}>
          A Serra da Estrela, onde se encontra Petrópolis, era praticamente desconhecida pelos colonizadores portugueses nos primeiros 200 anos de colonização,
          salvo por alguma expedição exploratória para tomar posse de sesmarias. Isso se devia ao enorme paredão montanhoso de mais de 1000m de altura que tinha
          que ser vencido para se chegar até lá; e também pela presença dos bravios índios Coroados que habitavam serra acima. Ali não havia atividade econômica.
          Somente quando os bandeirantes paulistas descobriram ouro nas Minas Gerais é que foi aberto o Caminho Novo, em 1704, para facilitar a viagem até as vilas
          mineradoras. O caminho era “novo” porque havia um outro, o “velho”, a variante do Caminho Novo, passando pelo alto da serra onde hoje está nossa cidade
          desde meados dos anos 1600, muito longo e de difícil trânsito, aberto pelos próprios bandeirantes, constituído de trilhas e picadas até as minas de ouro.
          É impossível pensar Petrópolis, Juiz de Fora, Barbacena, São João Del Rei e Ouro Preto sem antes pensar o Caminho Novo. Também não dá para entender
          Petrópolis sem a subida da Serra Velha, por onde vieram os nossos pioneiros colonizadores. Conhecer esses caminhos é conhecer 300 anos da nossa história.
        </Text>

      </View>
    </ScrollView>
  )
}