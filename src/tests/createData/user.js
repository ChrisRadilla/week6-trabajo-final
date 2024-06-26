const User = require("../../models/User")

const user = async () => {
    const body = {
        firstName: "Zarquiz",
        lastName: "Ortega",
        email: "zarquiz@email.com",
        password: "zarquiz1234",
        phone: "5620860800"
    }

    await User.create(body)
}

module.exports = user