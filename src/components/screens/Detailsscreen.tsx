import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

const Detailsscreen = () => {

  const countRef = useRef(0); // persists across renders, but does not trigger re-renders
  const [renderCount, setRenderCount] = useState(0); // to force re-render for demo

  const increment = () => {
    countRef.current += 1;
    console.log('Count (ref):', countRef.current);
    //setRenderCount(prev => prev + 1); // just to trigger UI update
  };

  const arr = [1, 2, 3, 4]
  const val = 2
  let val1:string;
  val1="nnn"
  const uarr=[... arr,8]
  console.log(uarr)
  return (
    <View>
      {
        arr.map((item,index) => {
         return (item === val) ?  <Text key={index}>{item}</Text>:  null;
        }
        )
      }



      <View>
        <Text>Ref Count: {countRef.current}</Text>
        <Button title="Increment Ref Count" onPress={increment} />
      </View>

    </View>
  )
}

export default Detailsscreen

const styles = StyleSheet.create({})