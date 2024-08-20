import React from "react";
import {
  View,
  StatusBar,
  Image,
  HStack,
  IconButton,
  Icon,
} from "native-base";
import { MaterialIcons } from "react-native-vector-icons";
import LogoPokemon from "../../../assets/images/logoo.png";

const Header = ({ goToFavoritesPokemon, iconFavorite = true }) => {
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
          {iconFavorite ? (
            <IconButton
              icon={
                <Icon
                  as={MaterialIcons}
                  name="favorite"
                  onPress={goToFavoritesPokemon}
                  size="sm"
                  color="white"
                />
              }
            />
          ) : (
            <View />
          )}
        </HStack>
      </HStack>
    </View>
  );
};

export default Header;