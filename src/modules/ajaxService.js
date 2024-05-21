const ajaxSevice = (term)=>{
    const url = 'http://www.omdbapi.com/?t=';
    const key = 'fb31e168';
    return fetch(`${url}${term}&apikey=${key}`)
    .then(response =>response.json())
}
export default ajaxSevice