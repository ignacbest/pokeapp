import React, { useEffect } from "react";
import {
  View,
  Box,
  Text,
  Image,
  Button,
  VStack,
  Skeleton,
  Center,
} from "native-base";
import { useDispatch, useSelector } from 'react-redux';

import Header from "../../../components/Header";

import { loadPokemon } from "../stores/actions";
import { pokemonName, showError } from "../../../utils/index";

const HomeContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const pokemon = useSelector(({ homeReducer }) => homeReducer.pokemon);
  const loading = useSelector(({ homeReducer }) => homeReducer.isLoading);
  console.log(pokemon)

  useEffect(() => {
    dispatch(
      loadPokemon(
        undefined,
        showError,
      ),
    );
  }, [dispatch]);

  const goToFavoritesPokemon = () => {
    navigation.navigate("Favorites");
  };

  const isLoading = () => {
    return (
      <View marginTop={10}>
        <Center w="100%">
          <VStack
            w="90%"
            maxW="400"
            borderWidth="1"
            space={8}
            overflow="hidden"
            rounded="md"
            padding={5}
            _dark={{
              borderColor: "coolGray.500",
            }}
            _light={{
              borderColor: "coolGray.200",
            }}
          >
            <Skeleton h="40" />
            <Skeleton.Text px="4" />
            <View justifyContent="space-between" flexDirection="row">
              <Skeleton h="4" w={20} borderRadius={5} />
              <Skeleton h="4" w={20} borderRadius={5} />
            </View>
            <Skeleton h="4" w={20} borderRadius={5} />
          </VStack>
        </Center>
      </View>
    );
  };

  return (
    <View>
      <Header goToFavoritesPokemon={goToFavoritesPokemon} />
      {loading ? (
        isLoading()
      ) : (
        <View padding={5}>
          <Text fontSize={24} bold>
            {pokemonName(pokemon.name)}
          </Text>
          <Box
            rounded="lg"
            backgroundColor="orange.100"
            borderColor="orange.400"
            borderWidth={0.5}
            padding={2}
          >
            <View alignItems="center">
              <Image
                source={{ uri: pokemon.sprites.front_default }}
                h={220}
                w={320}
                backgroundColor="orange.400"
                borderRadius={10}
                resizeMode="contain"
                alt="logo"
              />
            </View>
            <View
              marginTop={5}
              flexDirection="row"
              justifyContent="space-between"
            >
              <View>
                <Text fontWeight="semibold">
                  HP: {pokemon.stats[0].base_stat}
                </Text>
                <Text fontWeight="semibold">
                  Attack: {pokemon.stats[1].base_stat}
                </Text>
                <Text fontWeight="semibold">
                  Defense: {pokemon.stats[2].base_stat}
                </Text>
              </View>
              <View>
                <Text fontWeight="semibold">
                  Type: {pokemonName(pokemon.types[0].type.name)}
                </Text>
                <Text fontWeight="semibold">
                  Ability: {pokemonName(pokemon.abilities[0].ability.name)}
                </Text>
              </View>
            </View>
          </Box>
        </View>
      )}
      <View alignItems="center" marginTop={10}>
        <Button
          w={150}
          isLoading={loading}
          backgroundColor="orange.400"
          onPress={() => console.log('sortear')}
        >
          SORTEAR
        </Button>
      </View>
    </View>
  );
};

export default HomeContainer;