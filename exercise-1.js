// **Exercise #1**

// - ใช้ `findOne` ในการหาข้อมูล Document ของลูกค้าชื่อ `Cherlyn`
// - ใช้ `find` ในการหาข้อมูล Document ทั้งหมดที่จ่ายเงินด้วย Credit Card ของ `mastercard`
// - ใช้ `find` ในการหาข้อมูล Document ทั้งหมดที่สั่ง Pizza ขนาด `medium` โดย Limit จำนวนข้อมูลแค่ 5 Documents

db.pizzaorder.findOne({ name: "Cherlyn" });

db.pizzaorder.find({ credit_card_type: "mastercard" });

db.pizzaorder.find({ size: "medium" }).limit(5);
