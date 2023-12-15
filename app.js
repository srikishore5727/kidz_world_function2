var cartValue = document.getElementById("itemcount");
var cartButton = document.getElementById("cardlogo");

var addButtons = document.getElementsByClassName("add-card");

var items = [
  {
    name: "This was our pact",
    quantity: 0,
    cost: 7.49,
  },
  {
    name: "The famous five",
    quantity: 0,
    cost: 4.59,
  },
  {
    name: "Matilda",
    quantity: 0,
    cost: 6.80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    cost: 10.00,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    cost: 7.29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    cost: 4.99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    cost: 17.49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    cost: 19.99,
  },
  {
    name: "Jenga",
    quantity: 0,
    cost: 20.99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    cost: 19.49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    cost: 12.49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    cost: 12.49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    cost: 15.99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    cost: 18.49,
  },
];

function updateCart() {
  let cart = 0;
  for (let index = 0; index < items.length; index++) {
    cart = cart + items[index].quantity;
  }
  cartValue.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = function (index) {
    return function () {
      items[index].quantity++;
      updateCart();
    };
  }(i);
}

var finalDollars = 0;
var finalCents = 0;

function updatePrice() {
  let totalPriceInCents = 0;

  for (let index = 0; index < items.length; index++) {
    totalPriceInCents =
      totalPriceInCents +
      items[index].quantity * (Math.floor(items[index].cost) * 100 + Math.round((items[index].cost - Math.floor(items[index].cost)) * 100));
  }
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}

var whatsappLink =
  "https://api.whatsapp.com/send?phone=919360746049&text=Order%20details";

function updateWhatsappLink() {
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity !== 0) {
      whatsappLink += `%0A${items[index].name}%20${items[index].quantity}`;
    }
  }
  whatsappLink += `%0ATotal%20Price:%20$${finalDollars}%20${finalCents}c`;
}

cartButton.onclick = () => {
  updatePrice();
  updateWhatsappLink();
  window.open(whatsappLink, "_blank");

  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity !== 0) {
      console.log(
        `Item name: ${items[index].name} - Quantity: ${items[index].quantity}`
      );
    }
  }

  console.log(
    `The total amount is ${finalDollars}$ and ${finalCents} cents`
  );
};
