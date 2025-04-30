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
  
  const container = document.getElementById('buttons-filters');
  
  filters.forEach(filter => {
    const button = document.createElement('button');
    
    button.className = 'button';
    button.textContent = filter.label;
    button.dataset.id = filter.id; 
    container.appendChild(button);
  });
  
  const cars = [
    {
      title: "2015 BMW 328 2.0T xDrive",
      stock: "41041216",
      status: "Run & Drive",
      info: "Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7FN023627",
      image: "image/cars/BMW_328.jpg"
    },
    {
      title: "2017 BMW 330 2.0T xDrive",
      stock: "41041216",
      status: "Run & Drive",
      info: "Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7FN023627",
      image: "image/cars/BMW_330.jpg"
    },
    {
      title: "2020 BMW 530 2.0T",
      stock: "41041216",
      status: "Run & Drive",
      info: "Salvage | Front End Collision<br>64,688 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7FN023627",
      image: "image/cars/BMW_530.jpg"
    },
    {
      title: "2014 BMW X5 3.0 xDrive",
      stock: "41001229",
      status: "Deployed",
      info: "Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7GN089449",
      image: "image/cars/BMW_X5.jpg"
    },
    {
      title: "2020 BMW X3 2.0 xDrive",
      stock: "41001229",
      status: "Deployed",
      info: "Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7GN089449",
      image: "image/cars/BMW_X3.jpg"
    },
    {
      title: "2021 BMW X7 3.0 xDrive",
      stock: "41001229",
      status: "Deployed",
      info: "Salvage | Front End Collision<br>112,196 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC7GN089449",
      image: "image/cars/BMW_X7.jpg"
    },
    {
      title: "2015 BMW 535 3.0",
      stock: "40974945",
      status: "Stationary",
      info: "Salvage | Left Front Collision<br>153,725 mi | Gasoline | 2.0L I-4 DI, DOHC",
      vin: "WAUGAFC9FN050280",
      image: "image/cars/BMW_535.jpg"
    }
  ];
  
  const carContainer = document.querySelector('.car-item-container');
  
  cars.forEach(car => {
    const carItem = document.createElement('div');
  
    carItem.classList.add('car-item');
    
    carItem.innerHTML = `
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
        <div class="car-info">
          ${car.info}
        </div>
        <div class="car-actions">
          <span class="reserve-price">Reserve price</span>
          <a href="#" class="view-sale">View</a>
        </div>
      </div>
    `;
    
    carContainer.appendChild(carItem);
  });
});  
