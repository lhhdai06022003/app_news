import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginStart:25,
        marginEnd:25,
        flexDirection:'column',
        
    },
    header:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        padding:0,
        gap:4
    },
    header_text1:{
        fontStyle:'normal',
        fontFamily:'Poppins',
        fontWeight:'700',
        fontSize:40,
        lineHeight:72,
        color:'#050505'
    },
    header_text2:{
        fontStyle:'normal',
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:20,
        lineHeight:30,
        color:'#4E4B66',
        marginTop:4
    },
    input:{
        marginTop:48,
    },
    input_item:{
        flexDirection:'row'
    },
    input_item_name:{
        fontStyle:'normal',
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:14,
        lineHeight:21,
        color:'#4E4B66'
    },
    textInput:{
        borderWidth:1,
        borderRadius:10,
        height:48,
        paddingHorizontal:12,
        marginTop:4,
        borderColor: 'gray',
    },
    passwordInput:{
        flex: 1,
        paddingHorizontal: 10,
    },
    passwordContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    toggleButton:{
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    toggleButtonText:{
        color: 'blue',
        fontWeight: 'bold',
    },
    checkBoxContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    checkBoxText:{
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:14,
        lineHeight:21
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
    continueWith:{
        margin:16,
        fontFamily:'Poppins',
        fontSize:14,
        lineHeight:21,
        fontWeight:'400',
        color:'#4E4B66',
        justifyContent:'center',
        alignItems:'center'
    },
    login_fb_gg:{
        height:48,
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    login_fb:{
        flexDirection:'row',
        height:48,
        width:174,
        borderRadius:6,
        backgroundColor:'#EEF1F4',
        alignItems:'center',
        justifyContent:'center',
        
        
        
    },
    login_fb_icon:{
        width:24,
        height:24,
    },
    login_fb_text:{
        fontFamily:'Poppins',
        fontSize:16,
        lineHeight:24,
        fontWeight:'600',
        paddingHorizontal:14
    }

})

export default styles;