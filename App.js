import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import Touchable from './components/touchable';

const App = () => {
  const [toggle, setToggle] = useState(true);

  const handleChangeToggle = () => {
    setToggle(oldToggle => !oldToggle);
  }

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <Image
        style={ toggle ? style.lightingOn : style.lightingOff }
        source={
          toggle
            ? require('./assets/icons/eco-light.png')
            : require('./assets/icons/eco-light-off.png')
        }
      />
      <Touchable handleChangeToggle={handleChangeToggle} toggle={toggle} />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  }
});
