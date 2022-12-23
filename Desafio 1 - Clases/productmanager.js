class productManager {
    constructor(nombre, descripcion, precio, thumbnail, code, stock) {
        this.products = [];
        this.nombre = nombre; 
        this.descripcion = descripcion;
        this.precio = precio;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    getProductos() {
        return this.products;
    }
    addProductos(product) {
        if (this.products.find((prod) => prod.code === product.code))
        return console.log(`El producto con este codigo ${product.code} ya existe`)
        else {
            product.id = this.getProductos().length + 1;
            this.products.push(product);
        }
    }
    getProductoById(productId) {
        let MyProduct = null;
        if (this.getProductos().find((prod) => prod.code == productId.code)) {
            MyProduct = productId; 
        }
        if ( MyProduct === null ) {
            return console.log (`No se encontro el producto`)
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

