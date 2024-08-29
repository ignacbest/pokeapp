import React from "react";
import { View } from "react-native";
import Header from "../../../components/Header";
import CardFavorites from "../../../components/CardFavorites";

const FavoritesPokemon = () => {
  return (
    <View>
      <Header iconFavorite={false} />
      <CardFavorites />
    </View>
  );
};

export default FavoritesPokemon;