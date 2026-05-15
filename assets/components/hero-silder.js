class HeroSlider extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `

      <section class="hero-slider">

        <div class="slide active">

          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            alt="Hotel"
          >

          <div class="slide-content">

            <h1>
              Bienvenido al Lujo
            </h1>

            <p>
              Vive una experiencia premium
            </p>

          </div>

        </div>

      </section>
    `;
  }
}

customElements.define(
  'hero-slider',
  HeroSlider
);