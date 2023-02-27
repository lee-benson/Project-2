import mongoose from 'mongoose'
import Judo from './model.js'


// Get the entire index
export async function getJudo(req, res) {
  try {
    const getJudo = await Judo.find({});
    res.json(getJudo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}


// Get techniques based on belt
export async function getBelt(req, res) {
  try {
    const belt = req.params.belt
    const getBelt = await Judo.find({ belt: belt })

    if (getBelt) {
      res.json(getBelt)
    } else {
      res.status(404).json({ message: "Technique(s) not found!" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}


// Get techniques based on type
export async function getType(req, res) {
  try {
    const type = req.params.type
    const getType = await Judo.find({ type: type })

    if (getType) {
      res.json(getType)
    } else {
      res.status(404).json({ message: "Technique(s) not found!" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}


// Get techniques based on name
export async function getName(req, res) {
  try {
    const name = req.params.name
    const getName = await Judo.find({ name: name })

    if (getName) {
      res.json(getName)
    } else {
      res.status(404).json({ message: "Technique not found!" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}


// Input techniques not in the index
export async function createJudo(req, res) {
  try {
    const judo = new Judo(req.body)
    await judo.save()
    res.status(201).json(judo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}


// Update technique based on name
export async function updateJudo(req, res) {
  try {
    const { name } = req.params
    const judo = await Judo.findOneAndUpdate({ name: name }, req.body)
    res.status(201).json(judo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}


// Delete technique based on name
export async function deleteJudo(req, res) {
  try {
    const { name } = req.params
    const judo = await Judo.findOneAndDelete({ name: name }, req.body)
    if (judo) {
      return res.status(200).json("Technique removed!")
    } else {
      throw new Error("Technique not found")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}