import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Museu() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Image source={require('../../../assets/museu.jpg')} style={styles.imagem} />
      <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Antiga residência de verão da Família Imperial Brasileira, um dos museus mais visitados do país, possui acervo composto 
              pelas coroas dos Imperadores Dom Pedro I e Dom Pedro II, o traje majestático, móveis, obras de arte, instrumentos 
              musicais, entre outros. No pavilhão das viaturas, vários veículos utilizados no século XIX
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