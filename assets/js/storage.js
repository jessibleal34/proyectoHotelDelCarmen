export const Storage = {

  /**
   * Guardar información en LocalStorage
   * @param {string} key
   * @param {any} data
   */
  save(key, data) {

    localStorage.setItem(
      key,
      JSON.stringify(data)
    );
  },

  /**
   * Obtener información del LocalStorage
   * @param {string} key
   * @returns {Array|Object}
   */
  get(key) {

    const data =
      localStorage.getItem(key);

    return data
      ? JSON.parse(data)
      : [];
  },

  /**
   * Eliminar una propiedad del LocalStorage
   * @param {string} key
   */
  remove(key) {

    localStorage.removeItem(key);
  },

  /**
   * Limpiar completamente el LocalStorage
   */
  clear() {

    localStorage.clear();
  }

};