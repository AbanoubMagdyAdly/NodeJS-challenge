# NodeJS-challenge

### Installations Steps

> npm install

> nodejs seed.js

> nodemone start || npm start

### USE CASES

> · All espresso machines `/api/v1/categories/machines/products?filter[product_type]=ESPRESSO_MACHINE`
*   EM001
*   EM002
*   EM003

> · All small pods `/api/v1/categories/pods/products?filter[product_type]=COFFEE_POD_SMALL`
*   CP001
*   CP003
*   CP011
*   CP013
*   CP021
*   CP023
*   CP031
*   CP033
*   CP041
*   CP043

> · All pods sold in 7 dozen packs `/api/v1/categories/pods/products?filter[pack_size]=7`
*   EP007
*   EP017

---

API Documentation

> Get All Category

` GET {{url}}/api/v1/categories/`

> Get products of specific category

` GET {{url}}/api/v1/categories/:categorySlug/products`

*categorySlug* => [machines - pods]

> Use filters in getting products

* pagination (optional)
    * page = number
    * limit = number

* case machines
    * filter[water_line_compatible] => [true - false]
    * filter[product_type] => [COFFEE_MACHINE_LARGE - COFFEE_MACHINE_SMALL - ESPRESSO_MACHINE]

* case pods
    * filter[product_type] => [COFFEE_POD_LARGE - COFFEE_POD_SMALL - ESPRESSO_POD]

    * filter[coffee_flavor] => [COFFEE_FLAVOR_VANILLA - COFFEE_FLAVOR_CARAMEL - COFFEE_FLAVOR_PSL - COFFEE_FLAVOR_MOCHA - COFFEE_FLAVOR_HAZELNUT]

    * filter[pack_size] => [1 - 3 - 5 - 7]

 > request Example

    ```
    {{url}}/api/v1/categories/machines/products?filter[water_line_compatible]=true

 > respose Example

    ```JS
    {
    "status": 1,
    "data": {
        "products": [
            {
                "product_code": "CM003",
                "title": "small machine, deluxe model"
            },
            {
                "product_code": "CM102",
                "title": "large machine, premium model"
            },
            {
                "product_code": "CM103",
                "title": "large machine, deluxe model"
            },
            {
                "product_code": "EM003",
                "title": "espresso machine, deluxe model"
            }
        ]
    },
    "_metadata": {
        "current_page": 1,
        "per_page": null,
        "page_count": 4,
        "total_count": 4,
        "last_page": 1
    }
}```


> errors

* database_error
   ```JS
    {
        "status": 1001,
        "errors": "Database Error"
    }
    ```
* server_error
   ```JS
    {
        "status": 1002,
        "errors": "Server Error"
    }
    ```
* not_found
   ```JS
    {
        "status": 1003,
        "errors": "Route Not Found"
    }
    ```