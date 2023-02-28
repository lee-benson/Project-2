import { createJudo, updateJudo } from "../judoka/controller"
import { checkUser } from "../users/userControllers";

const BASE_URL = '/api'

export const judo = {
  async judoList() {
    const data = await fetch(`${BASE_URL}/`)
    return data.json()
  },
  async createJudo() { },
  async updateJudo() { },
  async deleteJudo() { },
};

export const auth = {
  async checkUser() { },
  async createUser() { },
  async deleteUser() { },
}