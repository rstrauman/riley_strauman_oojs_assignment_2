'use strict'

// DOM Elements

const createButton = document.getElementById('create-button');
const shapeButton = document.getElementById('shape-button');
const colorButton = document.getElementById('color-button');
const grid = document.getElementById('grid-container');
const selectContainer = document.getElementById('select-container');

let shapes = [];
let hasRemoveButton = false;
let removeDiv = null;

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

        if(!hasRemoveButton) {
            removeDiv = document.createElement('div');
            removeDiv.innerHTML = 'Reset';
            removeDiv.classList.add('remove-button')
            hasRemoveButton = true;
            selectContainer.appendChild(removeDiv);
            removeDiv.addEventListener('click', removeAll);
        }

        shapeDiv.addEventListener('click', () => {
        alert(shape.getInfo());
    });
    }

// Remove function

function removeAll(){
    const shapesElements = document.querySelectorAll(".shape");

    for(let i = 0; i < shapesElements.length; i++){
        shapesElements[i].remove();
    }
    document.querySelector('.remove-button').remove();
    shapes = [];
    hasRemoveButton = false;
}

createButton.addEventListener('click', createShape);
