import {StyleSheet} from 'react-native';
import {primaryBlack, primaryWhite} from '../../theme/colors';

export default StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 24,
    backgroundColor: primaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderColor: primaryBlack,
    borderWidth: 1.5,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Ubuntu-Regular',
    marginHorizontal: 10,
  },
  count: {
    backgroundColor: primaryBlack,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCount: {
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Ubuntu-Regular',
    marginHorizontal: 10,
    color: primaryWhite,
  },
});
