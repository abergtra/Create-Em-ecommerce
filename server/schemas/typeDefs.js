const {gql} = require('apollo-server-express') ;

const typeDefs = gql`

    type User{
        _id: ID
        username: String
        email: String
        orders: [Order]
        
    }

    type Category{
        _id : ID
        name: String
    }

    type Product{
        _id: ID
        name: String
        category: Category 
        description: String
        image:  String 

        price: Float


    }


    type Order{
        _id : ID
        purchaseDate: String 
        products: [Product]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

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
`;


module.exports = typeDefs;