import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Screen3 = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Screen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default Screen3;
