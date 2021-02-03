import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const ProductListCard = ({productItem}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.imagesContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/Product.png')}
            style={styles.defaultImage}
          />
        </View>
        <View style={styles.bage}>
          <Text style={styles.bageText}>חדש</Text>
        </View>
      </View>
      <View style={styles.mainInfo}>
        <View>
          <Text style={styles.name}>{productItem.name.split(' ').reverse().join(' ')}</Text>
        </View>
        <View>
          <Text style={styles.btu}>{productItem.btu}BTU/h</Text>
        </View>
        <View>
          <Text style={styles.price}>
            ₪
            {productItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: '45%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 230,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 55,
    paddingBottom: 30,
  },
  imagesContainer: {
    flex: 1,
    width: 140,
    height: 140,
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  mainInfo: {
    flex: 1,
    height: 60,
    width: 140,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  defaultImage: {
    height: 31,
    width: 112,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 10,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'right',
  },
  btu: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: '#86B4D6',
  },
  bage: {
    flex: 1,
    width: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#86B4D6',
    marginLeft: 5,
    marginBottom: 8,
    borderRadius: 15,
    paddingVertical: 8,
  },
  bageText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
