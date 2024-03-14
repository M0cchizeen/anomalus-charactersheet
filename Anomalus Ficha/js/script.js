document.addEventListener('DOMContentLoaded', function() {
	
	const privateContent = document.getElementById('private-content');
const username = 'Anomalus'; // Mude isto para o nome de usuário do jogador
const password = 'Niko'; // Mude isto para a senha do jogador

function showPrivateContent() {
    const inputUsername = prompt('Por favor, insira o nome de usuário:');
    const inputPassword = prompt('Agora, insira a senha:');

    if (inputUsername === username && inputPassword === password) {
        privateContent.style.display = 'block';
    } else {
        alert('Nome de usuário ou senha incorretos!');
    }
}

showPrivateContent();
	
    const saveButton = document.getElementById('save');
    const loadButton = document.getElementById('load');
    const fileInput = document.getElementById('fileInput');
	

    saveButton.addEventListener('click', function() {
        const personagem = document.getElementById('personagem').value;
        const jogador = document.getElementById('jogador').value;
        const raca = document.getElementById('raca').value;
        const xp = document.getElementById('xp').value;
        const pontos = document.getElementById('pontos').value;
        const con = document.getElementById('con').value;
        const vidaMaxima = 7 * con;
        const vidaAtual = currentLifeInput.value;

        const data = {
            personagem,
            jogador,
            raca,
            xp,
            pontos,
            con,
            vidaMaxima,
            vidaAtual
        };

        const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
        saveAs(blob, 'ficha.json');

        console.log('Arquivo JSON baixado com sucesso');
    });

    loadButton.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const data = JSON.parse(event.target.result);

                document.getElementById('personagem').value = data.personagem;
                document.getElementById('jogador').value = data.jogador;
                document.getElementById('raca').value = data.raca;
                document.getElementById('xp').value = data.xp;
                document.getElementById('pontos').value = data.pontos;
                document.getElementById('con').value = data.con;
                const vidaMaxima = 7 * data.con;
                vidaMaximaElement.textContent = vidaMaxima;
                maxLifeInput.value = vidaMaxima;
                maxLife = vidaMaxima;
                currentLife = data.vidaAtual;
                currentLifeInput.value = currentLife;
                updateLifebar();

                console.log('Arquivo JSON lido com sucesso');
            };

            reader.readAsText(file);
        }
    });
	
	
    const conElement = document.getElementById('con');
    const vidaMaximaElement = document.getElementById('vidaMaxima');
    const currentLifeInput = document.querySelector('.current-life');
    const maxLifeInput = document.querySelector('.max-life');
    const lifebar = document.querySelector('.lifebar');
    let currentLife = parseInt(currentLifeInput.value);
    let maxLife = parseInt(maxLifeInput.value);


    window.onload = function () {
        const con = parseInt(conElement.value);
        const vidaMaxima = 7 * con;
        vidaMaximaElement.textContent = vidaMaxima;
        maxLifeInput.value = vidaMaxima;
        maxLife = vidaMaxima;
        currentLifeInput.value = currentLife;
        updateLifebar();
    };


    currentLifeInput.addEventListener('input', function() {
        let currentLife = parseInt(currentLifeInput.value);
        if (currentLife < 0) {
            currentLife = 0;
        }
        if (currentLife > maxLife) {
            currentLife = maxLife;
        }
        currentLifeInput.value = currentLife;
        updateLifebar();
    });

    maxLifeInput.addEventListener('input', function() {
        maxLife = parseInt(maxLifeInput.value);
        vidaMaximaElement.textContent = maxLife;
        updateLifebar();
    });


    function updateLifebar() {
        const percentage = (currentLife / maxLife) * 100;
        lifebar.style.backgroundSize = `${percentage}% 100%`;
        const healthBar = document.querySelector('.health-bar');
        healthBar.style.width = `${percentage}%`;
        currentLifeInput.innerText = currentLife;
    }



    conElement.addEventListener('input', function() {
    const con = parseInt(conElement.value);
    const vidaMaxima = 7 * con;
    vidaMaximaElement.textContent = vidaMaxima;
    maxLifeInput.value = vidaMaxima;
    maxLife = vidaMaxima;
    const vidaAtual = currentLifeInput.value; 
    currentLifeInput.value = vidaAtual;
    updateLifebar();
});


currentLifeInput.addEventListener('input', function() {
    const vidaAtual = parseInt(currentLifeInput.value);
    currentLife = vidaAtual;
    updateLifebar();
});


    const lifeButtons = document.querySelectorAll('.lifebar-buttons button');
    lifeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('subtract-life')) {
                currentLife--;
                if (currentLife < 0) {
                    currentLife = 0;
                }
            } else if (button.classList.contains('add-life')) {
                currentLife++;
                if (currentLife > maxLife) {
                    currentLife = maxLife;
                }
            }
            currentLifeInput.value = currentLife;
            updateLifebar();
        });
    });

const addPhButton = document.querySelector('.add-ph');
const subtractPhButton = document.querySelector('.subtract-ph');
const phMaxInput = document.getElementById('phMaxima');
const phCurrentInput = document.querySelector('.current-ph');
let phCurrent = parseInt(phCurrentInput.value);
let phMax = parseInt(phMaxInput.value);


