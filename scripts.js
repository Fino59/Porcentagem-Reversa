const percentResult = document.querySelector('.output-contrary');
const amountResult = document.querySelector('.output-amount'); 

function contrary() {
    let discount = document.getElementById('discount').value;
    let totalValue = document.getElementById('totalValue').value;
    if (discount === "") {
        alert('Digite um número em "Valor de desconto em R$" para calcular.')
    } else if (totalValue === "") {
        alert('Digite um número em "Valor total em R$" para calcular.')
    } else {
        let percent = (discount / totalValue) * 100;
        percentResult.textContent = `O total da porcentagem do desconto é: ${percent.toFixed(1)}%`;    
    }
    
}

function amount() {
    let value = document.getElementById('value').value;
    let percent = document.getElementById('percent').value;
    if (value === "") {
        alert('Digite um número em "Valor atual em R$" para calcular.')
    } else if (percent === "") {
        alert('Digite um número em "Total da porcentagem" para calcular.')
    } else {
        let result = (value / (percent / 100)).toFixed(2);
        amountResult.textContent = ` O total de 100% do  produto é de: R$ ${result}`    
    }
    
}

function startsModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.add('show');
        modal.addEventListener('click', (e) => {
            if(e.target.className == 'close') {
                modal.classList.remove('show');
            }
        });
    }
} 

const modalPercentContrary = document.querySelector('.modal-percent-contrary');
modalPercentContrary.addEventListener('click', () => startsModal('modal-percent-contrary'));

const modalPercentAmount = document.querySelector('.modal-percent-amount');
modalPercentAmount.addEventListener('click', () => startsModal ('modal-percent-amount'));