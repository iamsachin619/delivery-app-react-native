import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable,ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Login from './component/Login';
import Register from './component/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='login'>
        <Stack.Screen
          name="login"
          component={Login}
        />
        <Stack.Screen
          name="register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


