import * as React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';


const MyComponent = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // let x = true;
  const [boo, setBoo] = React.useState('true');

  let changePasswordVisibility = () => {
    var x = !boo
    setBoo(x)
  };

  var boolValue = JSON.parse(boo); 

  return (
    
    <View style={styles.container}>
     
      <Text style={styles.head}>Login To Your Account</Text>
      {/* <Header> Login </Header> */}
      {console.log("sds :"+boo)}
      
      <TextInput
        style={styles.email}
        label="Email"
        mode="outlined"
        placeholder={'Enter Email....'}
        value={email}
        onChangeText={email => setEmail(email)}
      />
    
      <TextInput
        style={styles.pass}
        label="Password"
        mode="outlined"
        placeholder={'Enter Password....'}
        secureTextEntry={boolValue}
        right={<TextInput.Icon name="eye" onPress={changePasswordVisibility}/>}
        value={password}
        onChangeText={password => setPassword(password)}
        
   
      />
      
      

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => props.nav.navigation.navigate('ForgotPassword')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Sign In
      </Button>

      <View style={styles.row}>
      <Text style={styles.label}>Don’t have an account? </Text>
      <TouchableOpacity onPress={() => props.nav.navigation.navigate('SignUp')}>
        <Text style={styles.link}>Sign up</Text>
      </TouchableOpacity>
      </View>
      
    </View>
   
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  head: {
    fontSize: 26,
    color: '#600EE6',
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  email: {
    width: '90%',
  },
  pass: {
    width: '90%',
  },
  btn: {
    marginTop: '10%',
  },
  label: {
    color: 'black',
   
  },
  link: {
    fontWeight: 'bold',
    color: 'black',
  },
  forgotPassword: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
   row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  
});
