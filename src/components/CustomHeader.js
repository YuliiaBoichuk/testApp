import React from 'react';
import {Platform, StatusBar, View, StyleSheet} from 'react-native';

const STATUS_BAR_HEIGHT =
  Platform.OS === 'web'
    ? 0
    : Platform.OS === 'android'
    ? StatusBar.currentHeight
    : 20;
const STATUS_BAR_COLOR = '#FFF';

const CustomHeader = ({
  leftComponent,
  centerComponent,
  rightComponent,
  isTransparent,
}) => (
  <View
    style={[
      styles.headerContainer,
      isTransparent ? {backgroundColor: 'rgba(0,0,0,0)'} : null,
    ]}>
    {leftComponent ? (
      <View style={[styles.headerItem, {alignItems: 'flex-start'}]}>
        {leftComponent}
      </View>
    ) : null}
    {centerComponent ? (
      <View style={[styles.headerItem, {alignItems: 'center', flex: 1}]}>
        {centerComponent}
      </View>
    ) : null}
    {rightComponent ? (
      <View style={[styles.headerItem, {alignItems: 'flex-end'}]}>
        {rightComponent}
      </View>
    ) : null}
  </View>
);
export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: STATUS_BAR_COLOR,
    paddingTop: STATUS_BAR_HEIGHT,
    height: 75,
    paddingHorizontal: 20,
  },
  headerItem: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
});
