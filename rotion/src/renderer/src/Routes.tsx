import { Router, Route } from 'electron-router-dom'

import { Blank } from './pages/blank'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank />} />
        </>
      }
    />
  )
}
