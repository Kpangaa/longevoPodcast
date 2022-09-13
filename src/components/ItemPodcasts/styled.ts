import {StyleSheet} from 'react-native';
import {primaryBlack} from '../../theme/colors';

export default StyleSheet.create({
  containerItemPodcasts: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  containerItemText: {
    flex: 1,
    height: '100%',
    textAlign: 'center',
    marginLeft: 9,
  },
  title: {
    fontFamily: 'Raleway-Regular',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 23,
    color: primaryBlack,
  },
  subTitle: {
    fontFamily: 'Ubuntu-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17,
    color: primaryBlack,
    marginVertical: 4,
  },
  textEpisode: {
    fontFamily: 'Ubuntu-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: primaryBlack,
  },
  imageContainer: {
    width: 78,
    height: 82,
    borderRadius: 12,
  },
});
