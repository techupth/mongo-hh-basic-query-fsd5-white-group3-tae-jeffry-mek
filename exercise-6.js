// Exercise #6
// Update ข้อมูล Document ทุกอันของ Customer ที่มีชื่อว่า Jack ด้วย updateMany
// โดยเพิ่ม Key และ Value Pair ดังนี้
// { "isAdmin": false }
// ​
// Update ข้อมูล Document ทุกอันด้วย updateMany
// โดยเพิ่ม Key และ Value Pair ดังนี้
// { "country": "Thailand"}
// ​
// Update ข้อมูล Document ด้วย updateOne โดยมีรายละเอียดดังนี้
//  Update ข้อมูล Document ของ Customer ที่มีชื่อว่า M
// แต่ถ้าไม่มี Document ที่มีชื่อ Customer เป็น M ในระบบ ก็ให้สร้างมาเป็น Document ใหม่แทน
// ข้อมูลที่จะ Update มีดังนี้
// {
//   "size": "large",
//   "total_price": 200000,
//   "quantity": 20,
//   "customer_name": "M",
//   "credit_card_type": "mastercard",
//   "created_at": "2022-01-01T10:48:40Z"
// }

db.pizzaorder.updateMany({ customer_name: "Jack" }, { $set: { isAdmin: false } });

db.pizzaorder.updateMany({}, { $set: { country: "Thailand" } });

db.pizzaorder.updateOne(
  { customer_name: "M" },
  {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: "2022-01-01T10:48:40Z",
    },
  },
  { upsert: true }
);
