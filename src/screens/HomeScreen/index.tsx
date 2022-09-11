/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import styled from './styled';
import Header from '../../components/Header';
import Label from '../../components/Label';
import {primaryBlack} from '../../theme/colors';
import icStart from '../../assets/icons/icStart.svg';
import ItemPodcasts from '../../components/ItemPodcasts';
import Reproductor from '../../components/Reproductor';

function HomeScreen() {
  const renderItem = () => {
    return <ItemPodcasts />;
  };
  return (
    <SafeAreaView style={styled.wrapperContainerHome}>
      <View style={styled.containerHome}>
        <Header />
        <View style={styled.containerLabel}>
          <Label title="Trending" backgroundColor={primaryBlack} />
          <Label
            title="Favoritos"
            textColor={primaryBlack}
            iconLeft
            icon={icStart}
            componentRight
            count={12}
          />
        </View>
        <FlatList
          data={new Array(50).fill('')}
          renderItem={renderItem}
          keyExtractor={(i, a) => a.toString()}
          style={{marginHorizontal: 30}}
        />
      </View>
      <Reproductor />
    </SafeAreaView>
  );
}

export default HomeScreen;
