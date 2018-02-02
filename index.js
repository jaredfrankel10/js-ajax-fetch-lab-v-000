const username = ``
 const baseApi = `https://api.github.com`
 const repo = `learn-co-curriculum/javascript-fetch-lab`
 const fork = `${username}/javascript-fetch-lab`
 
 class Repo {
   constructor(json) {
     this.url = json.html_url
   }
 
   template() {
     return `<h3>Forked Successfully!</h3><a href="${this.url}">${this.url}</a>`
   }
 }
 
 class Issue {
   constructor(json) {
     this.title = json.title
     this.body = json.body
     this.login = json.user.login
   }
 
   template() {
     return `<h5>Login: ${this.login}</h5><br><h5>Title: ${this.title}</h5><h6>Body: ${this.body}</h6><br>`
   }
 }
 
 
 
 // GET /repos/:owner/:repo/issuesfunction getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
