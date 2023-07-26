import * as React from 'react';
import {useState, useEffect} from 'react';
import {View,SafeAreaView, Text, Image, Pressable,Dimensions, FlatList,ActivityIndicator, LogBox} from 'react-native'
import Styles from './styles';
import GoogleMapView from '../../Components/GoogleMapView';
import R from '../../res/R';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import CustomSearchBox from '../../Components/CustomSearchBox';
import CustomModal from '../../Components/CustomModal';
import StoryScreen from '../../Components/StoryScreen';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const ASPECT_RATIO = screenWidth / screenHeight;
const LATITUDE_DELTE = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTE / ASPECT_RATIO;

 const INITIAL_POSITION = {
   latitude: 51.5025,
   longitude: -0.1414,
   latitudeDelta: LATITUDE_DELTE,
   longitudeDelta: LONGITUDE_DELTA,
 };

const HomeScreen = (props) => {

    const [loading, setLoading] = useState(false)
    const [keyNestList, setKeyNestList] = useState([])
    const [viewModal, setViewModal] = useState(false)
    const [onSelectMarker, setOnSelectMarker] = useState({})
    const [searchText, setSearchText] = useState('')
    const [filterList, setFilterList] = useState({});


    useEffect(()=>{
      handleLatLongAPI()
    },[props.navigation])

     const handleLatLongAPI =()=>{
      setLoading(true);
      const headerForAuth = {
        'Content-Type': 'application/json; charset=utf-8',
        'api-version': '2.0(int)',
        // Authorization: null,
        'AppVersion': '3.8',
        'UniqueId': '253d70e1011a2a52',
      };
      
      let data = {
        Latitude: 51.5025,
        Longitude: -0.1414,
        Limit: 20,
        Radius: 20,
        SearchText: 'james',
      };
    
      let requestUrl =
        'https://appkeynesttest.azurewebsites.net/api/Store/GetNearestStore';
      const config = {
        method: 'POST',
        headers:headerForAuth,
        body: JSON.stringify(data),
      };
      console.log('Request params ==> ', config, ' ==> ', requestUrl);

      fetch(requestUrl, config)
        .then(response => response.json())
        .then(responseJson => {
          console.log('RESPONSE ON API ==> ', responseJson);
          if(responseJson.ResponseCode == 200)
          {
            setKeyNestList(responseJson.ResponsePacket);
            setLoading(false);

          }
        });
     }

     const handleOnPressMarker = (item) => {
      console.log("ITEM==>",item)
      setOnSelectMarker(item)
      setViewModal(true)
     }
    
     const onHandleSearch = () => {

     }

    
    return (
      <StoryScreen loading={loading}>
        <SafeAreaView style={Styles.mainView}>
          
          <View style={Styles.mainView}>
            <CustomSearchBox
              placeholder={'Address'}
              value={searchText}
              onChangeText={text => setSearchText(text)}
              rightOnPress={() => onHandleSearch()}
            />
            <View style={{flex: 1}}>
              <MapView
                region={INITIAL_POSITION}
                style={{height: '100%', width: '100%'}}>
                {keyNestList.map((item, index) => {
                  return (
                    <Marker
                      onPress={() => handleOnPressMarker(item)}
                      key={index}
                      coordinate={{
                        latitude: parseFloat(item.Latitude),
                        longitude: parseFloat(item.Longitude),
                        latitudeDelta: LATITUDE_DELTE,
                        longitudeDelta: LONGITUDE_DELTA,
                      }}
                      // title={item.StoreId}
                    >
                      <View>
                        <Image
                          source={R.image.greenMarkerIcon}
                          style={{
                            height: R.fontSize.Size40,
                            width: R.fontSize.Size40,
                          }}
                          resizeMode={'contain'}
                        />
                      </View>
                    </Marker>
                  );
                })}
              </MapView>
            </View>
          </View>
        </SafeAreaView>
        <CustomModal
          visible={viewModal}
          onRequestClose={() => setViewModal(false)}
          onPressClose={() => setViewModal(false)}
          feedBackOnPress={() => setViewModal(false)}
          modelTitle={onSelectMarker.StoreName}
        />
      </StoryScreen>
    );
}

export default HomeScreen