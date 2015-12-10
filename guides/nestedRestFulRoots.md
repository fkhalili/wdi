#Nested Resources and RESTful Routes

> So far, we've only discussed RESTful routes and CRUD with respect to a single resource. However, it's important to realize that we'll often be creating applications where certain resources are related to each other. How can we write routes that allow us to access resources that are related to each other?


###Nested Resources
- Let's pretend we have an application that keeps track of NBA teams and their players. We can infer that players belong to teams, and that teams have many players.

###Routes
- If our application was only concerned with teams, the routes would be very familiar to us

```javascript
app.get('/teams')
app.get('/teams/:id')
app.post('/teams')
//etc
```
- And if were only concerned with players, we'd have separate routes

```javascript
app.get('/players')
app.get('/players/:id')
app.post('/players')
//etc
```


***But what if we want to convey a relationship between our resources with our routes? What if I wanted to access all the players for a given team, for example?***

###Nested Routes

- In order to allow users to access resources based on their relationships to each other, we need to 'nest' our routes. The RESTful structure for those routes would look like the below:

```javascript
//routes that let us access teams
app.get('/teams')
app.get('/teams/:id')
app.post('/teams')
app.get('/teams/new')
app.get('/teams/:id/edit')
app.delete('/teams/:id')
app.put('/teams/:id')
app.patch('/teams/:id')

//routes that let us access players through their teams
app.get('/teams/:team_id/players')
app.get('/teams/:team_id/players/:player_id')
app.get('/teams/:team_id/players/new')
app.get('/teams/:team_id/players/edit')
app.post('/teams/:team_id/players')
app.put('/teams/:team_id/players/:player_id')
app.patch('/teams/:team_id/players/:player_id')
app.delete('/teams/:team_id/players/:player_id')
//etc
```
- The above routes allow users to list all the players for given teams.
