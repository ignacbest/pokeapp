import React, {
  useCallback,
} from 'react';
import { View, Skeleton } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { FlashList } from '@shopify/flash-list';

import BoxContainer from '../../../components/BoxContainer';
import EmptyView from '../../../components/EmptyView';
import Header from "../../../components/Header";
import CardFavorites from "../../../components/CardFavorites";
import { deletePokemon } from '../stores/actions';
import {
  showError,
  showAlert
 } from "../../../utils/index";

import styles from './styles';

const FavoritesPokemon = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector(({ favoriteReducer }) => favoriteReducer.pokemon);
  const isLoading = useSelector(({ favoriteReducer }) => favoriteReducer.isLoading);

  const keyExtractor = (item) => `${item.id}`;

  const deleteFavoritePokemon = useCallback((pokemon) => showAlert(
    'POKEAPI',
    '¿Quieres eliminar este pokemon?',
    () => onDeleteFavoritePokemon(pokemon),
  ), [onDeleteFavoritePokemon]);

  const onDeleteFavoritePokemon = (pokemon) => {
    dispatch(
      deletePokemon(
        pokemon.id
      ),
    );
  };


  const renderPokemons= ({ item }) => {
    return (
      <View style={styles.listItem}>
        <CardFavorites 
          pokemon={item}
          deleteFavoritePokemon={deleteFavoritePokemon}
        />
      </View>
    );
  };

  const renderEmptyComponent = () => {
    if (isLoading) {
      return (
        <View
          paddingVertical={5}
          paddingHorizontal={5}
        >
          <Skeleton
            h={105}
            rounded="xl"
            startColor="light.200"
            endColor="light.50"
          />
          <Skeleton
            marginTop={5}
            h={105}
            rounded="xl"
            startColor="light.200"
            endColor="light.50"
          />
          <Skeleton
            marginTop={5}
            h={105}
            rounded="xl"
            startColor="light.200"
            endColor="light.50"
          />
          <Skeleton
            marginTop={5}
            h={105}
            rounded="xl"
            startColor="light.200"
            endColor="light.50"
          />
        </View>
      );
    }
    return (
      <EmptyView
        title="No hay favoritos"
        note="No tienes pokemones"
      />
    );
  };

  return (
    <BoxContainer>
      <Header iconFavorite={false} />
      <FlashList
        data={pokemon}
        renderItem={renderPokemons}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.listContentContainerStyle}
        estimatedItemSize={125}
      />
    </BoxContainer>
  );
};

export default FavoritesPokemon;



