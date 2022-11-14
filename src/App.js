import { colorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import DashBoard from './scenes/dashboard'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default App
