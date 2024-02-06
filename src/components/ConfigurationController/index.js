import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const toggleShowContent = () => {
        onToggleShowContent(showContent)
      }
      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar(showLeftNavbar)
      }
      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar(showRightNavbar)
      }

      return (
        <div className="nav-cont">
          <h1 className="heading">Layout</h1>
          <ul className="un-order">
            {showContent ? (
              <li className="input-cont" onClick={toggleShowContent}>
                <input
                  type="checkbox"
                  checked
                  className="check-item"
                  id="item1"
                />
                <label htmlFor="item1" className="label">
                  Content
                </label>
              </li>
            ) : (
              <li className="input-cont" onClick={toggleShowContent}>
                <input type="checkbox" className="check-item" id="item1" />
                <label htmlFor="item1" className="label">
                  Content
                </label>
              </li>
            )}
            {showLeftNavbar ? (
              <li className="input-cont" onClick={toggleShowLeftNavbar}>
                <input
                  type="checkbox"
                  checked
                  className="check-item"
                  id="item2"
                />
                <label htmlFor="item2" className="label">
                  Left Navbar
                </label>
              </li>
            ) : (
              <li className="input-cont" onClick={toggleShowLeftNavbar}>
                <input type="checkbox" className="check-item" id="item2" />
                <label htmlFor="item2" className="label">
                  Left Navbar
                </label>
              </li>
            )}
            {showRightNavbar ? (
              <li className="input-cont" onClick={toggleShowRightNavbar}>
                <input
                  type="checkbox"
                  checked
                  className="check-item"
                  id="item3"
                />
                <label htmlFor="item3" className="label">
                  Right Navbar
                </label>
              </li>
            ) : (
              <li className="input-cont" onClick={toggleShowRightNavbar}>
                <input type="checkbox" className="check-item" id="item3" />
                <label htmlFor="item3" className="label">
                  Right Navbar
                </label>
              </li>
            )}
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
