import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

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
      const onToggleShowContentValue = () => {
        onToggleShowContent()
      }

      const onToggleShowLeftNavbarValue = () => {
        onToggleShowLeftNavbar()
      }

      const onToggleShowRightNavbarValue = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="bg-color">
          <h1 className="heading-layout">Layout</h1>
          <input
            type="checkbox"
            id="content"
            onChange={onToggleShowContentValue}
            checked={showContent}
          />
          <label htmlFor="content" className="label">
            Content
          </label>
          <br />
          <input
            type="checkbox"
            id="left navbar"
            onChange={onToggleShowLeftNavbarValue}
            checked={showLeftNavbar}
          />
          <label htmlFor="left navbar" className="label">
            Left Navbar
          </label>
          <br />
          <input
            type="checkbox"
            id="right navbar"
            onChange={onToggleShowRightNavbarValue}
            checked={showRightNavbar}
          />
          <label htmlFor="right navbar" className="label">
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
