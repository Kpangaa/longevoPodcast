/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import styled from './styled';
import Header from '../../components/Header';
import Label from '../../components/Label';
import {primaryBlack} from '../../theme/colors';
import icStartHome from '../../assets/icons/icStartHome.svg';
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
import { useSelector } from 'react-redux';
import { RootState } from '../../stateManagement/modules/combineReducers';

export enum List {
  TRENDING = 'Trending',
  FAVORITE = 'Favoritos',
}

function HomeScreen() {
  const sheetRef = React.useRef<BottomSheetBehavior>(null);
  const fall = new Animated.Value(1);
  const [dataTrending, setDataTrending] = useState<PIApiNewTrending[]>([]);
  const [count, setCount] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataEpisode, setDataEpisode] = useState<PIApiEpisodeInfo[]>([]);
  const [dataFeed, setDataFeed] = useState<PIApiNewTrending>();
  const [isShowList, setIsShowList] = useState(List.TRENDING);
  const podcatsFavorite = useSelector((state: RootState) => state.podcats.podcatsArray);

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

  const handleClick = useCallback(() => {
    sheetRef?.current?.snapTo(1);
  }, [sheetRef]);

  const renderContent = () => {
    return (
      <DetailScreen handleClick={handleClick} dataFeed={dataFeed} dataEpisode={dataEpisode}/>
    );
  };

  const loadMoreItem = useCallback(() => {
    setCount(count + 10);
  },[count]);

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
          <Label title="Trending" backgroundColor={primaryBlack} setIsShowList={setIsShowList} />
          <Label
            title="Favoritos"
            textColor={primaryBlack}
            iconLeft
            icon={icStartHome}
            componentRight
            count={podcatsFavorite.length}
            setIsShowList={setIsShowList}
          />
        </View>
        {isShowList === List.TRENDING ?
          <FlatList
            data={dataTrending}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            style={{marginHorizontal: 30}}
            ListFooterComponent={renderLoader}
            ListEmptyComponent={() => {
              return (<View><Text>NO HAY PODCATS</Text></View>);
            }}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
          />
          :
          <FlatList
            data={podcatsFavorite}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            style={{marginHorizontal: 30}}
            ListFooterComponent={renderLoader}
            ListEmptyComponent={() => {
              return (<View><Text>NO HAY PODCATS FAVORITOs</Text></View>);
            }}
          />
      }
      </View>
      <Reproductor />
    </SafeAreaView>
  );
}

export default HomeScreen;
