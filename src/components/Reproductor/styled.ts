import {StyleSheet} from 'react-native';
import {primaryBlue, primaryWhite} from '../../theme/colors';

export default StyleSheet.create({
  containerReproductor: {
    backgroundColor: primaryBlue,
    height: 116,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 22,
    paddingRight: 20,
    zIndex: 10000,
  },
  progressContainer: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    position: 'relative',
  },
  progressLabelContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  progressLabelTxt: {
    color: primaryWhite,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
  },
  musicControl: {
    backgroundColor: primaryWhite,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePodcasts: {
    color: primaryWhite,
    fontFamily: 'Raleway-Regular',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 5,
    paddingLeft: 10,
  },
  nameAuthor: {
    color: primaryWhite,
    fontFamily: 'Raleway-Regular',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    paddingLeft: 10,
  },
  imageContainer: {
    height: 68,
    width: 68,
  },
});
