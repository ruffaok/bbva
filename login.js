document.getElementById('loginForm').addEventListener('submit', function(event) {
    const docType = document.getElementById('docType').value;
    const docNumber = document.getElementById('docNumber').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!docType || !docNumber || !username || !password) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault(); // Evita el envío del formulario
    }
});
