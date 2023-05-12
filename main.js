import mapToJson from './ConvertMapToJSON.js'

const sizes = new Map()
sizes.set('XL', 'Extra Large')
sizes.set('M', 'Medium')
sizes.set('S', 'Small')

const jsonMap = mapToJson(sizes)
console.log(jsonMap)