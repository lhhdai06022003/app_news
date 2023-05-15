import { View, Text ,Image, Pressable,ScrollView, ToastAndroid,ActivityIndicator} from 'react-native'
import React,{useEffect,useState} from 'react'
import styles from '../../styles/ASM_styles/DetailNew_style'
import AxiosIntance from './ultil/AxiosIntance';

const DetailNew = (props) => {
    const {route} = props;
    const {params} = route;
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [image, setimage] = useState("")
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
      const getDetails = async () => {
        const response = await AxiosIntance().get("productAPI/" + params.id );//+ "/detail"
        console.log(response)
        if(response.result == true){
            settitle(response.product.title)
            setcontent(response.product.content)
            setimage(response.product.image)
            setisLoading(false);

        }else{
            ToastAndroid.show("Lấy dữ liệu thất bại",ToastAndroid.SHORT);
        }
      }
      getDetails();
    
      return () => {
        
      }
    }, [])
    
  return (
    <>
        {
            isLoading == true ? (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} color='#ffffff'/>
            <Text>Loading....</Text>
            </View>)
            :(
                <ScrollView>
        <View style={styles.container}>
         {/* thanh cong cu */}
        <View style={styles.menu}>
            <Image style={styles.menu_icon} source={require('../assets/images/back_icon.png')}></Image>
            <View style={styles.menu_con}>
                <Image style={styles.menu_icon} source={require('../assets/images/share_icon.png')}></Image>
                <Image style={styles.menu_icon} source={require('../assets/images/3cham_icon.png')}></Image>
            </View>

        </View>

        {/* page dang bai */}
        <View style={styles.account}>
            <View style={styles.account_left}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')}></Image>
                <View style={styles.account_left_tt}>
                    <Text style={styles.account_left_tt_name}>Baos</Text>
                    <Text style={styles.account_left_tt_time}>10m ago</Text>
                </View>
            </View>
            <Pressable style={styles.button_follo}>
            <Text style={styles.buttonText}>Following</Text>
            </Pressable>
        </View>


        <View style={styles.image}>
            <Image style={styles.image} source={{uri: image}}></Image>
        </View>


        <View style={styles.title}>
            <Text style={styles.title_europe}>Europe</Text>
            <Text style={styles.title_content}>
                {title}
            </Text>
        </View>


        <View style={styles.noidung}>
                <Text style={styles.noidung_text}>{content}
                </Text>
        </View>
        <View style={styles.tuongtac}>
            <View style={styles.tuongtac_left}>

                <View style={styles.tuongtac_left_tym}>
                    <Image style={styles.tuongtac_left_tym_icon} source={require('../assets/images/tym_icon.png')}></Image>
                    <Text style={styles.tuongtac_left_tym_text}>10k</Text>
                </View>
                <View style={styles.tuongtac_left_tym}>
                    <Image style={styles.tuongtac_left_tym_icon} source={require('../assets/images/cmt_icon.png')}></Image>
                    <Text style={styles.tuongtac_left_tym_text}>10k</Text>
                </View>
                
            </View>
            <View style={styles.tuongtac_right}>
            <Image style={styles.tuongtac_left_cmt_icon} source={require('../assets/images/shave_icon.png')}></Image>
            </View>
        </View>
    </View>
                 </ScrollView>
            )
        }
    </>
   
    
    
  )
}

export default DetailNew