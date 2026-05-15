import '../components/navbar.js';
import '../components/footer.js';

import { Storage } from './storage.js';
import { seedRooms } from './seed.js';
import { formatCurrency } from './utils.js';

seedRooms();

const roomsContainer = document.getElementById('roomsContainer');

if (roomsContainer) {

  const rooms = Storage.get('rooms');

  rooms.forEach(room => {

    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
        alt="${room.name}"
      >

      <div class="card-content">

        <h3>${room.name}</h3>

        <p><strong>Camas:</strong> ${room.beds}</p>

        <p><strong>Capacidad:</strong> ${room.capacity}</p>

        <p><strong>Servicios:</strong> ${room.services}</p>

        <p><strong>Precio:</strong> ${formatCurrency(room.price)}</p>

      </div>
    `;

    roomsContainer.appendChild(card);
  });
}