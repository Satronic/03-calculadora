import {useRef, useState} from 'react';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

enum Operador {
  sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operador>();

  const clear = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {

    // El punto solo puede existir una sola vez
    if (numero.includes('.') && numeroTexto === '.') { return; }
    // if (numero.startsWith('0') || numero.startsWith('-0') && !numero.includes('.')) { return; }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // if (!numero.includes('.') && numeroTexto === '0') {
      //   return;
      // }


      if (numeroTexto === '.') {
        setNumero(numero.concat(numeroTexto));
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero.concat(numeroTexto));
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero.concat(numeroTexto));
      }

    } else {
      // setNumero('');
      setNumero(numero.concat(numeroTexto));
    }
  };

  const agregarSigno = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-'.concat(numero));
    }
  };

  const borrarNumero = () => {
    if ((numero.startsWith('-') && numero.length === 2) || numero.length === 1) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, numero.length - 1));
    }
  };

  const cambiarNumero = () => {
    if (numero.endsWith('.')) {
      setNumero(numero.slice(0, -1));
    }
    setNumeroAnterior(numero);
    setNumero('0');
  };

  // Operaciones

  const dividir = () => {
    cambiarNumero();
    ultimaOperacion.current = Operador.dividir;
  };

  const multiplicar = () => {
    cambiarNumero();
    ultimaOperacion.current = Operador.multiplicar;
  };

  const sumar = () => {
    cambiarNumero();
    ultimaOperacion.current = Operador.sumar;
  };

  const restar = () => {
    cambiarNumero();
    ultimaOperacion.current = Operador.restar;
  };

  const calcularResultado = () => {
    const numero1 = Number(numeroAnterior);
    const numero2 = Number(numero);
    let resultado: Float;

    switch (ultimaOperacion.current) {
      case Operador.sumar:
        resultado = numero1 + numero2;
        setNumero(resultado.toString());
        break;

      case Operador.restar:
        resultado = numero1 - numero2;
        setNumero(resultado.toString());
        break;

      case Operador.multiplicar:
        resultado = numero1 * numero2;
        setNumero(resultado.toString());
        break;

      case Operador.dividir:
        resultado = numero1 / numero2;
        setNumero(resultado.toString());
        break;
      default:
        break;

    }
    // setNumero('0');
    setNumeroAnterior('0');
  };

  return {
    numero,
    clear,
    setNumero,
    numeroAnterior,
    setNumeroAnterior,
    agregarSigno,
    armarNumero,
    borrarNumero,
    cambiarNumero,
    dividir,
    multiplicar,
    restar,
    sumar,
    calcularResultado,
  };
};
