import { Button, StyleSheet, Text, TextInput, View,ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Axios } from 'axios';
import AxiosIntance from './ultil/AxiosIntance';

const ChangePass = (props) => {
  const {navigation} = props;
  const TroVeProfile = () => {
    navigation.navigate('Profile')
}
    const [changepass, setchangepass] = useState("")
    const doiPass = async () => {
      const response = await AxiosIntance().post("/users/change-password",{ password:changepass})
      if(response.error == false){
          ToastAndroid.show("Đổi mật khẩu  thành công",ToastAndroid.SHORT);
      }else{
          ToastAndroid.show("Đổi mật khẩu  thất bại",ToastAndroid.SHORT);
      }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.changepass}>ChangePass</Text>
      <View style={styles.textinput}><TextInput placeholder='Nhập mật khẩu mới' onChangeText={setchangepass}></TextInput></View>
      <View style={styles.button}><Button onPress={doiPass}  title='Cập nhật mật khẩu'></Button></View>
      <View style={styles.button_back}><Button onPress={TroVeProfile}  title='Trở về Profile'></Button></View>
    </View>
  )
}

export default ChangePass

const styles = StyleSheet.create({
  container:{
      marginHorizontal:20,
      marginTop:20
  },
    textinput:{
        borderWidth:1,
        borderRadius:10,
        fontSize:16,
        marginTop:20,
        paddingHorizontal:20
    },
    changepass:{
      fontFamily:'Poppins',
        fontWeight:'600',
        fontSize:16,
        lineHeight:24,
        marginLeft:117,
        color:'#000000',
    },
    button:{
      marginTop:20,
      borderRadius:20
    },
    button_back:{
      marginTop:20,
    }
})