import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import Header from "../../../components/Header";
import CardFavorites from "../../../components/CardFavorites";

const FavoritesPokemon = () => {

  const pokemon = useSelector(({ favoriteReducer }) => favoriteReducer.pokemon);
console.log('NO HAY ARRAY', pokemon[0].name)
  return (
    <View>
      <Header iconFavorite={false} />
      <CardFavorites />
    </View>
  );
};

export default FavoritesPokemon;