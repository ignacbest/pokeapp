export const pokemonName = (pokemonName) => {
  if (!pokemonName) return "";
  return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 1025) + 1;
};