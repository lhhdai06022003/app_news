import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginStart:25,
        marginEnd:25,
        flexDirection:'column',
    },
    top:{
        display:'flex',
        flexDirection:'column',
        padding:0,
        marginTop:24
    },
    top_header:{
        flexDirection:'row',
    },
    top_header_icon:{
        width:24,
        height:24,
    },
    top_header_text:{
        fontFamily:'Poppins',
        fontWeight:'600',
        fontSize:16,
        lineHeight:24,
        marginLeft:117,
        color:'#000000',
        
    },
    avatar:{
        marginTop:16,
        marginLeft:119.5,
    },
    avatar_img:{
        borderRadius:100,
        width:140,
        height:140,
    },
    avatar_setting:{
        position:'absolute',
        width:30,
        height:30,
        top:-30,
        left:93.5,
        borderRadius:50
    },
    thongtin:{
        // height:340,
        marginTop:16,
    },
    thongtin_item:{
        height:73,
        marginVertical:8
    },
    thongtin_item_name:{
        fontStyle:'normal',
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:14,
        lineHeight:21,
        color:'#4E4B66'
    },
    textInput:{
        borderWidth:1,
        borderRadius:6,
        height:48,
        padding:10,
        top:4,
        color:'#4E4B66',
        borderWidth:1,
        borderColor:'#4E4B66',
        
    },
    button:{
        height:50,
        backgroundColor:'#1877F2',
        borderRadius:6,
        paddingHorizontal:24,
        paddingVertical:13,
        marginTop:17.5,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonItem:{

    },
    buttonText:{
        fontFamily:'Poppins',
        fontSize:16,
        lineHeight:24,
        color:'#FFFFFF',
        fontWeight:'600'
    },

})
export default styles