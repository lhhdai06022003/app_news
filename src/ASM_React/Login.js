import { View, Text, SafeAreaView, TextInput, Pressable,Image,ScrollView, ToastAndroid, TouchableOpacity} from 'react-native'
import React,{useContext, useState} from 'react'
import Register from './Register';
import HomePage from './HomePage';
import styles from '../../styles/ASM_styles/Login_style'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Axios } from 'axios';
import AxiosIntance from './ultil/AxiosIntance';
import { AppContext } from './AppContext';


const Login = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const {navigation} = props;

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      }
    const ClickNe = () => {
        navigation.navigate('Register')
    }
    const ClickTabHomePage = () => {
        navigation.navigate('BottomTabNavigator')
    }

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const {setisLogin,setinfoUser} = useContext(AppContext);

    const onLogin = () => {
        // http://192.168.0.10:3000/api/UserAPI/login
    }

    const dangNhap = async () => {
        try{
            const response = await AxiosIntance().post("userAPI/login",{email:email , password:password})
            if(response.result == true){
                console.log(response.token)
                await AsyncStorage.setItem("token",response.token)
                ToastAndroid.show("Đăng nhập thành công",ToastAndroid.SHORT);
                setinfoUser(response.user)
                setisLogin(true);
            }else{
                ToastAndroid.show("Đăng nhập thất bại",ToastAndroid.SHORT);
            }
        }catch(e){
            console.log(e)
        }
        
     }
    
    
    
  return (
    <ScrollView>
<View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header_text1}>
                Hello 
            </Text>
            <Text style={[styles.header_text1,{color:'#1877F2'},{marginTop:-20}]}>
                Again!
            </Text>
            <Text style={styles.header_text2}>
                Welcome back you've {'\n'}
                been missed
            </Text>

        </View>
        <View style={[styles.input]}>
            <View style={styles.input_item}>
            <Text style={styles.input_item_name}>
                username
            </Text>
            <Text style={[styles.input_item_name,{color:'red'}]}>*</Text>
            </View>
            <TextInput style={styles.textInput} placeholder='username' onChangeText={setemail}>

            </TextInput>
        </View>
        <View style={[styles.input,{marginTop:16}]}>
            <View style={styles.input_item}>
            <Text style={styles.input_item_name}>
                password
            </Text>
            <Text style={[styles.input_item_name,{color:'red'}]}>*</Text>
            </View>
            
            <View style={styles.passwordContainer}>
            <TextInput style={styles.passwordInput} placeholder='password' onChangeText={setpassword} secureTextEntry={!showPassword}>

                </TextInput>
                <TouchableOpacity style={styles.toggleButton} onPress={toggleShowPassword}>
                <Text style={styles.toggleButtonText}>{showPassword ? 'hide' : 'show'}</Text>
                </TouchableOpacity>
             </View>
        </View>
        <View style={[styles.checkBoxContainer,{marginTop:9.5}]}>
            <View style={styles.checkBoxContainer}>
            <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: '#1877F2', false: '#1877F2'}}
          />
            
            <Text style={styles.checkBoxText}>Remember me</Text>
            </View>
            <View>
            <Text style={[styles.checkBoxText,{color:'#1877F2'}]}>Forgot the password?</Text>
            </View>

        </View>
        <View >
        <TouchableOpacity onPress={dangNhap} style={styles.button}>
        
                <Text style={styles.buttonText}>Login</Text>
            
        </TouchableOpacity>
           
        </View>
        <View style={styles.continueWith}>
            <Text >or continue with</Text>
        </View>
        <View style={styles.login_fb_gg}>
        <Pressable style={styles.login_fb}>
            <Image style={styles.login_fb_icon} source={require('../assets/images/fb_icon.png')}></Image>
            <Text style={styles.login_fb_text}>Google</Text>
        </Pressable>

        <Pressable style={styles.login_fb}>
            <Image style={styles.login_fb_icon} source={require('../assets/images/gg_icon.png')}></Image>
            <Text style={styles.login_fb_text}>Facebook</Text>
        </Pressable>
        </View>
        <View style={[styles.continueWith,{flexDirection:'row'}]}>
            <Text >don’t have an account ?</Text>
            
            <Pressable onPress={ClickNe}>
            <Text style={{color:'#1877F2'}}>Sign Up</Text>
            </Pressable>
        </View>
  
    </View>
    </ScrollView>
    
  )
}

export default Login