document.addEventListener('DOMContentLoaded', function () {

    let i = 0;
    const colorArray = ['#dae9e4', '#8bcbc8', '#ecc7c0', '#fdae84', '#3c2e3d'];

    let btnAddSquare = document.createElement('button');
    btnAddSquare.innerText = 'Add Square';
    btnAddSquare.className = 'btnAddSquare'
    document.body.appendChild(btnAddSquare);

    btnAddSquare.onclick = function () {
        let divSquare = document.createElement('div');
        divSquare.style.backgroundColor = 'black';
        divSquare.className = 'div-square';
        divSquare.id = i++
        document.body.appendChild(divSquare);
    };

    let partySquare = document.getElementsByClassName('div-square');

    //this is supposed to randomize the div color on single click   
    partySquare.onclick = function (e) {
        let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
        const targetItem = e.target;
        targetItem.backgroundColor.color = rand;
    };

    // This event is supposed to be a mouse hover making the div declare what id it has. 
    //Do I need to append something?
    partySquare.addEventListener = (mouseover, function () {
        partySquare.innerText = `I am number ${i}`;
    })


    //when dblclicked, target evaluates even or odd. if even, square after it need to be removed
    //display alert indicating so
    //if evaluated odd, the square before should be removed, alert indicating
    //I dont feel like this is set up right at all, but I feel like I;m in the right direction


    partySquare.addEventListener = ('dblclick', function () {
        function isEven(divSquare) {
            return divSquare % 2 == 0;
        }

        function isOdd(divSquare) {
            return Math.abs(divSquare % 2) == 1;
        }
    });

});