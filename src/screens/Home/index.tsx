import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native'


export default function Home() {

    const { navigate } = useNavigation<NavigationProp<any>>();


    return (
        <ScrollView style={styles.scrollContainer}>
            <StatusBar style="auto" />
            <TouchableOpacity style={styles.btnText} onPress={() => navigate('CadastroUser')}>
                <Text>Ir para a tela teste</Text>
            </TouchableOpacity>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',

    },
    statusbar: {

    },
    safeAreaContainer: {
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    btnText: {
        display: "flex",
        backgroundColor: "red",
        padding: 25,
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",

    },
});

