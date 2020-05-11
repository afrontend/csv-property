const G = {
  delimiter: ';'
}

function csvToObject(csv, obj = {}) {
  if (typeof(csv) !== 'string') return {}

  const ary = csv.split(G.delimiter).map(a => a.trim())
  if (ary.length <  2) return obj

  let tmp = obj
  let last = ary.pop()
  let length = ary.length
  ary.forEach((prop, index) => {
    if (index === length - 1) {
      tmp[prop] = last
    } else {
      if (!tmp[prop]) {
        tmp[prop] = {}
      }
      tmp = tmp[prop]
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

function toObject(csv, delimiter = ',') {
  G.delimiter = delimiter;
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
      ary.push({ path: newp.join('.'), value: obj[p] })
    } else {
      getPropertyPathAry([...newp], obj[p], ary)
    }
  }
  return ary
}

function toCSVString(obj, delimiter = ',') {
  G.delimiter = delimiter
  const pathAry = getPropertyPathAry([], obj)
  return pathAry.map(p => {
    return [...p.path.split('.'), p.value].join(G.delimiter + ' ')
  })
}

module.exports = {
  toObject,
  toCSVString
}
