import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    backgroundColor: "#1E1E20",
    alignItems: "center",
    justifyContent: "center",
  },

  camBox: {
    position:"relative",
    width:350,
    height:"90%",
    overflow: "hidden",
    borderWidth:2,
    borderColor:"#fff",
    borderRadius: 10,
  },

  triangleCorner: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderTopColor: "#fff",
    borderTopWidth: 20,
    borderRightColor: "transparent",
    borderRightWidth: 20,
  },
  
  topLeft:{
    top:0,
    left: 0,
    transform: [{rotate: "0deg"}]
  },
  
  topRight:{
    top:0,
    right: 0,
    transform: [{rotate: "90deg"}]
  },
  
  downRight:{
    right:0,
    bottom: 0,
    transform: [{rotate: "180deg"}]

  },
  
  downLeft:{
    left:0,
    bottom: 0,
    transform: [{rotate: "270deg"}]

  },

});