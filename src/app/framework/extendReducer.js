export default function extend (core, exts) {
  return (state, action) => Object.entries(exts)
    .reduce((prev, [key, fx]) => {
      const next = fx(prev[key], action)
      return next === prev[key] ?
        prev :
        { ...prev, [key]: next }
    }, core(state, action))
}
