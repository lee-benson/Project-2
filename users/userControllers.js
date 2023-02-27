import user from "./userModel.js"
import bcrypt from "bcrypt"

const saltRounds = 10

// Create account
export async function createUser(req, res) {
  try {
    const { name, DOB, username, email, password } = req.body
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.error(err)
        res.status(500).json("Error registering new user")
      } else {
        const newUser = new user({
          name,
          DOB,
          username,
          email,
          password: hash
        })
        await newUser.save()
        res.json('User registered successfully!')
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json("Error registering new user")
  }
}

