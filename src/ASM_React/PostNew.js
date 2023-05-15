import { StyleSheet, Text, View,Image, Button, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance'

const PostNew = () => {
  const [image, setimage] = useState(null)
  const [title, settitle] = useState("")
  const [content, setcontent] = useState("")
  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri)
    const formData = new FormData();
    formData.append('image',{uri: result.assets[0].uri , type:'image/jpeg',name:'image.jpg'});
    const response = await AxiosIntance("multipart/form-data").post('/media/upload',formData)
    console.log(response.data.path)
    if(response.error == false){
      setimage(response.data.path)
    }else{
      ToastAndroid.show("Upload anhr thaats bai",ToastAndroid.SHORT)
    }
  }
  const getImageLibrary =async () =>{
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri)
    const formData = new FormData();
    formData.append('image',{uri: result.assets[0].uri , type:'image/jpeg',name:'image.jpg'});
    const response = await AxiosIntance("multipart/form-data").post('/media/upload',formData)
    console.log(response.data.path)
    if(response.error == false){
      setimage(response.data.path)
    }else{
      ToastAndroid.show("Upload anhr thaats bai",ToastAndroid.SHORT)
    }
  }
  const dangTin = async () => {
    const response = await AxiosIntance().post("/ProductAPI",{title: title , content: content , image: image})
    if(response.result == true){
      ToastAndroid.show("Đăng tin thành công",ToastAndroid.SHORT)
    }else{
      ToastAndroid.show("Đăng tin thất bại",ToastAndroid.SHORT)
    }
  }
  return (
    <View style={styles.container}>
      <View  style={styles.view_image}><Text style={styles.dangtin}>Đăng tin</Text></View>
      <View style={styles.view_image}><Image style={styles.image} source={{uri: image}}/></View>
      <Button style={styles.button_style} title='Chụp ảnh' onPress={capture}/>
      <Button style={styles.button_style} title='Chọn ảnh từ thư viện' onPress={getImageLibrary}/>
      <TextInput style={styles.TextInput} placeholder='Tiêu đề' onChangeText={settitle}/>
      <TextInput style={styles.TextInput} numberOfLines={5} placeholder='Nội dung' onChangeText={setcontent}/>
      <Button  title='Đăng tin' onPress={dangTin}/>
    </View>
  )
}

export default PostNew

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    marginHorizontal:20
  },
  view_image:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
  },
    image:{
        width:200,
        height:200,
    },
    button_style:{
        borderWidth:1,
        borderRadius:10,
       
    },
    dangtin:{
      fontSize:24,
      fontWeight:'bold',
      color:'#000000',
      justifyContent:'center',
      alignItems:'center'
    },
    TextInput:{
      borderWidth:1,
      borderRadius:10,
      marginVertical:10,
    }
    
})