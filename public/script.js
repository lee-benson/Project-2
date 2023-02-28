import router from '../judoka/router.js'
import * as controllers from '../judoka/controller.js'
import * as userControllers from '../users/userControllers.js'

const getJudoBtn = document.getElementById('getJudoBtn')
const results = document.getElementById('results')

async function getJudo() {
  try {
    const res = await fetch('/api')
    const data = await res.json()
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// @ts-ignore
getJudoBtn.addEventListener('click', getJudo)
