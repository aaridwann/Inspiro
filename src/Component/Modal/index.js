import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Color from '../../Constant/Color'
import Ionicons from "react-native-vector-icons/Ionicons";


export default function ModalComponent({ image, camera, img, input,valueInput, submit, deleteImage }) {
    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', zIndex: 10, backgroundColor: Color.whiteTrans }}>
                <Text style={{ fontSize: 40, color: 'white', fontWeight: '500' }}>Add Post</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    {img ?
                        <View style={{ alignItems: 'center', position: 'relative' }}>
                            <TouchableOpacity onPress={deleteImage} style={{ position: 'absolute', right: 0, zIndex: 40 }} ><Ionicons style={{ marginHorizontal: 20 }} name={"close"} size={50} color={"white"} /></TouchableOpacity>
                            <Image style={{ width: 200, height: 300 }} source={{ uri: img }} />
                            <TextInput value={valueInput} onChangeText={(e) => input(e)} style={{ borderRadius: 10, alignItems: 'center', textAlign: 'center', width: 250, height: 100, marginTop: 20, backgroundColor: 'white' }} />
                            <TouchableOpacity onPress={submit} style={{ marginTop: 10, backgroundColor: Color.main, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 10 }}>
                                <Text style={{ fontSize: 20, color: 'white' }}>Post</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <>
                            <TouchableOpacity onPress={image} >
                                <Ionicons style={{ marginHorizontal: 20 }} name={"images"} size={70} color={"white"} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={camera}>
                                <Ionicons style={{ marginHorizontal: 20 }} name={"camera"} size={70} color={"white"} />
                            </TouchableOpacity>
                        </>
                    }
                </View>
            </View>
        </>
    )
}