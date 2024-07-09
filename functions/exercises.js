

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line = '#' + line;
    }
    return line
    
}; 
    

function makeSquare(size) {
    let square = ""
 
    for (let i = 0; i < size; i++){
        square += makeLine(size);
        if (i < size -1){
            square += "\n"
        }
    }
    return square;

    
};

function makeRectangle(width, height){
    let rectangle = ""

    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
      }
  
    
 

    return rectangle.slice(0, -1)

}

function makeDownwardStairs(height) {
    let stairs = ""
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n');
      }

      return stairs.slice(0,-1)

}



function makeSpaceLine(numSpaces, numChars){

    let spaces = ""
    let chars = ""

    for (let i = 0; i < numSpaces; i++){
        spaces +="_"

    }
    makeLine(numChars)
    return spaces + `${makeLine(numChars)}` + spaces
} 


function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

  console.log(makeIsoscelesTriangle(5));