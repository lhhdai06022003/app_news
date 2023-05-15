import React from "react";
import { StyleSheet } from "react-native";


    const styles = StyleSheet.create({
        tieude:{
            height:24,
            marginTop:16,
            justifyContent:'space-between',
            flexDirection:'row',
        },
        tieude_left:{
            fontFamily:'Poppins',
            fontWeight:'600',
            fontSize:16,
            lineHeight:24,
            color:'#000000'
        },
        tieude_right:{
            fontFamily:'Poppins',
            fontWeight:'400',
            fontSize:14,
            lineHeight:21,
            color:'#4E4B66'
        },
        body:{
            marginTop:20,
            marginBottom:30
        },
        menu:{
            height:34,
            flexDirection:'row',
            marginTop:16,
            alignItems:'flex-start',
            paddingHorizontal:4
        },
        menu_text:{
            paddingHorizontal:4,
            fontFamily:'Poppins',
            fontWeight:'400',
            fontSize:16,
            lineHeight:24,
            color:'#4E4B66'
    
        },
        search:{
            flexDirection:"row",
            borderWidth:1,
            borderRadius:10,
            alignItems:'center',
            paddingHorizontal:10,
            marginTop:-20
            
        },
        search_ic:{
                
        },
        search_text:{
            fontFamily:'Poppins',
            fontWeight:'400',
            fontSize:16,
            lineHeight:24,
            color:'#4E4B66',
            flex:1
        }

    })
    export default styles