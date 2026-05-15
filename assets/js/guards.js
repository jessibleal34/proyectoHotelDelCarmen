export function requireAuth() {

  const session = JSON.parse(localStorage.getItem('session'));

  if (!session) {
    window.location.href = 'login.html';
  }
}

export function requireAdmin() {

  const session = JSON.parse(localStorage.getItem('session'));

  if (!session || !session.isAdmin) {

    alert('No tienes permisos');

    window.location.href = 'index.html';
  }
}