document.addEventListener("DOMContentLoaded", function () {
  const filters = [
    { id: 1, label: 'Hurricane Vehicles' },
    { id: 2, label: 'Buy Now' },
    { id: 3, label: 'Run & Drive' },
    { id: 4, label: 'Clear Title' },
    { id: 5, label: 'Auction Today' },
    { id: 6, label: 'Auction Tomorrow' },
    { id: 7, label: 'Available to Public' },
    { id: 8, label: 'Timed Auctions' },
    { id: 9, label: 'Rental Vehicles' }
  ];

  const cars = [
    {
      id: 0,
      title: '2015 BMW 328 2.0T xDrive',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/BMW_328.jpg'
    },
    {
      id: 1,
      title: '2017 BMW 330 2.0T xDrive',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/BMW_330.jpg'
    },
    {
      id: 2,
      title: '2020 BMW 530 2.0T',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/BMW_530.jpg'
    },
    {
      id: 3,
      title: '2014 BMW X5 3.0 xDrive',
      stock: '41001229',
      status: 'Deployed',
      info: 'Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7GN089449',
      image: 'image/cars/BMW_X5.jpg'
    },
    {
      id: 4,
      title: '2020 BMW X3 2.0 xDrive',
      stock: '41001229',
      status: 'Deployed',
      info: 'Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7GN089449',
      image: 'image/cars/BMW_X3.jpg'
    },
    {
      id: 5,
      title: '2021 BMW X7 3.0 xDrive',
      stock: '41001229',
      status: 'Deployed',
      info: 'Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7GN089449',
      image: 'image/cars/BMW_X7.jpg'
    },
    {
      id: 6,
      title: '2015 BMW 535 3.0',
      stock: '40974945',
      status: 'Stationary',
      info: 'Salvage | Left Front Collision<br>153,725 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC9FN050280',
      image: 'image/cars/BMW_535.jpg'
    },
    {
      id: 7,
      title: '2011 AUDI A4 2.0T',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/AUDI_A4.jpg'
    },
    {
      id: 8,
      title: '2013 AUDI A7',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/AUDI_A7.jpg'
    },
    {
      id: 9,
      title: '2005 FORD Mondeo',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/FORD_Mondeo.jpg'
    },
    {
      id: 10,
      title: '2012 FORD Focus',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/FORD_Focus.jpg'
    },
    {
      id: 11,
      title: '2020 MAZDA 6',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/MAZDA_6.jpg'
    },
    {
      id: 12,
      title: '2021 MAZDA CX-5',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/MAZDA_CX-5.jpg'
    },
    {
      id: 13,
      title: '2012 TOYOTA PRADO',
      stock: '41041216',
      status: 'Run & Drive',
      info: 'Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC',
      vin: 'WAUGAFC7FN023627',
      image: 'image/cars/TOYOTA_PRADO.jpg'
    },
  ];

  let lastCarId = cars[cars.length - 1].id

  const container = document.getElementById('buttons-filters');
  const carContainer = document.querySelector('.car-item-container');
  const modalOverlay = document.getElementById('modal-overlay');
  const addCarBtn = document.getElementById('add-car-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const carForm = document.getElementById('car-form');
  const closeModalIcon = document.getElementById('modal-close-icon');
  const editModalOverlay = document.getElementById('edit-modal-overlay');
  const editCarForm = document.getElementById('edit-car-form');
  const editModalCloseIcon = document.getElementById('edit-modal-close-icon');
  const cancelBtn = document.getElementById('cancel-edit-btn');
  const yearSelect = document.getElementById('filter-year');
  const brandSelect = document.getElementById('filter-brand');

  filters.forEach(filter => {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = filter.label;
    button.dataset.id = filter.id;
    container.appendChild(button);
  });

  addCarBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
  });
  
  closeModalIcon.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add('hidden');
    }
  });

  carForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newCar = {
      id: lastCarId++,
      title: document.getElementById('new-car-title').value,
      stock: document.getElementById('new-car-stock').value,
      status: document.getElementById('new-car-status').value,
      info: document.getElementById('new-car-info').value,
      image: document.getElementById('new-car-image').value
    };

    cars.unshift(newCar);
    renderCars();
    modalOverlay.classList.add('hidden');
    carForm.reset();
  });

  const years = [...new Set(cars.map(car => car.title.split(' ')[0]))];
  const brands = [...new Set(cars.map(car => car.title.split(' ')[1]))];

  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  brands.forEach(brand => {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });

  yearSelect.addEventListener('change', filterCars);
  brandSelect.addEventListener('change', filterCars);

  function filterCars() {
    const selectedYear = yearSelect.value;
    const selectedBrand = brandSelect.value;

    const filteredCars = cars.filter(car => {
      const matchesYear = selectedYear ? car.title.startsWith(selectedYear) : true;
      const matchesBrand = selectedBrand ? car.title.includes(selectedBrand) : true;
      return matchesYear && matchesBrand;
    });

    renderCars(filteredCars);
  }

  function renderCars(carsToRender = cars) {
    carContainer.innerHTML = "";
    carsToRender.forEach(car => {
      const carItem = document.createElement('div');
      carItem.classList.add('car-item');
      carItem.style.position = 'relative';

      carItem.innerHTML = `
        <style>
          .delete-car, .edit-car {
            color: #999;
            transition: all 0.2s ease;
          }

          .delete-car:hover {
            color: red !important;
            transform: scale(1.2);
          }

          .edit-car:hover {
            color: #007bff !important;
            transform: scale(1.2);
          }
        </style>

        <div style="position: absolute; top: 3px; right: 5px; display: flex; gap: 3px; z-index: 1;">
          <button class="edit-car" data-id="${car.id}" title="Edit">&#9998;</button>
          <button class="delete-car" data-id="${car.id}" title="Delete">&times;</button>
        </div>

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

      carItem.querySelector('.delete-car').addEventListener('click', () => {
        const confirmDelete = confirm("Ви впевнені, що хочете видалити цей автомобіль?");
        if (confirmDelete) {
          const index = cars.findIndex(c => c.id === car.id);
          if (index !== -1) {
            cars.splice(index, 1);
            renderCars();
          }
        }
      });

      carItem.querySelector('.edit-car').addEventListener('click', () => {
        document.getElementById('edit-car-id').value = car.id;
        document.getElementById('edit-car-title').value = car.title;
        document.getElementById('edit-car-stock').value = car.stock;
        document.getElementById('edit-car-status').value = car.status;
        document.getElementById('edit-car-info').value = car.info;
        document.getElementById('edit-car-image').value = car.image;
      
        editModalOverlay.classList.remove('hidden');
      });

      carContainer.appendChild(carItem);
    });
  }

  editCarForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const id = parseInt(document.getElementById('edit-car-id').value);
    const updatedCar = {
      id,
      title: document.getElementById('edit-car-title').value,
      stock: document.getElementById('edit-car-stock').value,
      status: document.getElementById('edit-car-status').value,
      info: document.getElementById('edit-car-info').value,
      image: document.getElementById('edit-car-image').value
    };
  
    const index = cars.findIndex(car => car.id === id);
    if (index !== -1) {
      cars[index] = updatedCar;
      renderCars();
      editModalOverlay.classList.add('hidden');
    }
  });

  editModalCloseIcon.addEventListener('click', () => {
    editModalOverlay.classList.add('hidden');
  });
  
  editModalOverlay.addEventListener('click', (e) => {
    if (e.target === editModalOverlay) {
      editModalOverlay.classList.add('hidden');
    }
  });

  cancelBtn.addEventListener('click', () => {
    editModalOverlay.classList.add('hidden');
  });
  
  renderCars();
});
