import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginStart:25,
        marginEnd:25,
        flexDirection:'column',
        justifyContent:'flex-start',
        top:24,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:56
    },
    header_icon:{
        width:30,
        height:30,
        borderRadius:6

    },
    haeder_kabar:{
        width:99,
        height:30

    },
    header_icon_chuong:{
        left:7,
        width:18,
        height:21.5,
        top:5.25
    },
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
        paddingHorizontal:10
    },
    search_ic:{

    },
    search_text:{
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:16,
        lineHeight:24,
        color:'#4E4B66'
    }
    // listview:{
    //     height:112,
    //     borderRadius:6,
    //     padding:8,
    //     flexDirection:'row'
    // },
    // listview_image:{
    //     width:96,
    //     height:96,
    //     borderRadius:6,
    // },
    // listview_item:{
    //     marginLeft:4,
    //     height:96
    // },
    // listview_item_tieude:{
    //     fontFamily:'Poppins',
    //     fontWeight:'400',
    //     fontSize:13,
    //     lineHeight:19.5

    // },
    // listview_item_content:{
    //     fontFamily:'Poppins',
    //     fontWeight:'400',
    //     fontSize:16,
    //     lineHeight:24

    // }

})
export default styles