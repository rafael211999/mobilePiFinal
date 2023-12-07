import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import CadastroUser from './src/screens/CadastroUser';
import CadastroProd from './src/screens/CadastroProd';
import CadastroSales from './src/screens/CadastroSales';


type StackNavigationParamsList = {
  Home: undefined;
  CadastroUser: undefined;
  CadastroProd: undefined;
  CadastroSales: undefined;

}

const Stack = createStackNavigator<StackNavigationParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CadastroUser' component={CadastroUser} />
        <Stack.Screen name='CadastroProd' component={CadastroProd} />
        <Stack.Screen name='CadastroSales' component={CadastroSales} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
