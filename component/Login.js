
import { StyleSheet, Text, View, TextInput, Pressable,ImageBackground, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Login({navigation}) {

  const random = () => {
    navigation.navigate('register')
  }
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./bg.jpg')}/> */}
      <Text style={styles.headText}>Welcome back</Text>
      <Text style={styles.smallText}>Sign in to continue</Text>
      <Button title='sign up' onPress={random}></Button>
      <TextInput
        placeholderTextColor='grey'
        style={styles.input}
        
        placeholder="User name"
      />
      <TextInput
        placeholderTextColor='grey'
        style={styles.pass}
        
        placeholder="Password"
      />
      <Pressable style={styles.signIn}><Text style={styles.signInText}>Sign in</Text></Pressable>
      <Pressable style={styles.signInFB}><Text style={styles.signInFBText}><Feather name="facebook" size={24} color="white" />Conntect with facebook</Text></Pressable>
      <Text style={styles.forgetPass}>Forgot your password?</Text>
      <View style={styles.flexC}>
        <Text style={styles.noAccount}>Dont have an account?</Text>
        
      </View>

      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding:20,
      
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    headText:{
      color:'#fff',
      fontSize:48,
      fontWeight:'bold',
      textAlign:'left',
      paddingTop:85,
      paddingLeft:15
    },
    smallText:{
      color:'#fff',
      fontSize:18,
      paddingLeft:15
  
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 0.5,
      color:'white',
      borderBottomColor:'white',
      marginTop:85,
      marginLeft:15,
      fontSize:18
    },
    pass:{
      height: 40,
      margin: 12,
      borderWidth: 0.5,
      color:'white',
      borderBottomColor:'white',
      marginTop:15,
      marginLeft:15,
      fontSize:18
    },
    signIn:{
      width:'auto',
      backgroundColor:'#ECF87F',
      marginLeft:15,
      marginRight:15,
      marginTop:50,
      paddingTop:15,
      paddingBottom:15,
      borderRadius:5
  
    },
    signInText:{
      textAlign:'center',
      color:'black',
      fontSize:18,
      fontWeight:'bold',
      textTransform:'uppercase'
  
    },
    signInFB:{
      width:'auto',
      backgroundColor:'#2672CB',
      marginLeft:15,
      marginRight:15,
      marginTop:20,
      paddingTop:15,
      paddingBottom:15,
      borderRadius:5
    },
    signInFBText:{
      textAlign:'center',
      color:'white',
      fontSize:18,
      fontWeight:'bold',
      textTransform:'uppercase'
    },
    forgetPass:{
      color:'white',
      textAlign:"center",
      marginTop:45,
      fontWeight:"200"
      
    },
    
    noAccount:{
      color:'white',
      textAlign:"center",
      marginTop:195,
      fontWeight:"400",
     
    }
  });
