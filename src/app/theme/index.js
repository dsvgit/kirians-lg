import colors from './colors';

// https://github.com/mui-org/material-ui/blob/master/src/styles/getMuiTheme.js
export default {
  appBar: {
    color: colors.lightGray,
    textColor: colors.black,
    height: 45
  },
  raisedButton: {
    primaryColor: colors.main,
    primaryTextColor: colors.white,
    secondaryColor: colors.middleGray,
    secondaryTextColor: colors.white
  },
  tabs: {
    backgroundColor: colors.white,
    textColor: colors.middleGray,
    selectedTextColor: colors.black
  },
  textField: {
    focusColor: colors.main
  },
  toggle: {
    thumbOnColor: colors.white,
    trackOnColor: colors.main
  },
  checkbox: {
    checkedColor: colors.main
  },
};
