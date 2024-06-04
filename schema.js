export const typeDefs = `#graphql
    type Game {
        id : ID!
        title : String!
        platform  : [String!]!
        reviews : [Review!]
    }
    type Review {
        id : ID!
        rating : Int!
        content : String!
        game_id : ID!
        author_id : ID!
        game : [Game!]
        author : [Author!]
    }
    type Author {
        id : ID!
        name : String!
        verified : Boolean!
        reviews : [Review!]
    }
    type Query {
        games : [Game]!
        game(id: ID!) : Game
        reviews : [Review]
        review(id: ID!): Review
        authors : [Author]
        author(id: ID!) : Author
    }
    type Mutation {
        addGame(game: GameInput!) : Game
        deleteGame(id: ID!) : [Game]
        updateGame( input: GameUpdate!, id : ID!) : Game!
    }
    input GameInput {
        title : String!
        platform : [String!]!
    }
    input GameUpdate {
        title : String
        platform : [String!]
    }
`;
