function csvToObject(csv, obj = {}) {
  if (typeof(csv) !== 'string') return {}

  const ary = csv.split(',').map(a => a.trim())
  if (ary.length === 0) return {}

  let tmpObj = obj
  const last = ary.pop()
  ary.forEach((prop, index) => {
     if (ary.length - 1 === index) {
       tmpObj[prop] = last
     } else {
       if (!obj[prop]) {
         obj[prop] = {}
       }
       tmpObj = obj[prop]
     }
  })

  return obj
}

function csvAryToObject(csv) {
  if (!Array.isArray(csv)) return {}
  const obj = {}
  csv.forEach(c => csvToObject(c, obj))
  return obj
}

function toObject(csv) {
  return Array.isArray(csv) ? csvAryToObject(csv) : csvAryToObject([csv])
}

/*
 * @param {array} parents a list of parent path
 * @param {object} obj object to inspect
 * @param {object} ary total path array
 * @return [
 *   { path: "popup.title", value: 'New Item' },
 *   { path: "popup.prompt", value: 'Input name' }
 * ]
 */
function getPropertyPathAry(parents, obj, ary = []) {
  for (p in obj) {
    newp = [...parents, p]
    if (typeof (obj)[p] === 'string') {
      ary.push({ path: newp.join("."), value: obj[p] })
    } else {
      getPropertyPathAry([...newp], obj[p], ary)
    }
  }
  return ary
}

function toCSVString(obj) {
  const pathAry = getPropertyPathAry([], obj)
  return pathAry.map(p => {
    return [...p.path.split('.'), p.value].join(', ')
  })
}

module.exports = {
  toObject,
  toCSVString
}
