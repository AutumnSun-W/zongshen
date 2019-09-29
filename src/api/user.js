import * as API from './index';

export default {
    getUser: () => {
        return API.GETNo('/user');
    },
    
    //
    postRegister: params => {
        return API.POST('/register', params);
    },
    postLogin: params => {
        return API.POST('/login', params);
    },

    //
    getProduct: () => {
        return API.GETNo('/product')
    },
    postDetail: params => {
        return API.POST('/detailProduct', params)
    },
    postPclass1Product:params=>{
        return API.POST('/class1product',params)
    }, 
    postPclass2Product:params=>{
        return API.POST('/class2product',params)
    },
    postPclass4Product:params=>{
        return API.POST('/class4product',params)
    },
    postUpdateUser:params=>{
        return API.POST('/updatauser',params)
    },
    postNameProduct:params=>{
        return API.POST('/nameproduct',params)
    },
    


    //
    postCart:params=>{
        return API.POST('/cart',params)
    },
    postAddCart:params=>{
        return API.POST('/addcart',params)
    },
    postDelCart:params=>{
        return API.POST('/delcart',params)
    },
    postUpdateCart:params=>{
        return API.POST('/updatecart',params)
    },

    

    postNameClass:params=>{
        return API.POST('/nameclass',params)
    },
    postClassClass:params=>{
        return API.POST('/classclass',params)
    },


    //
    postDelAddress:params=>{
        return API.POST('/deladdress',params)
    },


    postaddorder:params=>{
        return API.POST('/addorders',params)
    },


    postadress:params=>{
        return API.POST('/address',params)
    },

    postaddaddress:params=>{
        return API.POST('/addaddress',params)
    }

    
}