const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');

const db = knex({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'food-chase'
  }
});

const app = express();


app.use(bodyParser.json())
app.use(cors())

app.put('/myposts', (req,res)=> {
	db.select('*').from('posts')
	.where('email','=',req.body.email)
	.returning('*')
	.then(response => res.json(response))
	.catch(err => res.json(err))
})

// app.put('./complete',(req,res)=>{
// 	db.select('*').from('reserved')
// 	.where('id','=',req.body.id)
// 	.returning('*')
// 	.del()
// 	.then(response => res.json(response))
// 	.catch(err => res.json('error'))

// })

app.put('/complete',(req,res)=> {
	db.select('*').from('reserved')
	.where('id','=',req.body.id)
	.returning('*')
	.del()
	.then(response => res.json(response))
	.catch(err => res.json(err))
})

app.put('/remove',(req,res)=> {
	db.select('*').from('posts')
	.where('id','=',req.body.id)
	.returning('*')
	.del()
	.then(response => res.json(response))
	.catch(err => res.json(err))
})

app.post('/post-a-meal', (req , res) => {
	const { image, email, platename, price, description} = req.body;

	db('posts')
	.returning('*')
	.insert({
		email:email,
		image: image,
		platename: platename,
		description: description,
		price:price
	})
	.then(response => {
		res.json(response)
	})
	.catch(err => res.json(err))
});

app.get('/meals' , (req,res) => {
	db.select('*').from('posts')
	.then(response => res.json(response))
})

app.put('/reserved' , (req,res) => {
	db.select('*').from('reserved').where('email','=',req.body.email)
	.then(response => res.json(response))
	db('reserved')
	.where('email','=',req.body.email)
	.returning('*')
	.then(response => res.json(response))
	.catch(err => res.json(err))
})

app.post('/reserve', (req, res) => {
	const { id, image, email, platename, price, description} = req.body;
	db('reserved')
	.returning('*')
	.insert({
		email:email,
		image: image,
		platename: platename,
		description: description,
		price:price
	})
	.then(response => { 
		res.json(response)
		db('posts')
		.returning('*')
		.where('id','=',id).del()
		.then(res.json())
		.catch(err => res.json(err))
	})
	.catch(err => res.json(err))
})


app.post('/register', (req, res)=> {
	const {name, email,lastname, password} = req.body;
	const hash = bcrypt.hashSync(password);
	db.transaction(trx=> {
		trx.insert({
			hash:hash,
			email:email
		})
		.into('login')
		.returning('email')
		.then(useremail=> {
			return trx('users')
			.returning('*')
			.insert({
				name: name,
				email:useremail[0],
				lastname:lastname
			})
			.then(user => {
				res.json(user[0])
			})

		})
		.then(trx.commit)
		.catch(trx.rollback)
	})
	.catch(err => {
		res.status(400).json(err)
	})
	

});


app.post('/signin', (req ,res) => {
	db.select('email','hash').from('login')
	.where('email','=',req.body.email)
	.then(data => {
		const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
		console.log(isValid)
		if(isValid) {
			return db.select('*').from('users')
			.where('email','=',req.body.email)
			.then(user => {
				console.log(user);
				res.json(user[0])
			})
			.catch(err => res.status(400).json(err))
		}
	})
	.catch(err => res.status(400).json('wrong credentials'))


});

app.listen(3000, ()=> {
	console.log("Listening on port 3000");
});