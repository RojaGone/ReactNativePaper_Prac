import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import Header from './MyComponents/Header'
import BottomNav from './MyComponents/BottomNav'
import Login from './MyComponents/Login'
import ForgotPassword from './MyComponents/ForgotPassword'
import SignUp from './MyComponents/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { black, white } from 'react-native-paper/lib/typescript/styles/colors';



function HomeScreen(navigation){
  return(
    <View>
      {/* <Text style={styles.container}>
        Home screen
      </Text>
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.navigate('Detail')}>
        Pressed
      </Button> */}
      <Login nav={navigation}/>
    </View>
  )
}

function ForgotPassScreen(){
  return(
    <ForgotPassword/>
  )
}
function SignUpSceen(navigation){
  return(
    <SignUp nav={navigation}/>
  )
}

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
     {/* <Header/>
     <View/> */}
    {/* <BottomNav/> */}

     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false,}}/>
         <Stack.Screen name="ForgotPassword" component={ForgotPassScreen}/>
         <Stack.Screen name="SignUp" component={SignUpSceen} options={{headerShown:false}}/>
      </Stack.Navigator>
     </NavigationContainer>

    {/* <Login/> */}
    </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'black',
  },
});

export default App;