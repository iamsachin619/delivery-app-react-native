import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";

export default function Register(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingMain}>Create Account</Text>
      <Text style={styles.note1}>
        Hi, Kindly fill in the form to proceed shopping
      </Text>
      <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#fff"/>
      <TextInput style={styles.input} placeholder="Enter your Email" placeholderTextColor="#fff"/>
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true}/>
      <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#fff"/>
      {/* <Button
        title="Create Account"
        onPress={() => {
          Alert.alert("button is clicked");
        }}
      ></Button> */}
      <Pressable
        onPress={() => {
          Alert.alert("button is clicked from Pressable");
        }}
        style={styles.btnColor}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
      <Text style={styles.note2}>Already have an account? Login</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  headingMain: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 30,
    color:'white'
  },
  note1: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
    color:'white'
  },
  note2: {
    fontSize: 14,
    textAlign: "center",
    color: 'white'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    color: "white",
    borderBottomColor: "#fff",
    borderTopColor: "#000",
    borderLeftColor: "#000",
    borderRightColor: "#000",
    marginLeft: 15,
    fontSize: 18,
  },

  btnColor: {    
    width:'auto',
    backgroundColor:'#ECF87F',
    marginLeft:15,
    marginRight:15,
    marginTop:50,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:5
  },
  loginLink: {
    color: "#0000ff",
  },
  buttonText: {
    textAlign: "center",
  },
});
