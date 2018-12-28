import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Tachyons Gatsby starter'
    const siteDescription = 'starter gatsby using tachyosn CSS system'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main" className="sans-serif gray">
          <section id="first" className="dt w-100 ph5-l ph4 pv3 center">
            <div className=" w-90-l w-100 f5 lh-copy ">
              <h3 className="f3 tc tl-ns mt0 fw5 mb0 gray">
                Welcome to the Tachyons Gatsby starter
              </h3>
              <p className="mb0">
                Red leicester emmental cheese slices. Manchego goat jarlsberg
                st. agur blue cheese cheese slices cheese and wine pecorino the
                big cheese. Fondue cut the cheese when the cheese comes out
                everybody's happy the big cheese cream cheese parmesan blue
                castello camembert de normandie. Fromage frais cauliflower
                cheese cheese and wine.
              </p>
              <h4>Check out the following for more details</h4>
              <p className="mb0">
                <ul className="list">
                  <li>
                    <a className="link dark-gray" href="https://tachyons.io">
                      tachyons.io
                    </a>
                  </li>

                  <li>
                    <a
                      className="link dark-gray"
                      href="https://tachyons-tldr.now.sh"
                    >
                      tachyons tldr
                    </a>
                  </li>
                  <li>
                    <a
                      className="link dark-gray"
                      href="https://www.gatsbyjs.org/"
                    >
                      https://www.gatsbyjs.org/
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
