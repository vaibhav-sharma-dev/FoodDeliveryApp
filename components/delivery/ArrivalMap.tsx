import { View } from "react-native"
import MapView, { Marker } from "react-native-maps"

export default function ArrivalMap() {
    return (
        <View className="flex-1">
            <MapView
                initialRegion={{
                    latitude: 23.35,
                    longitude: 85.33,
                    longitudeDelta: 0.0922,
                    latitudeDelta: 0.0421,
                }}
            >
                <Marker 
                    coordinate={{
                        latitude: 23.38,
                        longitude: 85.23,
                    }}
                    title="MS Dhoni House"
                />
            </MapView>
        </View>
    )
}