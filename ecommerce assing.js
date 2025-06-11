// Product data
const products = [
  {
    name: "iPhone 15",
    price: "₹79,999",
    image: "C:/Users/jayab/Downloads/airpods.jpg"
  },
  {
    name: "Apple Watch Series 9",
    price: "₹41,900",
    image: "C:/Users/jayab/Downloads/airpods.jpg"
  },
  {
    name: "iPad Air",
    price: "₹59,900",
    image: "C:/Users/jayab/Downloads/airpods.jpg"
  },
  {
    name: "MacBook Air M2",
    price: "₹1,14,900",
    image: "C:/Users/jayab/Downloads/airpods.jpg"
  },
  {
    name: "AirPods Pro",
    price: "₹26,900",
    image: "C:/Users/jayab/Downloads/airpods.jpg"
  },
  {
    name: "Apple TV 4K",
    price: "₹14,999",
    image: "C:/Users/jayab/Downloads/airpods.jpg"
  }
];

// Render products
const productGrid = document.getElementById("productGrid");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="addToCart(${index}, this)">Add to Cart</button>
  `;

  productGrid.appendChild(card);
});

// Add to cart (highlight on click)
function addToCart(index, btn) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.classList.remove("selected"));
  cards[index].classList.add("selected");
  btn.innerText = "Added";
}

