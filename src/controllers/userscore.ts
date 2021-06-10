import  { Request, Response} from 'express'
import UserScore from '../models/userscore'

const saveUserScore = (req: Request, res: Response ) => {
  try {
    let { username, score, difficulty } = req.body

    // if account does not exist by, create a new one
        UserScore.create({username, score, difficulty})
        .then(userscore => {
          res.status(201).json(userscore)
        })
      } catch (error) {
        throw error
      }
}

const fetchUserScores = (req: Request, res: Response ) => {
  try {

    UserScore.find()
    .then((results) => {
      res.status(200).json(results)
    })

  } catch (error) {
    throw error
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  saveUserScore,
  fetchUserScores
}