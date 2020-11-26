import nc from 'next-connect'

const handler = nc()
    .get((req, res) => {
        res.json({message: 'OK'})
    })
    .post((req, res) => {
        res.json({message: 'Post'})
    })

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'hello' }))
  }