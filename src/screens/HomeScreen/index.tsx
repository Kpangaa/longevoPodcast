/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import styled from './styled';
import Header from '../../components/Header';
import Label from '../../components/Label';
import {primaryBlack} from '../../theme/colors';
import icStart from '../../assets/icons/icStart.svg';
import ItemPodcasts from '../../components/ItemPodcasts';
import Reproductor from '../../components/Reproductor';
import Animated from 'react-native-reanimated';
import {
  PIApiEpisodeInfo,
  PIApiNewTrending,
} from '../../interfaces/podcasts.interface';
import PodcatsService from '../../services/podcats.services';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import DetailScreen from '../DetailScreen';

function HomeScreen() {
  const sheetRef = React.useRef<BottomSheetBehavior>(null);
  const fall = new Animated.Value(1);
  const [dataTrending, setDataTrending] = useState<PIApiNewTrending[]>([]);
  const [count, setCount] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataEpisode, setDataEpisode] = useState<PIApiEpisodeInfo[]>([]);
  const [dataFeed, setDataFeed] = useState<PIApiNewTrending>();

  const renderItem = (item: PIApiNewTrending, index: number) => {
    return (
      <ItemPodcasts
        key={index}
        sheetRef={sheetRef}
        data={item}
        setDataEpisode={setDataEpisode}
        setDataFeed={setDataFeed}
      />
    );
  };

  const handleClick = () => {
    console.log('Cierra el boton sheet');
    sheetRef?.current?.snapTo(1);
  };

  const renderContent = () => {
    return (
      <DetailScreen handleClick={handleClick} dataFeed={dataFeed} dataEpisode={dataEpisode}/>
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
        setDataTrending([...response?.feeds]);
      }
      setIsLoading(false);
    };
    getData();
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
      <BottomSheetBehavior
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
