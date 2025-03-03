// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function minQuantity(inventory) {
  
  let lowName = inventory[0].name;
  let lowQuantity = inventory[0].quantity;

  for (let i = 1; i < inventory.length; i++) {
    if (inventory[i].quantity < lowQuantity) {
      lowName = inventory[i].name;
      lowQuantity = inventory[i].quantity;
    }
  }

  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowName} ซึ่งมี ${lowQuantity} ชิ้น`;
}

console.log(minQuantity(inventory));
