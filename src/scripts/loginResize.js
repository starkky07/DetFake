import getScreen from "./getScreen"

let zenscroll = require('zenscroll')
let eventAdded = false
let height 

function scrollTop(){
    if(height - 70 <= getScreen(1)){
        
        let target = document.getElementById('container')
        let newScroller = zenscroll.createScroller(target, 500, 0)
        newScroller.toY(0)
    }
}

function loginResize(addRemove = 'add'){
    if(addRemove == 'add' && eventAdded == false){
        window.addEventListener('resize', scrollTop)
        eventAdded = true
        height = getScreen(1)
    }

    else if (addRemove == 'remove' && eventAdded == true){
        window.removeEventListener('resize', scrollTop)
        eventAdded = false
    }

}

export default loginResize