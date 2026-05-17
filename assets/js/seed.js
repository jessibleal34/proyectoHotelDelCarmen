import { Storage } from './storage.js';
import { generateId } from './utils.js';

export function seedRooms() {

  const rooms = Storage.get('rooms');

  // Evita duplicar habitaciones
  if (rooms.length > 0) return;

  const defaultRooms = [

    {
      id: generateId(),

      name: 'Suite Imperial',

      beds: 2,

      capacity: 4,

      price: 550000,

      services:
        'WiFi, Jacuzzi, Minibar, Room Service',

      image:
        'assets/images/room1.jpg'
    },

    {
      id: generateId(),

      name: 'Suite Deluxe',

      beds: 1,

      capacity: 2,

      price: 350000,

      services:
        'WiFi, TV Smart, Aire acondicionado',

      image:
        'assets/images/room2.jpg'
    },

    {
      id: generateId(),

      name: 'Suite Premium',

      beds: 3,

      capacity: 6,

      price: 700000,

      services:
        'Piscina privada, Jacuzzi, WiFi, Minibar',

      image:
        'assets/images/room3.jpg'
    }

  ];

  Storage.save(
    'rooms',
    defaultRooms
  );

  // ADMIN POR DEFECTO
  const users = Storage.get('users');

  if (users.length === 0) {

    users.push({

      id: generateId(),

      fullname: 'Administrador',

      identification: '0001',

      nationality: 'Colombia',

      phone: '3000000000',

      email: 'admin@hotel.com',

      password: 'admin123',

      isAdmin: true
    });

    Storage.save('users', users);
  }

  // RESERVAS VACÍAS
  if (!localStorage.getItem('reservations')) {

    Storage.save(
      'reservations',
      []
    );
  }
}