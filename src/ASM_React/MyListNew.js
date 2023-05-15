import { View, Text,FlatList, ToastAndroid, ActivityIndicator ,TouchableOpacity,Image,TextInput} from 'react-native'
import React ,{useState,useEffect,StyleSheet} from 'react'
import ItemListView from './ItemListView'
import AxiosIntance from './ultil/AxiosIntance'

const MyListNew = () => {
    const [data,setData] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const [searchText, setsearchText] = useState("")
  
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
    <View>
    <View style={styles.search}>
          <TouchableOpacity onPress={search} >
            <Image style={styles.search_ic} source={require('../assets/images/search_ic.png')}/>
          </TouchableOpacity>
          <TextInput placeholder='Search' style={styles.search_text} onChangeText={(text) => countDownSearch(text)} />
        </View>


        <View style={styles.tieude}>
            <Text style={styles.tieude_left}>Latest</Text>
            <Text style={styles.tieude_right}>See all</Text>
        </View>
        <View style={styles.menu}>
          <FlatList 
          keyExtractor={item => item.name}
          horizontal = {true}
          data={menu}
          renderItem={({item}) =>{  
            return <View>
                  <Text style={styles.menu_text}>{item.name}</Text>
            </View>
          }}
          >

          </FlatList>

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

export default MyListNew

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