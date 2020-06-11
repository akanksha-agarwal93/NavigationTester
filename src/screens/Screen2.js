import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Screen2 = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Screen 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default Screen2;
