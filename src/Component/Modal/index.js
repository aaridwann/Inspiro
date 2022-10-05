import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '../../Constant/Color'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ModalComponent({ image, camera, img }) {
    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', zIndex: 10, backgroundColor: Color.whiteTrans }}>
                <Text style={{ fontSize: 40, color: 'white', fontWeight: '500' }}>Add Post</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    {img ?
                        <Image style={{ width: 100, height: 100 }} source={{ uri: img }} /> :
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