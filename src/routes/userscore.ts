import express from 'express'
import controller from '../controllers/userscore'

const router = express.Router()

router.get('/api', controller.fetchUserScores)
router.post('/api', controller.saveUserScore)

export = router