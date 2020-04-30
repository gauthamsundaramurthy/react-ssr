import Cards from './components/cards/Cards'
import Home from './components/popularRepos/Home'
import Grid from './components/popularRepos/Grid'
import NoMatch from './components/NoMatch'
import { fetchPopularRepos } from './components/popularRepos/api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Cards,
  },
  {
    path: '/popularRepos',
    exact: true,
    component: Home
  },
  {
    path: '/popularRepos/popular/:id',
    component: Grid
  },
  {
    path: '*',
    component: NoMatch
  }
]

export default routes