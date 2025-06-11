import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { set } from '@react-native-firebase/database'
import { useNavigation } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const Signup = () => {
  const navig=useNavigation()
    const [email,setemail]=useState("")
    const [password, setpassword] = useState("")
    const handlesignup=async()=>{
        try{
            const createuser = await auth().createUserWithEmailAndPassword(
                email,password
            )
            setemail("")
            setpassword("")
            navig.navigate('Login')
            console.log("user is creeated",createuser)
        }catch (error){
            console.log(error,"error")
        }
    }
  return (
    <View>
      <Text style={{fontSize:18}}>Signup Screen</Text>
        <TextInput
          placeholder='Enter email'
          style={{borderWidth: 1, borderColor: 'black', margin: 10, padding: 10}} onChangeText={(e)=>setemail(e)} value={email}
        />
        <TextInput
          placeholder='Password' secureTextEntry={true}
          style={{borderWidth: 1, borderColor: 'black', margin: 10, padding: 10}} onChangeText={(e)=>setpassword(e)} value={password}
        />
        <Button title='Signup' onPress={handlesignup} />
            <Text>{email}</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})