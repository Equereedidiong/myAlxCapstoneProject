


async function tryFetch () {

   const url = "https://api.deezer.com/chart/0"
   const proxy = " https://cors-anywhere.herokuapp.com/ "
   
   const response = await fetch (proxy + url)
   const data = await response.json()
   
   console.log(data)

}

tryFetch();