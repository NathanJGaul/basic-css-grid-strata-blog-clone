import Typography from 'typography'
import grandViewTheme from 'typography-theme-grand-view'

// theme overrides
grandViewTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: getCSSVar('--primary'),
  },
  'h5, h6': {
    marginTop: '0px',
    marginBottom: '10px'
  },
})

const typography = new Typography(grandViewTheme)

typography.injectStyles()

function getCSSVar(themeVar) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(themeVar);
}