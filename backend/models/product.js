import mongoose from "mongoose"


const productSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Please enter product name']
    },
    description:{
        type:String,
        required:[true,'Please enter product description']
    },
    price:{
        type:Number,
        required:[true,'Please enter product name']
    },
    images:[
        
        {
            public_id:{
            type:String,
            
        }
        ,
        url:{
            type:String,

        }
    }],

    category:{
        type:String,
        required:[true,'Please enter category'],

        enum:{
values:[
    "Electronics",
    "Cameras",
    "Laptops",
    "Accesories",
    "Headphones",
    "Sports",

],

message:"Please select correct category"
        }},

        seller:{
            type:String,
            required:[true,'Please enter seller']
        },

        stock:{
            type:Number,
            required:[true,'Please enter stock']
        },

        rating:{
            type:Number,
            default:0
        },

        reviews:[
            {
                rating:{
                type:Number,
                required:true
            },

            comment:{
                type:String,
                required:true
            },

            createdAt:{
                type:Date,
                default:Date.now
            }
        
        
        }
        ],
        createdAt:{
            type:Date,
            default:Date.now
        }
    

})


export default mongoose.models.Product || mongoose.model('Product',productSchema)