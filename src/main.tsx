import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

import '@mantine/core/styles.css'

const theme = createTheme({
  fontFamily: '"Nunito Sans", sans-serif',
  colors: {
    purple: [
      "#f1f1ff", "#e0dff2", "#bfbdde", "#9b98ca", "#7d79b9",
      "#6a66af", "#605cac", "#504c97", "#464388", "#3b3979"
    ],
    orange: [
      "#fff7e3", "#fbedd1", "#f5daa5", "#eec675", "#e9b44d",
      "#e6a933", "#e4a322", "#cb8f16", "#b47e0d", "#9d6c00"
    ],
    teal: [
      "#e8faf5", "#ddefe9", "#bfdbd2", "#92bfb1", "#82b4a4",
      "#6fa997", "#64a490", "#528f7c", "#45806e", "#336f5e"
    ]
  },
  primaryColor: "purple",
  primaryShade: 6
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/shelter'>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
