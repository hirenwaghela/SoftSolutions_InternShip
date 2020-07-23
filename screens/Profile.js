import React, { Component } from 'react';
import { Image,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,List,ListItem } from 'native-base';
import { EvilIcons,Entypo,SimpleLineIcons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';

export default class CardImageExample extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
        username: "",
        ucity:"",
        uState:""
    };
     }
componentWillMount(){
    this._checklogin()
}
_checklogin = async () =>{
    let test= await AsyncStorage.getItem('username')
    console.log('test\n\n\n\n\n\n\n\n\n :'+JSON.stringify(test));
    this.setState({
        username:test
    }) 
}
  render() {
    return (
    <Container>
     <View>
         <Card>
         <CardItem>
            <Body style={{alignItems:"center"}}>
                <Text>
                    My Account
                </Text>
            </Body>
         </CardItem>
         </Card>
     </View>
        <Content style={{maxHeight:200}}>
          <Card >
            <CardItem style={{backgroundColor:"#f37372"}}>
              <Left style={{flex:1}}>
                <Thumbnail source={require('../assets/home-2.png')} />
                <Body>
                  <Text style={{color:"#fff"}}>{this.state.username}</Text>
                  {/* <Text style={{color:"#fff"}} note>tushark39@gmail.com</Text> */}
                  {/* <Text style={{color:"#fff"}} note>7004659787</Text> */}
                </Body>
              </Left>
              <Right style={{flex:1}}>
             <TouchableOpacity
            onPress={()=>this.props.navigation.navigate("UpdateProfile")}
             ><SimpleLineIcons name="pencil" size={24} color="#fff" /></TouchableOpacity>
              </Right>
            </CardItem>
            <CardItem cardBody style={{backgroundColor:"#f37372"}}>
              {/* <Image source={require('../assets/home-2.png')} style={{height: 200, flex: 1}}/> */}
            <View style={{height: 200, flex: 1,marginTop:20}}>
            <CardItem style={{backgroundColor:"#fff"}}>
              <Left>
              <EvilIcons name="location" size={48} color="red" />
                <Body>
                  <Text style={{color:"#000"}}>{this.state.ucity}</Text>
                  <Text style={{color:"#000",marginTop:20}} note>{this.state.uState}</Text>
                </Body>
              </Left>
              <Right>
                <TouchableOpacity style={{borderColor:"red",borderWidth:1,padding:5}}>
                    <Text style={{color:"red"}}>Change</Text>
                </TouchableOpacity>
              </Right>
            </CardItem>
            </View>
            </CardItem>

          </Card>
          
        </Content>
     
        <Content style={{marginTop:-50}}>
          <List>
            <ListItem>
              <Entypo name="back-in-time" size={24} color="black" />
              <TouchableOpacity><Text> &nbsp;My Inquiry</Text></TouchableOpacity>
            </ListItem>
            {/* <ListItem>
            <Left>
              <SimpleLineIcons name="wallet" size={24} color="black" />
              <TouchableOpacity><Text> &nbsp;My Wallet</Text></TouchableOpacity>
            </Left>
            <Right>
                <Text style={{color:"#689f39"}}>Rs 0.0</Text>
            </Right>
            </ListItem> */}
            <ListItem>
              <Entypo name="credit-card" size={24} color="black" />

              <TouchableOpacity><Text> &nbsp;Payment Notifications</Text></TouchableOpacity>
            </ListItem>
            {/* <ListItem>
              <SimpleLineIcons name="bubbles" size={24} color="black" />
              <TouchableOpacity><Text> &nbsp;My Ratings & Reviews</Text></TouchableOpacity>
            </ListItem>
            <ListItem>
              <Entypo name="bell" size={24} color="black" />
              <TouchableOpacity><Text> &nbsp;Notifications</Text></TouchableOpacity>
            </ListItem>
            <ListItem>
              <MaterialCommunityIcons name="wallet-giftcard" size={24} color="black" />
              <TouchableOpacity><Text> &nbsp;My Gift Cards</Text></TouchableOpacity>
            </ListItem>
            <ListItem>
              <SimpleLineIcons name="location-pin" size={24} color="black" />
              <TouchableOpacity><Text> &nbsp;My Delivery Address</Text></TouchableOpacity>
            </ListItem>*/}
            <ListItem>
              <AntDesign name="logout" size={24} color="black" />
              <TouchableOpacity
              onPress={()=>{
                AsyncStorage.removeItem('username').then(()=>this.props.navigation.replace("Home"))
              }}
              ><Text> &nbsp;Logout</Text></TouchableOpacity>
            </ListItem> 
          </List>
        </Content>
      </Container>
 
 );
  }
}