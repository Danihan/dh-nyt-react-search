const URL = '/api/articles'

async function get() {
  return fetch(URL).then(res => res.json())
}

async function post(article) {
  return fetch(URL, { method: 'POST', body: JSON.stringify(article), headers: { 'Content-Type': 'application/json' } }).then(res => res.json())
}

async function remove(id) {
  return fetch(URL, { method: 'DELETE', body: JSON.stringify({ id }), headers: { 'Content-Type': 'application/json' } }).then(res => res.json())
}

export default {
  get,
  post,
  remove
}
