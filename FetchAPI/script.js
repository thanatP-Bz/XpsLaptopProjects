

fetch('https://restcountries.eu/rest/v2/name/thailand')
.then(res => res.json())
.then(data => console.log(data));

