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

export const DEFAULT_UNKNOWN_ERROR_MESSAGE = "¡Vaya! Hubo un error. Inténtalo de nuevo";