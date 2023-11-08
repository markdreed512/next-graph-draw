import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function Sketch(props) {
    let bg
    let w = +props.width
    let h = +props.height
    let cellSize = 50
    let slider
    let clickedX
    let clickedY
    let blackedOutSquares = []
    let alphabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const sketch = p5 => {
        p5.setup = () => {
            bg = p5.loadImage(props.image)
            slider = p5.createSlider(20, 200, 100)
            p5.createP('')
            p5.createCanvas(w,h);
            
        }

        p5.draw = () => {
            p5.background(bg);
            cellSize = slider.value()
            for(let x = 0; x < w; x += cellSize ){
                for(let y = 0; y < h; y += cellSize){
                    p5.line(x, 0, x, h)
                    p5.line(0, y, w, y)
                    // draw a blackout square? 
                }
            }

        };
        p5.mousePressed = () => {
            console.log(p5.mouseX, p5.mouseY)
            blackedOutSquares.push({
                    // only push one object for each clicked square, not each click
                }
            )
            // clickedX = p5.mouseX
            // clickedY = p5.mouseY
        }
    };
    return (
        <NextReactP5Wrapper sketch={sketch} />
    )
}