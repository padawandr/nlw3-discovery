/* map */

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map("mapid", options).setView([-15.8576894, -47.9604377], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([-15.8576894, -47.9604377], { icon }).addTo(map);

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
  const imageContainer = document.querySelector(".photo img");

  // add the clicked image to the container
  imageContainer.src = image.src;

  // add .active class to currentButton
  currentButton.classList.add("active");
}
