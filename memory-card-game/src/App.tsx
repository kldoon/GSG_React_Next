import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css'
import GameScreen from './screens/game.screen';
import LevelsScreen from './screens/levels.screen';
import ScoreBoardScreen from './screens/score-board.screen';
import NotFound from './screens/not-found.screen';
import { GameModeProvider } from './providers/modeProvider';

function App() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <LevelsScreen />
    },
    {
      path: '/game',
      element: <GameScreen />
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
    <GameModeProvider>
      <RouterProvider router={browserRouter} />
    </GameModeProvider>
  )
}

export default App;
