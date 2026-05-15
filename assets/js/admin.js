import { Storage } from './storage.js';

import {
  createRoom,
  getRooms,
  deleteRoom
} from './rooms.js';

import { generateId } from './utils.js';
import { requireAdmin } from './guards.js';

requireAdmin();

const roomForm =
  document.getElementById('roomForm');

const roomsList =
  document.getElementById('roomsList');

const reservationsList =
  document.getElementById('reservationsList');

renderRooms();
renderReservations();

roomForm.addEventListener('submit', event => {

  event.preventDefault();

  createRoom({

    name: roomName.value,

    beds: Number(roomBeds.value),

    capacity: Number(roomCapacity.value),

    price: Number(roomPrice.value),

    services: roomServices.value
  });

  roomForm.reset();

  renderRooms();
});

function renderRooms() {

  const rooms = getRooms();

  roomsList.innerHTML = '';

  rooms.forEach(room => {

    const div = document.createElement('div');

    div.classList.add('admin-card');

    div.innerHTML = `
      <div class="card-content">

        <h3>${room.name}</h3>

        <p>${room.capacity} personas</p>

        <button data-id="${room.id}">
          Eliminar
        </button>

      </div>
    `;

    div.querySelector('button')
      .addEventListener('click', () => {

        deleteRoom(room.id);

        renderRooms();
      });

    roomsList.appendChild(div);
  });
}

function renderReservations() {

  const reservations =
    Storage.get('reservations');

  reservationsList.innerHTML = '';

  reservations.forEach(reservation => {

    const div = document.createElement('div');

    div.classList.add('admin-card');

    div.innerHTML = `
      <div class="card-content">

        <p><strong>ID:</strong>
        ${reservation.id}</p>

        <p><strong>Entrada:</strong>
        ${reservation.checkIn}</p>

        <p><strong>Salida:</strong>
        ${reservation.checkOut}</p>

        <button data-id="${reservation.id}">
          Cancelar
        </button>

      </div>
    `;

    div.querySelector('button')
      .addEventListener('click', () => {

        cancelReservation(reservation.id);
      });

    reservationsList.appendChild(div);
  });
}

function cancelReservation(id) {

  const reservations =
    Storage.get('reservations')
      .filter(reservation =>
        reservation.id !== id
      );

  Storage.save('reservations', reservations);

  renderReservations();

  alert('Reserva cancelada');
}