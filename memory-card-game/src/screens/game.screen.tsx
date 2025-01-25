import CardList from '../components/card-list/card-list';
import './screens.css';

const GameScreen = () => {
  return (
    <div className="screen game-screen">
      <div className="placeholder" style={{ width: '100%', height: '60px' }}>Status</div>
      <CardList />
    </div>
  )
}

export default GameScreen;