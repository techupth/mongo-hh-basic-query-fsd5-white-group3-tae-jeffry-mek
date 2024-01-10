// **Exercise #3**

// - Sort ข้อมูลทั้งหมดด้วย Property `total_price`  จากมากไปน้อย
// - Sort ข้อมูลทั้งหมดด้วย Property `created_at` จากวันที่เก่าที่สุดไปใหม่ที่สุด
db.pizzaorder.find().sort({ total_price: -1 });

db.pizzaorder.find().sort({ created_at: 1 });
