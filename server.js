const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const cors = require('cors')
const mysql = require('mysql2/promise')

const DB_USERNAME = 'will'
const DB_PASSWORD = 'pass'

let conn

mysql.createConnection({
    user : DB_USERNAME,
    password : DB_PASSWORD
})
.then((connection) => {
    conn = connection
    return connection.query('CREATE DATABASE IF NOT EXISTS test2')
})
.then(() => {
    return conn.end()
})
.catch((err) => {
    console.warn(err.stack)
})

const sequelize = new Sequelize('test2', DB_USERNAME, DB_PASSWORD, {
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  },
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
//method to see all the available teams
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
// method for adding a new team
app.post('/teams', async (req, res, next) => {
  try {
    await Team.create(req.body)
    res.status(201).json({ message: 'created' })
  } catch (err) {
    next(err)
  }
})


//ramane de vazut
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

//method for change the team details
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

//method for deleting a team
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

//app to modify user details (account settings)
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

//method for deleting a user account
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
//method for a searching a specific user
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
//method for showing all the available projects to assign to
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
//method for adding a new project (on ADD Project button)
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

//method for adding a new bug (on Add bug button)
app.post('/bugs', async (req, res, next)=>{
  try{
    await Bug.create(req.body)
    res.status(201).json({message:'created'})
  }catch(err){
    next(err)
  }
})
//method for searching for a project based on the id (might be changed later)
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
//method for modifying details for a project based on the id (might be changed later)
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
//method for deleting a specific project 
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
//method for searching for a bug based on the id (might be changed later)
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
//method for modifying details for a bug based on the id (might be changed later)
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
//method for deleting a bug based on the id (might be changed later)
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


// log in for users

//de modificat oartea cu res.status(200)

app.post('/users/logIn', async (req, res, next) => {
  try {

    const user = req.body.username
   
   
   const user2 =  await User.findOne({where :{ username: user}})

    if (user2) {
      // metoda de testare daca merge 
      res.status(200).json(user2)
    } else {
      res.status(404).json({ message: 'not found in db' })
    }
  } catch (err) {
    next(err)
  }
})

// regisgtrarre userino
app.post('/users/register', async (req, res, next) => {
  try {

    //await User.create(req.body)
    //res.status(201).json({ message: 'created' })
    const imail = req.body.email


    const userExistent = await User.findOne({where: {email: imail}})

    if(!userExistent) {
      await User.create(req.body)
     res.status(201).json({ message: 'created' })
    } else {
      
       res.status(404).json({ message: userExistent })
    }
  } catch (err) {
    next(err)
  }
})



//iesire din cont .// de modificat 
app.delete('/users/logOut', async (req, res, next) => {
  try {

   const user = req.body.username
   
   
   const user2 =  await User.findOne({where :{ username: user}})

    if (user2) {
      // metoda de testare daca merge 
      res.status(200).json(user2)
    } else {
      res.status(404).json({ message: 'not found in db' })
    }
  } catch (err) {
    next(err)
  }
})
//method for assigning to a team as a team member (user) 
app.post('/teams/:tid/users', async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.tid)
    if (team) {
      const user = new User(req.body)
      user.userId = team.id
      await user.save()
      res.status(201).json({ message: 'created' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})
//method for assigning to a bug as a tester (user) 
app.post('/bugs/:bid/users', async (req, res, next) => {
  try {
    const bug = await Bug.findByPk(req.params.bid)
    if (bug) {
      const user = new User(req.body)
      user.userId = bug.id
      await user.save()
      res.status(201).json({ message: 'created' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})
//method for seeing the team members of a project 
app.get('/teams/:tid/projects/:pid', async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.tid)
    if (team) {
      const projects = await project.getProjects({ id: req.params.pid })
      const project = project.shift()
      if (project) {
        res.status(200).json(project)
      } else {
        res.status(404).json({ message: 'not found' })
      }
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
})

app.listen(8080)