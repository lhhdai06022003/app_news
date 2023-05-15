import { View, Text, SafeAreaView, TextInput,CheckBox, Pressable,Image,ScrollView, ToastAndroid} from 'react-native'
import React,{useState} from 'react'
import styles from '../../styles/ASM_styles/Login_style'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Axios } from 'axios';
import AxiosIntance from './ultil/AxiosIntance';

const Register = (props) => {
    const {navigation} = props;
    const ClickTroVe = () => {
        navigation.navigate('Login');
    }

    const [email,setemail] = useState(""); 
    const [password,setpassword] = useState("");
    const [name,setname] = useState("");
    const [confirm_password,setconfirm_password] = useState("");
    const [age,setage] = useState("");
    const aonRegister = () => {
        // http://192.168.0.10:3000/api/UserAPI/register
    }
    const onRegister = async () => {
        let data = { email, password, name, age }
        const doFetch = async (data) => {
            let url = '/UserAPI/register'
            const response = await fetch(url, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify(data), 
            });
            return response.json(); 
        }
        const res = await doFetch(data);
        console.log(res);
    }


    const dangKy = async () => {
        try{
            const response = await AxiosIntance().post("userAPI/register",{email:email , password:password,name:name,age:age});
            console.log(response)
            if(response.resultData.result == true){
                ToastAndroid.show("Đăng kí thành công", ToastAndroid.SHORT)
                navigation.navigate('Login')
            }else{
                ToastAndroid.show("Đăng kí thất bại", ToastAndroid.SHORT)
            }
        }catch(e){
            console.log(e)
        }

        

    }
    return (
        <ScrollView>
    <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.header_text1,{color:'#1877F2'}]}>
                    Hello 
                </Text>
                
                <Text style={styles.header_text2}>
                Signup to get Started
                </Text>
    
            </View>
            <View style={[styles.input,{marginTop:65}]}>
                <View style={styles.input_item}>
                <Text style={styles.input_item_name}>
                    username
                </Text>
                <Text style={[styles.input_item_name,{color:'red'}]}>*</Text>
                </View>
                <TextInput style={styles.textInput} placeholder='username' onChangeText={setemail} >
    
                </TextInput>
            </View>
            <View style={[styles.input,{marginTop:16}]}>
                <View style={styles.input_item}>
                <Text style={styles.input_item_name}>
                    password
                </Text>
                <Text style={[styles.input_item_name,{color:'red'}]}>*</Text>
                </View>
                <TextInput style={styles.textInput} placeholder='password' onChangeText={setpassword} >
    
                </TextInput>
            </View>
            <View style={[styles.input,{marginTop:16}]}>
                <View style={styles.input_item}>
                <Text style={styles.input_item_name}>
                    name
                </Text>
                <Text style={[styles.input_item_name,{color:'red'}]}>*</Text>
                </View>
                <TextInput style={styles.textInput} placeholder='password' onChangeText={setname}>
    
                </TextInput>
            </View>
            <View style={[styles.input,{marginTop:16}]}>
                <View style={styles.input_item}>
                <Text style={styles.input_item_name}>
                    confirmpassword
                </Text>
                <Text style={[styles.input_item_name,{color:'red'}]}>*</Text>
                </View>
                <TextInput style={styles.textInput} placeholder='password' onChangeText={setage} >
    
                </TextInput>
            </View>
            <View style={[styles.checkBoxContainer,{marginTop:9.5}]}>
                <View style={styles.checkBoxContainer}>
                <BouncyCheckbox />
                <Text style={styles.checkBoxText}>Remember me</Text>
                </View>
                
    
            </View>
            <View >
                <Pressable style={styles.button} onPress={dangKy}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
            <View style={styles.continueWith}>
                <Text >or continue with</Text>
            </View>
            <View style={styles.login_fb_gg}>
            <Pressable style={styles.login_fb}>
                <Image style={styles.login_fb_icon} source={require('../assets/images/fb_icon.png')}></Image>
                <Text style={styles.login_fb_text}>Facebook</Text>
            </Pressable>
    
            <Pressable style={styles.login_fb}>
                <Image style={styles.login_fb_icon} source={require('../assets/images/gg_icon.png')}></Image>
                <Text style={styles.login_fb_text}>Google</Text>
            </Pressable>
            </View>
            <View style={[styles.continueWith,{flexDirection:'row'}]}>
                <Text >don’t have an account ?</Text>
                
                <Pressable onPress={ClickTroVe}>
                    <Text style={{color:'#1877F2'}}>Login</Text>
                </Pressable>
            </View>
      
        </View>
        </ScrollView>
        
      )
}

export default Register