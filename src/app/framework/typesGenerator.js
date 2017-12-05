export function generate({ prefix, types, separator=':' }) {
  const generated = [];

  types.forEach((type) => {
    generated[type] = `${prefix}${separator}${type}`;
  });

  return generated;
}
