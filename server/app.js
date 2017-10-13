const express = require('express')
const requestify = require('requestify')
const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/**
* Description: 
* Req: get
* Params:
* Return:
**/
app.get('/:githubId', function (req, res) {
  var githubId = req.params.githubId
  console.log('get – /'+githubId)
  requestify.get('https://api.github.com/users/'+githubId+'/followers').then(function(response) {
		res.send(response.getBody())
	})
})

app.listen(3000, function () {
  console.log('App listening at http://localhost:3000/')
})