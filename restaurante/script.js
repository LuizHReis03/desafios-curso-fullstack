document.getElementById("botão").addEventListener("click", function() {
    // Número de telefone para o qual você deseja enviar a mensagem
    var phoneNumber = "5568999732168";
    
    // Montando o link do WhatsApp com o número de telefone
    var whatsappLink = "https://api.whatsapp.com/send?phone=5568999732168";
    
    // Abrindo o link do WhatsApp em uma nova janela
    window.open(whatsappLink);
});