import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, useWindowDimensions, FlatList, Alert } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
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
import axios from 'axios'
import BASE_URL from '../../Constant/BaseUrl'
import { MainContext } from '../../Context/MainContext'
import { Type_Reducer } from '../../Reducer/HomeReducer'
import LaunchCamera from '../../Utils/Camera'
const data = [1, 2, 3, 4, 5, 6]

const HomeScreen = () => {
  const cameraRef = useRef()
  const { valueContext, dispatch } = useContext(MainContext)
  const [dataPost, setDataPost] = useState({ img: '', caption: '' })
  const { height, width } = useWindowDimensions()
  const [modal, setModal] = useState(false)
  const [startCam, setStartCam] = useState(false)
  console.log(valueContext)

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
    await LaunchCamera()
    // console.log('okee');
    // await StartCamera(setStartCam)
  }
  async function takePhoto() {
    // const photo = await TakePicture(cameraRef)
    // console.log(photo);
  }

  async function submit() {
    dispatch({ type: Type_Reducer.startFetch })
    try {
      const response = await axios.post(`${BASE_URL}/users`, dataPost)
      dispatch({ type: Type_Reducer.doneFetch, payload: dataPost })
      setModal(false)
    } catch (error) {
      alert(error)
      dispatch({type:Type_Reducer.errorFetch, payload:error})
    }
  }

  function deleteImg() {
    setDataPost((prev) => ({ ...prev, img: "" }))
  }

  return (
    <>

      <AddComponent icon={modal ? 'close-circle' : 'add-circle'} press={showModal} />
      {modal && startCam ? <CameraComponent cameraRef={cameraRef} take={takePhoto} cancel={() => setStartCam(false)} /> :
        modal ?
          <ModalComponent
            input={(e) => setDataPost(prev => ({ ...prev, caption: e }))}
            submit={submit}
            camera={openCamera}
            img={dataPost.img.uri}
            image={pickImage}
            deleteImage={deleteImg}
            valueInput={dataPost.caption}
          />
          : ''}
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
        <View style={{ width: '100%' }} >
          {data.map((data, i) => (
            <View key={i}>
              <CardBigComponent />
            </View>
          ))}
        </View>

      </ScrollView>
    </>
  )
}

export default HomeScreen