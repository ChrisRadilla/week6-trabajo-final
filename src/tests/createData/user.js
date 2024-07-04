const User = require("../../models/User")

const user = async () => {
    const body = {
        firstName: "John",
        lastName: "Wick",
        email: "Wick@gmail.com",
        password: "John1234",
        phone: "0123456789"
    }

    await User.create(body)
}

module.exports = user