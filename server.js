const express = require('express')
const path = require('path')
const app = express()
const _path = path.join(__dirname, './dist') // dist 폴더의 정적 자원을 꺼내욤.

app.use('/', express.static(_path))
app.listen(12010, () => {
    console.log('lazy 이미지서버 : 12010 시작 http://127.0.0.1:12010')
})