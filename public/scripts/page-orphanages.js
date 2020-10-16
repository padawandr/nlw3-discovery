const map = L.map("mapid").setView([-15.7932834, -47.8865424], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minHeight: 240,
  minWidth: 240,
}).setContent(
  'Nosso Lar <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg" alt=""></a>'
);

L.marker([-15.8576894, -47.9604377], { icon }).addTo(map).bindPopup(popup);
