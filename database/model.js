// 

// ? product collection
var productSchema = {
    product_id : {
        type : Number,
        min : 1000,
        max : 9999
    },
    price : {
        type : Number,
        min : 0,
        max : 999999
    },
    rating : {
        type : Number,
        min : 0,
        max : 5
    },
    sizes : [ // ! ARRAY
        {
            size : {
                type : String,
                enum : ["X", "M", "L", "XL", "2XL"]
            },
            availble : Boolean
        }
    ],
    questions : Boolean,
    favorite : Boolean,
    photos : [// ! ARRAY 
        {
            photo_id : {
                type : Number,
                min : 1000,
                max : 9999
            },
            content : URL,
            tweet : {
                tweet_id : {
                    type : Number,
                    min : 1000,
                    max : 9999
                },
                tweet_content : {
                    type : String,
                    minlength : 1,
                    maxlength : 280
                },
                teet_userName : {
                    type : String,
                    minlength : 1,
                    maxlength : 99
                },
                tweet_dp : URL
            }
        }
    ]
}