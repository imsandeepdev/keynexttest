import * as React from 'react';
import {Modal, View, StyleSheet, Text,Dimensions, Image, Pressable, TouchableWithoutFeedback} from 'react-native';
import R from '../res/R';

const screenHeight = Dimensions.get('screen').height

const CustomModal = props => {
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <View style={style.mainModalView}>
        <TouchableWithoutFeedback onPress={props.feedBackOnPress}>
          <View style={{flex: 1}}></View>
        </TouchableWithoutFeedback>
        <View style={style.modalView}>
          <View style={style.topHeaderView}>
            <View style={style.topHeaderLine} />
          </View>
          <View style={{
            position:'absolute',
            top:R.fontSize.Size10,
            right:R.fontSize.Size10
          }}>
            <Pressable
            onPress={props.onPressClose}
            style={{
                padding:2,
                borderWidth:1,
                borderColor:R.colors.placeHolderColor
            }}
            >
              <Image 
              source={R.image.crossIcon} 
              style={{height:R.fontSize.Size15, width:R.fontSize.Size15}}
              resizeMode={'contain'}
              />
            </Pressable>
          </View>
          <View style={style.modelBodyView}>
            <View style={style.topBodyView}>
              <View style={{flex: 1}}>
                <Text style={style.titleText}>{props.modelTitle}</Text>
                <View style={style.topDirectionMainView}>
                  <View style={style.topDirectionView}>
                    <Text style={style.directionText}>{'Directions'}</Text>
                  </View>
                  <View style={style.directionIconView}>
                    <Image
                      source={R.image.backIcon}
                      style={style.directionIcon}
                      resizeMode={'contain'}
                    />
                  </View>
                </View>
              </View>
              <View style={style.directionProfileView}></View>
            </View>
            <View style={style.modalContentView}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={R.image.greyClockIcon}
                    style={style.hourImage}
                    resizeMode={'contain'}
                  />
                  <Text style={style.hourText}>{'Hours'}</Text>
                </View>
                <View style={style.dayView}>
                  <Text style={style.dayTitleText}>{'Monday-Saturday'}</Text>
                  <Text style={style.dayTitleText}>{'08:00 - 22:00'}</Text>
                </View>
                <View style={style.dayView}>
                  <Text style={style.dayTitleText}>{'Sunday'}</Text>
                  <Text style={style.dayTitleText}>{'09:00 - 21:00'}</Text>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={R.image.greyLocationIcon}
                    style={style.hourImage}
                    resizeMode={'contain'}
                  />
                  <Text style={style.hourText}>{'Address'}</Text>
                </View>
                <View style={style.dayView}>
                  <Text style={style.dayTitleText}>
                    {'40 Pall Mall St. JamesLondon Swidd5JQ'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={style.bottomButton}>
            <Pressable style={style.bottomButtonView}>
              <Text
                style={{
                  fontSize: R.fontSize.Size14,
                  fontWeight: '600',
                  color: R.colors.lightWhite,
                }}>
                {'Add New Key'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const style = StyleSheet.create({
  mainModalView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: R.colors.white,
    height: screenHeight / 2.2,
    borderTopRightRadius: R.fontSize.Size10,
    borderTopLeftRadius: R.fontSize.Size10,
  },
  modelBodyView: {
    marginHorizontal: R.fontSize.Size20,
    marginVertical: R.fontSize.Size16,
    flex: 1,
  },
  topHeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: R.fontSize.Size10,
    flexDirection:'row'
  },
  topHeaderLine: {
    width: R.fontSize.Size70,
    height: R.fontSize.Size8,
    backgroundColor: R.colors.placeholderTextColor,
    borderRadius: R.fontSize.Size20,
  },
  topBodyView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: R.fontSize.Size10,
    borderColor: R.colors.lightWhite,
  },
  titleText: {
    fontSize: R.fontSize.Size14,
    color: R.colors.black,
    fontWeight: '600',
  },
  modalContentView: {
    paddingVertical: R.fontSize.Size10,
    borderBottomWidth: 1,
    borderColor:R.colors.lightWhite,
    flex: 1,
    justifyContent: 'space-between',
  },
  modelButtonView: {
    flex: 1,
  },
  hourImage: {
    height: R.fontSize.Size14,
    width: R.fontSize.Size14,
  },
  hourText: {
    fontWeight: '600',
    fontSize: R.fontSize.Size12,
    color: R.colors.placeHolderColor,
    marginHorizontal: R.fontSize.Size6,
  },
  dayView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: R.fontSize.Size4,
  },
  dayTitleText: {
    fontSize: R.fontSize.Size14,
    fontWeight: '500',
    color: R.colors.black,
  },
  topDirectionMainView: {
    flexDirection: 'row',
    marginVertical: R.fontSize.Size5,
    flex: 1,
    alignItems: 'center',
  },
  topDirectionView: {
    padding: R.fontSize.Size5,
    paddingHorizontal: R.fontSize.Size14,
    backgroundColor: R.colors.lightWhite,
    borderRadius: R.fontSize.Size20,
  },
  directionText: {
    fontSize: R.fontSize.Size12,
    fontWeight: '500',
    color: R.colors.black,
  },
  directionIconView: {
    padding: R.fontSize.Size5,
    backgroundColor: R.colors.lightWhite,
    borderRadius: R.fontSize.Size20,
    marginHorizontal: R.fontSize.Size12,
  },
  directionIcon: {
    height: R.fontSize.Size15,
    width: R.fontSize.Size15,
    transform: [{rotate: '120deg'}],
  },
  directionProfileView: {
    height: R.fontSize.Size60,
    width: R.fontSize.Size60,
    borderWidth: 1,
    borderRadius: R.fontSize.Size30,
    borderColor: R.colors.lightWhite,
  },
  bottomButtonView: {
    height: R.fontSize.Size50,
    backgroundColor: R.colors.appColor,
    borderRadius: R.fontSize.Size10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    marginVertical: R.fontSize.Size10,
    marginHorizontal: R.fontSize.Size20,
    marginBottom:R.fontSize.Size20
  },
});
