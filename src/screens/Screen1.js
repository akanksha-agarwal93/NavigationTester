import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Screen1 = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Screen 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default Screen1;
