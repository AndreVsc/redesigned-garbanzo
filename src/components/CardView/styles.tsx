import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  // CardView

  imageContainer: {
    flex:1,
    width:"100%",
    height:"100%",
    overflow:"hidden",
    borderRadius: 8,
  },

  // LogoBox

  logoContainer: {
    alignItems:"center",
    justifyContent:"center",
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  imagemLogo:{
    flex: 1,
    width: "65%",
    resizeMode: "contain",
  },

  // CarDetails

  carBrand: {
    color: "#fff",
    fontWeight:"400",
    fontSize: 18,
    fontStyle:"italic",
  },

  carName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  // CarImage 

  image:{
    flex:1,
    marginBottom:10,
    width:"100%",
    height:"100%",
    resizeMode:"contain",
  },

  // CarBuy

  buyContainer:{
    margin:20,
    padding:5,
    backgroundColor:"#4ac",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:8,
  },

  buyButton:{
    flexDirection:"row",
  },

  buyText:{
    color:"#fff",
    fontWeight:"bold",
    fontStyle:"italic",
  },

  buyIcon:{
    marginRight: 10,
  },

  //  PriceControls

  priceLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
    alignItems: "center",
    marginTop: 10,
  },
  priceLabel: {
    color: "#fff",
    fontSize: 22,
  },

});