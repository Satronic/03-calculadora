import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  containerText: {
    backgroundColor: '#eee',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  resultadoPequeño: {
    color: 'rgba(50, 50, 50, 0.5)',
    fontSize: 25,
    textAlign: 'right',
  },
  resultado: {
    color: '#3f3f3f',
    fontSize: 50,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  boton: {
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonTexto: {
    color: 'white',
    fontSize: 32,
  },
});
