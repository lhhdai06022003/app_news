import { View, Text, InputAccessoryView,Image,ScrollView, Pressable, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'

import styles from '../../styles/ASM_styles/HomePage_style'
import ListNews from './ListNews'
import AxiosIntance from './ultil/AxiosIntance'

// vua them cai mới
const HomePage = (props) => {
  const {navigation} = props;
  
  return (
    
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.header_kabar} source={require('../assets/images/Kabar.png')}></Image>
            <View style={styles.header_icon}><Image style={styles.header_icon_chuong} source={require('../assets/images/chuong.png')}></Image></View>
        </View>

        <View style={styles.body}>
            <ListNews navigation={navigation}/>     
          </View>
        
    </View>
    
  )
  
}


export default HomePage

