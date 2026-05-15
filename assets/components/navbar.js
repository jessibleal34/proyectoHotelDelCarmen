class AppNavbar extends HTMLElement {

  connectedCallback() {

    const session =
      JSON.parse(localStorage.getItem('session'));

    this.innerHTML = `

      <nav class="navbar">

        <h2 class="logo">
          ✨ Rincón del Carmen
        </h2>

        <div class="nav-links">

          <a href="index.html">
            Inicio
          </a>

          <a href="reservas.html">
            Reservas
          </a>

          <a href="contacto.html">
            Contacto
          </a>

          <a href="admin.html">
            Admin
          </a>

          ${
            session
            ?
            `
              <button id="logoutBtn">
                Cerrar sesión
              </button>
            `
            :
            `
              <a href="login.html">
                Login
              </a>
            `
          }

        </div>

      </nav>
    `;

    const logoutBtn =
      this.querySelector('#logoutBtn');

    if (logoutBtn) {

      logoutBtn.addEventListener('click', () => {

        localStorage.removeItem('session');

        alert('Sesión cerrada');

        window.location.href = 'login.html';
      });
    }
  }
}

customElements.define(
  'app-navbar',
  AppNavbar
);