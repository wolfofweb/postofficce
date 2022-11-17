let search = document.querySelector("#search-box");
let searchByPin = document.querySelector("#pin-search");
let searchByPost = document.querySelector("#post-office-search");
searchByPin.addEventListener('click', () => {
    console.log("hi");
    var table = document.getElementById('myTable')
    //To clear old data while new search is initiated
    table.innerHTML = "";
    api = "https://api.postalpincode.in/pincode/";
    fetch(api + search.value).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            console.log(data);
            document.querySelector("#output").style.display = "block";
            console.log(data[0].PostOffice);
            details = data[0].PostOffice;
            var table = document.getElementById('myTable')

            for (var i = 0; i < details.length; i++) {
                var row = `<tr>
                                <td>${details[i].Name}</td>
                                <td>${details[i].BranchType}</td>
                                <td>${details[i].DeliveryStatus}</td>
                                <td>${details[i].Circle}</td>
                                <td>${details[i].District}</td>
                                <td>${details[i].Division}</td>
                                <td>${details[i].Region}</td>
                                <td>${details[i].Country}</td>
                                <td>${details[i].State}</td>
                                <td>${details[i].Pincode}</td>
                          </tr>`
                table.innerHTML += row
            }
        }).catch(function () {
            document.querySelector("#output").style.display = "none";
            alert("Please enter a valid pin code");
        });
})
searchByPost.addEventListener('click', () => {
    var table = document.getElementById('myTable')
    //To clear old data while new search is initiated
    table.innerHTML = "";
    api = "https://api.postalpincode.in/postoffice/";
    fetch(api + search.value).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            document.querySelector("#output").style.display = "block";
            console.log(data[0].PostOffice);
            details = data[0].PostOffice;
            var table = document.getElementById('myTable')

            for (var i = 0; i < details.length; i++) {
                var row = `<tr>
                                <td>${details[i].Name}</td>
                                <td>${details[i].BranchType}</td>
                                <td>${details[i].DeliveryStatus}</td>
                                <td>${details[i].Circle}</td>
                                <td>${details[i].District}</td>
                                <td>${details[i].Division}</td>
                                <td>${details[i].Region}</td>
                                <td>${details[i].Country}</td>
                                <td>${details[i].State}</td>
                                <td>${details[i].Pincode}</td>
                          </tr>`
                table.innerHTML += row
            }
        }).catch(function () {
            document.querySelector("#output").style.display = "none";
            alert("Please enter a valid Post office branch name");
        });
})
