import React, {
  useEffect,
  useState,
} from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Skeleton } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { FlashList } from '@shopify/flash-list';
// import {
//   loadNews,
//   refreshNews as refreshNewsAction,
// } from '../../stores/actions';

import BoxContainer from '../../../components/BoxContainer';
import EmptyView from '../../../components/EmptyView';
import Header from "../../../components/Header";
import CardFavorites from "../../../components/CardFavorites";

import styles from './styles';

const FavoritesPokemon = () => {

  const pokemon = useSelector(({ favoriteReducer }) => favoriteReducer.pokemon);
  const isLoading = useSelector(({ favoriteReducer }) => favoriteReducer.isLoading);
  // const isRefreshing = useSelector(({ favoriteReducer }) => favoriteReducer.isRefreshing);

  const keyExtractor = (item) => `${item.id}`;

  // const renderLoader = () => {
  //   if (loading) {
  //     return (
  //       <View style={styles.activity}>
  //         <ActivityIndicator size="large" color="gray" />
  //       </View>
  //     );
  //   }
  //   return <View />;
  // };

  const renderPokemons= ({ item }) => {
    return (
      <View style={styles.listItem}>
        <CardFavorites 
          pokemon={item}
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
        // refreshing={isRefreshing}
        // onRefresh={refreshNews}
        renderItem={renderPokemons}
        // onEndReached={loadMoreNews}
        // onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmptyComponent}
        //ListFooterComponent={renderLoader}
        contentContainerStyle={styles.listContentContainerStyle}
        estimatedItemSize={125}
      />
    </BoxContainer>
  );
};

export default FavoritesPokemon;



