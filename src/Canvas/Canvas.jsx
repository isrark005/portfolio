import React, {useEffect, useRef, useState} from 'react'
import { cody as codyImgSrc, rock as rockImgSrc } from '../assets/imgIndex';

export function Canvas(props) {
    const canvasRef = useRef(null)
    const [gameOver, setgameOver] = useState(false)
    const [score, setScore] = useState(0)
    
    useEffect(() => {
        
    const canvasHeight = 600
    const canvasWidth = 1366
        
    //cody
    let codyWidth = 128;
    let codyHeight = 222;
    let codyX = 150;
    let codyY = canvasHeight - codyHeight;
    
    let cody = {
        x: codyX,
        y: codyY,
        width: codyWidth,
        height: codyHeight
    }

    // rock
    let rockArray = [];

    let rockWidth = 112;
    let rockHeight = 82;
    let rockX = 1254;
    let rockY = canvasHeight - rockHeight;

    let rock = {
        x: rockX,
        y: rockY,
        width: rockWidth,
        height: rockHeight
    }

    // physics
    let velocityX = -8;
    let velocityY = 0;
    let gravity = .4

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const codyImg = new Image();
    codyImg.src = codyImgSrc;
    
    codyImg.onload = function() {
        context.drawImage(codyImg, cody.x, cody.y, cody.width, cody.height)
    }

    const rockImg = new Image();
    rockImg.src = rockImgSrc;

    requestAnimationFrame(update)
    setInterval(placeRock, 1000)
    document.addEventListener('keydown', moveCody);
    document.addEventListener('click', moveCody);
    
    function update() {
        requestAnimationFrame(update)
        
        context.clearRect(0, 0, canvasWidth, canvasHeight)

        // Cody
        velocityY += gravity;
        cody.y = Math.min(cody.y + velocityY, codyY)
        context.drawImage(codyImg, cody.x, cody.y, cody.width, cody.height)
        
        // rock
        rockArray?.forEach((rock)=> {
            rock.x += velocityX
            context.drawImage(rockImg, rock.x, rock.y, rock.width, rock.height)
        })
    }

    function moveCody(e) {
        if(gameOver) return;

        
        if(e.target.tagName == 'canvas'){
                velocityY = -10
            }
        

        if((e.code == 'Space' || e.code == 'ArrowUp') && cody.y == codyY){
            velocityY = -10
        }


    }

    function placeRock() {
        let rock = {
            img : rockImgSrc,
            x: rockX,
            y: rockY,
            width: rockWidth,
            height: rockHeight
        }

        rockArray.push(rock)

        if(rockArray > 6) rockArray.shift()
    }
    


        
    }, [])
    return <canvas ref={canvasRef} {...props}/>
}
