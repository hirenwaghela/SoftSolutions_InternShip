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
              <Picker.Item label="किसान" value="Farmer" />
              <Picker.Item label="Adatiya" value="Adatiya" />
              <Picker.Item label="दलाल" value="Broker" />
              
            </Picker>
          <Form style={{flexDirection:"row",flex:1}}>
            <Item floatingLabel style={{width:150}}>
              <Label>पहला नाम दर्ज करें</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{width:150,marginLeft:50}}>
              <Label>अंतिम नाम दर्ज करो</Label>
              <Input />
            </Item>
          </Form>
          <Form style={{flex:1}}>
            <Item floatingLabel>
              <Label>मोबाइल नंबर</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>पता 1</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>पता 2</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>राज्य</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>शहर</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>बैंक का नाम</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>खाताधारक का नाम</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>खाता संख्या</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>IFSC कोड</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full style={{backgroundColor:"#454543"}}>
              <Text style={{color:"#fff"}}>अपडेट करें</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}