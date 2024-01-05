const {gql} = require('apollo-server');

const typeDefs = gql`

    type Rating {
        count: Int,
        rate: Float
    }
    type Product {
        id: ID!,
        name: String,
        price: Float,
        description: String,
        category: String,
        image: String
        rating: Rating
    }


    type Query {
        products: [Product]
    }
`;

module.exports = typeDefs;

