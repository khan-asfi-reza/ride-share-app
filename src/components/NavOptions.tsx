import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import car from "@assets/car.png";
import chopper from "@assets/helicopter.png";
import tw from "@lib/tailwind";
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from "@react-navigation/native";
import "react-native-gesture-handler"

const data = [
    {
        id: "1",
        title: "Get a ride",
        image: car,
        screen: "MapScreen",
    },
    {
        id: "2",
        title: "Get a Chopper",
        image: chopper,
        screen: "MapScreen",
    }
]

function NavOptions({query}) {

    const navigation = useNavigation();

    return (
        <FlatList data={data} horizontal style={tw`w-full`} scrollEnabled={false} keyExtractor={(item) => item.id} renderItem={({item}) => (
            <TouchableOpacity
                disabled={!query}
                onPress={()=>{
                    // @ts-ignore
                    navigation.navigate(item.screen)
                }}
                style={tw.style(`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-36 rounded-md`,
                !query ? tw`opacity-20` : tw`opacity-100`
                )

            }>
                <View>
                    <Image source={item.image} style={{height: 80, width: 80, resizeMode: 'contain'}}/>
                    <Text style={tw`text-medium mt-4`}>
                        {item.title}
                    </Text>
                    <Icon style={tw`bg-black mt-4 w-7 h-7 p-2 text-center rounded-full`} color={"white"} name={"arrowright"}/>
                </View>
            </TouchableOpacity>
        )}/>
    );
}

export default NavOptions;