function toProperty(csvStr) {
  if (!csvStr) return {}

  const ary = csvStr.split(',').map(a => a.trim())
  if (ary.length === 0) return {}

  let obj = {};
  let tmpObj =  obj;

  const last = ary.pop()
  ary.forEach((prop, index) => {
     if (ary.length - 1 === index) {
       tmpObj[prop] = last
     } else {
       obj[prop] = {}
       tmpObj = obj[prop]
     }
  });
  return obj
}

module.exports = {
  toProperty
}
