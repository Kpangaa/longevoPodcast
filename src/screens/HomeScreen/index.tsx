/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styled from './styled';
import Header from '../../components/Header';
import Label from '../../components/Label';
import {primaryBlack, primaryBlue, primaryWhite} from '../../theme/colors';
import icStart from '../../assets/icons/icStart.svg';
import ItemPodcasts from '../../components/ItemPodcasts';
import Reproductor from '../../components/Reproductor';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from '../../components/Icon';
import {IconSize} from '../../components/Icon/constants';
import Animated from 'react-native-reanimated';
import icStartEmpty from '../../assets/icons/icStartEmpty.svg';
import icLine from '../../assets/icons/icLine.svg';
import icClose from '../../assets/icons/icClose.svg';
import imgDetalle from '../../assets/icons/imgDetalle.png';
import ItemEpisode from '../../components/ItemEpisode';

function HomeScreen() {
  const sheetRef = React.useRef<BottomSheetBehavior>(null);
  const fall = new Animated.Value(1);
  const renderItem = () => {
    return <ItemPodcasts sheetRef={sheetRef} />;
  };
  const renderItemEpisode = () => {
    return <ItemEpisode />;
  };
  const handleClick = () => {
    console.log('Cierra el boton sheet');
    sheetRef?.current?.snapTo(1);
  };

  const renderContent = () => {
    return (
      <View
        style={{
          backgroundColor: primaryBlue,
          opacity: 0.93,
          // height: 615,
          zIndex: 9999,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'relative',
        }}>
        <View style={styled.container}>
          <View style={styled.containerHeader}>
            <TouchableOpacity
              onPress={() => console.log(' FAVORITOS')}
              style={{}}>
              <Icon source={icStartEmpty} size={IconSize.REGULAR} />
            </TouchableOpacity>
            <View style={{bottom: 10}}>
              <Icon source={icLine} size={IconSize.LARGE} />
            </View>
            <TouchableOpacity onPress={handleClick} style={{}}>
              <Icon source={icClose} size={IconSize.XSMALL} />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={imgDetalle}
              style={{
                height: 160,
                width: 160,
              }}
            />
            <Text style={styled.titleAuthor}>Penang Hokkien</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 25,
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
              bottom: 15,
              paddingTop: 5,
              marginBottom: -10,
            }}>
            <Text style={styled.subtitle}>
              Simple header with FlatList Simple header with FlatList Simple
              header with FlatList Simple header with FlatList Simple header
              with FlatList Simple header with FlatList
            </Text>
          </View>
          <Text
            style={{
              color: primaryWhite,
              fontSize: 20,
              fontWeight: '700',
              paddingLeft: 15,
            }}>
            47 episodios
          </Text>
        </View>
        <FlatList
          data={new Array(50).fill('')}
          renderItem={renderItemEpisode}
          contentContainerStyle={styled.body}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styled.wrapperContainerHome}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[730, 0]}
        initialSnap={1}
        renderContent={renderContent}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
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
