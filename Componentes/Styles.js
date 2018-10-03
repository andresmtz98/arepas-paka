import { StyleSheet } from 'react-native';

export const StyleConstants = {
  BASE_COLOR_HEX: '#FFE8A1',
  BASE_COLOR_FONT_HEX: '#404040',
};

export const CommonStyles = StyleSheet.create({
  baseColor: {
    backgroundColor: StyleConstants.BASE_COLOR_HEX,
  },
  baseColor_Font: {
    color: StyleConstants.BASE_COLOR_FONT_HEX,
  },
});