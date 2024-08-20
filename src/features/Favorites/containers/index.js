import React from "react";
import { View } from "react-native";
import Header from "../../../components/Header";
import Card from "../../../components/Card";

const FavoritesPokemon = () => {
  return (
    <View>
      <Header iconFavorite={false} />
      <Card />
    </View>
  );
};

export default FavoritesPokemon;