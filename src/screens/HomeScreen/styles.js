import {StyleSheet,Dimensions} from 'react-native';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  submainView: {
    flex: 1,
  },
  countryText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  helloText: {
    fontSize: 14,
    fontWeight: '400',
  },
  topPickText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
export default Styles