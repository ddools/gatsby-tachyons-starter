import React from 'react'

class Sidebar extends React.Component {
  render() {
    return (
      <header id="sidebar">
        <div className="inner">
          <article className="sans-serif">
            <div className="site-sidebar dt w-100 fl w-30-l vh-100-l fixed-l tc white cover">
              <div className="dtc v-mid">
                <div className="tc pv4 pv5-ns">
                  <div className="w-40 center">
                    <svg
                      viewBox="0 0 .984 1.242"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        class="fil0"
                        fill="#fff"
                        d="M.492 0c.27 0 .492.221.492.492v.01c0 .27-.221.491-.492.491A.494.494 0 0 1 0 .501V.492C0 .222.221 0 .492 0zm.036.508C.562.508.588.502.606.49A.083.083 0 0 0 .64.449.315.315 0 0 0 .652.366C.654.323.664.291.682.271.698.25.726.239.766.239v.015C.753.254.743.26.737.27A.17.17 0 0 0 .73.335a.32.32 0 0 1-.015.11.124.124 0 0 1-.061.064.285.285 0 0 1-.126.027v.119c0 .029.002.048.005.056a.04.04 0 0 0 .022.021c.01.006.027.008.05.008v.014H.38V.74A.135.135 0 0 0 .43.733.038.038 0 0 0 .45.713.19.19 0 0 0 .456.655v-.12A.283.283 0 0 1 .331.51.127.127 0 0 1 .27.447.31.31 0 0 1 .253.334.18.18 0 0 0 .247.271C.242.261.233.255.217.254V.239A.15.15 0 0 1 .28.251c.015.008.028.021.037.04.01.019.015.044.016.075a.33.33 0 0 0 .011.082c.006.017.018.03.035.043a.143.143 0 0 0 .078.017V.344A.196.196 0 0 0 .451.288.039.039 0 0 0 .43.267.132.132 0 0 0 .38.259V.245h.225V.26a.135.135 0 0 0-.05.008.038.038 0 0 0-.022.02.194.194 0 0 0-.005.057v.164z"
                      />
                    </svg>
                  </div>
                  <a href="/" className="white link">
                    <h1 className="f4 white-90">Tachyons Gatsby Starter</h1>
                  </a>
                  <a href="/page1" className="white link">
                    <h2 className="f6 fw2 ttu tracked">Page 1</h2>
                  </a>
                  <a href="/page2" className="white link">
                    <h2 className="f6 fw2 ttu tracked">Page 2</h2>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </header>
    )
  }
}

export default Sidebar
