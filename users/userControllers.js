import User from "./userModel.js"
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
        const newUser = new User({
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


// Authentifying
export async function checkUser(req, res) {
  try {
    const { username, password } = req.body
    User.findOne({ username: username }, (err, user) => {
      if (err) throw err
      if (!user) {
        return res.status(401).json('Invalid credentials')
      }
      bcrypt.compare(password, user.password, async (err, result) => {
        if (err) throw err
        if (result === true) {
          return res.status(200).json('Login successful')
        } else {
          return res.status(401).json('Invalid creds')
        }
      })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json("Error accessing account")
  }
}


// Show all users
export async function getUsers(req, res) {
  try {
    const allUsers = await User.find({})
    res.json(allUsers)
  } catch (error) {
    console.error(error)
    res.status(500).json("Error displaying users")
  }
}

// Delete user
export async function deleteUser(req, res) {
  try {
    const { name } = req.params
    const deleteUser = await User.findOneAndDelete({ name: name }, req.body)
    if (deleteUser) {
      return res.status(200).json("Account removed!")
    } else {
      throw new Error("Error removing Account")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json("Error deleting user(s)")
  }
}