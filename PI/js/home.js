function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "/PI/index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}