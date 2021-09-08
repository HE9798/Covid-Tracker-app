import React, { Component } from 'react'
import styles from './App.module.css'
import { fetchData } from './api'

import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/Country Picker/CountryPicker'
import Prevention from './components/Prevention/Prevention'
import About from './components/About/About'

export default class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })
  }

  render() {

    const { data, country } = this.state

    return (
      <>
        <Navbar />
        <Banner />
        <div id='news' className={styles.container}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <Chart data={data} country={country} />
        </div>
        <Prevention />
        <About />
      </>
    )
  }
}
