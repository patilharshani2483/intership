let input=document.getElementById('inputBox'); //select the element from the inputbox
let buttons=document.querySelectorAll('button'); //select the elements from the button
let string = ""; // empty string and user can store the value/inputs
let arr = Array.from(buttons); 
arr.forEach(button => {  //each button in the array
    button.addEventListener('click',(e) => {  //each button add the event listener and button is clicked // e is represt the event object
        if(e.target.innerHTML == '='){ //cheack the clicked button has the text he ya nhi vo check karega
            string = eval(string); // evaluates the mathemtical expression and stored in string 
            input.value=string; //display the result in the input box
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value=string; //show nothing
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1); //remove the last char from the string
            input.value = string;
        }
        else{ // button is not clicked ac,del,= otherwise user clickedd number and operator
            string += e.target.innerHTML; //adds the button text 1 2 3+
            input.value = string; //update value

          }
        
    })
})
