import React from 'react'
import '../assets/scss/main.scss'

import Sidebar from './Sidebar'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Sidebar />
        {children}
      </div>
    )
  }
}

export default Template
