import USAFoods from './foods.us.json'
import IndianFoods from './foods.in.json'

const USDAFoods = [...USAFoods, ...IndianFoods]
export {USAFoods, IndianFoods, USDAFoods};