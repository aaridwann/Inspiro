import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const LaunchCamera = async () => {
    let options  = {
        mediaType:'photo',
        quality:1
    }
    // launchCamera(options,(res) => {
    //     if(res.didCancel){
    //         return console.log('user Cancel image');
    //     }else if(res.errorCode){
    //         return console.log(res.errorMessage);
    //     }
    //     console.log(res);
    // });

await launchCamera(options).then((data) => console.log(data)).catch((err) => console.log(err))
   
}

export default LaunchCamera