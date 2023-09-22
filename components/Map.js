import MapView from 'react-native-maps';


export default function Map() {
    const [markerPosition, setMarkerPosition] = useState(false);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
    }

    let location = await Location.getCurrentPositionAsync({});

    setMarkerPosition({ 
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0002
    });
    setPinnedLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0002
    })
    if(locationPiker == false){
      setLocationPiker(true);
    }
    convertCoordinatesToAddress
    console.log(location)
    };

    return (
      <View>
        <MapView style={styles.map}
        initialRegion={{
            latitude: markerPosition.latitude,
            longitude: markerPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
            <Marker
                draggable
                coordinate={{
                latitude: markerPosition.latitude,
                longitude: markerPosition.longitude,
                }}
                title="repère"
                onDragEnd={(e) => setMarkerRegion(e.nativeEvent.coordinate)}
            />
        </MapView>
      </View>
    );
}