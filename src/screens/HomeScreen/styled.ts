import {StyleSheet} from 'react-native';
import {primaryWhite} from '../../theme/colors';

export default StyleSheet.create({
  wrapperContainerHome: {
    flex: 1,
    position: 'relative',
    zIndex: 800,
  },
  containerHome: {
    flex: 1,
  },
  containerLabel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 48,
    marginHorizontal: 30,
  },
  container: {
    paddingHorizontal: 10,
    // backgroundColor: 'red',
    height: 400,
    // alignItems: 'center',
    justifyContent: 'space-around',
    // flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 19,
    fontFamily: 'Raleway-Regular',
    fontWeight: '400',
    color: primaryWhite,
    // backgroundColor: 'pink',
    // height: '100%',
    flex: 1,
  },
  body: {
    paddingVertical: 10,
    // marginTop: 165,
    backgroundColor: '#0f0f2da8',
    // opacity: 0.8,
    // backgroundColor: 'blue',
  },
  item: {
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    marginTop: 0,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    // backgroundColor: 'green',
    // top: 70,
  },
  titleAuthor: {
    fontFamily: 'Raleway-Regular',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 26,
    lineHeight: 31,
    textAlign: 'center',
    color: primaryWhite,
  },
});
