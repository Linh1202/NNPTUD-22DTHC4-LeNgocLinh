// Câu 1: Khai báo constructor function producct để tạo đối tượng sản phẩm:
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}


// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau:
const products = [
    new Product(1, "Nhẫn kim cương", 55000000, 3, "Accessories", true),
    new Product(2, "Kính mát Rayban", 3200000, 15, "Accessories", true),
    new Product(3, "Áo Hoodie Streetwear", 650000, 50, "Clothing", true),
    new Product(4, "Quần Jogger Kaki", 450000, 0, "Clothing", true),
    new Product(5, "Túi xách Limited", 15000000, 2, "Accessories", false)
];


// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm:
const productsNamePrice = products.map(function(product) {
    return { name: product.name, price: product.price };
});
console.log("Câu 3:", productsNamePrice);


// Câu 4: Lọc sản phẩm còn hàng trong kho:
const productsInStock = products.filter(function(product) {
    return product.quantity > 0;
});
console.log("Câu 4 (Còn hàng):", productsInStock);


// Câu 5: Kiểm tra xem có ít nhất một sản phẩm nào giá trên 30.000.000 hay không:
const hasExpensiveProduct = products.some(function(product) {
    return product.price > 30000000;
});
console.log("Câu 5 (Có SP > 30tr):", hasExpensiveProduct);


// Câu 6: Kiểm tra tất cả sản phẩm thuộc danh mục 'Accessories' có đang bán (isAvailable = true) hay không:
const allAccessoriesAvailable = products
    .filter(function(product) {
        return product.category === "Accessories";
    })
    .every(function(product) {
        return product.isAvailable === true;
    });
console.log("Câu 6 (Tất cả phụ kiện đang bán):", allAccessoriesAvailable);


// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price * quantity:
const totalInventoryValue = products.reduce(function(sum, product) {
    return sum + (product.price * product.quantity);
}, 0);
console.log("Câu 7 (Tổng giá trị kho):", totalInventoryValue.toLocaleString("vi-VN"), "VND");


// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái:
console.log("\n--- Câu 8 ---");
for (const product of products) {
    console.log(`${product.name} - ${product.category} - ${product.isAvailable}`);
}


// Câu 9: Dùng for...in để:
// In ra tên thuộc tính.
// In ra giá trị tuong ứng.
console.log("\n--- Câu 9 ---");
for (const product of products) {
    console.log(`\nThông tin sản phẩm: ${product.name}`);
    for (const key in product) {
        console.log(`  Thuộc tính: ${key} | Giá trị: ${product[key]}`);
    }
}


// Câu 10: Lấy danh sách tên các sản phẩm đang bán VÀ còn hàng:
const sellingProductNames = products
    .filter(function(product) {
        return product.isAvailable === true && product.quantity > 0;
    })
    .map(function(product) {
        return product.name;
    });

console.log("\nCâu 10:", sellingProductNames);