const express = require('express')

const graphqlHTTP = require('express-graphql').graphqlHTTP

const schema = require('./schema/schema')

const app = express()

const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://Apache:test1234@cluster0.9uyog.mongodb.net/graphQL_Project?retryWrites=true&w=majority')
mongoose.connection.once('open', ()=>{
    console.log('connected to database')
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, () => {
    console.log('now listening for request on port 4000');
})