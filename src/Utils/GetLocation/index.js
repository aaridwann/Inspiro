import * as Location from 'expo-location';


export default async function GetLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
    }
        let location = await Location.getCurrentPositionAsync({})
        console.log(location);
}