import {Icountry} from './ICountry'

export const getCountries = () :Promise<Icountry[]> => new Promise((resolve, reject) => {
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((result: any[]) => {
            const countries = result.map((data: any) => {
                const {region, subregion, name, population} = data
                return {region, subregion, name: name.common, population} as Icountry
            })
            resolve(countries)
        })
        .catch(reject)
})