class productManager {
    constructor(nombre, descripcion, precio, thumbnail, code, stock) {
        productManager.id += 1;
        this.products = [];
        this.nombre = nombre; 
        this.descripcion = descripcion;
        this.precio = precio;
        this.thumbnail = thumbnail;
        this.code = productManager.id;
        this.stock = stock;
    }
    getProductos() {
        return this.products;
    }
    addProductos(product) {
        let barcode = this.products.find((code) => product.code === code);
        product = { ...product, id: productManager.id };
        if (barcode) {
            return console.log('El producto con este codigo ${product.code} ya existe')
        } else {
            this.products.push(product);
            productManager.id++;
        }
    }
    getProductoById(productId) {
        let MyProduct = null;
        if (this.getProductos().find((prod) => prod.code == productId.code)) {
            MyProduct = productId; 
        }
        if ( MyProduct === null ) {
            return console.log ("No se encontro el producto")
        } else {
            return MyProduct;
        }
    }
}

const obtenerProductos = new productManager ();

const product1 = {
    nombre: "Serum",
    descripcion:"Serum Facial",
    precio: 3000,
    thumbnail: "img1.png",
    code: "2348",
    stock: 10
}

obtenerProductos.addProductos(product1);
console.log(obtenerProductos.getProductos());

