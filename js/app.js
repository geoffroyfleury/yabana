function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 5) {
            tmpNode.classList.add("box--hide");
            boxes[5].className = "box move-to-position5-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[3].className = "box move-to-position3-from-left";
        boxes[4].className = "box move-to-position4-from-left";
        boxes[0].remove();

        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 500);

}

function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 4) {
            boxes[4].className = "box box--hide";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";
        boxes[2].className = "box move-to-position4-from-right";
        boxes[3].className = "box move-to-position5-from-right";
    }, 500);

}
function someFunction(destroyFeedback) {
    // Do your stuff here
    // Call destroyFeedback() function when you're done
    // The true parameter will proceed to the next step besides destroying the preloader
    setTimeout(() => {
        destroyFeedback(true);
    }, 500);
}
function anyThing(destroyFeedback) {
    setTimeout(function(){ destroyFeedback(true); }, 1500);
}

function noThing(destroyFeedback) {
    setTimeout(function(){ destroyFeedback(true); }, 10000);
}

var stepperDiv = document.querySelector('.stepper');
console.log(stepperDiv);
var stepper = new MStepper(stepperDiv);

var tra = 1;

function augmente(ele){
    var el = parseInt(ele.parentElement.children[0].children[1].children[0].innerHTML.substring(1, ele.parentElement.children[0].children[1].children[0].innerHTML.length), 10);
    var price = parseInt(ele.parentElement.children[0].children[1].children[1].innerHTML, 10);
    ele.parentElement.children[0].children[1].children[0].innerHTML = "+" + (el + 1);
    ele.parentElement.children[0].children[0].children[1].innerHTML = "" + (price * (el + 1)) + " F cfa";
}

function diminue(ele){
    var price = parseInt(ele.parentElement.children[0].children[1].children[1].innerHTML, 10);
    var el = parseInt(ele.parentElement.children[0].children[1].children[0].innerHTML.substring(1, ele.parentElement.children[0].children[1].children[0].innerHTML.length), 10);
    if(el > 0) {
        ele.parentElement.children[0].children[1].children[0].innerHTML = "+" + (el - 1);
        ele.parentElement.children[0].children[0].children[1].innerHTML = "" +  (price * (el - 1)) + " F cfa";
    }
}
function nextStep(ele) {
    ele.parentElement.children[ele.parentElement.childElementCount - 1].scrollLeft += ele.parentElement.children[ele.parentElement.childElementCount - 1].children[0].clientWidth
}
function prevStep(ele) {
    ele.parentElement.children[ele.parentElement.childElementCount - 1].scrollLeft -= ele.parentElement.children[ele.parentElement.childElementCount - 1].children[0].clientWidth
}
function focuss(ele) {
    if(tra == 1){
        ele.className = "shower";
        tra = 0
    }
    else{
        tra = 1;
        ele.className = "hiden";
    }

}
