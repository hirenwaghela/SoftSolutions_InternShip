import React, { Component } from 'react';
import { View,Text,TouchableOpacity, Alert,TextInput,ScrollView } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {Form,Item,Label,Button,Icon, Input,Picker } from "native-base"
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import {MaterialCommunityIcons,AntDesign,Entypo} from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import axios from "axios";
import AwesomeAlert from 'react-native-awesome-alerts';
// import { ScrollView } from 'react-native-gesture-handler';
// import RNFetchBlob from 'react-native-fetch-blob'
// import {  } from "react-native-fetch-blob";
let baseUrl = `https://knekisan.com/`;
// let baseUrl = `http://192.168.29.157:4000/`;
export default class signUp extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
          selected: "Adatiya",
          imageProfile: null,
          imageAadhar: null,
          imagePan: null,
          fullName:"test",
          username:"",
          password:"",
          mNumber:"",
          land:"",
          area:"sq",
          comodity:null,
          accNumber:"",
          ifscCode:"",
          accHolderName:"",
          aadharNumber:"",
          pan:"",
          addressLine1:"",
          addressLine2:"",
          uState:"",
          uCity:"",
          check1:null,
          check2:null,
          check3:null,
          textInput: [],
          inputData: [],
          bankBttn:false,
          showAlert:false,
        };
      }
      componentDidMount() {
        this.getPermissionAsync();
      }
      onValueChange(value) {
        this.setState({
          selected: value,
          image: null,
        });
      }
      onValueChangeArea(value) {
        this.setState({
          area : value
        });
      }
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };    
      _pickImageProfileGallery = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64:true
          });
          if (!result.cancelled) {
            console.log('result  : '+ result.uri);
            
            let newFile = {
              uri : result.uri,
              type:`test/${result.uri.split(".")[1]}`,
              name:`test.${result.uri.split(".")[1]}`
            }

            const data = new FormData();
            data.append('file',newFile)
            data.append('upload_preset','UserProfile')
            data.append("cloud_name","dd0txohwe")
            fetch("https://api.cloudinary.com/v1_1/dd0txohwe/image/upload",{
              method:"POST",
              body:data
            })
            .then(res=>res.json())
            .then(data=>{
              console.log('cloudinary: \n\n\n\n\n\n\n\n\n'+ data.url);
              this.setState({imageProfile: data.url,check1:"check" })
            })
            this.setState({
              showAlert: false
            });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
          this.setState({
            showAlert: false
          });
        }
      };
      _pickImageProfileCamera = async () => {
        try {
          let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64:true
          });
          if (!result.cancelled) {
            console.log('result  : '+ result.uri);
            
            let newFile = {
              uri : result.uri,
              type:`test/${result.uri.split(".")[1]}`,
              name:`test.${result.uri.split(".")[1]}`
            }

            const data = new FormData();
            data.append('file',newFile)
            data.append('upload_preset','UserProfile')
            data.append("cloud_name","dd0txohwe")
            fetch("https://api.cloudinary.com/v1_1/dd0txohwe/image/upload",{
              method:"POST",
              body:data
            })
            .then(res=>res.json())
            .then(data=>{
              console.log('cloudinary: \n\n\n\n\n\n\n\n\n'+ data.url);
              this.setState({imageProfile:data.url,check1:"check"})
            })
            this.setState({
              showAlert: false
            });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
          this.setState({
            showAlert: false
          });
        }
      };

/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////upload image to cloudinary////////////////////////////////////////
      //  handleUpload = (image)=>{
      //   const data = new FormData();
      //   data.append('file',image)
      //   data.append('upload_preset','UserProfile')
      //   data.append("cloud_name","dd0txohwe")
      //   fetch("https://api.cloudinary.com/v1_1/dd0txohwe/image/upload",{
      //     method:"POST",
      //     body:data
      //   })
      //   .then(res=>res.json())
      //   .then(data=>{
      //     console.log('cloudinary: \n\n\n\n\n\n\n\n\n'+ data.url);
      //     this.setState({imageProfile:data.url})
      //   })
      // }
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
    

