import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

// enum Operador {
//   sumar, restar, multiplicar, dividir
// }

export const CalculadoraScreen = () => {

  const {
    numeroAnterior,
    numero,
    clear,
    agregarSigno,
    borrarNumero,
    dividir,
    armarNumero,
    multiplicar,
    restar,
    sumar,
    calcularResultado,
  } = useCalculadora();

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>
        <Text style={styles.resultado}>{numero}</Text>
      </View>

      <View style={styles.fila}>
        <ButtonCalc text="C" color="#9b9b9b" action={clear} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={agregarSigno} />
        <ButtonCalc text="del" color="#9b9b9b" action={borrarNumero} />
        <ButtonCalc text="/" color="#ff9427" action={dividir} />
      </View>

      <View style={styles.fila}>
        <ButtonCalc text="7" action={armarNumero} />
        <ButtonCalc text="8" action={armarNumero} />
        <ButtonCalc text="9" action={armarNumero} />
        <ButtonCalc text="x" color="#ff9427" action={multiplicar} />
      </View>

      <View style={styles.fila}>
        <ButtonCalc text="4" action={armarNumero} />
        <ButtonCalc text="5" action={armarNumero} />
        <ButtonCalc text="6" action={armarNumero} />
        <ButtonCalc text="-" color="#ff9427" action={restar} />
      </View>

      <View style={styles.fila}>
        <ButtonCalc text="1" action={armarNumero} />
        <ButtonCalc text="2" action={armarNumero} />
        <ButtonCalc text="3" action={armarNumero} />
        <ButtonCalc text="+" color="#ff9427" action={sumar} />
      </View>

      <View style={styles.fila}>
        <ButtonCalc text="0" tamaño="2x" action={armarNumero} />
        <ButtonCalc text="." action={armarNumero} />
        <ButtonCalc text="=" color="#ff9427" action={calcularResultado} />
      </View>
    </View>
  );
};
