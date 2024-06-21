// // PROGRAMAÇAO ASSINCRONA

// const sopaBoa = () => console.log('SOPINHA')
// console.log('Feijãozinho')
// setTimeout(sopaBoa, 2000)
// console.log('Arrozinho')

// EXEMPLO COM PARTICIPAÇÃO DO USUARIO AOHHHH
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isReady = prompt("Tá sim ou Não ? ")
//     if((isReady == 'SIM'.toLowerCase()) || (isReady == 'sim'.toUpperCase())) {
//       resolve('SOPINHA PRONTA')
//     }
//     else{
//       reject('SEM SOPINHA HOJE')
//     }
//   })
// })
// console.log(promise1.then(value => console.log(value)))

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)]
    isReady ? resolve('SOPINHA PRONTA') :
    reject('SEM SOPINHA HOJE')
  }, 1000)
})

// PRIMEIRA FORMA >>>
// console.log(
//   promise2
//   .then(success => console.log({success}))
//   .catch(error => console.log({error}))
// )

// SEGUNDA FORMA >>>
const getSoup = async () => {
  const data = {rating: null, tip: null, pay: null, review: null}
  try{
    const soup = await promise2
    console.log(soup)
    data.rating = 5
    data.tip = .2
    data.pay = 10
    data.review = 5
    return data
  } catch(error) {
    console.log(error)
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review = 1
    return data
  }
}
getSoup().then(value => console.log(value))

// console.log('fetch: ',
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => console.log(data))
// )

// ASYNC E AWAIT EXEMPLO!!!!
// REGRAS PRA USAR ASYNC E AWAIT >>>
// 1 - VOCE DEVE CRIAR UMA FUNÇÃO
// 2 - DEVE USAR A PALAVRA-CHAVE ´´ASYNC´´
// 3 - USAR A PALAVRA ´´AWAIT´´
// const getDog = async () => {
//   const url = 'https://dog.ceo/api/breeds/image/random'
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
// }
// getDog()