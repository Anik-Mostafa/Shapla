const functions = require('firebase-functions');
const express= require('express');
const app=express();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.set('view engine', 'ejs')



var data=[
{
  name:"Dairy Milk",
  uUrl:"https://www.searchpng.com/wp-content/uploads/2019/01/Cadbury-Dairy-Milk-Chocolate-PNG-Image-715x663.png",
  amount:45,
  price:90,
  Category:"Chocolates"
},
{
  name:"Skittles",
  uUrl:"https://i2-prod.manchestereveningnews.co.uk/incoming/article11544961.ece/ALTERNATES/s1200/Skittles.jpg",
  amount:45,
  price:90,
  Category:"Candies"
},
{
  name:"Lolipop",
  uUrl:"https://previews.123rf.com/images/bluedarkat/bluedarkat1301/bluedarkat130100042/17613847-lollipop-candy-rainbow-colors.jpg",
  amount:45,
  price:90,
  Category:"Candies"
},
{
  name:"m & m's",
  uUrl:"https://previews.123rf.com/images/bluedarkat/bluedarkat1301/bluedarkat130100042/17613847-lollipop-candy-rainbow-colors.jpg",
  amount:45,
  price:90,
  Category:"Chocolates"
},
{
  name:"Dairy Milk",
  uUrl:"https://www.searchpng.com/wp-content/uploads/2019/01/Cadbury-Dairy-Milk-Chocolate-PNG-Image-715x663.png",
  amount:45,
  price:90,
  Category:"Chocolates"
},
{
  name:"Skittles",
  uUrl:"https://i2-prod.manchestereveningnews.co.uk/incoming/article11544961.ece/ALTERNATES/s1200/Skittles.jpg",
  amount:45,
  price:90,
  Category:"Candies"
},
{
  name:"Lolipop",
  uUrl:"https://previews.123rf.com/images/bluedarkat/bluedarkat1301/bluedarkat130100042/17613847-lollipop-candy-rainbow-colors.jpg",
  amount:45,
  price:90,
  Category:"Candies"
},
{
  name:"m & m's",
  uUrl:"https://previews.123rf.com/images/bluedarkat/bluedarkat1301/bluedarkat130100042/17613847-lollipop-candy-rainbow-colors.jpg",
  amount:45,
  price:90,
  Category:"Chocolates"
},

// =========================================
{
  name:"Shuttlecock",
  uUrl:"https://atlas-content-cdn.pixelsquid.com/stock-images/shuttlecock-Va7JLK5-600.jpg",
  amount:2000,
  price:3000,
  Category:"badminton"
},

{
  name:"T-shirt",
  uUrl:"https://ae01.alicdn.com/kf/HTB1vaCRmrZnBKNjSZFhq6A.oXXaw/Free-Printing-Badminton-shirt-Men-Women-sports-badminton-t-shirt-Table-Tennis-shirts-Tennis-wear-dry.jpg",
  amount:2000,
  price:3000,
  Category:"badminton"
},
{
  name:"Li-Ning T-shirt",
  uUrl:"https://ae01.alicdn.com/kf/Hd131366caf7e422794e628559e4cfaefu/Li-Ning-Men-Badminton-T-Shirts-AT-DRY-Breathable-Competition-Top-Comfort-Fitness-LiNing-Sports-Tees.jpg",
  amount:2000,
  price:3000,
  Category:"badminton"
},
{
  name:"Yonex T-shirt",
  uUrl:"https://ae01.alicdn.com/kf/HTB1LtdaSNjaK1RjSZFAq6zdLFXaT.jpg",
  amount:2000,
  price:3000,
  Category:"badminton"
},
{
  name:"Yonex Racket",
  uUrl:"https://5.imimg.com/data5/CN/HZ/EA/SELLER-65772240/yonex-badminton-racket-500x500.jpg",
  amount:2000,
  price:3000,
  Category:"badminton"
},
{
  name:"Li-Ning Racket",
  uUrl:"https://cf.shopee.com.my/file/71889cd728aa61f24c5ec530c9d6d273",
  amount:2000,
  price:3000,
  Category:"badminton"
},
{
  name:"Li-Ning Shoes",
  uUrl:"https://shopbadmintononline.com/images_zoom/mens-badminton-shoe-AYTM037-3-B.jpg",
  amount:2000,
  price:3000,
  Category:"badminton"
},
{
  name:"Yonex Shoes",
  uUrl:"https://www.stringersworld.com/images/detailed/36/SHB65XMEX_BR.jpg?t=1524149597",
  amount:2000,
  price:3000,
  Category:"badminton"
},
// ==================================
{
    name:"Football",
    uUrl:"https://lh3.googleusercontent.com/proxy/WuW69n-kws8-aH1xP2FjXJ5RXOI-13gPlwKe902WjSJxCIss0seXkIH-7Ron_t299zdLdqfmkge1yt2ZVeIbiAQAH4w-xKSe1TLahAlTjVTUG8T3",
    amount:1050,
    price:2000,
    Category:"Football"
  },
  {
    name:"Hand Gloves",
    uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqrnEdabJDm6qYGVhikEeiON82hfy9WHhnkY60NkBuIo3iv_rd",
    amount:1050,
    price:2000,
    Category:"Football"
  },
  {
    name:"Shoes",
    uUrl:"https://www.umbro.com/en-us/wp-content/uploads/sites/2/2019/07/UX-Accuro-3-Homepage-Background-Image-2000x1125px.jpg",
    amount:1050,
    price:2000,
    Category:"Football"
  },
  {
    name:"FC Barcelona T-shirt",
    uUrl:"https://img.favpng.com/13/23/22/camp-nou-fc-barcelona-t-shirt-jersey-png-favpng-87UT3ZWbvrJMP33YyXQF8tvB7.jpg",
    amount:1050,
    price:2000,
    Category:"Football"
  },
  {
    name:"Real Madrid",
    uUrl:"https://images-na.ssl-images-amazon.com/images/I/71VXrKSqB6L._SL1500_.jpg",
    amount:1050,
    price:2000,
    Category:"Football"
  },
  {
    name:"Brazil Flag",
    uUrl:"https://i.ebayimg.com/images/g/1v0AAOSwp91cmKgK/s-l300.jpg",
    amount:1050,
    price:2000,
    Category:"Football"
  },
  {
    name:"Brazil T-shirt",
    uUrl:"https://www.uksoccershop.com/images/1522014176-brazil-nike-2018-19-home-football-shirt.jpg",
    amount:1050,
    price:2000,
    Category:"Football"
  },
  {
    name:"Brazil T-shirt",
    uUrl:"https://c.76.my/Malaysia/brazil-cbf-stadium-world-cup-2018-fans-jersey-l-jersey-1901-18-F1019169_4.jpg",
    amount:1050,
    price:2000,
    Category:"Football"
  },
  // ===============================
  {
    name:"Cricket Bad",
    uUrl:"https://lh3.googleusercontent.com/proxy/3kvyIZ6a9St1m3xHF4FQmt_it1UY_G4FukW8WW1ckmsMCZRFU1QAjs3TF4WgZh-D66xWyJeGDjrxcY3VOO62_uiDaOkeVGo95supaiokTy-szvE_",
    amount:1055,
    price:3050,
    Category:"Cricket"
  },
  {
    name:"Cricket Ball",
    uUrl:"https://static6.depositphotos.com/1157310/657/v/450/depositphotos_6578814-stock-illustration-shiny-red-traditional-cricket-ball.jpg",
    amount:1055,
    price:3050,
    Category:"Cricket"
  },
  {
    name:"Cricket Bading gloves",
    uUrl:"https://images-na.ssl-images-amazon.com/images/I/71MZH9aBaXL._SX466_.jpg",
    amount:1055,
    price:3050,
    Category:"Cricket"
  },
  {
    name:"Cricket Keeping gloves",
    uUrl:"https://cdn.shopify.com/s/files/1/1221/2962/products/Keeping_Gloves_BG_copy_large.jpg?v=1472141361",
    amount:1055,
    price:3050,
    Category:"Cricket"
  },
  {
    name:"Cricket Pads",
    uUrl:"https://www.threewickets.com/wp-content/uploads/2017/11/RS_Pad_RH_1.jpg",
    amount:1055,
    price:3050,
    Category:"Cricket"
  },
  {
    name:"Cricket Helmet",
    uUrl:"https://www.nicepng.com/png/detail/249-2496693_cricket-helmet-png-image-background.png",
    amount:1055,
    price:3050,
    Category:"Cricket"
  },
  {
    name:"Cricket Bad",
    uUrl:"https://lh3.googleusercontent.com/proxy/3kvyIZ6a9St1m3xHF4FQmt_it1UY_G4FukW8WW1ckmsMCZRFU1QAjs3TF4WgZh-D66xWyJeGDjrxcY3VOO62_uiDaOkeVGo95supaiokTy-szvE_",
    amount:1055,
    price:3050,
    Category:"Cricket"
  },
  {
    name:"Cricket Ball",
    uUrl:"https://static6.depositphotos.com/1157310/657/v/450/depositphotos_6578814-stock-illustration-shiny-red-traditional-cricket-ball.jpg",
    amount:1055,
    price:3050,
    Category:"Cricket"
  },
// =======================================
{
  name:"Apple",
  uUrl:"https://s1.1zoom.me/big0/408/Apples_Closeup_White_background_Red_Three_3_535366_1280x873.jpg",
  amount:60,
  price:90,
  Category:"Fruits"
},
{
  name:"Apple",
  uUrl:"https://s1.1zoom.me/big0/408/Apples_Closeup_White_background_Red_Three_3_535366_1280x873.jpg",
  amount:60,
  price:90,
  Category:"Fruits"
},
{
  name:"Apple",
  uUrl:"https://s1.1zoom.me/big0/408/Apples_Closeup_White_background_Red_Three_3_535366_1280x873.jpg",
  amount:60,
  price:90,
  Category:"Fruits"
},
{
  name:"Apple",
  uUrl:"https://s1.1zoom.me/big0/408/Apples_Closeup_White_background_Red_Three_3_535366_1280x873.jpg",
  amount:60,
  price:90,
  Category:"Fruits"
},
{
  name:"Apple",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE5lkCU4RZvcmd0CcrwWQSl6pkd7qpA--7UYVmAXwAppCKDhJE",
  amount:60,
  price:90,
  Category:"Fruits"
},
{
  name:"Apple",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE5lkCU4RZvcmd0CcrwWQSl6pkd7qpA--7UYVmAXwAppCKDhJE",
  amount:60,
  price:90,
  Category:"Fruits"
},
{
  name:"Apple",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE5lkCU4RZvcmd0CcrwWQSl6pkd7qpA--7UYVmAXwAppCKDhJE",
  amount:60,
  price:90,
  Category:"Fruits"
},
{
  name:"Apple",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE5lkCU4RZvcmd0CcrwWQSl6pkd7qpA--7UYVmAXwAppCKDhJE",
  amount:60,
  price:90,
  Category:"Fruits"
},
{
  name:"Ladys Finger",
  uUrl:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
  amount:60,
  price:90,
  Category:"Vegetables"
},
{
  name:"Ladys Finger",
  uUrl:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
  amount:60,
  price:90,
  Category:"Vegetables"
},
{
  name:"Ladys Finger",
  uUrl:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
  amount:60,
  price:90,
  Category:"Vegetables"
},
{
  name:"Ladys Finger",
  uUrl:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
  amount:60,
  price:90,
  Category:"Vegetables"
},
{
  name:"Ladys Finger",
  uUrl:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
  amount:60,
  price:90,
  Category:"Vegetables"
},
{
  name:"Ladys Finger",
  uUrl:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
  amount:60,
  price:90,
  Category:"Vegetables"
},
{
  name:"Ladys Finger",
  uUrl:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
  amount:60,
  price:90,
  Category:"Vegetables"
},
{
  name:"Ladys Finger",
  uUrl:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
  amount:60,
  price:90,
  Category:"Vegetables"
},

// =============================================
{
  name:"Raw Beef",
  uUrl:"https://image.freepik.com/free-photo/raw-pork-cutlet-white-background-meat-pig_55716-1077.jpg",
  amount:350,
  price:350,
  Category:"Meat"
},
{
  name:"Raw Chicken",
  uUrl:"https://lh3.googleusercontent.com/proxy/2upKRP8ZagojEonuqliWrvEGbCFwpFd8TqvPef3JU8wMnr61WWBMt-Y01g-6HiBaa2ldpXSz5PMCJwkvj9Jg5dS6-UXaHtCpaF29dbwVm-qAW74p3Umm_WxLpH5gK-ilUP_JaREEUqmdygnaYFxWzXtTjJFjhjoXC2C_2DTLJiKgN-Yw2H1SYtOqyzF75oDKFUY",
  amount:150,
  price:150,
  Category:"Meat"
},
{
  name:"Raw Beef",
  uUrl:"https://image.freepik.com/free-photo/raw-pork-cutlet-white-background-meat-pig_55716-1077.jpg",
  amount:350,
  price:350,
  Category:"Meat"
},
{
  name:"Raw Chicken",
  uUrl:"https://lh3.googleusercontent.com/proxy/2upKRP8ZagojEonuqliWrvEGbCFwpFd8TqvPef3JU8wMnr61WWBMt-Y01g-6HiBaa2ldpXSz5PMCJwkvj9Jg5dS6-UXaHtCpaF29dbwVm-qAW74p3Umm_WxLpH5gK-ilUP_JaREEUqmdygnaYFxWzXtTjJFjhjoXC2C_2DTLJiKgN-Yw2H1SYtOqyzF75oDKFUY",
  amount:150,
  price:150,
  Category:"Meat"
},
{
  name:"Raw Beef",
  uUrl:"https://image.freepik.com/free-photo/raw-pork-cutlet-white-background-meat-pig_55716-1077.jpg",
  amount:350,
  price:350,
  Category:"Meat"
},
{
  name:"Raw Chicken",
  uUrl:"https://lh3.googleusercontent.com/proxy/2upKRP8ZagojEonuqliWrvEGbCFwpFd8TqvPef3JU8wMnr61WWBMt-Y01g-6HiBaa2ldpXSz5PMCJwkvj9Jg5dS6-UXaHtCpaF29dbwVm-qAW74p3Umm_WxLpH5gK-ilUP_JaREEUqmdygnaYFxWzXtTjJFjhjoXC2C_2DTLJiKgN-Yw2H1SYtOqyzF75oDKFUY",
  amount:150,
  price:150,
  Category:"Meat"
},
{
  name:"Raw Beef",
  uUrl:"https://image.freepik.com/free-photo/raw-pork-cutlet-white-background-meat-pig_55716-1077.jpg",
  amount:350,
  price:350,
  Category:"Meat"
},
{
  name:"Raw Chicken",
  uUrl:"https://lh3.googleusercontent.com/proxy/2upKRP8ZagojEonuqliWrvEGbCFwpFd8TqvPef3JU8wMnr61WWBMt-Y01g-6HiBaa2ldpXSz5PMCJwkvj9Jg5dS6-UXaHtCpaF29dbwVm-qAW74p3Umm_WxLpH5gK-ilUP_JaREEUqmdygnaYFxWzXtTjJFjhjoXC2C_2DTLJiKgN-Yw2H1SYtOqyzF75oDKFUY",
  amount:150,
  price:150,
  Category:"Meat"
},
// ====================================
{
  name:"Raw Carp",
  uUrl:"https://i.pinimg.com/originals/59/6d/5d/596d5d9127b7ed800add1dd5cdd02917.jpg",
  amount:200,
  price:200,
  Category:"Fish"
},
{
  name:"Rohu",
  uUrl:"https://www.rdmall.in/image/cache/products/Sea%20food/Fish/images%20(28)-910x1155.jpeg",
  amount:200,
  price:200,
  Character:"Fish"
},
{
  name:"Boal",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSnGxdKP1G1FgSJ-I7d5iNnHTgliC7wZ-kXBhPL8uUrlSmJI--K",
  amount:200,
  price:200,
  Category:"Fish"
},
{
  name:"Boal",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSnGxdKP1G1FgSJ-I7d5iNnHTgliC7wZ-kXBhPL8uUrlSmJI--K",
  amount:200,
  price:200,
  Category:"Fish"
},
{
  name:"Hilsa",
  uUrl:"https://thumbs.dreamstime.com/b/tenualosa-ilisha-hilsa-herring-terbuk-fish-white-background-tenualosa-ilisha-hilsa-herring-terbuk-fish-169955285.jpg",
  amount:1200,
  price:2200,
  Category:"Fish"
},
{
  name:"Catfish",
  uUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ameiurus_melas_by_Duane_Raver.png/1200px-Ameiurus_melas_by_Duane_Raver.png",
  amount:1200,
  price:2200,
  Category:"Fish"
},
{
  name:"Rui",
  uUrl:"https://thumbs.dreamstime.com/b/labeo-rohita-fish-isolated-white-background-163794275.jpg",
  amount:200,
  price:200,
  Category:"Fish"
},
{
  name:"Rita",
  uUrl:"https://image.shutterstock.com/image-photo/rita-fishes-bangladesh-over-white-260nw-201725783.jpg",
  amount:200,
  price:200,
  Category:"Fish"
},

// =================================
//

{
  name:"Fresh Cut Breads",
  uUrl:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
  amount:50,
  price:30,
  Category:"Breads"
},
{
  name:"Fresh Cut Breads",
  uUrl:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
  amount:50,
  price:30,
  Category:"Breads"
},
{
  name:"Fresh Cut Breads",
  uUrl:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
  amount:50,
  price:30,
  Category:"Breads"
},
{
  name:"Fresh Cut Breads",
  uUrl:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
  amount:50,
  price:30,
  Category:"Breads"
},
{
  name:"Fresh Cut Breads",
  uUrl:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
  amount:50,
  price:30,
  Category:"Breads"
},
{
  name:"Fresh Cut Breads",
  uUrl:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
  amount:50,
  price:30,
  Category:"Breads"
},
{
  name:"Fresh Cut Breads",
  uUrl:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
  amount:50,
  price:30,
  Category:"Breads"
},
{
  name:"Fresh Cut Breads",
  uUrl:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
  amount:50,
  price:30,
  Category:"Breads"
},
// ===============================
{
  name:"Tim Tam",
  uUrl:"https://thumbs.dreamstime.com/b/packet-tim-tam-chocolate-biscuits-18181547.jpg",
  amount:50,
  price:30,
  Category:"Biscuits"
},
{
  name:"Oreo",
  uUrl:"https://www.japonshop.com/med/img/productos/dulces_snacks/galletas/prd-galleta-oreo-menta-japonshop.webp",
  amount:50,
  price:30,
  Category:"Biscuits"
},
{
  name:"Black Man",
  uUrl:"https://sc01.alicdn.com/kf/HTB1VPruKXXXXXcpXVXXq6xXFXXXv/BLACKMAN.jpg",
  amount:50,
  price:30,
  Category:"Biscuits"
},
{
  name:"Tim Tam",
  uUrl:"https://thumbs.dreamstime.com/b/packet-tim-tam-chocolate-biscuits-18181547.jpg",
  amount:50,
  price:30,
  Category:"Biscuits"
},
{
  name:"Horlicks",
  uUrl:"https://mashudgroup.com/wp-content/uploads/2017/10/Horlicks-Biscuits.jpg",
  amount:150,
  price:160,
  Category:"Biscuits"
},
{
  name:"Dry Cakes",
  uUrl:"https://mashudgroup.com/wp-content/uploads/2017/10/Dry-Cake-Mini-Pack.jpg",
  amount:150,
  price:160,
  Category:"Biscuits"
},
{
  name:"Tip",
  uUrl:"https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/watermarked/2018-10-22_171854.964303Tip_Biscuit.jpg",
  amount:30,
  price:30,
  Category:"Biscuits"
},
{
  name:"Sweet Toast",
  uUrl:"https://sindabad.com/media/catalog/product/cache/15869ca78e92508fe510db2b345701fc/p/c/pcfv0200031g300.jpg",
  amount:30,
  price:30,
  Category:"Biscuits"
},
// ============================
{
  name:"Chocolate Cakes",
  uUrl:"https://lh3.googleusercontent.com/proxy/WlStEnwdsrWILUoCkSS0-XCX0LBhbxIK8Zy-VaeQakAX_Vs8GfhZR3JUNWoc1vunsbodLbUXx_KPmeb1UGHwjH_vmmcsrVFLNb5JH6CkxG-ur-iMpn4pEsPevKoufStQUl3HoTVePab0GqYzy1VhMILGyQUO92GvsHne",
  amount:650,
  price:1130,
  Category:"Cakes"
},
{
  name:"Venila Cakes",
  uUrl:"https://media.istockphoto.com/photos/birthday-cake-with-flowers-rose-on-white-background-picture-id909432600?k=6&m=909432600&s=170667a&w=0&h=sWKgvfZ12EU-_9rqBndWmp830DYXN6y7EQemKTXQh0g=",
  amount:650,
  price:1130,
  Category:"Cakes"
},
{
  name:"Chocolate Cakes",
  uUrl:"https://lh3.googleusercontent.com/proxy/WlStEnwdsrWILUoCkSS0-XCX0LBhbxIK8Zy-VaeQakAX_Vs8GfhZR3JUNWoc1vunsbodLbUXx_KPmeb1UGHwjH_vmmcsrVFLNb5JH6CkxG-ur-iMpn4pEsPevKoufStQUl3HoTVePab0GqYzy1VhMILGyQUO92GvsHne",
  amount:650,
  price:1130,
  Category:"Cakes"
},
{
  name:"Venila Cakes",
  uUrl:"https://media.istockphoto.com/photos/birthday-cake-with-flowers-rose-on-white-background-picture-id909432600?k=6&m=909432600&s=170667a&w=0&h=sWKgvfZ12EU-_9rqBndWmp830DYXN6y7EQemKTXQh0g=",
  amount:650,
  price:1130,
  Category:"Cakes"
},
{
  name:"Tiffin Cakes",
  uUrl:"https://mashudgroup.com/wp-content/uploads/2017/10/Tiffin-Cake-Mini-Pack.jpg",
  amount:20,
  price:30,
  Category:"Cakes"
},
{
  name:"Softy Cakes",
  uUrl:"https://www.globe.com.bd/biscuits/wp-content/uploads/2017/11/Softy-300x300.jpg",
  amount:20,
  price:30,
  Character:"Cakes"
},
{
  name:"Bear Cakes",
  uUrl:"https://www.globe.com.bd/biscuits/wp-content/uploads/2017/11/Yummy-Bear-300x300.jpg",
  amount:20,
  price:30,
  Category:"Cakes"
},
{
  name:"Choco Bites",
  uUrl:"https://www.globe.com.bd/biscuits/wp-content/uploads/2017/09/choco-bites-300x300.jpg",
  amount:20,
  price:30,
  Category:"Cakes"
},
// ===============================
{
  name:"The Creep",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFblxv2IbhXvkuTQI0MxJNiLNCkRZC4ilX9L1I1qqvqrG-etBa",
  amount:350,
  price:530,
  Category:"Horror"
},
{
  name:"Ami Topu",
  uUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438351473l/3918747._SY475_.jpg",
  amount:350,
  price:530,
  Category:"Horror"
},
{
  name:"Roboo Nishi",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe08myWxR67qigNMdIIUsivTrpbUMTF0rzQM1CsBiypCIaDa7l",
  amount:350,
  price:530,
  Category:"Horror"
},
{
  name:"Onno Jibon",
  uUrl:"https://boiporibd.com/wp-content/uploads/2019/09/%E0%A6%85%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8.jpg",
  amount:350,
  price:530,
  Category:"Horror"
},
{
  name:"Adarer Janalata Khula",
  uUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486146256l/34108844._SY475_.jpg",
  amount:350,
  price:530,
  Category:"Horror"
},
{
  name:"Pishac Bari",
  uUrl:"https://bdebooks.com/wp-content/uploads/2019/09/imgrok0711_15190-185x265.gif",
  amount:350,
  price:530,
  Category:"Horror"
},
{
  name:"New Moon",
  uUrl:"https://allfreebd.com/wp-content/uploads/2019/04/1469409220.jpg",
  amount:350,
  price:530,
  Category:"Horror"
},
{
  name:"Norok",
  uUrl:"https://www.boichoi.com/uploads/product/35366fdb7b10150a61f093eeda75c392.jpg",
  amount:350,
  price:530,
  Category:"Horror"
},

// ===============================

{
  name:"Gone With the Wind",
  uUrl:"https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg",
  amount:350,
  price:530,
  Category:"History"
},
{
  name:"Buman",
  uUrl:"https://static01.nyt.com/images/2019/11/20/books/19bookthant-myint-u1/19bookthant-myint-u1-superJumbo.jpg",
  amount:350,
  price:530,
  Category:"History"
},
{
  name:"Norman Stone",
  uUrl:"https://fivebooks.com/app/uploads/2011/10/0500251754.01.LZ_-196x300.jpg",
  amount:350,
  price:530,
  Category:"History"
},
{
  name:"Hackney Child",
  uUrl:"https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781471129834/hackney-child-9781471129834_hr.jpg",
  amount:350,
  price:530,
  Category:"History"
},
{
  name:"Hackney Child",
  uUrl:"https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781471129834/hackney-child-9781471129834_hr.jpg",
  amount:350,
  price:530,
  Category:"History"
},
{
  name:"Norman Stone",
  uUrl:"https://fivebooks.com/app/uploads/2011/10/0500251754.01.LZ_-196x300.jpg",
  amount:350,
  price:530,
  Category:"History"
},
{
  name:"Buman",
  uUrl:"https://static01.nyt.com/images/2019/11/20/books/19bookthant-myint-u1/19bookthant-myint-u1-superJumbo.jpg",
  amount:350,
  price:530,
  Category:"History"
},
{
  name:"Gone With the Wind",
  uUrl:"https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg",
  amount:350,
  price:530,
  Category:"History"
},

// ============================

{
  name:"Extruded Snacks",
  uUrl:"https://3.imimg.com/data3/KW/WB/GLADMIN-85354/extruded-snack-500x500.jpg",
  amount:50,
  price:30,
  Category:"SnacksFoods"
},
{
  name:"Lays Chips",
  uUrl:"https://5.imimg.com/data5/LJ/HJ/MY-37165569/lay-e2-80-99s-american-style-cream-and-onion-chips-250x250.png",
  amount:50,
  price:30,
  Category:"SnacksFoods"
},
{
  name:"Mr. Twist Chips",
  uUrl:"https://images.othoba.com/images/thumbs/0058691_bombay-sweets-mr-twist-chips-25gm.jpeg",
  amount:50,
  price:30,
  Category:"SnacksFoods"
},
{
  name:"Bombay Sweets ChanaChur",
  uUrl:"https://www.allhalalfood.com/image/cache/catalog/product-images/Spices/284_Chanachur_-1000x1000.jpg",
  amount:50,
  price:30,
  Category:"SnacksFoods"
},
{
  name:"Ruchi ChanaChur",
  uUrl:"https://lh3.googleusercontent.com/proxy/GL813Se812aLkkZsckchy6kb5-_VE1BZISo7Bdmao_WynRHJ9eUY0PAD69ev1-b-7mnHx7iopyR0efgOvD50PdvbpPcLIOskbGs6PuNxHYRB-0F-J0-ku8AqHebVBBo1wsozeTD0qdBWBVQJZ5-UlXfKtqzSToCDncFVHgUGSgi7y_tjebyjalnj",
  amount:50,
  price:30,
  Category:"SnacksFoods"
},
{
  name:"Ruchi ChanaChur",
  uUrl:"https://images.othoba.com/images/thumbs/0053910_ruchi-chanachur-hot-170gm.jpeg",
  amount:50,
  price:30,
  Category:"SnacksFoods"
},
{
  name:"Kurkure Chips",
  uUrl:"https://images.othoba.com/images/thumbs/0053910_ruchi-chanachur-hot-170gm.jpeg",
  amount:50,
  price:30,
  Category:"SnacksFoods"
},
{
  name:"Lays Chips",
  uUrl:"https://5.imimg.com/data5/LJ/HJ/MY-37165569/lay-e2-80-99s-american-style-cream-and-onion-chips-250x250.png",
  amount:50,
  price:30,
  Category:"SnacksFoods"
},

// ================================
{
  name:"Chinese Noodles",
  uUrl:"https://thumbs.dreamstime.com/b/chinese-noodles-18293605.jpg",
  amount:150,
  price:230,
  Category:"InstantFoods"
},
{
  name:"Bhapa Pitha",
  uUrl:"https://2.bp.blogspot.com/-nNcwn0PEk24/UQBw1boBK5I/AAAAAAAACPk/YSASVA-6utU/s1600/final1.JPG",
  amount:15,
  price:20,
  Category:"InstantFoods"
},
{
  name:"Beef Tikka",
  uUrl:"https://2.bp.blogspot.com/-nNcwn0PEk24/UQBw1boBK5I/AAAAAAAACPk/YSASVA-6utU/s1600/final1.JPG",
  amount:150,
  price:200,
  Category:"InstantFoods"
},
{
  name:"Chinese Noodles",
  uUrl:"https://thumbs.dreamstime.com/b/chinese-noodles-18293605.jpg",
  amount:150,
  price:230,
  Category:"InstantFoods"
},
{
  name:"Patishapta Pitha",
  uUrl:"https://i.ytimg.com/vi/Q31YXjgEMHY/maxresdefault.jpg",
  amount:150,
  price:230,
  Category:"InstantFoods"
},
{
  name:"Pitha puli",
  uUrl:"https://eisamaylive.com/wp-content/uploads/2018/01/image0011.jpg",
  amount:150,
  price:230,
  Category:"InstantFoods"
},
{
  name:"Chinese Noodles",
  uUrl:"https://thumbs.dreamstime.com/b/chinese-noodles-18293605.jpg",
  amount:150,
  price:230,
  Category:"InstantFoods"
},
{
  name:"Bhapa Pitha",
  uUrl:"https://2.bp.blogspot.com/-nNcwn0PEk24/UQBw1boBK5I/AAAAAAAACPk/YSASVA-6utU/s1600/final1.JPG",
  amount:15,
  price:20,
  Category:"InstantFoods"
},

// ==============================

{
  name:"7Oils",
  uUrl:"https://5.imimg.com/data5/BM/LM/MY-13920102/emami-7-oils-in-one-100ml-bottle-500x500.jpg",
  amount:1050,
  price:100,
  Category:"HouseholdItems"
},
{
  name:"Sunsilk Shampoo",
  uUrl:"https://prosadhoni.com/wp-content/uploads/2019/09/SSHG180H-1000.jpg",
  amount:1050,
  price:1130,
  Category:"HouseholdItems"
},
{
  name:"Handwash Dettol",
  uUrl:"https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hfc/h62/8867998236702/DettolOriginalLiquidHandwash.jpg",
  amount:1050,
  price:3330,
  Category:"HouseholdItems"
},
{
  name:"Basket",
  uUrl:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4370874.jpg",
  amount:1050,
  price:3330,
  Category:"HouseholdItems"
},
{
  name:"Handwash Dettol",
  uUrl:"https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hfc/h62/8867998236702/DettolOriginalLiquidHandwash.jpg",
  amount:1050,
  price:3330,
  Category:"HouseholdItems"
},
{
  name:"Basket",
  uUrl:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4370874.jpg",
  amount:1050,
  price:3330,
  Category:"HouseholdItems"
},
{
  name:"7Oils",
  uUrl:"https://5.imimg.com/data5/BM/LM/MY-13920102/emami-7-oils-in-one-100ml-bottle-500x500.jpg",
  amount:1050,
  price:100,
  Category:"HouseholdItems"
},
{
  name:"Sunsilk Shampoo",
  uUrl:"https://prosadhoni.com/wp-content/uploads/2019/09/SSHG180H-1000.jpg",
  amount:1050,
  price:1130,
  Category:"HouseholdItems"
},
// ===========================================
{
  name:"Shools Bags",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaZb15flPryhvbPTDnP_uXwz6S943cfQRq67I1sGR4cCTecX6L",
  amount:450,
  price:1030,
  Category:"Bags"
},
{
  name:"Ladys Bags",
  uUrl:"https://image.freepik.com/free-photo/close-up-lady-s-bag-isolated-white-background_93675-56028.jpg",
  amount:450,
  price:1030,
  Category:"Bags"
},
{
  name:"Student Bags",
  uUrl:"https://thumbs.dreamstime.com/b/happy-smiling-female-student-bag-books-against-isolated-white-background-portrait-130537800.jpg",
  amount:450,
  price:1030,
  Category:"Bags"
},
{
  name:"Ladys Bags",
  uUrl:"https://image.freepik.com/free-photo/close-up-lady-s-bag-isolated-white-background_93675-56028.jpg",
  amount:450,
  price:1030,
  Category:"Bags"
},
{
  name:"Shopping Bags",
  uUrl:"https://thumbs.dreamstime.com/b/big-white-paper-bag-isolated-white-27625558.jpg",
  amount:150,
  price:230,
  Category:"Bags"
},
{
  name:"Luggage",
  uUrl:"https://images-submarino.b2w.io/produtos/01/00/img/47393/4/47393451_1GG.jpg",
  amount:4150,
  price:5230,
  Category:"Bags"
},
{
  name:"Shools Bags",
  uUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaZb15flPryhvbPTDnP_uXwz6S943cfQRq67I1sGR4cCTecX6L",
  amount:450,
  price:1030,
  Category:"Bags"
},
{
  name:"Student Bags",
  uUrl:"https://thumbs.dreamstime.com/b/happy-smiling-female-student-bag-books-against-isolated-white-background-portrait-130537800.jpg",
  amount:450,
  price:1030,
  Category:"Bags"
},
]









































