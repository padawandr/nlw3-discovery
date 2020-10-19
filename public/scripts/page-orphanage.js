/* map */

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const spanLat = document.querySelector("span[data-lat]");
const spanLng = document.querySelector("span[data-lng]");

const map = L.map("mapid", options).setView([spanLat.dataset.lat, spanLng.dataset.lng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([spanLat.dataset.lat, spanLng.dataset.lng], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const currentButton = event.currentTarget;

  // remove all .active classes
  const buttons = document.querySelectorAll(".thumbnails button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // select the clicked image
  const image = currentButton.children[0];
  const imageContainer = document.querySelector(".images img");

  // add the clicked image to the container
  imageContainer.src = image.src;

  // add .active class to currentButton
  currentButton.classList.add("active");
}
