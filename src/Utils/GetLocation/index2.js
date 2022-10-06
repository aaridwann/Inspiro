import Geolocation from "react-native-geolocation-service";
import { PermissionsAndroid } from "react-native";


async function GetLocationService() {

    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: "Get Location Permission",
            message: "Weather Apps needs access to your locations",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
        }
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Access denies')
    }
    Geolocation.getCurrentPosition(
        (position) => {
            return console.log(position);
            //   setPosition({
            //     coords: position.coords,
            //     mocked: position.mocked,
            //     message: "success",
            //   });
        },
        (err) => {
            return console.log(err);
            //   setPosition({
            //     coords: false,
            //     mocked: false,
            //     message: err,
            //   });
        },
        {
            showLocationDialog: true,
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 30000,
        }
    );


}

export default GetLocationService