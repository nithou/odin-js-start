const para = document.createElement('p');
const output = document.querySelector('#output');

para.textContent = "Countdown: ";

for (let i = 10;i > 0; i--) {
    para.textContent += `${i} `;
}

output.appendChild(para);

const guests = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

for (guest of guests) {
    if (guest === "Phil" || guest === "Lola") {
        refused.textContent += `${guest}, `;
    } else {
        admitted.textContent += `${guest}, `;
    }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
