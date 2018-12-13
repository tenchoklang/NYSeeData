import axios from 'axios';


export const setNypdData = (data)=>({
    type: 'SET_DATA',
    payload: data
});

export const startGetData = (lat, lon, filter) =>{
    // let baseUrl = `https://data.cityofnewyork.us/resource/7x9x-zpz6.json?$where=within_circle(lat_lon, ${lat}, ${lon}, 500)&law_cat_cd=FELONY`;
    let baseUrl = `https://data.cityofnewyork.us/resource/7x9x-zpz6.json?$where=within_circle(lat_lon, ${lat}, ${lon}, 500)&law_cat_cd=${filter}`
    console.log(lat,lon, filter);
    return (dispatch)=>{
        axios.get(baseUrl)
        .then(function (response) {
            console.log('DATA LENGTH: ',response.data.length);
            console.log(response.data);
            dispatch(setNypdData(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}




// export const setNews = (payload)=>({
//     type: 'GET_NEWS',
//     payload: payload
// })

// export const startGetNews = (sources) =>{
//     // const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
//     let baseUrl = 'https://data.cityofnewyork.us/resource/7x9x-zpz6.json';
//     if(sources !== undefined){//if source is defined then just get news for the sources
//         baseUrl = baseUrl.concat(`?sources=${sources}&apiKey=${apiKey}`);
//     }else{//else get topheadlines for US
//         baseUrl = baseUrl.concat(`?country=us&apiKey=${apiKey}`);
//     }

//     //axios
//     return (dispatch)=>{
//         axios.get(baseUrl)
//         .then(function (response) {
//             console.log(response.data.articles);
//             dispatch(setNews(response.data.articles));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     }
// }

// export const startGetQuery = (query)=>{
//     //https://newsapi.org/v2/everything?q=tibet&sortby=popularity&language=en&apiKey=6306fbe477654ab8929fa29582a45127
//     const baseUrl = 'https://newsapi.org/v2/everything';
//     const sortBy = 'popularity';
//     const language = 'en';
//     const url = `${baseUrl}?q=${query}&sortby=${sortBy}&language=${language}&apiKey=${apiKey}`;

//     return (dispatch)=>{
//         axios.get(url)
//         .then(function (response) {
//             console.log(response.data.articles);
//             dispatch(setNews(response.data.articles));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     }


// }

