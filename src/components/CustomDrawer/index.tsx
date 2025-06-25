import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'

export default function CustomDrawer(props: any) {

    return (
        <DrawerContentScrollView>
            <View style={styles.drawer}>
                <Image source={require("../../../assets/prefa.png")} style={styles.imagem} />
            </View>
            <View style={{ marginTop: 10, paddingHorizontal: 10, gap: 25 }}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}