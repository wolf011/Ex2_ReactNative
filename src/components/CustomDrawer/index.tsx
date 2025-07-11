import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'
import Temperatura from '../Weather'

export default function CustomDrawer(props: any) {

    return (
        <DrawerContentScrollView>
            <View style={styles.drawer}>
                <Image source={require("../../../assets/prefa.png")} style={styles.imagem} />
            </View>
            <View style={{ paddingHorizontal: 10, gap: 15 }}>
                <DrawerItemList {...props} />
            </View>
            <View style={styles.temperatura}>
                <Temperatura/>
            </View>
        </DrawerContentScrollView>
    )
}