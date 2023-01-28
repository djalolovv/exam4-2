const product = document.querySelector("#site-box");

function forData() {
  fetch("https://fakestoreapi.com/products    ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      editData(data);
    });
}

forData();
function editData(DATA) {
  DATA.forEach(function (item) {
    let forWrite = `
  <ul class="site-list">
  <li class="site-item">
      <img src="${item.image}" alt="img" class="item-img">
            <p class="item-title">
                Price: ${item.price}
            </p>
            <p class="item-text">
                Discount: ${item.rating.count}
            </p>
            <p class="item-text2">
                Desc: ${item.description}
            </p>
            <p class="item-text3">
                Name: ${item.title}
            </p>
    </li>
    </ul>
 `;

    product.insertAdjacentHTML("beforeend", forWrite);
  });
}
