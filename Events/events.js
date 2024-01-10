// document.getElementById('owl').onclick = () => {
//     alert("OWL Clicked")
// }


// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode



// document.getElementById('owl').addEventListener('click', (e) => {
//     console.log("Owl Clicked");
//     e.stopPropagation()
// })

// document.getElementById('images').addEventListener('click', (e) => {
//     console.log("Clicked inside the ul");
// })

// document.getElementById('google').addEventListener('click', (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("Google Clicked");
// })


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


document.querySelector('#images').addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG'){
        let remove = e.target.parentNode
        remove.remove()
    }
    
    //remove.parentNode.removeChild(remove)
})
