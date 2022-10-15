// const { ObjectId } = require('mongodb');
// const { getDb } = require('../util/database');

// class User {
//   constructor(username, email, cart, id) {
//     this.username = username;
//     this.email = email;
//     this.cart = cart; // {items: []}
//     this._id = id;
//   }

//   save() {
//     return getDb().collection('users').insertOne(this);
//   }

//   addToCart(product) {
//     const cartProductIndex = this.cart.items.findIndex(
//       (cp) => cp.productId.toString() === product._id.toString()
//     );
//     let newQuantity = 1;
//     const updatedCartItems = [...this.cart.items];

//     if (cartProductIndex >= 0) {
//       newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//       updatedCartItems[cartProductIndex].quantity = newQuantity;
//     } else {
//       updatedCartItems.push({
//         productId: new ObjectId(product._id),
//         quantity: newQuantity,
//       });
//     }

//     const updatedCart = {
//       items: updatedCartItems,
//     };

//     return getDb()
//       .collection('users')
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { cart: updatedCart } }
//       );
//   }

//   getCart() {
//     return getDb()
//       .collection('products')
//       .find({ _id: { $in: this.cart.items.map((item) => item.productId) } })
//       .toArray()
//       .then((products) =>
//         products.map((p) => {
//           return {
//             ...p,
//             quantity: this.cart.items.find(
//               (item) => item.productId.toString() === p._id.toString()
//             ).quantity,
//           };
//         })
//       );
//   }

//   deleteItemFromCart(prodId) {
//     const updatedCartItems = this.cart.items.filter(
//       (item) => item.productId.toString() !== prodId.toString()
//     );

//     return getDb()
//       .collection('users')
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { cart: { items: updatedCartItems } } }
//       );
//   }

//   addOrder() {
//     const db = getDb();

//     return this.getCart()
//       .then((products) => {
//         const order = {
//           items: products,
//           user: { _id: new ObjectId(this._id), name: this.name },
//         };

//         return db.collection('orders').insertOne(order);
//       })
//       .then((result) => {
//         this.cart = { items: [] };
//         return db
//           .collection('users')
//           .updateOne(
//             { _id: new ObjectId(this._id) },
//             { $set: { cart: { items: [] } } }
//           );
//       });
//   }

//   getOrders() {
//     return getDb()
//       .collection('orders')
//       .find({ 'user._id': new ObjectId(this._id) })
//       .toArray();
//   }

//   static findUserById(userId) {
//     return getDb()
//       .collection('users')
//       .findOne({ _id: new ObjectId(userId) });
//   }
// }

// module.exports = User;
