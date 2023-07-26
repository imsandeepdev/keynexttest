import * as React from 'react';
import {View, Image} from 'react-native';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import R from '../res/R';

const GoogleMapView = props => {
  return (
    <MapView
      style={props.mapStyle}
      region={props.region}
      // showsUserLocation={true}
      initialRegion={props.initialRegion}>
      <Marker
        // draggable
        coordinate={props.region}
        onDragEnd={props.onDragEnd}>
        <View
          style={
            {
              // padding: R.fontSize.Size5,
              // borderWidth:1,
              // borderRadius:R.fontSize.Size6,
              // borderColor:R.colors.textPlaceholder_Color,
              // backgroundColor:R.colors.appColor
            }
          }>
          <Image
            source={R.image.greenMarkerIcon}
            style={{height: R.fontSize.Size40, width: R.fontSize.Size40}}
            resizeMode={'contain'}
          />
        </View>
      </Marker>
    </MapView>
  );
};

export default GoogleMapView;
