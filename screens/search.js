import React from 'react';
import { StyleSheet, Text, ScrollView, Dimensions, Image, View,TouchableOpacity } from 'react-native';
import Search_Header from "../components/Search_Header";
import { Card,Button,Item,Label,Input } from "native-base";
import axios from "axios";
const { width , height} = Dimensions.get('window')
let baseUrl =`https://knekisan.com/`

export default class Basket extends React.Component {
  constructor(props) {
  super(props);
   
  this.state = {
    products:[]
  };
   }
componentWillMount(){
  this.getProducts();
}
  getProducts = () =>{
    axios.get(`${baseUrl}api/v1/product/getall`).
    then((res)=>{
       var products = res.data.data;
         //    var _id = res.data.data.data;
        this.setState({products})
        // var check = products[0].images[0]
        // console.log(":1:\n\n :2: \n\n"+ JSON.stringify(check).substring(7).slice(0, -1) );
      }).
      catch(e=>{
          Alert.alert('Error : '+ e);
          
      })
    }
    callBackFromChild=(_productList)=>{
        
    }   
  render(){
    let _productList = this.state.products.filter((status)=> status.status === 'Active').map(obj=>
      <TouchableOpacity
      onPress={()=>{
        this.props.navigation.navigate('ProductDescription', {
            itemId: obj._id,
        });
    }}
      >
        <Card style={styles.listItem}>
          <View>
          { obj.images.length >=1 ? ( 
                <Image
                    style={styles.image}
                    source={{uri : `${baseUrl}${(obj.images[0]).substring(7)}`
                        }}
                    /> 
             ) :  (<Image
                    style={styles.image}
                    source={{uri : `${baseUrl}images/uploads/dummy.jpeg`}}  />  )  }
           </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                {obj.name}
              </Text>
              <Text style={styles.infoText}>{obj.price}</Text>
            </View>
          </Card>
       </TouchableOpacity>
      )
    return (
      <View style={{flex:1,backgroundColor:"#D3D3D3"}}>
        <Search_Header navigation={this.props.navigation}/>
        <ScrollView>
          <View style={{alignItems:"center",flex:1}}>
            {_productList}
          </View> 
        </ScrollView>      
      </View>
  );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 20,
    width:width
  },
  contactIcon: {
    width: 60,
    height: 60,
    borderRadius: 100
  },
  infoContainer: {
    flexDirection: "column"
  },
  infoText: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 2
  },

})