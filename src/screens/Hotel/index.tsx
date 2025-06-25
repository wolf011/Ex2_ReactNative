import { View, Text, TouchableOpacity, Modal, Image, Button } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Hotel() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Image source={require('../../../assets/Hotel.jpg')} style={styles.imagem} />
      <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              O Palácio ou Hotel Quitandinha é um palácio brasileiro, localizado no bairro Quitandinha na Zona Sul de Petrópolis.
              Foi construído a partir de 1941 pelo empreendedor mineiro Joaquim Rolla, para ser o maior cassino hotel da América do Sul.
            </Text>
            <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>

    </View>
  )
}