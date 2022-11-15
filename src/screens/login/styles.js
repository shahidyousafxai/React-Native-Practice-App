import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'transparent',
  },
  input: {
    display: 'flex',
    width: "50%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth : 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  login:{
    // backgroundColor: "aqua",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginTextView:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  loginText:{
    fontSize: 30,
  },
  inputView:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
