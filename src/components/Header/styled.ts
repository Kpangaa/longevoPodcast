import {StyleSheet} from 'react-native';
import {primaryBlack} from '../../theme/colors';

export default StyleSheet.create({
  containerSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 24,
    marginHorizontal: 30,
  },
  titleHome: {
    fontFamily: 'Raleway-Medium',
    fontStyle: 'normal',
    fontSize: 40,
    lineHeight: 47,
    fontWeight: '900',
    color: primaryBlack,
  },
});
