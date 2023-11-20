import { NextReactP5Wrapper } from "@p5-wrapper/next";
import sketchStyles from './Sketch.module.css'

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
    let blackoutButton
    let showCellsButton
    let colorPicker
    let strokeColor = "#fff"
    const sketch = p5 => {
        p5.setup = () => {
            console.log("setup")
            bg = p5.loadImage(props.image)
            slider = p5.createSlider(20, 200, 100)
            slider.id("cell_size_slider")
            blackoutButton = p5.createButton("Blackout All Cells")
            blackoutButton.mousePressed(blackoutCells)
            showCellsButton = p5.createButton("Show All Cells")
            showCellsButton.mousePressed(showCells)
            colorPicker = p5.createColorPicker()
            colorPicker.changed(handleColorPick)
            p5.createP('')
            p5.createCanvas(w,h);
            cellSize = slider.value()
            createCellArray()
            document.querySelector('#cell_size_slider').addEventListener("change", createCellArray)
            p5.fill('black')
            p5.stroke(strokeColor)
            p5.strokeWeight(1)
        }

        p5.draw = () => {
            cellSize = slider.value()
            // createCellArray()
            p5.background(bg);
            p5.stroke(strokeColor)
            drawGrid()
            cellArray.forEach(cell => {
                if(!cell.visible){
                    p5.fill("black")
                    p5.square(cell.x, cell.y, cellSize)
                }
            }) 
            
        };
        p5.mousePressed = () => {
            clickedX = p5.mouseX
            clickedY = p5.mouseY
            const onSketch = clickedX > 0 && clickedX < p5.width && clickedY > 0 && clickedY < p5.height
            if(onSketch){
                for(let i = 0; i < cellArray.length; i++){
                    let cell = cellArray[i]            
                    let clickedThisCell = clickedX > cell.x && clickedX < cell.x + cellSize && clickedY > cell.y && clickedY < cell.y + cellSize
                    if(clickedThisCell){
                        cell.visible = !cell.visible
                    }
                }
            }
        }
        const setCellSize = (e) => {
            cellSize = +e.target.value
        }
        const createCellArray = () => {
            cellArray= []
            for(let x = 0; x < w; x += cellSize ){
                for(let y = 0; y < h; y += cellSize){
                    let newCell = {
                        x: x,
                        y: y,
                        visible: true
                    }
                    cellArray.push(newCell)
                }
            }
        }
        const blackoutCells = (e) => {
            cellArray.forEach(cell => {
                cell.visible = false
            })
            console.log(cellArray)
        }
        const showCells = (e) => {
            cellArray.forEach(cell => {
                cell.visible = true
            })
        }
        const drawGrid = () => {
            for(let x = 0; x < p5.width; x+= cellSize){
                for(let y = 0; y < p5.height; y+= cellSize){
                    p5.line(x, 0 , x, p5.height)
                    p5.line(0, y , p5.width, y)
                }
                
            }
        }
        const handleColorPick = () =>{
            strokeColor = colorPicker.value()
            console.log("strokeColor:", strokeColor)
        }

    };
    return (
        <div className={sketchStyles.sketchContainer}>   
            <NextReactP5Wrapper sketch={sketch} />
        </div>

    )
}