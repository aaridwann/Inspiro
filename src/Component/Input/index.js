import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Constant/Color'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function InputComponent({ width = '100%', value, submit, }) {
    return (
        <View style={{ width: width, height: '70%', flexDirection: 'row', borderRadius: 20, backgroundColor: Color.whiteTrans, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <TouchableOpacity onPress={submit}>
                <Ionicons name={'search-outline'} size={20} color={'white'} />
            </TouchableOpacity>
            <TextInput onChangeText={(e) => value(e)} textAlign='center' textAlignVertical='center' placeholder='search...' style={{ textAlign: 'center', flex: 1, marginHorizontal: 10 }} />
        </View>
    )
}
