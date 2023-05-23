import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { AppContainer } from './AppStyle'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
