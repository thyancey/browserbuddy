// import PetJSON from './data/pet-manifest.json';

const AssetMap = {
  // PetJSON,
};

// export function getUrl(name: string) {
//   console.log('trying ', name, import.meta.url);
//   return new URL(`./assets/${name}`, import.meta.url).href;
// }

// export const getUrl2 = (name: string) => {
//   const path = new URL('@/assets/icons/', import.meta.url);
//   return `${path}/${name}`;
// };

export const getUrl = (name: string) => {
  const path = new URL('data', import.meta.url);
  console.log(`getUrl(${name}) => resolved to "${path}", returning "${path}/${name}"`)
  return `${path}/${name}`;
};

export default AssetMap;
