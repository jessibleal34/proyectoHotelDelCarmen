import { Storage } from './storage.js';

import {
  calculateNights,
  formatCurrency,
  generateId
} from './utils.js';

import { requireAuth } from './guards.js';

requireAuth();

const searchForm = document.getElementById('searchForm');
const availableRooms = document.getElementById('availableRooms');

if (searchForm) {

  searchForm.addEventListener('submit', event => {

    event.preventDefault();

    const rooms = Storage.get('rooms');
    const reservations = Storage.get('reservations');

    const checkIn =
      document.getElementById('checkIn').value;

    const checkOut =
      document.getElementById('checkOut').value;

    const guests =
      Number(document.getElementById('guests').value);

    const available = rooms.filter(room => {

      const overlaps = reservations.some(reservation => {

        return (
          reservation.roomId === room.id &&
          checkIn < reservation.checkOut &&
          checkOut > reservation.checkIn
        );
      });

      return room.capacity >= guests && !overlaps;
    });

    renderRooms(
      available,
      checkIn,
      checkOut,
      guests
    );
  });
}

function renderRooms(
  rooms,
  checkIn,
  checkOut,
  guests
) {

  availableRooms.innerHTML = '';

  if (rooms.length === 0) {

    availableRooms.innerHTML =
      '<p>No hay habitaciones disponibles.</p>';

    return;
  }

  rooms.forEach(room => {

    const nights =
      calculateNights(checkIn, checkOut);

    const total = nights * room.price;

    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
      <div class="card-content">

        <h3>${room.name}</h3>

        <p><strong>Camas:</strong> ${room.beds}</p>

        <p><strong>Capacidad:</strong> ${room.capacity}</p>

        <p>${room.services}</p>

        <p><strong>Total:</strong>
        ${formatCurrency(total)}</p>

        <button data-id="${room.id}">
          Reservar
        </button>

      </div>
    `;

    card.querySelector('button')
      .addEventListener('click', () => {

        reserveRoom(
          room.id,
          checkIn,
          checkOut,
          guests,
          total
        );
      });

    availableRooms.appendChild(card);
  });
}

function reserveRoom(
  roomId,
  checkIn,
  checkOut,
  guests,
  total
) {

  const session =
    JSON.parse(localStorage.getItem('session'));

  if (!session) {

    alert('Debes iniciar sesión');

    window.location.href = 'login.html';

    return;
  }

  const reservations =
    Storage.get('reservations');

  const stillAvailable =
    !reservations.some(reservation => {

      return (
        reservation.roomId === roomId &&
        checkIn < reservation.checkOut &&
        checkOut > reservation.checkIn
      );
    });

  if (!stillAvailable) {

    alert('La habitación ya no está disponible');

    return;
  }

  const reservation = {

    id: generateId(),

    userId: session.id,

    roomId,

    checkIn,
    checkOut,

    guests,
    total
  };

  reservations.push(reservation);

  Storage.save('reservations', reservations);

  alert('Reserva realizada correctamente');
}