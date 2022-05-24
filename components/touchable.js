import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const Touchable = ({ toggle, handleChangeToggle }) => {

  return (
    <TouchableOpacity onPress={handleChangeToggle}>
      <Image
        style={ style.switch }
        source={
          toggle
            ? require('../assets/icons/switch-on.png')
            : require('../assets/icons/switch-off.png')
        }
      />
    </TouchableOpacity>
  );
};

export default Touchable;

const style = StyleSheet.create({
  switch: {
    width: 150,
    height: 150,
  }
});
