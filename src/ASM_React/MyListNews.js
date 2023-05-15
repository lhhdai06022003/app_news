import { StyleSheet, Text, View,FlatList, ToastAndroid, ActivityIndicator ,TouchableOpacity,Image,TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import ItemListView from './ItemListView'
import AxiosIntance from './ultil/AxiosIntance'

const MyListNews = (props) => {
    const [data,setData] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const [searchText, setsearchText] = useState("")
    const {navigation} = props;
  
    useEffect(() => {
      const getNews = async () => {
        const response = await AxiosIntance().get("/articles/my-articles");
        console.log(response);
        if(response.error == false){
          setData(response.data)
          setisLoading(false);
        }else{
          ToastAndroid.show("Lấy dữ liệu thấy bại",ToastAndroid.SHORT)
        }
      }
      getNews();
      return () => {
        
      }
    }, [])
    const search =async (searchText) => {
      const response = await AxiosIntance().get("/articles/search?title=" + searchText)
      if(response.error == false){
        setData(response.data)
      }else{
        ToastAndroid.show("Lấy dữ liệu thấy bại",ToastAndroid.SHORT)
      }
    }
    let timeOut = null;
    const countDownSearch = (searchText) =>{
      if(timeOut){
        clearTimeout(timeOut)
      }
      timeOut = setTimeout(() => {
        search(searchText);
      },3000)
    }
  return (
    <View style={styles.container}>
    <View style={styles.title}><Text style={styles.title_text}>Bài viết của tôi</Text></View>
    <View style={styles.search}>
          <TouchableOpacity onPress={search} >
            <Image style={styles.search_ic} source={require('../assets/images/search_ic.png')}/>
          </TouchableOpacity>
          <TextInput placeholder='Search' style={styles.search_text} onChangeText={(text) => countDownSearch(text)} />
        </View>

    {
      isLoading == true ? (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'} color='#ffffff' />
        <Text>Loading....</Text>
      </View>)
      :
     ( <FlatList
        data={data}
        renderItem={({item}) => <ItemListView dulieu={item} navigation={navigation}/>}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
      )
    }
      
    </View>
  )
}

export default MyListNews

const styles = StyleSheet.create({
  container:{
      marginHorizontal:20,
      marginTop:30
  },
   
  title:{
      
      justifyContent:'center',
      alignItems:'center'
  },
  title_text:{
    fontSize:30,
    fontWeight:'bold',
    color:'blue'
  },
    search:{
        flexDirection:"row",
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        paddingHorizontal:10,
        marginTop:30,
        marginVertical:30
        
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
