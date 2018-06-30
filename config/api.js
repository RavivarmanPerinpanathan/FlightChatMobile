var api = {
    getRovers(){
        //var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=6LS6npEUUHvzkQ3gbV94pwBmicR4KDb92Qx3fCik';
        var url = 'https://api.nasa.gov/planetary/apod?api_key=6LS6npEUUHvzkQ3gbV94pwBmicR4KDb92Qx3fCik';
        //var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=6LS6npEUUHvzkQ3gbV94pwBmicR4KDb92Qx3fCik';
        return fetch(url).then((res)=> res.json());
    
    },
    getImages(){
         //var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=6LS6npEUUHvzkQ3gbV94pwBmicR4KDb92Qx3fCik';
         //var url = 'https://api.nasa.gov/planetary/apod?api_key=6LS6npEUUHvzkQ3gbV94pwBmicR4KDb92Qx3fCik';
         //var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=6LS6npEUUHvzkQ3gbV94pwBmicR4KDb92Qx3fCik';
         var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=6LS6npEUUHvzkQ3gbV94pwBmicR4KDb92Qx3fCik'
         return fetch(url).then((res)=> res.json());
    },
    getBbc(){
        var url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=44d043ee9dcd436da97fc71880cf3a1b';
        return fetch(url).then((res)=> res.json());
    },
    getWallStreet(){
        var url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=44d043ee9dcd436da97fc71880cf3a1b';
        return fetch(url).then((res)=> res.json());
    },
    login(user , password) {
        console.log('in here')
        return fetch('https://reqres.in/api/login', {
            method : 'POST',
            body: JSON.stringify({
                login: user,
                password: password,
              }),

        })
    .catch((error) => {
      console.error(error);
    });
    },  
    signup(user , password) {
      return fetch('https://reqres.in/api/signup', {
            method : 'POST',
            body: JSON.stringify({
                login: user,
                password: password,
              }),

        })
    .catch((error) => {
      console.error(error);
    });
    },
    

    
};

module.exports = api;