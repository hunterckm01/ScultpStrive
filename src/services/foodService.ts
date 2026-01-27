import {USAFoods, IndianFoods} from '@/data'

export async function getFoods(country?: "USA" | "IN"){
    return country === 'USA' ? USAFoods : IndianFoods
}