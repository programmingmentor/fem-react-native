import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({colorName, hexCode}) => {
  const colorStyle = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={styles.text}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
