import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class BottomBar extends Component {
  constructor() {
    super();
    this.state = {
      activeTabIndex: 4,
      iconSize: 25,
      items: [
        {iconName: 'help-outline', title: 'תוריש'},
        {iconName: 'cart-outline', title: 'הלגע'},
        {iconName: 'person-outline', title: 'ליפורפ'},
        {iconName: 'home', title: 'ישאר'},
      ],
    };
  }

  renderTabBar() {
    const {activeTabIndex, iconSize} = this.state;
    return this.state.items.map((item, index) => (
      <TouchableOpacity
        style={styles.tab}
        key={index}
        onPress={() => this.setState({activeTabIndex: index})}>
        <Icon
          name={item.iconName}
          size={iconSize}
          color={activeTabIndex === index ? '#86B4D6' : '#FFFFFF'}
        />
        {item.iconName === 'cart-outline' ? (
          <View style={styles.unreadBage}>
            <Text style={styles.bageText}>11</Text>
          </View>
        ) : null}
        <Text
          style={[
            styles.text,
            {color: activeTabIndex === index ? '#86B4D6' : '#FFFFFF'},
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    ));
  }

  render() {
    return <View style={styles.container}>{this.renderTabBar()}</View>;
  }
}

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 75,
  },
  text: {
    fontSize: 14,
    transform: [{rotateY: '180deg'}],
  },
  tab: {
    flex: 1,
    height: 45,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadBage: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    top: -3,
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
