const fetchData = (urlPath) => {
  return fetch(urlPath)
      .then(response => {
          if (!response.ok) {
              throw Error(response.text)
          } else {
              return response.json()
          }
      })
      .catch(error => console.log(error))
}

export default fetchData;