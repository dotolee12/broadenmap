const map = L.map('map').setView([37.5665, 126.9780], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

let path = [];

navigator.geolocation.watchPosition(position => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const timestamp = new Date().toISOString();

  path.push({ lat, lng, timestamp });
  L.marker([lat, lng]).addTo(map).bindPopup("현재 위치").openPopup();
  map.setView([lat, lng], 15);

  if (path.length > 1) {
    const latlngs = path.map(p => [p.lat, p.lng]);
    L.polyline(latlngs, { color: 'white', weight: 4 }).addTo(map);
  }
}, error => {
  alert('위치 정보를 불러올 수 없습니다.');
}, {
  enableHighAccuracy: true,
  maximumAge: 0
});