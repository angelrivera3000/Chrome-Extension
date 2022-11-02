async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2022-11-01&maxDate=2022-12-31&page=1', options)
    const record = await res.json()
    console.log('record', record)
        /*
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        */
}
fetchData();
onclick