export async function getPokemon(n) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
  const data = await response.json();
  return data;
}
