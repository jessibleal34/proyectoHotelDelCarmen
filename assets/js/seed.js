
import { Storage } from './storage.js';
import { generateId } from './utils.js';

export function initSeed() {

  const rooms = Storage.get('rooms');

  if (rooms.length === 0) {

    Storage.save('rooms', [
      {
        id: generateId(),
        name: "Suite Imperial",
        beds: 2,
        capacity: 4,
        price: 450000,
        services: "WiFi, Jacuzzi, Minibar, Vista al mar"
      },
      {
        id: generateId(),
        name: "Suite Deluxe",
        beds: 1,
        capacity: 2,
        price: 320000,
        services: "WiFi, Minibar, Room Service"
      },
      {
        id: generateId(),
        name: "Suite Junior",
        beds: 1,
        capacity: 2,
        price: 250000,
        services: "WiFi, Desayuno incluido"
      }
    ]);
  }
}
