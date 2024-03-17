
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
  
  document.getElementById('save').addEventListener('click', function() {
        const personagem = document.getElementById('personagem').value;
        const jogador = document.getElementById('jogador').value;
        const raca = document.getElementById('raca').value;
        const xp = document.getElementById('xp').value;
        const pontos = document.getElementById('pontos').value;
		
		const con = document.getElementById('con').value;
		const pod = document.getElementById('pod').value;
		const inte = document.getElementById('inte').value;
		const forc = document.getElementById('forc').value;
		const car = document.getElementById('car').value;
		const des = document.getElementById('des').value;
		
		const atletismotreino = document.getElementById('atletismotreino').value;
		const atletismooutros = document.getElementById('atletismooutros').value;
		
		const culinariatreino = document.getElementById('culinariatreino').value;
		const culinariaoutros = document.getElementById('culinariaoutros').value;

		const cienciatreino = document.getElementById('cienciatreino').value;
		const cienciaoutros = document.getElementById('cienciaoutros').value;
		
		const conjurartreino = document.getElementById('conjurartreino').value;
		const conjuraroutros = document.getElementById('conjuraroutros').value;
		
		const crimetreino = document.getElementById('crimetreino').value;
		const crimeoutros = document.getElementById('crimeoutros').value;
		
		const estrategiatreino = document.getElementById('estrategiatreino').value;
		const estrategiaoutros = document.getElementById('estrategiaoutros').value;

		const falatreino = document.getElementById('falatreino').value;
		const falaoutros = document.getElementById('falaoutros').value;
		
		const fortitudetreino = document.getElementById('fortitudetreino').value;
		const fortitudeoutros = document.getElementById('fortitudeoutros').value;
		
		const furtividadetreino = document.getElementById('furtividadetreino').value;
		const furtividadeoutros = document.getElementById('furtividadeoutros').value;
		
		const historiatreino = document.getElementById('historiatreino').value;
		const historiaoutros = document.getElementById('historiaoutros').value;
		
		const iniciativatreino = document.getElementById('iniciativatreino').value;
		const iniciativaoutros = document.getElementById('iniciativaoutros').value;
		
		const intimidacaotreino = document.getElementById('intimidacaotreino').value;
		const intimidacaooutros = document.getElementById('intimidacaooutros').value;
		
		const investigacaotreino = document.getElementById('investigacaotreino').value;
		const investigacaooutros = document.getElementById('investigacaooutros').value;
		
		const lutatreino = document.getElementById('lutatreino').value;
		const lutaoutros = document.getElementById('lutaoutros').value;
		
		const medicinatreino = document.getElementById('medicinatreino').value;
		const medicinaoutros = document.getElementById('medicinaoutros').value;
		
		const percepcaotreino = document.getElementById('percepcaotreino').value;
		const percepcaooutros = document.getElementById('percepcaooutros').value;
		
		const pilotagemtreino = document.getElementById('pilotagemtreino').value;
		const pilotagemoutros = document.getElementById('pilotagemoutros').value;
		
		const pontariatreino = document.getElementById('pontariatreino').value;
		const pontariaoutros = document.getElementById('pontariaoutros').value;
		
		const reflexostreino = document.getElementById('reflexostreino').value;
		const reflexosoutros = document.getElementById('reflexosoutros').value;
		
		
		
		const attackname1 = document.getElementById('attackname1').value;
		const attacktype1 = document.getElementById('attacktype1').value;
		const attackroll1 = document.getElementById('attackroll1').value;
		const attackrange1 = document.getElementById('attackrange1').value;
		const attackdamage1 = document.getElementById('attackdamage1').value;
		const attackcritical1 = document.getElementById('attackcritical1').value;
		
		const attackname2 = document.getElementById('attackname2').value;
		const attacktype2 = document.getElementById('attacktype2').value;
		const attackroll2 = document.getElementById('attackroll2').value;
		const attackrange2 = document.getElementById('attackrange2').value;
		const attackdamage2 = document.getElementById('attackdamage2').value;
		const attackcritical2 = document.getElementById('attackcritical2').value;
		
		const attackname3 = document.getElementById('attackname3').value;
		const attacktype3 = document.getElementById('attacktype3').value;
		const attackroll3 = document.getElementById('attackroll3').value;
		const attackrange3 = document.getElementById('attackrange3').value;
		const attackdamage3 = document.getElementById('attackdamage3').value;
		const attackcritical3 = document.getElementById('attackcritical3').value;
		
		const attackname4 = document.getElementById('attackname4').value;
		const attacktype4 = document.getElementById('attacktype4').value;
		const attackroll4 = document.getElementById('attackroll4').value;
		const attackrange4 = document.getElementById('attackrange4').value;
		const attackdamage4 = document.getElementById('attackdamage4').value;
		const attackcritical4 = document.getElementById('attackcritical4').value;
		
		const attackname5 = document.getElementById('attackname5').value;
		const attacktype5 = document.getElementById('attacktype5').value;
		const attackroll5 = document.getElementById('attackroll5').value;
		const attackrange5 = document.getElementById('attackrange5').value;
		const attackdamage5 = document.getElementById('attackdamage5').value;
		const attackcritical5 = document.getElementById('attackcritical5').value;
		
		const attackname6 = document.getElementById('attackname6').value;
		const attacktype6 = document.getElementById('attacktype6').value;
		const attackroll6 = document.getElementById('attackroll6').value;
		const attackrange6 = document.getElementById('attackrange6').value;
		const attackdamage6 = document.getElementById('attackdamage6').value;
		const attackcritical6 = document.getElementById('attackcritical6').value;
		
		const attackname7 = document.getElementById('attackname7').value;
		const attacktype7 = document.getElementById('attacktype7').value;
		const attackroll7 = document.getElementById('attackroll7').value;
		const attackrange7 = document.getElementById('attackrange7').value;
		const attackdamage7 = document.getElementById('attackdamage7').value;
		const attackcritical7 = document.getElementById('attackcritical7').value;
		
		const attackname8 = document.getElementById('attackname8').value;
		const attacktype8 = document.getElementById('attacktype8').value;
		const attackroll8 = document.getElementById('attackroll8').value;
		const attackrange8 = document.getElementById('attackrange8').value;
		const attackdamage8 = document.getElementById('attackdamage8').value;
		const attackcritical8 = document.getElementById('attackcritical8').value;
		
		const inv = document.getElementById('inv').value;
		const charc = document.getElementById('charc').value;
		
		const textbox1 = document.getElementById('textbox1').value;
		const textbox2 = document.getElementById('textbox2').value;
		const textbox3 = document.getElementById('textbox3').value;

		const textbox4 = document.getElementById('textbox4').value;
		const textbox5 = document.getElementById('textbox5').value;
		const textbox6 = document.getElementById('textbox6').value;
		const textbox7 = document.getElementById('textbox7').value;

        const data = {
            personagem,
            jogador,
            raca,
            xp,
            pontos,
			con,
			pod,
			inte,
			forc,
			car,
			des,
			atletismotreino,
			atletismooutros,
			culinariatreino,
			culinariaoutros,
			cienciatreino,
			cienciaoutros,
			conjurartreino,
			conjuraroutros,
			crimetreino,
			crimeoutros,
			estrategiatreino,
			estrategiaoutros,
			falatreino,
			falaoutros,
			fortitudetreino,
			fortitudeoutros,
			furtividadetreino,
			furtividadeoutros,
			historiatreino,
			historiaoutros,
			iniciativatreino,
			iniciativaoutros,
			intimidacaotreino,
			intimidacaooutros,
			investigacaotreino,
			investigacaooutros,
			lutatreino,
			lutaoutros,
			medicinatreino,
			medicinaoutros,
			percepcaotreino,
			percepcaooutros,
			pilotagemtreino,
			pilotagemoutros,
			pontariatreino,
			pontariaoutros,
			reflexostreino,
			reflexosoutros,
			attackname1,
			attacktype1,
			attackroll1,
			attackrange1,
			attackdamage1,
			attackcritical1,
			attackname2,
			attacktype2,
			attackroll2,
			attackrange2,
			attackdamage2,
			attackcritical2,
			attackname3,
			attacktype3,
			attackroll3,
			attackrange3,
			attackdamage3,
			attackcritical3,
			attackname4,
			attacktype4,
			attackroll4,
			attackrange4,
			attackdamage4,
			attackcritical4,
			attackname5,
			attacktype5,
			attackroll5,
			attackrange5,
			attackdamage5,
			attackcritical5,
			attackname6,
			attacktype6,
			attackroll6,
			attackrange6,
			attackdamage6,
			attackcritical6,
			attackname7,
			attacktype7,
			attackroll7,
			attackrange7,
			attackdamage7,
			attackcritical7,
			attackname8,
			attacktype8,
			attackroll8,
			attackrange8,
			attackdamage8,
			attackcritical8,
			inv,
			charc,
			textbox1,
			textbox2,
			textbox3,
			textbox4,
			textbox5,
			textbox6,
			textbox7
			
        };

        const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
        saveAs(blob, 'ficha.json');

        console.log('Arquivo JSON baixado com sucesso');
    });

    document.getElementById('load').addEventListener('click', function() {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    });

    document.getElementById('fileInput').addEventListener('change', function(event) {
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
				document.getElementById('pod').value = data.pod;
				document.getElementById('inte').value = data.inte;
				document.getElementById('forc').value = data.forc;
				document.getElementById('car').value = data.car;
				document.getElementById('des').value = data.des;

				document.getElementById('atletismotreino').value = data.atletismotreino;
				document.getElementById('atletismooutros').value = data.atletismooutros;
				
				document.getElementById('culinariatreino').value = data.culinariatreino;
				document.getElementById('culinariaoutros').value = data.culinariaoutros;

				document.getElementById('cienciatreino').value = data.cienciatreino;
				document.getElementById('cienciaoutros').value = data.cienciaoutros;

				document.getElementById('conjurartreino').value = data.conjurartreino;
				document.getElementById('conjuraroutros').value = data.conjuraroutros;
				
				document.getElementById('crimetreino').value = data.crimetreino;
				document.getElementById('crimeoutros').value = data.crimeoutros;
				
				document.getElementById('estrategiatreino').value = data.estrategiatreino;
				document.getElementById('estrategiaoutros').value = data.estrategiaoutros;
				
				document.getElementById('falatreino').value = data.falatreino;
				document.getElementById('falaoutros').value = data.falaoutros;
				
				document.getElementById('fortitudetreino').value = data.fortitudetreino;
				document.getElementById('fortitudeoutros').value = data.fortitudeoutros;
				
				document.getElementById('furtividadetreino').value = data.furtividadetreino;
				document.getElementById('furtividadeoutros').value = data.furtividadeoutros;
				
				document.getElementById('historiatreino').value = data.historiatreino;
				document.getElementById('historiaoutros').value = data.historiaoutros;
				
				document.getElementById('iniciativatreino').value = data.iniciativatreino;
				document.getElementById('iniciativaoutros').value = data.iniciativaoutros;
				
				document.getElementById('intimidacaotreino').value = data.intimidacaotreino;
				document.getElementById('intimidacaooutros').value = data.intimidacaooutros;
				
				document.getElementById('investigacaotreino').value = data.investigacaotreino;
				document.getElementById('investigacaooutros').value = data.investigacaooutros;
				
				document.getElementById('lutatreino').value = data.lutatreino;
				document.getElementById('lutaoutros').value = data.lutaoutros;
				
				document.getElementById('medicinatreino').value = data.medicinatreino;
				document.getElementById('medicinaoutros').value = data.medicinaoutros;
				
				document.getElementById('percepcaotreino').value = data.percepcaotreino;
				document.getElementById('percepcaooutros').value = data.percepcaooutros;
				
				document.getElementById('pilotagemtreino').value = data.pilotagemtreino;
				document.getElementById('pilotagemoutros').value = data.pilotagemoutros;
				
				document.getElementById('pontariatreino').value = data.pontariatreino;
				document.getElementById('pontariaoutros').value = data.pontariaoutros;
				
				document.getElementById('reflexostreino').value = data.reflexostreino;
				document.getElementById('reflexosoutros').value = data.reflexosoutros;
				
				document.getElementById('reflexostreino').value = data.reflexostreino;
				document.getElementById('reflexosoutros').value = data.reflexosoutros;


				document.getElementById('attackname1').value = data.attackname1;
				document.getElementById('attacktype1').value = data.attacktype1;
				document.getElementById('attackroll1').value = data.attackroll1;
				document.getElementById('attackrange1').value = data.attackrange1;
				document.getElementById('attackdamage1').value = data.attackdamage1;
				document.getElementById('attackcritical1').value = data.attackcritical1;

				document.getElementById('attackname2').value = data.attackname2;
				document.getElementById('attacktype2').value = data.attacktype2;
				document.getElementById('attackroll2').value = data.attackroll2;
				document.getElementById('attackrange2').value = data.attackrange2;
				document.getElementById('attackdamage2').value = data.attackdamage2;
				document.getElementById('attackcritical2').value = data.attackcritical2;
				
				document.getElementById('attackname3').value = data.attackname3;
				document.getElementById('attacktype3').value = data.attacktype3;
				document.getElementById('attackroll3').value = data.attackroll3;
				document.getElementById('attackrange3').value = data.attackrange3;
				document.getElementById('attackdamage3').value = data.attackdamage3;
				document.getElementById('attackcritical3').value = data.attackcritical3;
				
				document.getElementById('attackname4').value = data.attackname4;
				document.getElementById('attacktype4').value = data.attacktype4;
				document.getElementById('attackroll4').value = data.attackroll4;
				document.getElementById('attackrange4').value = data.attackrange4;
				document.getElementById('attackdamage4').value = data.attackdamage4;
				document.getElementById('attackcritical4').value = data.attackcritical4;
				
				document.getElementById('attackname5').value = data.attackname5;
				document.getElementById('attacktype5').value = data.attacktype5;
				document.getElementById('attackroll5').value = data.attackroll5;
				document.getElementById('attackrange5').value = data.attackrange5;
				document.getElementById('attackdamage5').value = data.attackdamage5;
				document.getElementById('attackcritical5').value = data.attackcritical5;
				
				document.getElementById('attackname6').value = data.attackname6;
				document.getElementById('attacktype6').value = data.attacktype6;
				document.getElementById('attackroll6').value = data.attackroll6;
				document.getElementById('attackrange6').value = data.attackrange6;
				document.getElementById('attackdamage6').value = data.attackdamage6;
				document.getElementById('attackcritical6').value = data.attackcritical6;
				
				document.getElementById('attackname7').value = data.attackname7;
				document.getElementById('attacktype7').value = data.attacktype7;
				document.getElementById('attackroll7').value = data.attackroll7;
				document.getElementById('attackrange7').value = data.attackrange7;
				document.getElementById('attackdamage7').value = data.attackdamage7;
				document.getElementById('attackcritical7').value = data.attackcritical7;
				
				document.getElementById('attackname8').value = data.attackname8;
				document.getElementById('attacktype8').value = data.attacktype8;
				document.getElementById('attackroll8').value = data.attackroll8;
				document.getElementById('attackrange8').value = data.attackrange8;
				document.getElementById('attackdamage8').value = data.attackdamage8;
				document.getElementById('attackcritical8').value = data.attackcritical8;
				
				document.getElementById('inv').value = data.inv;
				document.getElementById('charc').value = data.charc;
				
				document.getElementById('textbox1').value = data.textbox1;
				document.getElementById('textbox2').value = data.textbox2;
				document.getElementById('textbox3').value = data.textbox3;
				
				document.getElementById('textbox4').value = data.textbox4;
				document.getElementById('textbox5').value = data.textbox5;
				document.getElementById('textbox6').value = data.textbox6;
				document.getElementById('textbox7').value = data.textbox7;
				
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

    // Atualiza a vida máxima no carregamento da página
    window.onload = function () {
        const con = parseInt(conElement.value);
        const vidaMaxima = 7 * con;
        vidaMaximaElement.textContent = vidaMaxima;
        maxLifeInput.value = vidaMaxima;
        maxLife = vidaMaxima;
        currentLifeInput.value = currentLife;
        updateLifebar();
    };

    // Atualiza a vida atual e a barra de vida
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

    // Atualiza a vida máxima
    maxLifeInput.addEventListener('input', function() {
        maxLife = parseInt(maxLifeInput.value);
        vidaMaximaElement.textContent = maxLife;
        updateLifebar();
    });

    // Atualiza a barra de vida
    function updateLifebar() {
        const percentage = (currentLife / maxLife) * 100;
        lifebar.style.backgroundSize = `${percentage}% 100%`;
        const healthBar = document.querySelector('.health-bar');
        healthBar.style.width = `${percentage}%`;
        currentLifeInput.innerText = currentLife;
    }


    // Atualiza os valores de vida máxima e vida atual quando o atributo de constituição for alterado
    conElement.addEventListener('input', function() {
    const con = parseInt(conElement.value);
    const vidaMaxima = 7 * con;
    vidaMaximaElement.textContent = vidaMaxima;
    maxLifeInput.value = vidaMaxima;
    maxLife = vidaMaxima;
    const vidaAtual = currentLifeInput.value; // Adicionei esta linha para obter o valor atual da vida atual
    currentLifeInput.value = vidaAtual;
    updateLifebar();
});

// Adicionei este manipulador de eventos para atualizar a vida máxima e a barra de vida quando a vida atual for alterada manualmente
currentLifeInput.addEventListener('input', function() {
    const vidaAtual = parseInt(currentLifeInput.value);
    currentLife = vidaAtual;
    updateLifebar();
});

    // Atualiza a barra de vida quando os botões de vida forem clicados
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

// Atualiza os valores de PH máximo e PH atual quando o atributo de poderes for alterado
const podElement = document.getElementById('pod');
podElement.addEventListener('input', function() {
    phMax = 4 * parseInt(podElement.value);
    phMaxInput.value = phMax;
    phCurrent = phMax;
    phCurrentInput.value = phCurrent;
    updatePhBar();
});

// Função para atualizar a barra de PH
function updatePhBar() {
    const phBar = document.querySelector('.ph-bar');
    const phCurrentInput = document.querySelector('.current-ph');
    const phMaxInput = document.querySelector('.max-ph');
    const phCurrent = parseInt(phCurrentInput.value);
    const phMax = parseInt(phMaxInput.value);
    const phPercentage = (phCurrent / phMax) * 100;
    phBar.style.width = phPercentage + '%';
}

// Eventos para adicionar e subtrair PH
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

// Atualiza a barra de PH quando a página é carregada
window.onload = function () {
    const pod = parseInt(podElement.value);
    const phMaxima = 4 * pod;
    phMaxInput.value = phMaxima;
    phMax = phMaxima;
    phCurrent = phMaxima;
    phCurrentInput.value = phCurrent;
    updatePhBar();
};

// Atualiza os valores de PH máximo e PH atual quando o atributo de poderes for alterado
podElement.addEventListener('input', function() {
    const pod = parseInt(podElement.value);
    const phMaxima = 4 * pod;
    phMaxInput.value = phMaxima;
    phMax = phMaxima;
    phCurrent = phMaxima;
    phCurrentInput.value = phCurrent;
    updatePhBar();
});

// Atualiza a barra de PH quando o valor de PH atual for alterado manualmente
phCurrentInput.addEventListener('input', function() {
    const phCurrent = parseInt(phCurrentInput.value);
    updatePhBar();
});

// Atualiza a barra de PH quando o valor de PH máximo for alterado manualmente
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

});