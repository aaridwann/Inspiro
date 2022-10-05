import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, useWindowDimensions, FlatList, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import InputComponent from '../../Component/Input'
import Color from '../../Constant/Color'
import Avatar from '../../Component/Avatar'
import CardSmallComponent from '../../Component/SmallCard'
import AddComponent from '../../Component/AddButton'
import CardBigComponent from '../../Component/BigCard'
import ModalComponent from '../../Component/Modal'
import openImagePickerAsync from '../../Utils/ImagePicker'
import { Camera } from 'expo-camera'
import StartCamera, { CameraComponent, TakePicture } from '../../Utils/CameraPicker'
const data = [1, 2, 3, 4, 5, 6]

const HomeScreen = () => {
  const [dataPost, setDataPost] = useState({ img: '', caption: '' })
  const { height, width } = useWindowDimensions()
  const [modal, setModal] = useState(false)
  const [startCam, setStartCam] = useState(false)
  const cameraRef = useRef()

  function scrollHandler(e) {
    console.log(e)
  }

  function showModal() {
    if (modal && dataPost.img) (Alert.alert('Cancel post', 'are you sure ?', [
      {
        text: "Cancel",
        onPress: () => console.log('cancel'),
        style: "cancel"
      },
      { text: "OK", onPress: () => (setModal((prev) => prev = !prev), setDataPost(prev => (prev = { img: '', caption: '' }))) }
    ]))
    else {
      setModal((prev) => prev = !prev)
    }
  }

  async function pickImage() {
    const image = await openImagePickerAsync()
    if (image.cancelled) return
    setDataPost((prev) => ({ ...prev, img: image }))
  }

  async function openCamera() {
    await StartCamera(setStartCam)
  }
  async function takePhoto(){
     await TakePicture(cameraRef)
  }

  console.log(startCam);
  console.log(modal);
  console.log(dataPost);

  return (
    <>

      <AddComponent icon={modal ? 'close-circle' : 'add-circle'} press={showModal} />
      {modal && startCam ? <CameraComponent cameraRef={cameraRef} take={takePhoto} cancel={() => setStartCam(false)} /> : modal ? <ModalComponent camera={openCamera} img={dataPost.img.uri} image={pickImage} /> : ''}
      {/* {startCam && <CameraComponent/>} */}

      <ScrollView stickyHeaderIndices={[0]} contentContainerStyle={{ width: '100%', position: 'relative', backgroundColor: Color.main, alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 20 }}>



        {/* === Search bar === */}
        <View style={{ width: '100%', height: width / 6.6, }}>
          <View style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <InputComponent submit={() => console.log('oke')} value={(e) => console.log(e)} width='70%' />
            <Avatar size={45} />
          </View>
        </View>

        {/* === Card top === */}
        <View style={{ marginTop: 10, width: '100%', height: width / 1.3 }} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: 'white', fontWeight: '700' }}>Discover</Text>
            <Text style={{ fontSize: 15, fontWeight: '600', color: 'orange' }}>View All</Text>
          </View>

          <FlatList
            style={{ width: '100%' }}
            contentContainerStyle={{ alignItems: 'center' }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={({ item }) => <CardSmallComponent />}
            keyExtractor={(item, i) => i}
          />


        </View>


        {/* === Card Main === */}
        <FlatList
          style={{ flex: 1, width: '100%' }}
          // contentContainerStyle={{ flex: 1, width: '100%', backgroundColor: 'yellow', alignItems: 'center', justifyContent:'center' }}
          data={data}
          renderItem={({ data }) => (<CardBigComponent />)}
        />
        {/* <View style={{ width: '100%', height: 1000, backgroundColor: 'blue' }} /> */}

      </ScrollView>
    </>
  )
}

export default HomeScreen