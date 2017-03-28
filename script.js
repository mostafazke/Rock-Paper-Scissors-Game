var choise = ['Rock', 'Paper', 'Scissors'],
    player1 = document.getElementById('player1'),
    player2 = document.getElementById('player2'),
    result = document.getElementById('result'),
    select = document.getElementById('select'),
    button = document.getElementById('submit'),
    i;

for (i = 0; i < choise.length; i += 1) {
    var option = document.createElement('option');
    option.textContent = choise[i];
    select.appendChild(option);
}

function choose(choise1, choise2) {
    "use strict";
    if (choise1 === 0) {
        if (choise2 === 0) {
            player2.src = 'img/rock.png';
            return 'Draw';
        }
        if (choise2 === 1) {
            player2.src = 'img/paper.png';
            return 'Paper Win';
        } else {
            player2.src = 'img/scissors.png';
            return 'Rock Win';
        }
    }
    if (choise1 === 1) {
        if (choise2 === 0) {
            player2.src = 'img/rock.png';
            return 'Paper Win';
        }
        if (choise2 === 1) {
            player2.src = 'img/paper.png';
            return 'Draw';
        } else {
            player2.src = 'img/scissors.png';
            return 'Scissore Win';
        }
    }
    if (choise1 === 2) {
        if (choise2 === 0) {
            player2.src = 'img/rock.png';
            return 'Rock Win';
        }
        if (choise2 === 1) {
            player2.src = 'img/paper.png';
            return 'Scissore Win';
        } else {
            player2.src = 'img/scissors.png';
            return 'Draw';
        }
    }
}
select.addEventListener("change", function () {
    "use strict";
    result.innerHtml = '&emsp;';
    if (select.selectedIndex === 0) {
        player1.src = 'img/rock.png';
    }
    if (select.selectedIndex === 1) {
        player1.src = 'img/paper.png';
    }
    if (select.selectedIndex === 2) {
        player1.src = 'img/scissors.png';
    }
});
button.addEventListener('click', function () {
    "use strict";
    var int = setInterval(function () {
        var n = Math.floor(Math.random() * 3);
        result.textContent = choose(select.selectedIndex, n);
    }, 400);
    setTimeout(function () {
        clearInterval(int);
        result.style.color = '#f1c40f';
    }, 2000);
    result.innerHtml = '&emsp;';
    result.style.color = '#fff';
});
window.addEventListener('keydown', function (e) {
    "use strict";
    e.preventDefault();
    if (e.keyCode != 13) {
        return false;
    } else {
        var int = setInterval(function () {
        var n = Math.floor(Math.random() * 3);
        result.textContent = choose(select.selectedIndex, n);
    }, 400);
    setTimeout(function () {
        clearInterval(int);
        result.style.color = '#f1c40f';
    }, 2000);
    result.innerHtml = '&emsp;';
    result.style.color = '#fff';
    }
        
});