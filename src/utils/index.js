import {
  Alert,
} from 'react-native';
import Toast from 'react-native-toast-message';

export const pokemonName = (pokemonName) => {
  if (!pokemonName) return "";
  return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 1025) + 1;
};

export const showToast = (message, status = 'error') => {
  return Toast.show({
    type: status,
    text1: message,
  });
};

export const showError = (error) => {
  const message = error.error_message || error.message || error;
  showToast(message);
};

export function showAlert(
  title = 'POKEAPI',
  message,
  onAcceptPress,
  onCancelPress,
  cancelText = 'Cancelar',
  acceptText = 'Aceptar',
  isCancelable = true,
) {
  return Alert.alert(
    title,
    message,
    [
      {
        text: acceptText,
        onPress: onAcceptPress,
      },
      {
        text: cancelText,
        style: 'cancel',
      },
    ],
    { cancelable: isCancelable },
  );
}

export const DEFAULT_UNKNOWN_ERROR_MESSAGE = "¡Vaya! Hubo un error. Inténtalo de nuevo";
export const ERROR_MESSAGE_SEARCH_POKEMON = "No se encontró ningún Pokémon con ese nombre";
