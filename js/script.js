function increase (contentId) {
    const content = document.getElementById(contentId);
    const currentSize = parseFloat(window.getComputedStyle(content).fontSize);
    content.style.fontSize = `${currentSize + 2}px`;
    console.log('Aumentou a fonte de', contentId)
}

function decrease (contentId) {
    const content = document.getElementById(contentId);
    const currentSize = parseFloat(window.getComputedStyle(content).fontSize);
    content.style.fontSize = `${currentSize - 2}px`;
    console.log('Diminuiu a fonte de', contentId)
}

function changeImage () {
    var image = document.getElementById('image-pet').src='img/img-content2.png';
}
function restoreImage () {
    var image = document.getElementById('image-pet').src='img/img-content1.png';
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cpf = document.getElementById('cpf').value;
    const animal = document.getElementById('animal').value;
    const especie = document.getElementById('raca').value;
    const raca = document.getElementById('especie').value;
    const date = document.getElementById('date').value;


    // Verifica se todos os campos obrigatórios estão preenchidos

    if (name === '' || email === '' || phone === '' || address === '' || cpf === '' || animal === '' || especie === '' || raca === '' || date === '') {
        alert('Port favor, preecnha todos os campos obrigatórios.');
        return false;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Email inválido.'
        return false;
    }

    // Validação do CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        document.getElementById('cpfError').textContent = 'Cpf inválido';
        return false;
    }

    return true;
}