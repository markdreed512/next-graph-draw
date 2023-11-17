import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function Sketch(props) {
    let bg
    let w = +props.width
    let h = +props.height
    let cellSize
    let slider
    let clickedX
    let clickedY
    let cellArray = []
    let alphabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const sketch = p5 => {
        p5.setup = () => {
            bg = p5.loadImage(props.image)
            slider = p5.createSlider(20, 200, 100)
            slider.id("cell_size_slider")
            p5.createP('')
            p5.createCanvas(w,h);
            cellSize = slider.value()
            createCellArray()
            document.querySelector('#cell_size_slider').addEventListener("change", createCellArray)
            p5.fill('black')
        }

        p5.draw = () => {
            p5.background(bg);
            cellArray.forEach(cell => {
                p5.line(cell.x, 0, cell.x, h)
                p5.line(0, cell.y, w, cell.y)
                if(!cell.visible){
                    p5.square(cell.x, cell.y, cellSize)
                }
            })
        };
        p5.mousePressed = () => {
            clickedX = p5.mouseX
            clickedY = p5.mouseY
            for(let i = 0; i < cellArray.length; i++){
                let cell = cellArray[i]            
                let clickedThisCell = clickedX > cell.x && clickedX < cell.x + cellSize && clickedY > cell.y && clickedY < cell.y + cellSize
                if(clickedThisCell){
                    cell.visible = !cell.visible
                }
            }

        }
        const setCellSize = (e) => {
            cellSize = +e.target.value

        }
        const createCellArray = () => {
            for(let x = 0; x < w; x += cellSize ){
                for(let y = 0; y < h; y += cellSize){
                    let cell = {
                        x: x,
                        y: y,
                        visible: true
                    }
                    cellArray.push(cell)

                    // draw a blackout square? 
                    // p5.fill('black')
                    // p5.square(x,y, cellSize)
                }
            }
        }

    };
    return (
        <NextReactP5Wrapper sketch={sketch} />
    )
}