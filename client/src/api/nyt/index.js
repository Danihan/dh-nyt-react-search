const API_KEY = process.env.NYT_API_KEY

async function search(topic, startYear, endYear) {
  const query = `?q=${encodeURIComponent(topic)}&begin_date=${startYear}0101&endDate=${endYear}0101&fl=web_url,headline,pub_date&api-key=${API_KEY}`
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json${query}`)
  const resp = await res.json()

  return resp
}

export default {
  search
}
