import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View,  } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';




export default function CadastroProd() {
    const { navigate } = useNavigation<NavigationProp<any>>();


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                id='sName'
            />

            <Text style={styles.label}>Sobrenome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu sobrenome"
                id='sSobrenome'

            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                keyboardType="email-address"
                id='sEmail'
            />

            <Text style={styles.label}>CPF</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                id='sCpf'
            />


            <Button  title="Cadastrar" />
            <Button title="Listar usuários" />

            <Text style={styles.textStyle} >Tela de cadastro de usuário</Text>
            <TouchableOpacity style={styles.btnText} onPress={() => navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnText} onPress={() => navigate('CadastroSales')}>
                <Text>Cadastro de vendas</Text>
            </TouchableOpacity>





        </View>
    );
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
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
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    
    },
    label: {
        fontSize: 19,
        marginBottom: 8,
        borderRadius: 20,
        fontFamily: "Courier New, Courier, monospace",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        borderRadius: 20,
    },

})