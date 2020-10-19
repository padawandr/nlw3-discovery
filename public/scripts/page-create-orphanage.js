const map = L.map("mapid").setView([-15.7932834, -47.8865424], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// create and add markers
let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove previous icon
  marker && map.removeLayer(marker);

  // add new icon
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

function addPhotoField() {
  const photoContainer = document.querySelector("#images");
  const fieldContainer = document.querySelectorAll(".new-upload");
  const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(
    true
  );
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  input.value = "";

  photoContainer.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldContainer = document.querySelectorAll(".new-upload");

  if (fieldContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }
  span.parentNode.remove();
}

function toggleSelect(event) {
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  const currentButton = event.currentTarget;
  currentButton.classList.add("active");

  const input = document.querySelector("[name='open_on_weekends']");
  input.value = currentButton.dataset.value;
}
