import { StyleSheet, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'

const Firestoreget = () => {
    const [mydata, setMydata] = useState<any | undefined>(undefined)
    useEffect(() => { getdata() }, [])

    const getdata = async () => {
        try {
            const data = await firestore().collection("Chauthenbtestdb").doc("muzammil359").get();
            setMydata(data.data);
        }
        catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
    return (
        <SafeAreaView>
              <Text>Firebase</Text>
              <Text>{mydata? mydata.Name: "loading ...."}</Text>
            </SafeAreaView>
    )
}

export default Firestoreget

const styles = StyleSheet.create({})