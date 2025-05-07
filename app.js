document.addEventListener("DOMContentLoaded", function () {
  const filters = [
    { id: 1, label: "Hurricane Vehicles" },
    { id: 2, label: "Buy Now" },
    { id: 3, label: "Run & Drive" },
    { id: 4, label: "Clear Title" },
    { id: 5, label: "Auction Today" },
    { id: 6, label: "Auction Tomorrow" },
    { id: 7, label: "Available to Public" },
    { id: 8, label: "Timed Auctions" },
    { id: 9, label: "Rental Vehicles" }
  ];

  let cars = [
    {
      id: 0,
      title: "2015 BMW 328 2.0T xDrive",
      stock: "41041216",
      status: "Run & Drive",
      info: "Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7FN023627",
      image: "image/cars/BMW_328.jpg"
    },
    {
      id: 1,
      title: "2017 BMW 330 2.0T xDrive",
      stock: "41041216",
      status: "Run & Drive",
      info: "Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7FN023627",
      image: "image/cars/BMW_330.jpg"
    },
    {
      id: 2,
      title: "2020 BMW 530 2.0T",
      stock: "41041216",
      status: "Run & Drive",
      info: "Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7FN023627",
      image: "image/cars/BMW_530.jpg"
    },
    {
      id: 3,
      title: "2014 BMW X5 3.0 xDrive",
      stock: "41001229",
      status: "Deployed",
      info: "Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7GN089449",
      image: "image/cars/BMW_X5.jpg"
    },
    {
      id: 4,
      title: "2020 BMW X3 2.0 xDrive",
      stock: "41001229",
      status: "Deployed",
      info: "Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7GN089449",
      image: "image/cars/BMW_X3.jpg"
    },
    {
      id: 5,
      title: "2021 BMW X7 3.0 xDrive",
      stock: "41001229",
      status: "Deployed",
      info: "Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7GN089449",
      image: "image/cars/BMW_X7.jpg"
    },
    {
      id: 6,
      title: "2015 BMW 535 3.0",
      stock: "40974945",
      status: "Stationary",
      info: "Salvage | Left Front Collision<br>153,725 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC9FN050280",
      image: "image/cars/BMW_535.jpg"
    }
  ];

  let currentId = cars.length;

  const container = document.getElementById('buttons-filters');
  const carContainer = document.querySelector('.car-item-container');
  const modalOverlay = document.getElementById("modal-overlay");
  const addCarBtn = document.getElementById("add-car-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const carForm = document.getElementById("car-form");
  const closeModalIcon = document.getElementById('modal-close-icon');

  filters.forEach(filter => {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = filter.label;
    button.dataset.id = filter.id;
    container.appendChild(button);
  });

  addCarBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add("hidden");
  });
  
  closeModalIcon.addEventListener("click", () => {
    modalOverlay.classList.add("hidden");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add("hidden");
    }
  });

  carForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newCar = {
      id: currentId++,
      title: document.getElementById("new-car-title").value,
      stock: document.getElementById("new-car-stock").value,
      status: document.getElementById("new-car-status").value,
      info: document.getElementById("new-car-info").value,
      image: document.getElementById("new-car-image").value
    };

    cars.unshift(newCar);
    renderCars();
    modalOverlay.classList.add("hidden");
    carForm.reset();
  });

  function renderCars() {
    carContainer.innerHTML = "";
    cars.forEach(car => {
      const carItem = document.createElement('div');
      carItem.classList.add('car-item');
      carItem.style.position = "relative";

      carItem.innerHTML = `
        <style>
          .delete-car {
            color: #999;
            transition: all 0.2s ease;
          }

          .delete-car:hover {
            color: red !important;
            transform: scale(1.2);
          }
        </style>
        <button class="delete-car" data-id="${car.id}" style="
          z-index: 1;
          position: absolute;
          top: 3px;
          right: -4px;
          background: transparent;
          border: none;
          font-size: 27px;
          cursor: pointer;
        " title="Delete">&times;</button>

        <div class="image-wrapper">
          <img src="${car.image}" alt="Car Image">
        </div>
        <div class="car-details">
          <div class="car-header">
            <div>
              <div class="car-title">${car.title}</div>
              <div class="car-subtitle">Stock #: ${car.stock}</div>
            </div>
            <span class="status-badge">${car.status}</span>
          </div>
          <div class="car-info">${car.info}</div>
          <div class="car-actions">
            <span class="reserve-price">Reserve price</span>
            <a href="#" class="view-sale">View</a>
          </div>
        </div>
      `;

      carItem.querySelector(".delete-car").addEventListener("click", () => {
        const confirmDelete = confirm("Ви впевнені, що хочете видалити цей автомобіль?");
        if (confirmDelete) {
          cars = cars.filter(c => c.id !== car.id);
          renderCars();
        }
      });

      carContainer.appendChild(carItem);
    });
  }

  renderCars();
});
