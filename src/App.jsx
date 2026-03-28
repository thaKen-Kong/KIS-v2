import './App.css'
import './styles/components.css'
import './styles/global.css'
import './styles/variables.css'
import './styles/mobile.css'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { HomePage } from './pages/Home/HomePage'
import { navigationItems } from './data/navigation'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path='/' element={<HomePage />} />
          {navigationItems.flatMap((item) =>
            (item.childrens || []).map((child) => (
              <Route
                key={`${item.label}-${child.path}`}
                path={child.path}
                element={child.element}
              />
            ))
          )}
        </Route>
      </Routes>
    </>
  )
}

export default App