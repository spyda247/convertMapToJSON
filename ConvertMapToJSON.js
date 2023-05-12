function mapToJson(map) {
  const mapArr = [...map]
  let key = ''
  let value = ''
  const mapObj = mapArr.reduce((map, data) => {
    key = data[0]
    value = data[1]
    map[key] = value
    return map;

  }, {})

  return JSON.stringify(mapObj)

}

export default mapToJson