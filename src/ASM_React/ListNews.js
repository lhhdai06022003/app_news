import { View, Text,FlatList, ToastAndroid, ActivityIndicator ,TouchableOpacity,Image,TextInput,ScrollView} from 'react-native'
import React ,{StyleSheet,useState,useEffect} from 'react'
import ItemListView from './ItemListView'
import AxiosIntance from './ultil/AxiosIntance'
import styles from '../../styles/ASM_styles/ListNew_style'


const ListNews = (props) => {
  const [menu,setMenu] = useState([
    {
      name: 'All'
    },
    {
      name: 'Sports'
    },
    {
      name: 'Politics'
    },
    {
      name: 'Bussiness'
    },
    {
      name: 'Health'
    },
    {
      name: 'Travel'
    },
    {
      name: 'Science'
    },
    {
      name: 'Fashion'
    },
  ])

  const {navigation} = props;
  const [data,setData] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const [searchText, setsearchText] = useState("")

  useEffect(() => {
    const getNews = async () => {
      const response = await AxiosIntance().get("productAPI");
      console.log(response);
      if(response.result == true){
        setData(response.product)
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
    const response = await AxiosIntance().get("/ProductAPI/search/name?keyword=" + searchText)
    console.log(response.product)
    if(response.result == true){
      setData(response.product)
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
     (
      <View style={{height:400,bottom:10}}> 
      <FlatList
        data={data}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({item}) => <ItemListView dulieu={item} navigation={navigation}/>}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      >
      </FlatList>
      </View>
      )
    }
        
   
      
    </View>
  )
}

export default ListNews;









