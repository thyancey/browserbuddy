export const getUrl = (name: string) => {
  const path = new URL('data', import.meta.url);
  console.log(`getUrl(${name}) => resolved to "${path}", returning "${path}/${name}"`)
  return `${path}/${name}`;
};
