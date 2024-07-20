import React,{useEffect, useState} from 'react';
import { View , Text,Button ,TouchableOpacity, Image,}  from 'react-native';
import { Divider } from '../Divider';
import Logo from "../../../assets/logo.png";
import { AntDesign } from "@expo/vector-icons";
import { handleNextItem, handlePreviousItem, loadCarData} from "./actions";

import { styles } from './styles';
import { CAR_ASSETS_BASE_URL } from '../../constants/cat';
import { CarModel } from './props';

export function CardView() {
  const [carData,setCarData] = useState<CarModel | null>(null);

  useEffect(()=>{
    (async () =>{
      await loadCarData(1,setCarData)
    })()
  },[])
  
  //----------------------------------------------------------//
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imagemLogo}source={Logo}/>
    </View>
  );

  //----------------------------------------------------------//
  const renderCarDetails = () => (
    <View style={{alignItems:"center"}}>
      <Text style={styles.carBrand}>Lamborghini {carData?.releaseYear}</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  //----------------------------------------------------------//
  const renderCarImage = () => (
    <Image style={styles.image} source={{uri:`${CAR_ASSETS_BASE_URL}${carData?.id}.png`,}}/>
  )

  //----------------------------------------------------------//
  const renderCarBuy = () =>  (
      <View style={styles.buyContainer}>
        <TouchableOpacity style={styles.buyButton}>
          <AntDesign name="shoppingcart" size={24} color="white" style={styles.buyIcon}/>
          <Text style={styles.buyText}> Buy This </Text>
        </TouchableOpacity>
      </View>
  )

  //----------------------------------------------------------//
  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => handlePreviousItem(carData, setCarData)}
      />
      <Text style={styles.priceLabel}> {carData?.price}</Text>
       <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => handleNextItem(carData, setCarData)}
      />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      {renderCarBuy()}
      {renderPriceControls()}
    </View>
  );
}