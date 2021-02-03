import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomHeader from '../components/CustomHeader';
import BottomBar from '../components/BottomBar';
import ProductListCard from '../components/ProductListCard';
import * as data from '../mock/data';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <CustomHeader
            leftComponent={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Icon name="notifications" size={25} color="#000" />
                  <View style={styles.unreadBage}>
                    <Text style={styles.bageText}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
            centerComponent={
              <Image
                source={require('../assets/images/Logo.png')}
                style={styles.logo}
              />
            }
            rightComponent={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Icon name="chevron-forward-outline" size={25} color="#000" />
                </TouchableOpacity>
              </View>
            }
          />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>םייליע םינגזמ</Text>
            </View>
            <View style={styles.searchContainer}>
              <View style={styles.optionsContainer}>
                <Icon name="options-outline" size={30} color="#CDCDD7" />
                <Text style={styles.optionsTitle}>םדקתמ ןוניס</Text>
              </View>
              <View style={styles.searchSection}>
                <TextInput
                  style={styles.input}
                  placeholder={'חיפוש'}
                  onChangeText={() => {}}
                  underlineColorAndroid="transparent"
                />
                <Icon
                  style={styles.searchIcon}
                  name="ios-search"
                  size={20}
                  color="#CDCDD7"
                />
              </View>
            </View>
          </View>
          <FlatList
            keyExtractor={(item, index) => item._id}
            data={data.success ? data.payload : null}
            renderItem={({item, index}) => (
              <ProductListCard productItem={item} />
            )}
            horizontal={false}
            numColumns={2}
            style={styles.productList}
          />
          <BottomBar />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  productList: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
  },
  sectionContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
    transform: [{rotateY: '180deg'}],
  },
  logo: {
    resizeMode: 'contain',
    width: 45,
    height: 55,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
    borderRadius: 15,
    width: '80%',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#F7F8FA',
    color: '#424242',
    borderRadius: 15,
  },
  optionsTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#979797',
    transform: [{rotateY: '180deg'}],
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  searchContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadBage: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: -1,
    top: -4,
    backgroundColor: '#FF7070',
    width: 12,
    height: 12,
    borderRadius: 25,
  },
  bageText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default Home;
