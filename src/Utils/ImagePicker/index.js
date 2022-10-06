import * as ImagePicker from 'expo-image-picker';

let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    return pickerResult
}

export default openImagePickerAsync