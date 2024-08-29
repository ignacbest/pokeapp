import React from "react";
import {
  View,
  StatusBar,
  Image,
  HStack,
} from "native-base";
import LogoPokemon from "../../../assets/images/logoo.png";

const Header = () => {
  return (
    <View>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <HStack
        bg="red.500"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <View paddingLeft={5}>
            <Image
              source={LogoPokemon}
              alt="logo"
              resizeMode="contain"
              w={70}
              h={50}
            />
          </View>
        </HStack>
        <HStack>
        </HStack>
      </HStack>
    </View>
  );
};

export default Header;