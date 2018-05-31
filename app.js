// Even/odd https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even
// random color math https://stackoverflow.com/questions/29356866/change-color-of-the-text-on-click-to-random-color-button


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
        divSquare.onclick = function () {
            let rand = colorArray[Math.floor(Math.random() * colorArray.length)];
            divSquare.style.backgroundColor = rand;
        };
        divSquare.addEventListener('mouseover', function () {
            divSquare.innerText = `I am number ${divSquare.id}`;

        });
        divSquare.addEventListener('dblclick', function () {
               console.log(divSquare);

            function isEven() {
                return divSquare.id % 2 == 0;
            }
            if
            (isEven()) {
                divSquare.nextSibling.remove();
            } else {
                divSquare.previousSibling.remove();
            }

        })

    }
})
