import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../Navigationtype'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Auth from '@react-native-firebase/auth'
import { Authentication } from '../redux/Action'
import { useDispatch, useSelector } from 'react-redux'

type navigationprop=NativeStackNavigationProp<RootStackParamList,'Home'>

const Homescreen = () => {
  const dispatch =useDispatch()
  const navig=useNavigation<navigationprop>()
  const handlelogout=()=>{
    dispatch(Authentication(true))
  }
  const handlelogoutf=()=>{
    dispatch(Authentication(false))
  }
  const getauthval=useSelector((state:any)=>state.authval)
  console.log(getauthval,"get authval")
  
  return (
    <View>
      <Text>Homescreen</Text>
      <Text>AUTH {Auth().currentUser?.email}</Text>
      <Button title='go to details' onPress={()=>navig.navigate('Details')}/>
        <Button title='Logout' onPress={()=>{Auth().signOut().then(()=>{
            navig.navigate('Login')
        })}
        } />
        <Button title='true' onPress={handlelogout} />
        <Button title='false' onPress={handlelogoutf}/>

        <Text>{getauthval ? "true" :"false"} mmm</Text>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})