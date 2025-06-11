import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import database, { set } from '@react-native-firebase/database'

const Crudrealtimeadd = () => {
    const [textv, settextv] = useState("")
    const [list, setlist] = useState<any[]>([])
    const [updatev,setupdatev]=useState(false)
    const [updateid,setupdateid]=useState(0)
    const [idindex,setindex]=useState(0)

    //add data to realtime database
    const handletext = (e: any) => {
        settextv(e)
    }
    const handleAdd = () => {
        console.log("idindex handle add",idindex)
        database().ref(`Students/${idindex}`).set({
            age: 20, Name: textv,
        })
        setindex(idindex+1)
        settextv("")
        getdata()
    }

    //fetch data from realtime database
    // useEffect(() => {
    //     getdata()
    // }, [])

    const getdata = async () => {
        try {
            const data =await database().ref("Students").on('value', (snapshot) => {
                setlist(snapshot.val());
                console.log("Data fetched: mmm ", snapshot.val);
            });

        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    //update data from realtime
    const handleitemdata=(item,index)=>{        
        console.log(index,"indexval item data")
        setupdateid(index)
        setupdatev(true)
        setupdateid(index)
        settextv(item.Name)
        console.log(item.name)
    }

    const handleupdate=async ()=>{
        try {
            await database().ref(`Students/${updateid}`).update({
                Name:textv,age:24
            })
            setupdatev(false)
            settextv("")
            
        } catch (error) {
            console.log("error")
        }        
    }

    console.log("list mmmm", list)
    console.log(updateid,"update id")

    return (
        <View>
            <TextInput placeholder='Enter name' onChangeText={handletext} style={{ borderWidth: 2, padding: 8, margin: 8, fontSize: 18, borderRadius: 10 }} value={textv} />
            <Button title={updatev?"Update":"Add"} onPress={updatev? handleupdate:handleAdd} />
            <Text style={{ marginTop: 20, fontSize: 18, paddingLeft: 8 }}>Student Details</Text>
            
            {
                list.length > 0 &&
                list.map((item, index) => (
                    <Pressable onPress={()=>handleitemdata(item,index)}>
                    <View key={index} style={{ borderWidth: 1, margin: 8, padding: 8, borderRadius: 10 }}>
                        <Text style={{ fontSize: 16 }}>Name: {item.Name}</Text>
                        <Text style={{ fontSize: 16 }}>Age: {item.age}</Text>
                    </View>
                    </Pressable>
                ))
            }
        </View>
    )
}

export default Crudrealtimeadd

const styles = StyleSheet.create({})



// import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import database from '@react-native-firebase/database'

// const Crudrealtimeadd = () => {
//     const [textv, settextv] = useState("")
//     const [list, setlist] = useState<any[]>([])
    

//     //add data to realtime database
//     const handletext = (e: any) => {
//         settextv(e)
//     }
//     const handleAdd = () => {
//         database().ref("Students/3").set({
//             age: 20, Name: textv,
//         })
//         settextv("")
//     }

//     //fetch data from realtime database
//     useEffect(() => {
//         getdata()
//     }, [])

//     const getdata = async () => {
//         try {
//             const data = await database().ref("Students").on('value', (snapshot) => {
//                 setlist(snapshot.val());
//                 console.log("Data fetched: ", snapshot.val());
//             });

//         } catch (error) {
//             console.error("Error fetching data: ", error);
//         }
//     }


//     return (
//         <View>
//             <TextInput placeholder='Enter name' onChangeText={handletext} style={{ borderWidth: 2, padding: 8, margin: 8, fontSize: 18, borderRadius: 10 }} value={textv} />
//             <Button title='Add' onPress={handleAdd} />
//             <Text style={{ marginTop: 20, fontSize: 18, paddingLeft: 8 }}>Student Details</Text>
//             {
//                 list.filter(item => item !== null).map((item, index) => (
//                     <Pressable >
//                     <View key={index} style={{ borderWidth: 1, margin: 8, padding: 8, borderRadius: 10 }}>
//                         <Text style={{ fontSize: 16 }}>Name: {item.Name}</Text>
//                         <Text style={{ fontSize: 16 }}>Age: {item.age}</Text>
//                     </View>
//                     </Pressable>
//                 ))
//             }
//         </View>
//     )
// }

// export default Crudrealtimeadd

// const styles = StyleSheet.create({})