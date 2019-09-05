interface Json {
  [key: string]: string | undefined;
}

export default (src: Json, dest: Json) => {
  const copy = JSON.parse(JSON.stringify(src));
  const destKeys = new Set(Object.keys(dest));

  for (const srcKey of Object.keys(src)) {
    if (!destKeys.has(srcKey)) {
      delete copy[srcKey];
    }
  }

  return Object.assign(copy, dest);
};
