import React from "react";
// import { Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";


export default function Sketch(props) {
    let bg
    let w = +props.width
    let h = +props.height
    const sketch = p5 => {
        p5.setup = () => {
            bg = p5.loadImage(props.image)
            p5.createCanvas(w,h);
        }

        p5.draw = () => {
            p5.background(bg);
        };
    };
    return (
        <NextReactP5Wrapper sketch={sketch} />
    )
}