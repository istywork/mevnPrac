// const Nightmare = require("nightmare")
// const vo = require("vo")
// const nightmare = Nightmare({
//     show: true
// })
// const BASE_URL = `https://grafolio.naver.com/category/painting`
// const GRAFOLIO_URL = `${BASE_URL}#category_popular_creator`

// function* run(){
//     yield nightmare.goto(GRAFOLIO_URL)
//     let prevHeight, currHeight = 0
//     while(prevHeight !== currHeight){
//         prevHeight = currHeight
//         currHeight = yield nightmare.evaluate(() => document.body.scrollHeight)
//         yield nightmare.scrollTo(currHeight, 0).wait(3000)
//     }

//     const a = yield nightmare
//     .evaluate(() => Array.from(document.querySelectorAll('a.thumb'))
//     .map(e => (`https://grafolio.naver.com${e.getAttribute('href')}`)))
//     console.log(a)
//     yield nightmare.end()
// }
// vo(run)(() => console.log('스크래핑이 완료되었습니다.'))

// ramda를 이용한 커링
// const R = require('ramda')
// const a = R.add(1)
// const b = a(2)
// console.log(b)

// Point-free, 무인수 프로그래밍
const {map, filter, pipe, values, go} = require('fxjs')
const L = require('fxjs')
const friends = [
    {
        "name": "연제호",
        "do": "군인",
    },{
        "name": "박종선",
        "do": "회장",
    },{
        "name": "윤성용",
        "do": "개발자",
    },{
        "name": "박동영",
        "do": "개발자",
    },
]

const t = friends.map(e => e.do === "개발자" ? e : null).filter(e => e)
const prop = key => obj => obj[key]
const propEqual = value => key => obj => prop(key)(obj) === value
console.log(t)
const t2 = go(
    friends,
    L.filter(propEqual('개발자')('do')),
    L.takeAll
)
console.log(t2)