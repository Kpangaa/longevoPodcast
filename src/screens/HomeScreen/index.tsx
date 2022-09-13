/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
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
import {
  PIApiEpisodeInfo,
  PIApiNewTrending,
} from '../../interfaces/podcasts.interface';
import PodcatsService from '../../services/podcats.services';

function HomeScreen() {
  const sheetRef = React.useRef<BottomSheetBehavior>(null);
  const fall = new Animated.Value(1);
  const [dataTrending, setDataTrending] = useState<PIApiNewTrending[]>([]);
  const [count, setCount] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataEpisode, setDataEpisode] = useState<PIApiEpisodeInfo[]>([]);

  const renderItem = (item: PIApiNewTrending, index: number) => {
    return (
      <ItemPodcasts
        key={index}
        sheetRef={sheetRef}
        data={item}
        setDataEpisode={setDataEpisode}
      />
    );
  };
  const renderItemEpisode = (item: PIApiEpisodeInfo, index: number) => {
    return <ItemEpisode key={index} data={item} />;
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
          data={dataEpisode}
          renderItem={({item, index}) => renderItemEpisode(item, index)}
          contentContainerStyle={styled.body}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const loadMoreItem = () => {
    console.log('more item');
    setCount(count + 10);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await PodcatsService.findAll(count);
      if (response?.status === 'true') {
        setDataTrending([...dataTrending, ...response?.feeds]);
      }
      setIsLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const renderLoader = () => {
    return isLoading ? (
      <View style={styled.loaderStyle}>
        <ActivityIndicator size={'large'} color={'#aaa'} />
      </View>
    ) : null;
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
          data={dataTrending}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          style={{marginHorizontal: 30}}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      </View>
      <Reproductor />
    </SafeAreaView>
  );
}

export default HomeScreen;
