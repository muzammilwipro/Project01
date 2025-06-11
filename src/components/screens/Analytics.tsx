import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import analytics from '@react-native-firebase/analytics'
import { AnalyticEvent } from '../AnalyticEvents'
import { SafeAreaView } from 'react-native-safe-area-context'

const Analytics = () => {


    // useEffect(() => {
    //     const logAppOpen = async () => {
    //         try {
    //         await analytics().logEvent();
    //         console.log('Analytics event logged: app_opened');
    //         }
    //         catch (error) {
    //             console.error('Error logging analytics event:', error);
    //         }
    //     };

    //     logAppOpen();
    // }, []);

    // const Handleanalytics=async()=>{
    //     try{
    //         await AnalyticEvent(name="Signup", payload={
    //             name:"muzammil",age:20
    //         })
    //     } catch (error){
    //         console.log(error)
    //     }

    // }

    const handlecheck=async()=>{
        try{
        await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
          console.log("sucessfulll analytics")
        }
          catch (error){
            console.log("error analytics",error)
          }

    }


    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Analytics</Text>
            <Button title="AddAnalytic" onPress={handlecheck}/>
            <Text>mmmmm</Text>
        </SafeAreaView>
    )
}

export default Analytics

const styles = StyleSheet.create({})