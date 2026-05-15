import { Storage } from './storage.js';
import { generateId } from './utils.js';

export function getRooms() {
  return Storage.get('rooms');
}

export function createRoom(roomData) {

  const rooms = getRooms();

  const newRoom = {
    id: generateId(),
    ...roomData
  };

  rooms.push(newRoom);

  Storage.save('rooms', rooms);

  return newRoom;
}

export function deleteRoom(roomId) {

  const rooms = getRooms().filter(room => room.id !== roomId);

  Storage.save('rooms', rooms);
}

export function updateRoom(roomId, updatedData) {

  const rooms = getRooms();

  const updatedRooms = rooms.map(room => {

    if (room.id === roomId) {

      return {
        ...room,
        ...updatedData
      };
    }

    return room;
  });

  Storage.save('rooms', updatedRooms);
}