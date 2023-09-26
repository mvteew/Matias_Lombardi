import { existsSync, promises } from "fs";
const path = "UserManager.json";


class ProductManager {
    constructor(path) {
    this.path = path
    }
  
    validateCode(code) {
      return this.getProducts.find((producto) => producto.code === code);
    }
  
    generateId() {
      return this.getProducts.length > 0 ? this.getProducts[this.getProducts.length - 1].id + 1 : 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.validateCode(code)) {
        throw new Error(`El producto con código ${code} ya existe`);
      }
  
      const id = this.generateId();
  
      const nuevoProducto = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.getProducts.push(nuevoProducto);
  
      return nuevoProducto;
    }
  
    getProducts() {
      return this.getProducts;
    }
  
    getProductById(id) {
      const producto = this.getProducts.find((producto) => producto.id === id);
      if (producto) {
        return producto;
      } else {
        throw new Error('Producto no encontrado');
      }
    }
  
    updateProduct(id, updatedFields) {
      const producto = this.getProductById(id);
      const updatedProduct = { ...producto, ...updatedFields };
      const index = this.getProducts.findIndex((producto) => producto.id === id);
      this.getProducts[index] = updatedProduct;
      return updatedProduct;
    }
  
    deleteProduct(id) {
      const index = this.getProducts.findIndex((producto) => producto.id === id);
      if (index !== -1) {
        return this.getProducts.splice(index, 1)[0];
      } else {
        throw new Error('Producto no encontrado');
      }
    }
  }
  const cel1 = {
    cel_name: "Iphone",
    model: 12,
    year: "2020",
    password_cel: "12345",
  };
  
  const cel2 = {
    cel: "Samsung",
    model: 14,
    year: 2021,
    password_cel: "abcde",
  };
  const cel3 = {
    cel: "Huawei",
    model: 12,
    year: 2018,
    password_cel: "aaf1c",
  };
  async function test() {
    await manager.createUser(user1);
    await manager.createUser(user2);
    await manager.createUser(user3);
    //const users = await manager.getUsers()
    //console.log(users);
    //await manager.deleteUser(1)
  }
  
  test();