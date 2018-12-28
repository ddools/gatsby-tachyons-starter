import React from 'react'
import Helmet from 'react-helmet'
import Navi from '../components/Navi'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }
  }

  render() {
    const siteTitle = 'Gatsby with Tachyons - Page 1'
    const siteDescription = 'A starter repo for Gatsby sites using Tachyons'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <link rel="dns-prefetch preconnect" href="https://ddools.imgix.net" />
        </Helmet>
        <div id="main" className="sans-serif dark-gray">
          <section id="one" className="dt w-100 ph5-l ph4 pb3 center">
            <Navi />

            <h3 className="f3 mt0 tc tl-ns fw5 mb0 pv2 gray">Page 2</h3>
            <p>
              Boursin fondue pepper jack. Squirty cheese st. agur blue cheese
              cheese triangles cauliflower cheese mozzarella swiss mascarpone
              ricotta. Cut the cheese stilton roquefort lancashire paneer
              bocconcini squirty cheese cheese and wine. Who moved my cheese
              mascarpone when the cheese comes out everybody's happy cut the
              cheese stilton roquefort.
            </p>

            <p>
              Swiss who moved my cheese cheesy feet. Cheese and biscuits paneer
              say cheese when the cheese comes out everybody's happy cheesy feet
              camembert de normandie taleggio bavarian bergkase. Fromage frais
              babybel cow red leicester fromage chalk and cheese pepper jack
              camembert de normandie. Melted cheese croque monsieur gouda cheese
              on toast red leicester cheese strings airedale.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
