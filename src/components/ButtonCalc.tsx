import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface BotonCalcProps {
  text: string;
  color?: string; // ? indica que la propiedad es opcional
  tamaño?: '1x' | '2x';
  action: (numeroText: string) => void
}

const colors = {
  white: 'white',
  black: 'black',
};

const tamaños = {
  '1x': 70,
  '2x': 155,
};

export const ButtonCalc = ({ text, color = '#2b2b2b', tamaño = '1x', action}: BotonCalcProps) => {
  return (
    <TouchableOpacity
      onPress={() => action(text)}
    >
      <View style={{
      ...styles.boton,
      backgroundColor: color,
      width: (tamaño === '1x') ? tamaños['1x'] : tamaños['2x'],
      }}>
        <Text style={{
          ...styles.botonTexto,
          color: (color === '#9b9b9b') ? colors.black : colors.white,
        }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
