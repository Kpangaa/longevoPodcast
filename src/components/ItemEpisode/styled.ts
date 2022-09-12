import {StyleSheet} from 'react-native';
import {primaryWhite} from '../../theme/colors';

export default StyleSheet.create({
  wrapperContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerItemEpisode: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingBottom: 12,
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
    color: primaryWhite,
  },
  subTitle: {
    fontFamily: 'Ubuntu-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17,
    color: primaryWhite,
    marginVertical: 4,
  },
  musicControl: {
    backgroundColor: primaryWhite,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
});
