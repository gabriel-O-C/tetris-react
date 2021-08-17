import React, {useState} from 'react'
// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// custom hooks
import { usePlayer } from '../hooks/userPlayer';
import { useStage } from '../hooks/useStage';

const Tetris = () => {
    const [dropTime, setDropTIme] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);



    return(
        <StyledTetrisWrapper>
        <StyledTetris>
            <Stage stage={stage} />
            <aside>
            {gameOver ? (
                <Display gameOver={gameOver} text={"Game Over"} />
            ) : (

                <div>
                    <Display text="Score"></Display>
                    <Display text="Rows"></Display>
                    <Display text="Level"></Display>
                </div>
            )}
                <StartButton />
            </aside>
        
        </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
