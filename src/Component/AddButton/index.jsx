import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useWindowDimensions } from "react-native";


export default function AddComponent({icon="add-circle", size = 60, press }) {
    const {width,height} = useWindowDimensions()
  return (
    <View
      style={{
        bottom:10,
        marginLeft:width/2.35,
        width: size,
        zIndex:20,
        height: size,
        // backgroundColor: "orange",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={press}>
        <Ionicons name={icon} size={size} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}
