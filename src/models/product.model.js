// PRODUCT MODEL
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default class productModel{
    // Creating product model structure to store product details
    constructor(_id,_name,_desc,_price,_imgurl){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imgurl = _imgurl;
    }

    // To return all the values stored in list
    static getProduct(){
        return products
    }

    // To add a new product to the list
    static add(name,desc,price,imgurl){
        let newProduct = new productModel(
            products.length + 1,
            name,
            desc,
            price,
            imgurl
        )
        products.push(newProduct)
    }

    // To update a existing product to the list
    static update(id,name,desc,price,imgurl){
        const index = products.findIndex((p) => p.id == id);
        products[index].id = id;
        products[index].name = name;
        products[index].desc = desc;
        products[index].price = price;
        products[index].imgurl = imgurl;
    }

    // To delete a product from the list
    static delete(id){
        const index = products.findIndex(
            (p) => p.id == id
          );
        products.splice(index,1);      
    }

    // To fetch product using its id
    static getById(id){
        return products.find((p)=> p.id == id);
    }
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Pre existing products --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
var products = [new productModel(
    1,
    "Farmley Premium Date Bites- No Added Sugar Tin  (180 g)",
    `Healthy Superfood: Date bites are rich in fiber, loaded with antioxidants and has zero added sugar. "Benefits: Date bites have an excellent nutrition profile, since it contain dried nuts, their calorie content is higher than most fresh fruit.`,
    "376",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/snack-savourie/w/6/b/-original-imagughycnt5k2zf.jpeg?q=70"
),
new productModel(
    2,
    "Sunfeast Dark Fantasy Yumfills Cookie Cake  (242 g)",
    `Experience pure bliss with every bite with Sunfeast Dark Fantasy Yumfills. Combining luscious cream, rich chocolate and soft pie cake, Yumfills will delight your taste buds. An indulgent treat for chocolate lovers, Yumfills is dipped in smooth, rich chocolate`,
    "86",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/cookie-biscuit/1/1/r/-original-imagtkg2xhxznfsj.jpeg?q=70"
),
new productModel(
    3,
    "Maggi 2-Minute Masala , Easy to Make Instant Noodles Vegetarian  (12 x 70 g)",
    `Indias favourite Masala Noodles, MAGGI 2-minute Noodles, now comes with the goodness of Iron. Each portion (70g) of MAGGI Masala Noodles provides you with 15% of your daily Iron requirement *as per the Daily Dietary Allowances for an Adult Sedentary Male (ICMR 2010).`,
    "152",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/noodle/m/z/9/-original-imagsvxqgghfcbun.jpeg?q=70"
),]
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------