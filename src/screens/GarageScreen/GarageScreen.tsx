import React from 'react';
import { View, Text } from 'react-native';
import { CardView } from '../../components/CardView';

import { styles } from './GarageStyle';

export function GarageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.camBox}>
          <View style={[styles.triangleCorner, styles.topLeft]}></View>
          <View style={[styles.triangleCorner, styles.topRight]}></View>
          <View style={[styles.triangleCorner, styles.downRight]}></View>
          <View style={[styles.triangleCorner, styles.downLeft]}></View>
          <CardView/>
        </View>
    </View>
  );
}