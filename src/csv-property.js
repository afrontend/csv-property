function csvToObject(csv, obj = {}) {
  if (typeof(csv) !== 'string') return {}

  const ary = csv.split(',').map(a => a.trim())
  if (ary.length === 0) return {}

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

function csvAryToObject(csv) {
  if (!Array.isArray(csv)) return {}

  let obj = {}
  csv.forEach((c) => {
    csvToObject(c, obj)
  })

  return obj
}

function toObject(csv) {
  if (Array.isArray(csv)) {
    return csvAryToObject(csv)
  } else {
    return csvToObject(csv)
  }
}

module.exports = {
  toObject
}

