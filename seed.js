const product = require('./models/product');
const connectionObject = require("./config/mongoConfig");
const category = require('./models/category');
const mongoose = require("mongoose");

async function seed() {
  await mongoose.connect(connectionObject.MONGO_DB_URI, connectionObject.MONGO_DB_CONNECTION_OPTIONS);

  const machineCategory = await category.create({slug: 'machines', title: 'Coffee machines'});
  const podsCategory = await category.create({slug: 'pods', title: 'Coffee pods'});

  console.log('category seed finished');

  await product.insertMany(
        [
          {category: machineCategory, product_code:"CM001", title: "small machine, base model", attributes:[{water_line_compatible: "false"}, {product_type: "COFFEE_MACHINE_SMALL"}] },
          {category: machineCategory, product_code:"CM002", title: "small machine, premium model", attributes:[{water_line_compatible: "false"}, {product_type: "COFFEE_MACHINE_SMALL"}] },
          {category: machineCategory, product_code:"CM003", title: "small machine, deluxe model", attributes:[{water_line_compatible: "true"}, {product_type: "COFFEE_MACHINE_SMALL"}] },
          {category: machineCategory, product_code:"CM101", title: "large machine, base model", attributes:[{water_line_compatible: "false"}, {product_type: "COFFEE_MACHINE_LARGE"}] },
          {category: machineCategory, product_code:"CM102", title: "large machine, premium model", attributes:[{water_line_compatible: "true"}, {product_type: "COFFEE_MACHINE_LARGE"}] },
          {category: machineCategory, product_code:"CM103", title: "large machine, deluxe model", attributes:[{water_line_compatible: "true"}, {product_type: "COFFEE_MACHINE_LARGE"}] },
          {category: machineCategory, product_code:"EM001", title: "espresso machine, base model", attributes:[{water_line_compatible: "false"}, {product_type: "ESPRESSO_MACHINE"}] },
          {category: machineCategory, product_code:"EM002", title: "espresso machine, premium model", attributes:[{water_line_compatible: "false"}, {product_type: "ESPRESSO_MACHINE"}] },
          {category: machineCategory, product_code:"EM003", title: "espresso machine, deluxe model", attributes:[{water_line_compatible: "true"}, {product_type: "ESPRESSO_MACHINE"}] },
          {category: podsCategory, product_code:"CP001", title: "small coffee pod, 1 dozen, vanilla", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_VANILLA"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP003", title: "small coffee pod, 3 dozen, vanilla", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_VANILLA"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP011", title: "small coffee pod, 1 dozen, caramel", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_CARAMEL"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP013", title: "small coffee pod, 3 dozen, caramel", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_CARAMEL"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP021", title: "small coffee pod, 1 dozen, psl", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_PSL"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP023", title: "small coffee pod, 3 dozen, psl", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_PSL"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP031", title: "small coffee pod, 1 dozen, mocha", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_MOCHA"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP033", title: "small coffee pod, 3 dozen, mocha", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_MOCHA"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP041", title: "small coffee pod, 1 dozen, hazelnut", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_HAZELNUT"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP043", title: "small coffee pod, 3 dozen, hazelnut", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_HAZELNUT"}, {product_type: "COFFEE_POD_SMALL"}] },
          {category: podsCategory, product_code:"CP101", title: "large coffee pod, 1 dozen, vanilla", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_VANILLA"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP103", title: "large coffee pod, 3 dozen, vanilla", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_VANILLA"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP111", title: "large coffee pod, 1 dozen, caramel", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_CARAMEL"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP113", title: "large coffee pod, 3 dozen, caramel", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_CARAMEL"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP121", title: "large coffee pod, 1 dozen, psl", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_PSL"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP123", title: "large coffee pod, 3 dozen, psl", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_PSL"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP131", title: "large coffee pod, 1 dozen, mocha", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_MOCHA"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP133", title: "large coffee pod, 3 dozen, mocha", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_MOCHA"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP141", title: "large coffee pod, 1 dozen, hazelnut", attributes:[{pack_size: '1'}, {coffee_flavor: "COFFEE_FLAVOR_HAZELNUT"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"CP143", title: "large coffee pod, 3 dozen, hazelnut", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_HAZELNUT"}, {product_type: "COFFEE_POD_LARGE"}] },
          {category: podsCategory, product_code:"EP003", title: "espresso pod, 3 dozen, vanilla", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_VANILLA"}, {product_type: "ESPRESSO_POD"}] },
          {category: podsCategory, product_code:"EP005", title: "espresso pod, 5 dozen, vanilla", attributes:[{pack_size: '5'}, {coffee_flavor: "COFFEE_FLAVOR_VANILLA"}, {product_type: "ESPRESSO_POD"}] },
          {category: podsCategory, product_code:"EP007", title: "espresso pod, 7 dozen, vanilla", attributes:[{pack_size: '7'}, {coffee_flavor: "COFFEE_FLAVOR_VANILLA"}, {product_type: "ESPRESSO_POD"}] },
          {category: podsCategory, product_code:"EP013", title: "espresso pod, 3 dozen, caramel", attributes:[{pack_size: '3'}, {coffee_flavor: "COFFEE_FLAVOR_CARAMEL"}, {product_type: "ESPRESSO_POD"}] },
          {category: podsCategory, product_code:"EP015", title: "espresso pod, 5 dozen, caramel", attributes:[{pack_size: '5'}, {coffee_flavor: "COFFEE_FLAVOR_CARAMEL"}, {product_type: "ESPRESSO_POD"}] },
          {category: podsCategory, product_code:"EP017", title: "espresso pod, 7 dozen, caramel", attributes:[{pack_size: '7'}, {coffee_flavor: "COFFEE_FLAVOR_CARAMEL"}, {product_type: "ESPRESSO_POD"}] }
    ]);
  console.log('products seed finished');
  process.exit();
}
seed();