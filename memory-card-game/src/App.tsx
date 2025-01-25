import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css'
import LoginScreen from './screens/login.screen';
import GameScreen from './screens/game.screen';
import LevelsScreen from './screens/levels.screen';
import ScoreBoardScreen from './screens/score-board.screen';
import NotFound from './screens/not-found.screen';

function App() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <LoginScreen />,
    },
    {
      path: '/game',
      element: <GameScreen />
    },
    {
      path: '/levels',
      element: <LevelsScreen />
    },
    {
      path: '/score-board',
      element: <ScoreBoardScreen />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ];

  const browserRouter = createBrowserRouter(routes);

  return (
    <RouterProvider router={browserRouter}>

    </RouterProvider>
  )
}

export default App;
