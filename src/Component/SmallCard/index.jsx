import { View, Text, Image } from "react-native";
import React from "react";
import Avatar from "../Avatar";

export default function CardSmallComponent() {
  return (
    <View
      style={{
        position: "relative",
        overflow: "hidden",
        width: 170,
        borderRadius: 20,
        height: 200,
        marginHorizontal: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
      }}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: "https://i.pinimg.com/736x/54/ca/41/54ca4136f0d6d96934420845034b317e.jpg",
        }}
      />
      <View
        style={{
          width: "100%",
          height: 30,
          position: "absolute",
          bottom: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar />
        <Text style={{ marginHorizontal: 10, color: "white" }}>Your Name</Text>
      </View>
    </View>
  );
}
