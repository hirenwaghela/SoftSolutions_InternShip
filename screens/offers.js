import React from 'react';
import { StyleSheet, Text, ScrollView, Dimensions, Image, View, Button, AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { Swiper1, Swiper2, Swiper3 } from "../components/Swiper";
import { Card1, Card2, Card3, Card4, Card5, LabelCard, OffersLargeCards, ScrollHorizontalCardView } from "../components/Card"
import { Header3 } from "../components/Header_components"
const { width, height } = Dimensions.get('window')
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

let baseUrl = `https://knekisan.com/`

// const items=[
//     {id:"3", component:<Swiper3/>},
//     {id:"7", component:<View style={{flexDirection:"row", marginHorizontal:9, marginTop:3}}>
//                         <View>
//                           <OffersLargeCards/><OffersLargeCards/>
//                         </View>
//                         <View>
//                           <OffersLargeCards/><OffersLargeCards/>
//                         </View>
//                       </View>},
//     {id:"8", component:<View style={{flexDirection:"row", marginHorizontal:9, marginTop:3}}>
//                             <View>
//                             <OffersLargeCards/><OffersLargeCards/>
//                             </View>
//                             <View>
//                             <OffersLargeCards/><OffersLargeCards/>
//                             </View>
//                         </View>},
//     {id:"9", component:<View style={{flexDirection:"row", marginHorizontal:9, marginTop:3}}>
//                         <View>
//                           <OffersLargeCards/><OffersLargeCards/>
//                         </View>
//                         <View>
//                           <OffersLargeCards/><OffersLargeCards/>
//                         </View>
//                         <View>
//                           <OffersLargeCards/><OffersLargeCards/>
//                         </View>
//                       </View>},
//     {id:"10", component:<Swiper1/>},
//     {id:"11", component:<Card3/>},
// ]

const items = [
  {
    bori: '4',
    vehicleNo: 'MH42S8956',
    driver: 'Suresh',
    Status: 'Approved',
    weight: '45'
  },
  {
    bori: '4',
    vehicleNo: 'MH42S8956',
    driver: 'Sunil',
    Status: 'Declined',
    weight: '45'
  }, {
    bori: '4',
    vehicleNo: 'MH42S8956',
    driver: 'Ramesh',
    Status: 'Pending',
    weight: '45'
  }, {
    bori: '4',
    vehicleNo: 'MH42S8956',
    driver: 'Rakesh',
    Status: 'Approved',
    weight: '45'
  }, {
    bori: '4',
    vehicleNo: 'MH42S8956',
    driver: 'Akhin',
    Status: 'Pending',
    weight: '45'
  }, {
    bori: '4',
    vehicleNo: 'MH42S8956',
    driver: 'Pritam',
    Status: 'Declined',
    weight: '45'
  },
]

// let approved = items.filter(e => e.Status === "Approved");
// let pending = items.filter(e => e.Status === "Pending");
// let declined = items.filter(e => e.Status === "Declined");

export default class Offers extends React.Component {

  state = {
    loading: true,
    refreshing: false,
    data: [],
    status: '',
    filtered: '',
  }

  async componentDidMount() {
    let userId = await AsyncStorage.getItem('user')
    console.log(userId);
    await this.makeRemoteRequest(userId);
    // console.log(this.state.data);
  }

  makeRemoteRequest = async (userId) => {
    const url = baseUrl + 'api/v1/inquiry/user/' + userId;
    console.log('\n\n', url)

    setTimeout(async () => {
      await fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: [...this.state.data, ...res.data],
            refreshing: false
          })
          console.log(this.state.data);
        })
        .catch(error => {
          this.setState({
            refreshing: false,
          })
        }, 1500);
    })
  }
  // handleRefresh = () => {
  //       this.setState({
  //         refreshing: true
  //       })
  //     }

  // handleLoadMore = () => {

  //     }

  // renderFooter = () => {
  //   if (!this.state.loading) return null

  //   return(
  //     <View style={{
  //       paddingVertical:20,
  //       borderTopWidth:1,
  //       borderTopColor:"#CED0CE"
  //     }}>
  //       <ActivityIndicator animating size="large"/>
  //     </View>
  //   )
  // }




  // renderStatus = (status) => {
  //   if (status == 'Pending') {
  //     return <Text style={{ color: 'gold' }}>Pending</Text>
  //     // return <FontAwesome5 name="stopwatch" size={24} color="gold" />
  //   } else if (status == 'Approved') {
  //     return <Text style={{ color: 'green' }}>Approved</Text>
  //     // return <FontAwesome5 name="check" size={24} color="green" />
  //   } else if (status == 'Declined') {
  //     return <Text style={{ color: 'red' }}>Declined</Text>
  //     // return <Entypo name="circle-with-cross" size={24} color="red" />
  //   }
  // }

  showApproved = () => {
    let approved = this.state.data.filter(e => e.Status === "Approved");
    this.setState({ filtered: approved })
  }

  showPending = () => {
    let pending = this.state.data.filter(e => e.Status === "Pending");
    this.setState({ filtered: pending })
  }

  showDeclined = () => {
    let declined = this.state.data.filter(e => e.Status === "Declined");
    this.setState({ filtered: declined })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#D3D3D3" }} >
        <Header3 navigation={this.props.navigation} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button title="Approved" color='green' onPress={this.showApproved} />
          <Button title='Pending' color='gold' onPress={this.showPending} />
          <Button title='Declined' color='red' onPress={this.showDeclined} />
          <Button title='By Date' color='green' onPress={this.showApproved} />
        </View>
        <FlatList
          keyExtractor={item => item.id}
          // data={this.state.data && this.state.filtered}
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={styles.card}>
              <Text style={styles.subtitle}>Bori: {item.bori}</Text>
              <Text style={styles.subtitle}>Driver : {item.driver}</Text>
              <Text style={styles.subtitle}>Vehicle No: {item.vehicleNo}</Text>
              <Text style={styles.subtitle}>Weight :  {item.weight}</Text>
              {/* <Text style={[styles.subtitle, { position: 'absolute', left: width / 1.45, bottom: 20, fontSize: height / 40 }]}>
                {
                  this.renderStatus(item.Status)
                }
              </Text> */}
            </View>

          }
          //refreshing={this.state.refreshing}
          ListFooterComponent={this.renderFooter}
          // onRefresh={this.handleRefresh}
          // onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: height / 5,
    width: width / 1.1,
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 6
  },
  subtitle: {
    color: '#81C784',
    fontSize: height / 35
  }

})

