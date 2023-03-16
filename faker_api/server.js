const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = 8000

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};


const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.random.numeric()
    }
    return newFake
}


const createCompany = () => {
    const newFake = {
        _id: faker.random.numeric(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFake
}


const newFakeProduct = createProduct()
const newFakeUser = createUser()
const newFakeCompany = createCompany()


app.post('/api/users/new', (req, res)=>{
    res.json(newFakeUser)
})

app.post('/api/companies/new', (req, res)=>{
    res.json(newFakeCompany)
})

app.post('/api/user/company', (req, res)=>{
    const userAndCompany = { newFakeCompany, newFakeUser }
    res.json(userAndCompany)
})

// console.log(newFakeProduct);
// console.log(newFakeUser);
// console.log(newFakeCompany);

const portVerb = faker.hacker.ingverb()
app.listen(port, () => console.log(`${portVerb.charAt(0).toUpperCase() + portVerb.slice(1)} on port: ${port}`))