import React from "react";
import {
  View,
  Box,
  Text,
  Image,
} from "native-base";

import { pokemonName } from '../../utils/index';

const pokemonLogo = require("../../../assets/images/150.png");

const Card = ({ pokemon }) => {
  return (
    <View padding={5}>
      <Box
        rounded="lg"
        backgroundColor="orange.100"
        borderColor="orange.400"
        borderWidth={0.5}
        padding={2}
        flexDirection="row"
      >
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          h={120}
          w={120}
          backgroundColor="orange.400"
          borderRadius={10}
          resizeMode="contain"
          alt="logo"
        />
        <View flex={1} justifyContent="center" marginLeft={3}>
          <Text fontWeight="bold" fontSize={16} textAlign="center">
            {pokemonName(pokemon.name)}
          </Text>
          <View
            flexDirection="row"
            justifyContent="space-between"
            marginTop={5}
            flex={1}
          >
            <View>
              <View flexDirection="row">
                <Text fontWeight="bold" numberOfLines={2}>
                  {`HP: `}
                </Text>
                <Text color="gray.500" numberOfLines={1}>
                  {pokemon.stats[0].base_stat}
                </Text>
              </View>
              <View flexDirection="row">
                <Text fontWeight="bold" numberOfLines={2}>
                  {`Attack: `}
                </Text>
                <Text color="gray.500" numberOfLines={1}>
                  {pokemon.stats[1].base_stat}
                </Text>
              </View>
              <View flexDirection="row">
                <Text fontWeight="bold" numberOfLines={2}>
                  {`Defense: `}
                </Text>
                <Text color="gray.500" numberOfLines={1}>
                  {pokemon.stats[2].base_stat}
                </Text>
              </View>
            </View>
            <View marginLeft={5} flex={1}>
              <View flexDirection="row">
                <Text fontWeight="bold" numberOfLines={2}>
                  {`Ability: `}
                </Text>
                <Text color="gray.500" numberOfLines={1}>
                {pokemonName(pokemon.abilities[0].ability.name)}
                </Text>
              </View>
              <View flexDirection="row">
                <Text fontWeight="bold" numberOfLines={2}>
                  {`Type: `}
                </Text>
                <Text color="gray.500" numberOfLines={1}>
                  {pokemonName(pokemon.types[0].type.name)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Box>
    </View>
  );
};

export default Card;