import { Image, StyleSheet, View, Text} from 'react-native';
import Icon from "./assets/Curriculo.png";


export default function SplashScreenView() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('./assets/CurriculoLogo.png')} style={styles.image} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14614E',
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: "cover"
    },
});