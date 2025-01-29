function abrirPopupEmail(event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('emailPopup').style.display = 'block';
}

function fecharPopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('emailPopup').style.display = 'none';
}

function enviarFormulario() {
    const form = document.getElementById('meuFormulario');
    const formData = new FormData(form);
    const emailDestino = document.getElementById('emailDestino').value;
    
    if (!emailDestino) {
        alert('Por favor, insira um email válido');
        return;
    }

    // Cria o corpo do email em formato mais legível
    let corpoEmail = '';
    formData.forEach((value, key) => {
        corpoEmail += `${key}: ${value}\n`;
    });

    // Configura o assunto do email
    const assunto = 'Dados do Formulário';

    // Cria o link mailto com todos os dados
    const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;

    // Abre o cliente de email padrão
    window.location.href = mailtoLink;

    // Fecha o popup
    fecharPopup();

    // Opcional: Limpa o formulário após envio
    form.reset();
}

// Fechar popup clicando fora dele
document.getElementById('overlay').addEventListener('click', fecharPopup);
