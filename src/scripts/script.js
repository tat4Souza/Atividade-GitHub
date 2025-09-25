//Header Component
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="header">
      <div class="header__content">
        <figure class="logo">
          <a href="index.html">
            <img src="./images/Logo-uni 1.png" alt="Logo universidade" />
          </a>
        </figure>
        <nav class="buttons">
          <a href="index.html" class="button--header">Home</a>
          <a href="quem_somos.html" class="button--header">Sobre</a>
          <a href="contato.html" class="button--header">Contato</a>
        </nav>
      </div>
    </header>`;
  }
}
customElements.define("t-header", THeader);

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".button--header");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    link.classList.remove("active");
    if (currentPath.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

//Footer Component
class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer">
      <div class="footer-container">
        <div class="custom-shape-divider-top-1757773396">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <figure>
          <img src="./images/Logo-uni-branco.png" alt="Universidade" />
        </figure>

        <ul class="buttons--footer">
          <li><i class="bx bx-envelope-open"></i> unes@gmail.com</li>
          <li><i class="bxl bx-instagram"></i> @unes_sjc</li>
          <li><i class="bxl bx-whatsapp"></i> (12) 55555-5555</li>
          <li><i class="bxl bx-linkedin-square"></i> @unesUniversidade</li>
        </ul>

        <p>© Todos os direitos reservados</p>
      </div>
    </footer>`;
  }
}
customElements.define("t-footer", TFooter);

class TInputGroup extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title");
    const placeholder = this.getAttribute("placeholder");
    this.innerHTML = `<div class="input-group">
              <label for="${title}">${title}:</label>
              <input type="text" placeholder="${placeholder}" />
            </div>`;
  }
}
customElements.define("t-input-group", TInputGroup);

class TContactInfo extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title");
    const icon = this.getAttribute("icon");
    const info = this.getAttribute("info");
    this.innerHTML = ` <div class="contact-info">
            <h5>${title}</h5>
            <span><i class="${icon}"></i>${info}</span>
          </div>`;
  }
}
customElements.define("t-contact-info", TContactInfo);

class TCampus extends HTMLElement {
  connectedCallback() {
    const campus = this.getAttribute("campus");
    this.innerHTML = ` <div class="campus">
            <h5>Campus ${campus}</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              bibendum, sem a luctus finibus, nibh elit tristique leo, nec
              ullamcorper sem elit a ex.
            </p>
          </div>`;
  }
}
customElements.define("t-campus", TCampus);

class TButton extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label");
    const className = this.getAttribute("className");
    this.innerHTML = `<button class='button ${className}'>${label}</button>`;
  }
}
customElements.define("t-button", TButton);

class TMotivo extends HTMLElement {
  connectedCallback() {
    const number = this.getAttribute("number");
    this.innerHTML = `<div class='motivos'><span class='motivos__num'>${number}.</span> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <p></div>`;
  }
}
customElements.define("t-motivos", TMotivo);

// Swiper

var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1188: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
