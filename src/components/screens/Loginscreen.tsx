import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../Navigationtype'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type navigprops=NativeStackNavigationProp<RootStackParamList,'Home'>

const Loginscreen = () => {

    const [email,setemail]=useState("")
    const [password, setpassword] = useState("")
    const navig=useNavigation<navigprops>()
    const handlesignup=async()=>{
        try{
            const createuser = await auth().signInWithEmailAndPassword(
                email,password
            )
            console.log("user has loggedin",createuser)
            navig.navigate('Home',{
                uname:createuser.user.email
            })
        }catch (error){
            console.log(error,"error")
        }
    }
    
  return (
    <View>
          <Text style={{fontSize:18}}>Login Screen</Text>
            <TextInput
              placeholder='Enter email'
              style={{borderWidth: 1, borderColor: 'black', margin: 10, padding: 10}} onChangeText={(e)=>setemail(e)} value={email}
            />
            <TextInput
              placeholder='Password' secureTextEntry={true}
              style={{borderWidth: 1, borderColor: 'black', margin: 10, padding: 10}} onChangeText={(e)=>setpassword(e)} value={password}
            />
            <Button title='Login' onPress={handlesignup} />
            <Button title='Signup' onPress={()=>navig.navigate('Signup')} />
               
        </View>
  )
}

export default Loginscreen

const styles = StyleSheet.create({})