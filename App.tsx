import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from './src/components/screens/Signup'
import Homescreen from './src/components/screens/Homescreen'
import Detailsscreen from './src/components/screens/Detailsscreen'
import { RootStackParamList } from './src/components/Navigationtype'
import Loginscreen from './src/components/screens/Loginscreen'
import Auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'

const App = () => {
  
  const getauthval=useSelector((state:any)=>state.authval)
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
     Auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);   }})
      }) 
 
  return (
       
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {!isAuthenticated ? (
            <>
          <Stack.Screen name="Login" component={Loginscreen} />
          <Stack.Screen name="Signup" component={Signup} />
            </>
          ) :
          <>
          <Stack.Screen name='Home' component={Homescreen}/>
          <Stack.Screen name='Details' component={Detailsscreen}/>
          </>}
        </Stack.Navigator>
      </NavigationContainer>
    
    
  )
}

export default App

const styles = StyleSheet.create({})


      // <Firestoreget/> 
      //  <Realtimedatabase/> 
      //  <Crudrealtimeadd/> 
      //  <Signup/> 