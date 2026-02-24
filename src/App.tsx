import AppRoutes from './AppRoutes'
import { ThemeProvider } from './Themecontext'

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
