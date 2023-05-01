import { StyleSheet } from 'react-native';

export const palette = {
  appBackground: '#001449', // dark blue for app background
  componentBackground: '#012677', // cards
  primary: '#005bc5', // primary button color
  muted: '#cccccc', // muted text
  white: '#fff',
  black: '#000',
};

export const typography = StyleSheet.create({
  title: {
    color: palette.white,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 24,
  },
  heading: {
    color: palette.white,
    fontSize: 21,
    fontWeight: '500',
    marginBottom: 16,
  },
  paragraph: {
    color: palette.white,
    fontSize: 18,
  },
  muted: {
    color: palette.muted,
    fontSize: 16,
  },
});
