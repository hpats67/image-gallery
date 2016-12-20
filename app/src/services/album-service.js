albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/albums`)
        .then(res => res.data);
    },
    add(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data);
    },
    remove(album) {
      return $http.delete(`${apiUrl}/albums/${album.id}`)
      .then(res => res.data);
    }
  };
}