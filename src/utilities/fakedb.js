// use local storage as your db for now
const getDb = () => localStorage.getItem('shopping_cart');

const addToDb = id => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
}

// const addToDb = id => {
//   const stored_cart = getDb();
//   if (id in stored_cart) {
//     console.log("clicked");
//   }
//   else {
//     stored_cart[id] = 1;
//   }
//   updateDb(stored_cart)
// }




const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {
    console.log("DB not found");
  }
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }



// const addToDb = id => {
//   const stored_cart = getDb();
//   if (id in stored_cart) {
//     console.log("clicked");
//   }
//   else {
//     stored_cart[id] = 1;
//   }
//   updateDb(stored_cart)
// }

// const updateDb = cart => {
//   localStorage.setItem('shopping_cart', JSON.stringify(cart))
// }


// const getDb = () => {
//   const exists = localStorage.getItem('shopping_cart');
//   return exists ? JSON.parse(exists) : {};
// }


// const clearTheCart = () => {
//   localStorage.removeItem('shopping_cart');
// }
// const getStoredCart = () => {
//   const exists = getDb();
//   return exists ? JSON.parse(exists) : {};
// }

// const removeFromDb = id => {
//   const exists = getDb();
//   if (!exists) {
//     console.log("DB not found");
//   }
//   else {
//     const shopping_cart = JSON.parse(exists);
//     delete shopping_cart[id];
//     updateDb(shopping_cart);
//   }
// }

// export { addToDb, clearTheCart, getStoredCart, removeFromDb }