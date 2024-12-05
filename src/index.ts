import express from 'express'
import bodyParser from 'body-parser'
import calculatorRoutes from './routes/calculator.routes'

const app = express()
const PORT = 3000

app.use(express.json())

// Middleware
app.use(bodyParser.json())

// Routes
app.use('/api', calculatorRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
