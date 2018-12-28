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

            <h3 className="f3 mt0 tc tl-ns fw5 mb0 pv2 gray">Page 1</h3>
            <p>
              Mozzarella stilton blue castello. Fromage frais cow taleggio say
              cheese feta cheese on toast melted cheese cheesy grin. Gouda
              danish fontina fromage frais lancashire feta st. agur blue cheese
              pepper jack halloumi. Pecorino fromage frais cheese and wine
              mascarpone smelly cheese pepper jack jarlsberg blue castello.
              Bocconcini hard cheese everyone loves.
            </p>

            <p>
              Fondue goat cheese slices. Ricotta camembert de normandie stinking
              bishop cream cheese melted cheese goat monterey jack cow. Bavarian
              bergkase monterey jack port-salut pepper jack rubber cheese
              manchego everyone loves cheesy grin. Taleggio stilton bavarian
              bergkase melted cheese.
            </p>

            <p>
              Cheeseburger taleggio everyone loves. Feta pecorino st. agur blue
              cheese blue castello port-salut babybel dolcelatte st. agur blue
              cheese. Edam cheeseburger macaroni cheese gouda brie cheese
              strings everyone loves cow. Manchego.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
