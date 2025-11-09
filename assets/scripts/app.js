'use strict'

// DOM Elements

const createButton = document.getElementById('create-button');
const shapeButton = document.getElementById('shape-button');
const colorButton = document.getElementById('color-button');
const grid = document.getElementById('grid-container');

const shapes = [];

// Object

class Shape {
        constructor(name, color, prevColor){
            this._name = name;
            this._color = color;
            this._prevColor = prevColor;
    }

    get name(){
        return this._name;
    }

    get color(){
        return this._color;
    }

    getInfo(){
        return `This is a ${this._name}, it is ${this._prevColor}.`;
    }
}

// Create Shapes

function createShape(){
        const name = shapeButton.value;
        let prevColor = colorButton.value;
        let color = null;

        if(prevColor === "blue") color = "#09f";
        if(prevColor === "green") color = "#9f0";
        if(prevColor === "orange") color = "#f90";
        if(prevColor === "pink") color = "#f09";
        if(prevColor === "purple") color = "#90f";

        const shape = new Shape(name, color, prevColor);
        shapes.push(shape);
        
        const shapeDiv = document.createElement('div');
        shapeDiv.classList.add(`shape`, name.toLowerCase());
        shapeDiv.style.background = color;

        grid.appendChild(shapeDiv);

        if(shapes.length >= 25) {
            shapes.shift();
            const firstShape = grid.querySelector('.shape');
            if(firstShape) firstShape.remove();
        }
        shapeDiv.addEventListener('click', () => {
        alert(shape.getInfo());
    });
    }

createButton.addEventListener('click', createShape);
