import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-cont">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="head">Left Navbar Menu</h1>
              <p className="para">Item1</p>
              <p className="para">Item2</p>
              <p className="para">Item3</p>
              <p className="para">Item4</p>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-cont">
              <h1 className="head">Content</h1>
              <p className="para">Lorem ipsum dolor sit amet ,consecjdfjlafl</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left-navbar">
              <h1 className="head">Right Navbar Menu</h1>
              <p className="para1">Ad 1</p>
              <p className="para1">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
