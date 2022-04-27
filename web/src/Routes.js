import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
