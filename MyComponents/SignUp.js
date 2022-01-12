import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
    

const SignUp = (props) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [DOB, setDOB] = React.useState('');
  const [Image, setImage] = React.useState('');
  const [boo, setBoo] = React.useState('true');
  

  let changePasswordVisibility = () => {
    var x = !boo
    setBoo(x)
  };
  var boolValue = JSON.parse(boo); 


  return (
    <View style={styles.container}>
      <Text style={styles.head}>Create Account</Text>
      

      <TextInput
        style={styles.input}
        label="FirstName"
        mode="outlined"
        placeholder={'Enter FirstName....'}
        value={firstName}
        onChangeText={firstName => setFirstName(firstName)}
      />
      <TextInput
        style={styles.input}
        label="LastName"
        mode="outlined"
        placeholder={'Enter LastName....'}
        value={lastName}
        onChangeText={lastName => setLastName(lastName)}
      />
      <TextInput
        style={styles.input}
        label="Email"
        mode="outlined"
        placeholder={'Enter Email....'}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        label="Password"
        mode="outlined"
        placeholder={'Enter Password....'}
        secureTextEntry={boolValue}
        right={<TextInput.Icon name="eye" onPress={changePasswordVisibility}/>}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <TextInput
        style={styles.input}
        label="Address"
        mode="outlined"
        placeholder={'Enter Address....'}
        value={address}
        onChangeText={address => setAddress(address)}
      />
      <TextInput
        style={styles.input}
        label="DOB"
        mode="outlined"
        placeholder={'Enter DateOfBirth....'}
        value={DOB}
        onChangeText={DOB => setDOB(DOB)}
      />
      <TextInput
        style={styles.input}
        label="Choose Image"
        mode="outlined"
        placeholder={'Choose Image....'}
        value={Image}
        onChangeText={Image => setImage(Image)}
      />

      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        SignUp
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => props.nav.navigation.navigate('Home')}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  input: {
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

export default SignUp;
