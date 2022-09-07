import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import homeBg from './home_bg.jpg';

// const homeBg = '../assets/images/home_bg.jpg'
const homeBg = '../assets/images/home.gif'



export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image source={require(homeBg)}/> 
      <Text style={styles.title}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