app.get('/yo',function(req,res){

  res.render('index',{ dataF: data});

})



app.post('/yo', function(req,res){
//   var dataF=[];
// for(i=0;i<data.length;i++){
//   if(data[i].Category==){
//     dataF.push(data[i]);
//   }
// }
// res.render('index',{ dataF: dataF});



var dataF=[];
var x;
var x2;
var y;
y=req.body.searchData;
 y=y.toLowerCase();
for(i=0;i<data.length;i++){
  x=data[i].Category+'';
  x=x.toLowerCase();
  x2=data[i].name+'';
  x2=x2.toLowerCase();
  // x=x.toLowerCase();
  if(x===y || x2===y){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});





})





app.get('/mo',function(req,res){
  res.send("This is different");
})










app.post('/product', function(req,res){

  var dataF=[];
  dataF.push(req.body.uUrl);
  dataF.push(req.body.name);
  dataF.push(req.body.amount);
  dataF.push(req.body.price);


res.render('product',{ dataF: dataF});
})







app.post('/yo/cCandy', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Chocolates' || data[i].Category==='Candies'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})





app.post('/yo/bBreads', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Breads' || data[i].Category==='Biscuits'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})



app.post('/yo/books', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Horror' || data[i].Category==='History'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})



app.post('/yo/badminton', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='badminton'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})




app.post('/yo/football', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Football'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})



app.post('/yo/cricket', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Cricket'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})



app.post('/yo/vegefruites', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Fish' || data[i].Category==='Vegetables'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})




app.post('/yo/fish', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Fish'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})



app.post('/yo/chicken', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Chicken'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})



app.post('/yo/meat', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Meat'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})




app.post('/yo/cakes', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Cakes'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})

app.post('/yo/instantFoods', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='InstantFoods'){
    dataF.push(data[i]);
  }
}
res.render('index',{ dataF: dataF});
})

app.post('/yo/snacksFoods', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='SnacksFoods'){
    dataF.push(data[i]);
  }
}
  res.render('index',{ dataF: dataF});
})
app.post('/yo/bags', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='Bags'){
    dataF.push(data[i]);
  }
}
  res.render('index',{ dataF: dataF});
})
app.post('/yo/householdItems', function(req,res){
  var dataF=[];
for(i=0;i<data.length;i++){
  if(data[i].Category==='HouseholdItems'){
    dataF.push(data[i]);
  }
}
  res.render('index',{ dataF: dataF});
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
// conosle.log("Anik");