//user choice to select from gallary or camera
     userChoice =()=>{
      this.setState({
        showAlert: true
      });

    }
      _pickImageAadhar = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64:true
          });
          if (!result.cancelled) {
            console.log('result  : '+ result.uri);
            
            let newFile = {
              uri : result.uri,
              type:`test/${result.uri.split(".")[1]}`,
              name:`test.${result.uri.split(".")[1]}`
            }

            const data = new FormData();
            data.append('file',newFile)
            data.append('upload_preset','UserProfile')
            data.append("cloud_name","dd0txohwe")
            fetch("https://api.cloudinary.com/v1_1/dd0txohwe/image/upload",{
              method:"POST",
              body:data
            })
            .then(res=>res.json())
            .then(data=>{
              console.log('cloudinary: \n\n\n\n\n\n\n\n\n'+ data.url);
              this.setState({ imageAadhar: data.url ,check2:"check" })
            })
          }

          console.log(result);
        } catch (E) {
          console.log(E);
          this.setState({
            showAlert: false
          });
        }
      };
      _pickImagePan = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64:true
          });
          if (!result.cancelled) {
            console.log('result  : '+ result.uri);
            
            let newFile = {
              uri : result.uri,
              type:`test/${result.uri.split(".")[1]}`,
              name:`test.${result.uri.split(".")[1]}`
            }
      
            const data = new FormData();
            data.append('file',newFile)
            data.append('upload_preset','UserProfile')
            data.append("cloud_name","dd0txohwe")
            fetch("https://api.cloudinary.com/v1_1/dd0txohwe/image/upload",{
              method:"POST",
              body:data
            })
            .then(res=>res.json())
            .then(data=>{
              console.log('cloudinary: \n\n\n\n\n\n\n\n\n'+ data.url);
              this.setState({ imagePan: data.url ,check2:"check" })
            })
          }
      
          console.log(result);
        } catch (E) {
          console.log(E);
          this.setState({
            showAlert: false
          });
        }
      }; 
      submitData=(fullName,username,password,mNumber,land,area,comodity,accNumber,ifscCode,accHolderName,aadharNumber,pan,selected,image)=>{
        axios.post(`${baseUrl}api/v1/authentication/register/`,{
          "userType": selected,
          "userName": username,
          "password": password,
          "addressLine1": this.state.addressLine1,
          "addressLine2": this.state.addressLine2,
          "state": this.state.uState,
          "city": this.state.uCity,
          "mobile": mNumber,
          "landArea": land,
          "landAreaType": area,
          "commodity": comodity,
          "bankDetails": {
              "accHolderName":accHolderName,
              "ifscCode":ifscCode,
              "accNumber":accNumber
          },
          "documentsUploaded": [
              this.state.imageProfile,
              this.state.imageAadhar,
              this.state.imagePan
            ],
          "emailNotification": true,
          "pushNotification": true,
          "admin": false
        })
        .then(()=>{
          Alert,alert("User Regestered Sucessfully")
          this.props.nav.navigate("Home")
        })
        .catch((e)=>{
            console.log(e.message);
            Alert.alert("Duplicate registration is not allowed")
        })
      }
      addTextInput = (index) => {
        let textInput = this.state.textInput;

        textInput.push(
          <Item  floatingLabel>
          <Label>Commodity</Label>
          <Input 
           onChangeText={(text) => this.addValues(text, index)}   
          />
          </Item>
        );
        this.setState({ textInput });
      };
    
      //function to remove TextInput dynamically
      removeTextInput = () => {
        let textInput = this.state.textInput;
        let inputData = this.state.inputData;
        textInput.pop();
        inputData.pop();
        this.setState({ textInput, inputData });
      };
    
      //function to add text from TextInputs into single array
      addValues = (text, index) => {
        let dataArray = this.state.inputData;
        let checkBool = false;
        if (dataArray.length !== 0) {
          dataArray.forEach((element) => {
            if (element.index === index) {
              element.text = text;
              checkBool = true;
            }
          });
        }
        if (checkBool) {
          this.setState({
            inputData: dataArray,
          });
        } else {
          dataArray.push({ text: text, index: index });
          this.setState({
            inputData: dataArray,
          });
        }
      };
    
      //function to console the output
      getValues = () => {
        // Alert.alert("check ,me")
        this.setState({
          // comodity:this.state.inputData.map(ob=>ob.text)
          comodity:JSON.stringify(this.state.inputData.map(ob=>ob.text))
        })
        console.log('Data \n\n\n\n\n\n', JSON.stringify(this.state.inputData.map(ob=>ob.text)));
        // alert(JSON.stringify(this.state.inputData))
      };

      checkBank = () =>{
        if(
          this.state.accNumber !== ""&&
          this.state.accHolderName !== ""&&
          this.state.ifscCode !== ""
        ){
          return false
        }
        else{
          return true
        }
      }
      checUser=()=>{
        if(
          this.state.fullName !== "" &&
          this.state.username !== "" &&
          this.state.password !== "" &&
          this.state.mNumber !== "" &&
          this.state.addressLine1 !== "" &&
          this.state.addressLine2 !== "" &&
          this.state.uCity !== "" &&
          this.state.uState
        ){
          return false
        }
        else{
          return true
        }
      }
    render(){
        let { image } = this.state;
        return(
    <ProgressSteps >
        <ProgressStep 
        nextBtnDisabled={this.checUser()}
        label="User">
            <View style={{ backgroundColor:"#fff" }}>
            {/* <Form> */}
           <View style={{flexDirection:"row",justifyContent:"center"}}>
          <View>
           <Text style={{fontSize:18}}>User Type : </Text>
          </View>
          <View style={{marginTop:-25}}>
          <Picker
              mode="dropdown"
              iosHeader="Select User Type"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width:200,marginLeft:5,marginBottom:-30 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Adatiya" value="Adatiya" />
              <Picker.Item label="Brochoure" value="Brochoure" />
              <Picker.Item label="Farmer" value="Farmer" />
            </Picker>
          </View>
           </View>
            {/* <Item style={{marginTop:20}} floatingLabel>
            <Label>Full Name</Label>
            <Input 
            style={{
             
            }}
                value={this.state.fullName}
                autoCorrect={false}
                autoCapitalize="sentences"
                keyboardType="default"
                onChangeText={
                fullName=>this.setState({fullName})
                }
            />
            </Item> */}
           <ScrollView
          style={{ marginBottom:100 }}
           >
            <Item 
            style={{marginTop:10}}
             floatingLabel>
            <Label>User Name</Label>
            <Input 
                value={this.state.username}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={
                username=>this.setState({username})
                }
            />
            </Item>
            <Item 
            style={{marginTop:15}}
             floatingLabel>
            <Label>Password</Label>
            <Input 
                value={this.state.password}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={
                password=>this.setState({password})
                }
            />
            </Item>
            <Item 
            style={{marginTop:15}}
             floatingLabel>
            <Label>Mobile Number</Label>
            <Input 
                value={this.state.mNumber}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                onChangeText={
                mNumber=>this.setState({mNumber})
                }
            />
            </Item>
            <Item 
            style={{marginTop:15}}
             floatingLabel>
            <Label>Address 1</Label>
            <Input 
                value={this.state.addressLine1}
                autoCorrect={false}
                autoCapitalize="sentences"
                keyboardType="default"
                onChangeText={
                addressLine1=>this.setState({addressLine1})
                }
            />
            </Item>
            <Item 
            style={{marginTop:15}}
             floatingLabel>
            <Label>Address 2</Label>
            <Input 
                value={this.state.addressLine2}
                autoCorrect={false}
                autoCapitalize="sentences"
                keyboardType="default"
                onChangeText={
                addressLine2=>this.setState({addressLine2})
                }
            />
            </Item>
            <Item 
            style={{marginTop:15}}
             floatingLabel>
            <Label>City</Label>
            <Input 
                value={this.state.uCity}
                autoCorrect={false}
                autoCapitalize="sentences"
                keyboardType="default"
                onChangeText={
                uCity=>this.setState({uCity})
                }
            />
            </Item>
            <Item 
            style={{marginTop:15}}
             floatingLabel>
            <Label>State</Label>
            <Input 
                value={this.state.uState}
                autoCorrect={false}
                autoCapitalize="sentences"
                keyboardType="default"
                onChangeText={
                uState=>this.setState({uState})
                }
            />
            </Item>
          
           </ScrollView>
          {/* </Form> */}
            </View>
        </ProgressStep>
        <ProgressStep 
        onNext = {this.getValues}
        label="Land">
        <View style={{ backgroundColor:"#fff" }}>
            {/* <Form> */}
            <View style={{flexDirection:"row",flex:3}}>
            <View >
            <Item floatingLabel
            
            style={{width:100,marginLeft:15}}
            >

            <Label>Land</Label>
            <Input 

                value={this.state.land}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={
                land=>this.setState({land})
                }
            />
            </Item>
            </View>
            <View style={{marginLeft:0,flex:1}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width:100 }}
              selectedValue={this.state.area}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="sq" value="sq" />
              <Picker.Item label="acre" value="acre" />
            </Picker>
            </View>
            {/* <View style={{flex:1}}></View> */}
            </View>
            <View>
         
         
         
          <View style={{alignItems:"center"}}>
            <View style={{ margin: 10 }}>
              <Button style={{width:200,justifyContent:"center"}} onPress={() => this.addTextInput(this.state.textInput.length)}>
              <Text style={{color:"#fff"}}>
                Add Commodity
              </Text>
              </Button>
            </View>
            <View style={{ margin: 10}}>
              <Button style={{width:200,justifyContent:"center"}} onPress={() => this.removeTextInput()} >
                <Text style={{color:"#fff"}}>Remove Commodity</Text>
              </Button>
            </View>
          </View>
          {this.state.textInput.map((value) => {
            return value;
          })}
          {/* <Button title="Get Values" onPress={() => this.getValues()} /> */}
        </View>
            {/* <Item  floatingLabel>
            <Label>Commodity</Label>
            <Input 
                value={this.state.comodity}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={
                comodity=>this.setState({comodity})
                }
            />
            </Item> */}
          {/* </Form> */}
            </View>
        </ProgressStep>
        <ProgressStep 
        nextBtnDisabled={this.checkBank()}
        // nextBtnDisabled={this.state.bankBttn}
        label="Bank">
        <View style={{ backgroundColor:"#fff" }}>
            {/* <Form> */}
            <Item floatingLabel>
              <Label>Account Number</Label>
              <Input 
                value={this.state.accNumber}
                  onChangeText={
                      accNumber=>this.setState({accNumber})
                  }
              />
            </Item>
            <Item floatingLabel>
              <Label>IFSC Code</Label>
              <Input 
                value={this.state.ifscCode}
                  onChangeText={
                      ifscCode=>this.setState({ifscCode})
                  }
              />
            </Item>
            <Item floatingLabel>
              <Label>Account Holder Name</Label>
              <Input 
                value={this.state.accHolderName}
                  onChangeText={
                      accHolderName=>this.setState({accHolderName})
                  }
              />
            </Item>
          {/* </Form> */}
            </View>
        </ProgressStep>
        <ProgressStep label="Personal ">
        <View style={{ backgroundColor:"#fff" }}>
            <Form>
            <Item floatingLabel>
              <Label>Aadhar Number</Label>
              <Input 
                  onChangeText={
                      aadharNumber=>this.setState({aadharNumber})
                  }
              />
            </Item>
            <Item floatingLabel>
              <Label>PAN</Label>
              <Input 
                  onChangeText={
                      pan=>this.setState({pan})
                  }
              />
            </Item>
          </Form>
            </View>
        </ProgressStep>
        <ProgressStep label="Upload "
        onSubmit={()=>this.submitData(
            this.state.fullName,
            this.state.username,
            this.state.password,
            this.state.mNumber,
            this.state.land,
            this.state.area,
            this.state.comodity,
            this.state.accNumber,
            this.state.ifscCode,
            this.state.accHolderName,
            this.state.aadharNumber,
            this.state.pan,
            this.state.selected,
            this.state.image
        )}
         >
        <View style={{ backgroundColor:"#fff" }}>
            <Form style={{alignItems:"center",marginTop:20}}>
            <TouchableOpacity onPress={this.userChoice} style={{flexDirection:"row"}}>
            <MaterialCommunityIcons name="face-profile" size={26} color="black" />
                <Text>
                &nbsp;&nbsp;:Upload your photo
                </Text>
                <Text>
                &nbsp;&nbsp;<Entypo name={this.state.check1} size={18} color="green"/>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._pickImageAadhar} style={{flexDirection:"row",marginTop:20}}>
            <AntDesign name="idcard" size={26} color="black" />
                <Text>
                &nbsp;&nbsp;:Upload your Aadhar
                </Text>
                <Text>
                &nbsp;&nbsp;<Entypo name={this.state.check2} size={18} color="green"/>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._pickImagePan} style={{flexDirection:"row",marginTop:20}}>
            <AntDesign name="idcard" size={26} color="black" />
                <Text>
                &nbsp;&nbsp;:Upload your PAN
                </Text>
                <Text>
                &nbsp;&nbsp;<Entypo name={this.state.check3} size={18} color="green"/>
                </Text>
            </TouchableOpacity>
            <AwesomeAlert
                show={this.state.showAlert}
                showProgress={false}
                // title=""
                message="How will you upload the documents?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="From Camera"
                confirmText="From Gallery"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                  this._pickImageProfileCamera()
                }}
                onConfirmPressed={() => {
                  this._pickImageProfileGallery()
                }}
              />
          </Form>

            </View>
        </ProgressStep>
    </ProgressSteps>

        );
    }
}