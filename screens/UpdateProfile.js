import React, { Component } from 'react';
import {Text} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label,Picker,Icon,FooterTab,Button,Footer } from 'native-base';
export default class UpdateProfile extends Component {
  render() {
    return (
      <Container>
        <Content>
        <Picker
              mode="dropdown"
              iosHeader="Select User Type"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width:200,marginLeft:5,marginBottom:-30,marginTop:10 }}
            //   selectedValue={this.state.selected}
            //   onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Adatiya" value="Adatiya" />
              <Picker.Item label="Brochoure" value="Brochoure" />
              <Picker.Item label="Farmer" value="Farmer" />
            </Picker>
          <Form style={{flexDirection:"row",flex:1}}>
            <Item floatingLabel style={{width:150}}>
              <Label>Enter First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{width:150,marginLeft:50}}>
              <Label>Enter Last Name</Label>
              <Input />
            </Item>
          </Form>
          <Form style={{flex:1}}>
            <Item floatingLabel>
              <Label>Mobile Number</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Address 1</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Address 2</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>State</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>City</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Account Holder Name</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Account Number</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>IFSC Code</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full style={{backgroundColor:"#454543"}}>
              <Text style={{color:"#fff"}}>Update</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}