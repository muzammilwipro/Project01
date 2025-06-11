import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import database, { onValue } from '@react-native-firebase/database'

const Realtimedatabase = () => {
    const [mydata, setMydata] = useState<any | undefined>(undefined)
    useEffect(() => { getdata() }, [])

    const getdata = async () => {
        try {
            const data = await database().ref("Users/1").on('value', snapshot => {
                 setMydata(snapshot.val());
            });
            return ()=>database().ref("Users/0").off('value', data);
           
        }
        catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
  return (
    <View>
      <Text>Realtimedatabase</Text>
      <Text>{mydata? mydata.age: "loading ..."}</Text>
    </View>
  )
}

export default Realtimedatabase

const styles = StyleSheet.create({})