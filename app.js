const musicProducts = [
    /* Albumes*/
    {
        id: 1,
        type: 'Album',
        title: "Abbey Road",
        artist: "The Beatles",
        genre: "Rock",
        price: 10.99,
        imageURL: "path/to/abbey-road.jpg"
    },
    {
        id: 2,
        type: 'Album',
        title: "Thriller",
        artist: "Michael Jackson",
        genre: "Pop",
        price: 10.99,
        imageURL: "path/to/thriller.jpg"
    },
    {
        id: 3,
        type: 'Album',
        title: "Back in Black",
        artist: "AC/DC",
        genre: "Rock",
        price: 10.99,
        imageURL: "path/to/back-in-black.jpg"
    },
    {
        id: 4,
        type: 'Album',
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        genre: "Progressive Rock",
        price: 10.99,
        imageURL: "path/to/dark-side-of-the-moon.jpg"
    },
    {
        id: 5,
        type: 'Album',
        title: "Rumours",
        artist: "Fleetwood Mac",
        genre: "Rock",
        price: 10.99,
        imageURL: "path/to/rumours.jpg"
    },
    /*Merch*/
    {
        id: 6,
        type: 'Merchandise',
        title: "The Beatles T-Shirt",
        artist: "The Beatles",
        genre: "Rock",
        price: 10.99,
        imageURL: "path/to/beatles-tshirt.jpg"
    },
    {
        id: 7,
        type: 'Merchandise',
        title: "AC/DC Poster",
        artist: "AC/DC",
        genre: "Rock",
        price: 10.99,
        imageURL: "path/to/acdc-poster.jpg"
    },
    {
        id: 8,
        type: 'Merchandise',
        title: "Pink Floyd Mug",
        artist: "Pink Floyd",
        genre: "Progressive Rock",
        price: 10.99,
        imageURL: "path/to/pink-floyd-mug.jpg"
    },
    {
        id: 9,
        type: 'Merchandise',
        title: "Fleetwood Mac Hat",
        artist: "Fleetwood Mac",
        genre: "Rock",
        price: 10.99,
        imageURL: "path/to/fleetwood-mac-hat.jpg"
    },
    {
        id: 10,
        type: 'Merchandise',
        title: "Michael Jackson Pin",
        artist: "Michael Jackson",
        genre: "Pop",
        price: 10.99,
        imageURL: "path/to/michael-jackson-pin.jpg"
    },
    /*Instrumentos*/
    {
        id: 11,
        type: 'Instrument',
        title: "Fender Stratocaster",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/fender-stratocaster.jpg"
    },
    {
        id: 12,
        type: 'Instrument',
        title: "Yamaha Keyboard",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/yamaha-keyboard.jpg"
    },
    {
        id: 13,
        type: 'Instrument',
        title: "Pearl Drum Kit",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/pearl-drum-kit.jpg"
    },
    {
        id: 14,
        type: 'Instrument',
        title: "Selmer Saxophone",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/selmer-saxophone.jpg"
    },
    {
        id: 15,
        type: 'Instrument',
        title: "Ibanez Electric Guitar",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/ibanez-electric-guitar.jpg"
    },
    /*Accesorios*/
    {
        id: 16,
        type: 'Accessory',
        title: "Guitar Pedal",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/guitar-pedal.jpg"
    },
    {
        id: 17,
        type: 'Accessory',
        title: "Headphones",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/headphones.jpg"
    },
    {
        id: 18,
        type: 'Accessory',
        title: "Microphone Stand",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/microphone-stand.jpg"
    },
    {
        id: 19,
        type: 'Accessory',
        title: "Guitar Strap",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/guitar-strap.jpg"
    },
    {
        id: 20,
        type: 'Accessory',
        title: "Sheet Music Stand",
        artist: "",
        genre: "",
        price: 100.99,
        imageURL: "path/to/sheet-music-stand.jpg"
    },
];

const catalog = document.getElementById('catalog');

function displayMusicProducts(products) {
    catalog.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        let content = `<h2>${product.title}</h2>`;

        if (product.type === 'Album') {
            content += `
          <p>Artista: ${product.artist}</p>
          <p>Género: ${product.genre}</p>
        `;
        } else if (product.type === 'Merchandise') {
            content += `<p>Artista: ${product.artist}</p>`;
        } else if (product.type === 'Instrument') {
            content += `<p>Instrumento</p>`;
        } else if (product.type === 'Accessory') {
            content += `<p>Accesorio</p>`;
        }

        content += `
        <p>Precio: $${product.price.toFixed(2)}</p>
        <img src="${product.imageURL}" alt="${product.title}">
      `;

        productDiv.innerHTML = content;
        catalog.appendChild(productDiv);
    });
}

displayMusicProducts(musicProducts);

document.getElementById('typeFilter').addEventListener('change', function (event) {
    const type = event.target.value;
    const filteredProducts = type === 'all' ? musicProducts : musicProducts.filter(product => product.type === type);
    displayMusicProducts(filteredProducts);
});
