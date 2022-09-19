/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {primaryBlue, primaryWhite} from '../../theme/colors';

export default StyleSheet.create({
  wrapperContainerDetail: {
    backgroundColor: primaryBlue,
    opacity: 0.93,
    height: 615,
    zIndex: 9999,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 10,
    // backgroundColor: 'red',
    marginBottom: 10,
    // height: 400,
    // alignItems: 'center',
    justifyContent: 'space-around',
    // flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    // backgroundColor: 'green',
    // top: 70,
  },
  iconLeft: {
    bottom: 10,
  },
  wrapperImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleAuthor: {
    fontFamily: 'Raleway-Regular',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 26,
    lineHeight: 31,
    textAlign: 'center',
    color: primaryWhite,
    paddingVertical: 4,
    // backgroundColor: 'pink',
  },
  wrapperDescription: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    bottom: 15,
    paddingTop: 5,
    marginBottom: -10,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 19,
    fontFamily: 'Raleway-Regular',
    fontWeight: '400',
    color: primaryWhite,
  },
  episodeText: {
    color: primaryWhite,
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 15,
  },
  loaderStyle: {
    marginVertical: 12,
    alignItems: 'center',
  },
  body: {
    paddingVertical: 10,
    marginHorizontal: 25,
  },
});
