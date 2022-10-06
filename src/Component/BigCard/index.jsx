import { View, Text, useWindowDimensions, Image } from "react-native";
import React from "react";
import Avatar from "../Avatar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../Constant/Color";

export default function CardBigComponent() {
  const { width, height } = useWindowDimensions();
  // console.log(height);
  return (
    <View
      style={{
        marginVertical: 20,
        width: "100%",
        backgroundColor: Color.mainLight,
        height: height / 1.7,
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 20,
        borderRadius: 10,
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
      {/* === top === */}
      <View
        style={{
          width: "100%",
          height: "12%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar size={50} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
              Username
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "400", color: "white" }}>
              2 Hour ago
            </Text>
          </View>
        </View>
        <Ionicons name={"ellipsis-horizontal"} size={20} color={"white"} />
      </View>

      <Text
        style={{
          fontSize: 15,
          marginTop: 10,
          fontWeight: "340",
          color: "white",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      {/* === image === */}
      <View
        style={{
          flex: 1,
          width: "100%",
          marginTop: 15,
          backgroundColor: "white",
        }}
      >
        <Image
          style={{ minWidth: "100%", height: "100%" }}
          source={{
            uri: "https://i.pinimg.com/564x/de/bb/2f/debb2f057c7961ea280e3e541dd5d466.jpg",
          }}
        />
      </View>
    </View>
  );
}
