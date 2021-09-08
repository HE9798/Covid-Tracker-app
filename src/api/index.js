import axios from "axios";

const API_URL = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {

    let changeable_API = API_URL

    if(country) {
        changeable_API = `${API_URL}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeable_API)

        return { confirmed, recovered, deaths, lastUpdate }

    } catch(error) {
        console.log(error.message)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${API_URL}/daily`)
        
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData

    } catch(error) {
        console.log(error.message)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${API_URL}/countries`)

        return countries.map((country) => country.name)

    } catch(error) {
        console.log(error.message)
    }
}