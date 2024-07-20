import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export function Divider() {
  return (
    <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
    </View>
  );
}