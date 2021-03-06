import React, { Component } from 'react';
import { View,Text,TouchableOpacity, Alert } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {Form,Item,Label,Button,Icon, Input,Picker ,Spinner} from "native-base"
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import {MaterialCommunityIcons,AntDesign,Entypo} from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import axios from "axios";
import { AsyncStorage } from 'react-native';
let baseUrl = `https://knekisan.com/`;

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          responce: null,
          loginText :   <Text style={{textAlign:"center",color:"#fff"}}>लॉग इन</Text>,
          disableBttn: false,
          loginPressed:false
        };
      }

    loginSubmit = () => {
      this.setState({
        loginText:  <Spinner />,
        disableBttn:true
      })
      axios({
        method: 'POST',
        url: `${baseUrl}api/v1/authentication/login`,
        data: {
          'userName' : this.state.username,
          'password' : this.state.password
        }
      })
      .then  ( respone=>{
        let responce = JSON.stringify(respone.data.token)        
        this.setState({responce})
        // console.log('Sucess :  ::::::::::::::::::::::  \n\n\n\n\n'+ respone.data.id);
        // this.storeData();
        
        //console.log("\n\n\nRes: \n", respone.data.user.documentsUploaded)
        if(respone.data.user.documentsUploaded.length > 0){
          AsyncStorage.setItem( "profile_pic",respone.data.user.documentsUploaded[0])
        }
        

        AsyncStorage.setItem( "user",respone.data.id)
        .then(async()=>{
          AsyncStorage.setItem('username',this.state.username)
          .then(async()=>{
            Alert.alert("आप सफलतापूर्वक लॉग इन हो गए हैं!")
            
            this.setState({
              username:null,
              password:null,
              responce:null
            })
            this.props.nav.navigate("Home")
            this.setState({
              loginText:<Text style={{textAlign:"center",color:"#fff"}}>लॉग इन</Text>,
              disableBttn:false
            })
            // this.props.navigation.goBack();
          // let test= await AsyncStorage.getItem('username')
          // console.log('test :'+JSON.stringify(test));  
          })
          .catch((e)=>{
            console.log('error setting user name : '+e);
          })
        }).
        catch(e=>{
          console.log('error setting user id\n\n\n : '+e);
        })
      }).catch(e=>{
        console.log('error from backend: '+e);
        Alert.alert("प्रमाणिकता मान्य नहीं!")
        this.setState({
          loginText:<Text style={{textAlign:"center",color:"#fff"}}>लॉग इन</Text>,
          disableBttn:false
        })
      })
    }

    render(){
        return(
            <View>
                {/* <Text style={{fontSize:20,marginTop:35,textAlign:"center"}}>Hey,User</Text> */}
                <Form style={{marginTop:100}}> 
             <Item floatingLabel>
                <Label>उपयोगकर्ता नाम</Label>
                 <Input 
                value={this.state.username}
                onChangeText={
                username=>this.setState({username})
                }
               />
            </Item>
            <Item style={{marginTop:25}}
                  floatingLabel>
              <Label>कुंजिका</Label>
                <Input 
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={
                password=>this.setState({password})
                }
            />
            </Item>
            </Form> 
    
            <View style={{alignItems:"center"}}>
            <Button 
            disabled={this.state.disableBttn}
            onPress={()=>this.loginSubmit()}
            style={{width:150,marginTop:45,justifyContent:"center",backgroundColor:"green"}}
            >
                {this.state.loginText}
            </Button>
            </View>
            </View>
        );
    }
}