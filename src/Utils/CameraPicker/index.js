import { Camera } from 'expo-camera'
import { Text, TouchableOpacity } from 'react-native'
import Color from '../../Constant/Color'

const StartCamera = async (setStartCam) => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
        // do something
        return setStartCam(true)
    } else {
        Alert.alert("Access denied")
    }
}

export const TakePicture = async (camera) => {
    if (!camera) return
    try {
        const photo = await Camera.takePictureAsync()
        return console.log(photo);
    } catch (error) {
        console.log(error);
    }
}

export const CameraComponent = ({ cancel, take, cameraRef }) => {
    return (
        <Camera
            ref={cameraRef}
            style={{ height: 400, width: '100%', alignItems: 'center', justifyContent: 'flex-end', padding: 20 }} >
            <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: Color.whiteTrans }} onPress={take} />

            <TouchableOpacity onPress={cancel}>
                <Text style={{ alignSelf: 'flex-end', borderRadius: 10, backgroundColor: Color.whiteTrans, paddingHorizontal: 20, color: 'white', fontSize: 25 }}>Cancel</Text>
            </TouchableOpacity>
        </Camera>
    )
}



export default StartCamera