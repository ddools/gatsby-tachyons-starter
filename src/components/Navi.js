import React from 'react'

class Navi extends React.Component {
  render() {
    return (
      <nav className="pv3 bb b--silver">
        <a
          className="f6 f5-ns fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-gray black"
          href="/"
        >
          Home
        </a>
        <a
          className="f6 f5-ns fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-gray black"
          href="/page1/"
        >
          Page 1
        </a>
        <a
          className="f6 f5-ns fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-gray black"
          href="/page2/"
        >
          Page 2
        </a>
      </nav>
    )
  }
}

export default Navi
