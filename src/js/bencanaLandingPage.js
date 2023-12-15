/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import dataBencana from '../data/dataBencana';

class BencanaHome {
  constructor() {
    this.createCardBencana = this.createCardBencana.bind(this);
  }

  createCardBencana() {
    const bencanaHome = document.querySelector('#bencana-home');
    bencanaHome.innerHTML = '';

    const content = dataBencana.map((data) => {
      if (data) {
        return `
        <div class="col">
        <div class="card mb-3 mx-auto hover-card">
            <img class="card-img-top"
                src=${data.imageCard}
                alt="Gambar Bencana" style="max-height: 250px;">
            <div class="card-body text-white color2">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.description}</p>
            </div>
        </div>
    </div>
     `;
      }
      return '';
    });
    bencanaHome.innerHTML = content.join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const bencanaHome = new BencanaHome();
  bencanaHome.createCardBencana();
});

export default BencanaHome;
