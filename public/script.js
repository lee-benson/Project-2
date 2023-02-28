import router from '../judoka/router.js'
import * as controllers from '../judoka/controller.js'
import * as userControllers from '../users/userControllers.js'

const getJudoBtn = document.getElementById('getJudoBtn')
const results = document.getElementById('results')

getJudoBtn.addEventListener('click', async () => {
  await fetch('/')
    .then(res => res.json())
    .then(data => {
      results.innerHTML = ''
      data.forEach(judo => {
        const judoElement = document.createElement('div')
        judoElement.innerHTML = `<h2>${judo.name}</h2><p>${judo.type}</p>`
        results.appendChild(judoElement)
      })
    })
})
