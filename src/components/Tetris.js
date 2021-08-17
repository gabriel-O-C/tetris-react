import React, {useState} from 'react'
// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from '../gameHelpers';


// custom hooks
import { usePlayer } from '../hooks/userPlayer';
import { useStage } from '../hooks/useStage';

const Tetris = () => {
    const [dropTime, setDropTIme] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);


    const movePlayer = dir => {
        updatePlayerPos({x: dir, y: 0});

    }

    const startGame = () => {
        // reset everything
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({x: 0, y: 1, collided: false})
    }

    const dropPlayer = () => {
        drop();

    }

    const move = ({keycode}) => {
        if(!gameOver){
            if(keycode === 'ArrowDown') {
                movePlayer(-1);
            }else if(keycode === 39){
                movePlayer(1);
            }else if(keycode === 40) {
                dropPlayer();
            }
        }

    }




    return(
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyPress={e => move(e)}>
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
                <StartButton callback={startGame} />
            </aside>
        
        </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
