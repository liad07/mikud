# mikud api
## javascript
```javascript
   var url="https://galasd4w3.pythonanywhere.com/?mikud="+ document.getElementById("mikud").value
        fetch(url)
            .then(response => response.json())
            .then(data =>document.getElementById("all").textContent=data.city+","+data.street+","+data.numhouse)
```
203 of the 365 chalenge in 2022 1 day 1 challenge
