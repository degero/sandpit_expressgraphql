import * as express from 'express';
//import {Request, Response} from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

const app = express();
const { PORT = 3000 } = process.env;

// app.get('/', (req: Request, res: Response) => {
//     res.send({
//         message: 'hello',
//     });
// });
const mySchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                resolve() {
                    return 'hello';
                },
            },
        },
    }),
});
app.use(
    '/graphql',
    graphqlHTTP({
        schema: mySchema,
        graphiql: true,
    }),
);
app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});
