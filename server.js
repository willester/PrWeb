const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const cors = require('cors')

const sequelize = new Sequelize('test1', 'root', 'pass', {
  dialect: 'mysql'
})

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [3, 20]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [8, 30]
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [3, 20]
    }
  }
})

const Team = sequelize.define('team', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [3, 20]
    }
  }
})

const Project = sequelize.define('project', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [3, 20]
      }
    },
    gitHubRepoLink: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 50]
        }
      }


  })

  const Bug = sequelize.define('bug', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [3, 20]
      }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 50]
        }
      },

      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['working on it', 'no one working on it', 'finished', '']
        }
  })






  Team.hasMany(User)
  Team.hasMany(Project)
  User.hasMany(Bug)
  Project.hasMany(Bug)



  const app = express()
  app.use(cors())
  app.use(bodyParser.json())
  
app.get('/create', async (req, res, next) => {
    try {
      await sequelize.sync({ force: true })
      res.status(201).json({ message: 'created' })
    } catch (err) {
      next(err)
    }
})
  
app.get('/users', async (req, res, next) => {
  const query = {
    where: {}
  }
  if (req.query.filter) {
    query.where.name = {
      [Op.like]: `%${req.query.filter}%`
    }
  }
  let pageSize = 10
  if (req.query.pageSize) {
    pageSize = parseInt(req.query.pageSize)
  }
  if (req.query.page) {
    const page = parseInt(req.query.page)
    query.limit = pageSize
    query.offset = page * pageSize
  }
  try {
    const users = await User.findAll(query)
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

app.post('/users', async (req, res, next) => {
  try {
    await User.create(req.body)
    res.status(201).json({ message: 'created' })
  } catch (err) {
    next(err)
  }
})

app.get('/teams', async (req, res, next) => {
  const query = {
    where: {}
  }
  if (req.query.filter) {
    query.where.name = {
      [Op.like]: `%${req.query.filter}%`
    }
  }
  let pageSize = 10
  if (req.query.pageSize) {
    pageSize = parseInt(req.query.pageSize)
  }
  if (req.query.page) {
    const page = parseInt(req.query.page)
    query.limit = pageSize
    query.offset = page * pageSize
  }
  try {
    const teams = await Team.findAll(query)
    res.status(200).json(teams)
  } catch (err) {
    next(err)
  }
})

app.post('/teams', async (req, res, next) => {
  try {
    await Team.create(req.body)
    res.status(201).json({ message: 'created' })
  } catch (err) {
    next(err)
  }
})


app.get('/teams/:tid', async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.tid)
    if (team) {
      res.status(200).json(team)
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})

app.put('/teams/:tid', async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.tid)
    if (team) {
      await team.update(req.body)
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})


app.delete('/teams/:tid', async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.tid)
    if (team) {
      await team.destroy()
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})


app.put('/users/:uid', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.uid)
    if (user) {
      await user.update(req.body)
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})


app.delete('/users/:uid', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.uid)
    if (user) {
      await user.destroy()
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})

app.get('/users/:uid', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.uid)
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})
app.get('/projects', async (req, res, next)=>{
  const query = {
    where: {}
  }
  if (req.query.filter) {
    query.where.name = {
      [Op.like]: `%${req.query.filter}%`
    }
  }
  let pageSize = 10
  if (req.query.pageSize) {
    pageSize = parseInt(req.query.pageSize)
  }
  if (req.query.page) {
    const page = parseInt(req.query.page)
    query.limit = pageSize
    query.offset = page * pageSize
  }
  try {
    const projects = await Project.findAll(query)
    res.status(200).json(projects)
  } catch (err) {
    next(err)
  }
})
app.post('/projects', async (req, res, next) => {
  try {
    await Project.create(req.body)
    res.status(201).json({ message: 'created' })
  } catch (err) {
    next(err)
  }
})
app.get('/bugs', async(req, res, next)=>{
  const query = {
    where: {}
  }
  if (req.query.filter) {
    query.where.name = {
      [Op.like]: `%${req.query.filter}%`
    }
  }
  let pageSize = 10
  if (req.query.pageSize) {
    pageSize = parseInt(req.query.pageSize)
  }
  if (req.query.page) {
    const page = parseInt(req.query.page)
    query.limit = pageSize
    query.offset = page * pageSize
  }
  try {
    const bugs = await Bug.findAll(query)
    res.status(200).json(bugs)
  } catch (err) {
    next(err)
  }
})
app.post('/bugs', async (req, res, next)=>{
  try{
    await Bug.create(req.body)
    res.status(201).json({message:'created'})
  }catch(err){
    next(err)
  }
})
app.get('/projects/:pid', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.pid)
    if (project) {
      res.status(200).json(project)
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})
app.put('/projects/:pid', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.pid)
    if (project) {
      await project.update(req.body)
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})
app.delete('/projects/:pid', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.pid)
    if (project) {
      await project.destroy()
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})
app.get('/bugs/:bid', async (req, res, next) => {
  try {
    const bug = await Bug.findByPk(req.params.bid)
    if (bug) {
      res.status(200).json(bug)
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})
app.put('/bugs/:bid', async (req, res, next) => {
  try {
    const bug = await Bug.findByPk(req.params.bid)
    if (bug) {
      await bug.update(req.body)
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})
app.delete('/bugs/:bid', async (req, res, next) => {
  try {
    const bug = await Bug.findByPk(req.params.bid)
    if (bug) {
      await bug.destroy()
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})






app.listen(8080)