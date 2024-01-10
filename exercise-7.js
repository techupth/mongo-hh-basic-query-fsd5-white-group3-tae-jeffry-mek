// **Exercise #7**

// - Delete ข้อมูล Document ของ Customer ที่มีชื่อว่า `Jack` ออกทั้งหมด
// - จากนั้นให้ตรวจสอบด้วยว่าข้อมูล Document ของ Customer ที่มีชื่อว่า `Jack` ถูกลบออกทั้งหมดจริงๆ

db.pizzaorder.deleteMany({ customer_name: "Jack" });
db.pizzaorder.find({ customer_name: "Jack" });