const podElement = document.getElementById('pod');
podElement.addEventListener('input', function() {
    phMax = 4 * parseInt(podElement.value);
    phMaxInput.value = phMax;
    phCurrent = phMax;
    phCurrentInput.value = phCurrent;
    updatePhBar();
});


function updatePhBar() {
    const phBar = document.querySelector('.ph-bar');
    const phCurrentInput = document.querySelector('.current-ph');
    const phMaxInput = document.querySelector('.max-ph');
    const phCurrent = parseInt(phCurrentInput.value);
    const phMax = parseInt(phMaxInput.value);
    const phPercentage = (phCurrent / phMax) * 100;
    phBar.style.width = phPercentage + '%';
}


document.querySelector('.add-ph').addEventListener('click', () => {
    const phCurrentInput = document.querySelector('.current-ph');
    const phMaxInput = document.querySelector('.max-ph');
    const phCurrent = parseInt(phCurrentInput.value);
    const phMax = parseInt(phMaxInput.value);
    if (phCurrent < phMax) {
        phCurrentInput.value = phCurrent + 1;
        updatePhBar();
    }
});

document.querySelector('.subtract-ph').addEventListener('click', () => {
    const phCurrentInput = document.querySelector('.current-ph');
    const phMaxInput = document.querySelector('.max-ph');
    const phCurrent = parseInt(phCurrentInput.value);
    const phMax = parseInt(phMaxInput.value);
    if (phCurrent > 0) {
        phCurrentInput.value = phCurrent - 1;
        updatePhBar();
    }
});


window.onload = function () {
    const pod = parseInt(podElement.value);
    const phMaxima = 4 * pod;
    phMaxInput.value = phMaxima;
    phMax = phMaxima;
    phCurrent = phMaxima;
    phCurrentInput.value = phCurrent;
    updatePhBar();
};


podElement.addEventListener('input', function() {
    const pod = parseInt(podElement.value);
    const phMaxima = 4 * pod;
    phMaxInput.value = phMaxima;
    phMax = phMaxima;
    phCurrent = phMaxima;
    phCurrentInput.value = phCurrent;
    updatePhBar();
});


phCurrentInput.addEventListener('input', function() {
    const phCurrent = parseInt(phCurrentInput.value);
    updatePhBar();
});


phMaxInput.addEventListener('input', function() {
    const phMax = parseInt(phMaxInput.value);
    updatePhBar();
});

    document.querySelectorAll('.skill-input').forEach(function(input) {
        input.addEventListener('input', function() {
            const pericia = this.dataset.pericia;
            let treino = parseInt(document.querySelector(`[data-pericia="${pericia}"].treino`).value) || 0;
            let outros = parseInt(document.querySelector(`[data-pericia="${pericia}"].outros`).value) || 0;
            document.querySelector(`#bonus_${pericia}`).textContent = `(${treino + outros})`;
        });
    });
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.tabTarget;
        document.querySelectorAll('.tab-button').forEach(otherButton => {
            otherButton.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        button.classList.add('active');
        document.querySelector(`#${target}`).classList.add('active');
    });
});

const rollButton = document.getElementById('roll-button');
    const resultElement = document.getElementById('roll-result');
    const inputElement = document.getElementById('roll-input');

    function rollDice(input) {
        const regex = /(\d+)d(\d+)/;
        const matches = input.match(regex);
        if (matches) {
            const numberOfDice = parseInt(matches[1]);
            const numberOfFaces = parseInt(matches[2]);
            const results = [];
            for (let i = 0; i < numberOfDice; i++) {
                results.push(Math.floor(Math.random() * numberOfFaces) + 1);
            }
            return results;
        }
        return "Invalid input format";
    }

    rollButton.addEventListener('click', function() {
        const input = inputElement.value;
        const results = rollDice(input);

        if (Array.isArray(results)) {
            resultElement.textContent = results.join(', ');
        } else {
            resultElement.textContent = results;
        }
    });

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.tabTarget;
        document.querySelectorAll('.tab-button').forEach(otherButton => {
            otherButton.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        button.classList.add('active');
        document.querySelector(`#${target}`).classList.add('active');
    });
});

function generateAttackRows(attacks) {
    const attackContainer = document.querySelector('.attack-container');
    attacks.forEach(attack => {
        const attackRow = document.createElement('div');
        attackRow.classList.add('attack-row');

        Object.values(attack).forEach(value => {
            const attackCell = document.createElement('div');
            attackCell.classList.add('attack-cell');
            attackCell.textContent = value;
            attackRow.appendChild(attackCell);
        });

        attackContainer.appendChild(attackRow);
    });
}

const playerNameInput = document.getElementById('player-name');
const createAccountButton = document.getElementById('create-account');
const loadAccountButton = document.getElementById('load-account');
const accountInfo = document.getElementById('account-info');

createAccountButton.addEventListener('click', function () {
    const playerName = playerNameInput.value;
    if (!playerName) {
        alert('Por favor, insira um nome de jogador');
        return;
    }
    const playerAccount = {
        name: playerName,
        level: 1,
        experience: 0,
        gold: 0,
        inventory: []
    };
    localStorage.setItem(playerName, JSON.stringify(playerAccount));
    loadAccountButton.disabled = false;
    accountInfo.textContent = `Conta criada com sucesso para ${playerName}`;
});

loadAccountButton.addEventListener('click', function () {
    const playerName

});

