import { StyleSheet, Text, View,Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'


const ItemListView = props => {
    const {dulieu,navigation} = props;
    const ClickItem = () =>{
        console.log("ClickItem")
        navigation.navigate("DetailNew",{id: dulieu._id});
    }
  return (
    <TouchableOpacity onPress={ClickItem}>
         <View style={styles.listview}>
                        <Image style={styles.listview_image} source={{uri:dulieu.image}} ></Image>
                        <View style={styles.listview_item}>
                        <Text numberOfLines={1} style={styles.listview_item_tieude}>{dulieu.title}</Text>
                        <Text numberOfLines={2} style={styles.listview_item_content}>{dulieu.content}</Text>
                        
                        </View>
                    </View>
    </TouchableOpacity>
    
    
  )
}

export default ItemListView

const styles = StyleSheet.create({
    listview:{
        height:112,
        borderRadius:6,
        padding:8,
        flexDirection:'row'
    },
    listview_image:{
        width:96,
        height:96,
        borderRadius:6,
    },
    listview_item:{
        marginLeft:4,
        height:96
    },
    listview_item_tieude:{
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:13,
        lineHeight:19.5,
        color:'#4E4B66',
        width: Dimensions.get('window').width -166

    },
    listview_item_content:{
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:16,
        lineHeight:24,
        color:'#000000',
        width: Dimensions.get('window').width -166

    }
})