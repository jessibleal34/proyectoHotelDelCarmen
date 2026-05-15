import { Storage } from './storage.js';
import { generateId } from './utils.js';

export function seedRooms() {

  const rooms = Storage.get('rooms');

  if (rooms.length > 0) return;

  const defaultRooms = [

    {
      id: generateId(),
      name: 'Suite Imperial',
      beds: 2,
      capacity: 4,
      price: 550000,
      services: 'WiFi, Jacuzzi, Minibar, Room Service'
    },

    {
      id: generateId(),
      name: 'Suite Deluxe',
      beds: 1,
      capacity: 2,
      price: 350000,
      services: 'WiFi, TV Smart, Aire acondicionado'
    },

    {
      id: generateId(),
      name: 'Suite Premium',
      beds: 3,
      capacity: 6,
      price: 700000,
      services: 'Piscina privada, Jacuzzi, WiFi, Minibar'
    }

  ];

  Storage.save('rooms', defaultRooms);
}