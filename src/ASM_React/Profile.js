import { View, Text,Image,TextInput,Pressable,ScrollView, Button, TouchableNativeFeedbackComponent, TouchableOpacity, ToastAndroid } from 'react-native'
import React,{useContext} from 'react'
import styles from '../../styles/ASM_styles/Profile_style'
import { AppContext } from './AppContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance'

const Profile = (props) => {
  const {navigation} = props;
  const ChangePass = () => {
    navigation.navigate('ChangePass')
}
  const {infoUser,setinfoUser} = useContext(AppContext)
  console.log(infoUser)
  const getImageLibrary =async () =>{
    const result = await launchCamera();
    console.log(result.assets[0].uri)
    // upload anh
    const formData = new FormData();
    formData.append('image',{uri: result.assets[0].uri , type:'image/jpeg',name:'image.jpg'});
    const response = await AxiosIntance("multipart/form-data").post('/media/upload',formData)
    console.log(response.data.path)
    setinfoUser({...infoUser, avatar: response.data.path})
  }

  const updateProfile = async () => {
    const response = await AxiosIntance().post("/users/update-profile",{name:infoUser.name , address:infoUser.address , phone:infoUser.phone , email:infoUser.email , dob:infoUser.dob , avatar:infoUser.avatar})
    if(response.error == false){
      ToastAndroid.show("Cập nhật thành công",ToastAndroid.SHORT)
    }else{
      ToastAndroid.show("Cập nhật thất bại",ToastAndroid.SHORT)
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.top}>
        <View style={styles.top_header}>
        <TouchableOpacity onPress={ChangePass}><Image style={styles.top_header_icon} source={require('../assets/images/back_icon.png')}></Image></TouchableOpacity>
            <Text style={styles.top_header_text}>Fill your Profile</Text>

        </View>
        {
          infoUser.avatar == ""
          ?
          <View style={styles.avatar}>
          <Image style={styles.avatar_img} source={require('../assets/images/avatar.png')}></Image>
            <TouchableOpacity onPress={getImageLibrary}>
            <Image style={styles.avatar_setting} source={require('../assets/images/setting_avatar.png')}></Image>
            </TouchableOpacity>
           
        </View>
        :
        <View style={styles.avatar}>
            <Image style={styles.avatar_img} source={{uri: infoUser.avatar}}  ></Image>
           <TouchableOpacity onPress={getImageLibrary}>
            <Image style={styles.avatar_setting} source={require('../assets/images/setting_avatar.png')}></Image>
            </TouchableOpacity>
        </View>
        }
        
        <View style={styles.thongtin}>
          <View style={[styles.thongtin_item,{marginTop:0}]}>
            <Text style={styles.thongtin_item_name}>
                Địa chỉ
            </Text>
            <TextInput style={styles.textInput} placeholder='Địa chỉ' value={infoUser.address} onChangeText={(text) => setinfoUser({...infoUser, address:text})}>
            </TextInput>
          </View>
          <View style={styles.thongtin_item}>
            <Text style={styles.thongtin_item_name}>
                Full Name
            </Text>
            <TextInput style={styles.textInput} placeholder='LeHuynhHaiDai'  onChangeText={(text) => setinfoUser({...infoUser, name:text})} value={infoUser.name}>
            </TextInput>
          </View>
          <View style={styles.thongtin_item}>
            <Text style={styles.thongtin_item_name}>
                Email Address
            </Text>
            <TextInput style={styles.textInput} placeholder='****@gmail.com' value={infoUser.email} onChangeText={(text) => setinfoUser({...infoUser, email:text})}>
            </TextInput>
          </View>
          <View style={[styles.thongtin_item]}>
            <Text style={styles.thongtin_item_name}>
                Phone Number
            </Text>
            <TextInput style={styles.textInput} placeholder='078*****' value={infoUser.phone} onChangeText={(text) => setinfoUser({...infoUser, phone:text})}>
            </TextInput>
          </View>
          <View style={[styles.thongtin_item]}>
            <Text style={styles.thongtin_item_name}>
                Ngày sinh
            </Text>
            <TextInput style={styles.textInput} placeholder='Ngày sinh' value={infoUser.dob} onChangeText={(text) => setinfoUser({...infoUser, dob:text})}>
            </TextInput>
          </View>
          <Button title='Cập nhật' onPress={updateProfile}/>
   
          
        </View>
        
    </View>
      </ScrollView>
    
</View>
    
  )
}

export default Profile

{/* <View style={styles.button}>
        <Pressable style={styles.buttonItem}>
            <Text style={styles.buttonText}>Next</Text>
        </Pressable>
    </View> */}