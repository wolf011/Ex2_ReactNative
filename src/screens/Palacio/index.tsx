import { View, Text, TouchableOpacity, Modal, Image, Button } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Palacio() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Image source={require('../../../assets/palacio.jpg')} style={styles.imagem} />
      <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Sua estrutura pré-moldada em ferro fundido foi encomendada a uma fundição francesa pelo Conde D’Eu, sendo montada
              em Petrópolis pelo engenheiro Eduardo Bonjean. Foi inaugurado em 1884 com a finalidade de abrigar as já tradicionais
              exposições de produtos hortícolas e pássaros da região, que aconteciam em instalações provisórias no local.
              No Palácio, em abril de 1888, foram libertados os últimos escravos de Petrópolis, em uma bela festa com a presença da
              Princesa Isabel.
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