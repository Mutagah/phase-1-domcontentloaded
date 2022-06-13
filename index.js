// Your code goes here
document.addEventListener('DOMContentLoaded',() =>{
    console.log("The DOM has successfully been loaded")
    let modifiedParagraphTag = document.getElementById("text")
    modifiedParagraphTag.textContent = "This is really cool!"
})
console.log("Loading the DOM before the event listener")