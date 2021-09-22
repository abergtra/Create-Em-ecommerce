const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{
        categories: async () => {
            return 
        },

        products: async ()=>{
            return 
        },
        product: async ()=>{
            return
        },
        user: async ()=>{
            return
        },
       order: async ()=>{
            return
        },
        //checkout is for stripe functionlity -- delete if problem is caused with MVP 
        checkout: async ()=>{
            return
        }

    },

    Mutation:{  
        addUser: async ()=>{
            return
        },
        addOrder: async ()=>{
            return
        },
        
        updateUser: async ()=>{
            return
        }, 
        updateProduct: async ()=>{
            return
        },
        updateProduct: async ()=>{
            return
        },
    }
}
/*
type Query{
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout 
}

type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth 
    addOrder(): Order
    updateUser(): User
    updateProduct(): Product
    login(email: String!, password: String!) : Auth 
}
*/

// stripe object needs to be imported here 
module.exports = resolvers;