import {Component, useState} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'
import ConfigurationContext from './context/ConfigurationContext'

const App = () => {
  const [showContent, setContent] = useState(true)
  const [showLeftNavbar, setLeftNavbar] = useState(true)
  const [showRightNavbar, setRightNavbar] = useState(true)
  const onToggleShowContent = () => {
    setContent(prevState => !prevState)
  }

  const onToggleShowLeftNavbar = () => {
    setLeftNavbar(prevState => !prevState)
  }

  const onToggleShowRightNavbar = () => {
    setRightNavbar(prevState => !prevState)
  }
  return (
    <ConfigurationContext.Provider
      value={{
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      }}
    >
      <div>
        <ConfigurationController />
        <Layout />
      </div>
    </ConfigurationContext.Provider>
  )
}

export default App
