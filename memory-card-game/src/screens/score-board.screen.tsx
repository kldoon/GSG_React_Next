import { useEffect, useState } from 'react'
import { IScore } from '../types/@types';
import ScoreList from '../components/score-list/score-list';
import { Link } from 'react-router-dom';

const getScores = () => {
  const scores: IScore[] = JSON.parse(localStorage.getItem('flip-cards-scores') || '[]');
  return scores;
}

function getTopPlayers(scores: IScore[]): IScore[] {
  return scores
    .sort((a, b) =>
      b.level - a.level ||  // Higher level first
      a.finishTime - b.finishTime || // Lower finish time first
      a.wrongMoves - b.wrongMoves  // Lower wrong moves first
    )
    .slice(0, 3);
}


const ScoreBoardScreen = () => {
  const [savedScores, setSavedScores] = useState<IScore[]>([]);
  const [topPlayers, setTopPlayers] = useState<IScore[]>([]);

  useEffect(() => {
    const ss = getScores();
    setSavedScores(ss);
    const tp = getTopPlayers(ss);
    setTopPlayers(tp);
  }, []);

  const handleClearAll = () => {
    if (confirm('Sure?')) {
      localStorage.removeItem('flip-cards-scores');
    }
  }

  return (
    <div className="screen score-screen">
      <h1>Score Board</h1>
      <nav><Link to="/">New Game</Link></nav>
      <br /><br />
      <button onClick={handleClearAll}>Clear all Scores</button>
      {
        !savedScores.length
          ? <h2>No Scores Found!</h2>
          : (
            <div className="boards">
              <div>
                <h2>All Games</h2>
                <ScoreList scores={savedScores} />
              </div>
              <div>
                <h2>Top 3 Games</h2>
                <ScoreList scores={topPlayers} />
              </div>
            </div>
          )
      }

    </div>
  )
}

export default ScoreBoardScreen;