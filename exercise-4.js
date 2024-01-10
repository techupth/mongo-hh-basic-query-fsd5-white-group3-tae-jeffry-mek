// **Exercise #4: Query Operators & Logical Operators**

// - ให้ Query ข้อมูล Document ทั้งหมดที่มีการสั่งจำนวน Pizza น้อยกว่า 5 ถาด และจ่ายเงินด้วย Credit Card ของ `mastercard`
// - Query ข้อมูล Document ทั้งหมดที่สั่งซื้อ Pizza ขนาดเล็ก และมีจำนวนถาดอยู่ระหว่าง 1 - 5 ถาด
// - Query ข้อมูล Document ทั้งหมดที่มีการสั่ง Pizza จำนวนมากกว่า 10 ถาด และไม่ได้จ่ายเงินด้วย Credit Card

db.pizzaorder.find({
  quantity: { $lt: 5 },
  credit_card_type: "mastercard",
});

db.pizzaorder
  .find({
    size: "small",
    quantity: { $lt: 6, $gte: 1 },
  })
  .sort({ quantity: -1 });

db.pizzaorder.find({
  quantity: { $gt: 10 },
  credit_card_type: { $ne: "mastercard" },
});
