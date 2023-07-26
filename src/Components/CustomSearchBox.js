import * as React from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';
import R from '../res/R';

const CustomSearchBox = React.forwardRef((props, ref) => {
  return (
    <View
      style={{
        flex: props.flex,
        height: R.fontSize.Size40,
        flexDirection: 'row',
        marginHorizontal: R.fontSize.Size10,
        marginVertical: R.fontSize.Size10,
      }}>
      <Pressable
        onPress={props.leftOnPress}
        style={{
          height: R.fontSize.Size40,
          width: R.fontSize.Size50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={R.image.greenLocation}
          style={{height: R.fontSize.Size30, width: R.fontSize.Size30}}
          resizeMode={'contain'}
        />
      </Pressable>
      <View
        style={{
          flex: 1,
          height: R.fontSize.Size40,
          borderRadius: 10,
          flexDirection: 'row',
          marginHorizontal: R.fontSize.Size5,
          backgroundColor: R.colors.lightWhite,
        }}>
        <View
          style={{
            height: R.fontSize.Size40,
            width: R.fontSize.Size40,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 6,
          }}>
          <Image
            source={R.image.searchIcon}
            resizeMode={'cover'}
            style={{height: 20, width: 20}}
          />
        </View>

        <TextInput
          style={style.textInputStyle}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          value={props.value}
        />
      </View>
      <Pressable
        onPress={props.rightOnPress}
        style={{
          height: R.fontSize.Size40,
          width: R.fontSize.Size50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={R.image.planeIcon}
          style={{height: R.fontSize.Size30, width: R.fontSize.Size30}}
          resizeMode={'contain'}
        />
      </Pressable>
    </View>
  );
});
export default CustomSearchBox;

const style = StyleSheet.create({
  textInputStyle: {
    
    height: R.fontSize.Size40,
    fontWeight: '500',
    flex: 1,
  },
});
