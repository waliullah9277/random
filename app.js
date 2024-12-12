function loadJson(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        showJson(this.responseText);
    };
    xhttp.open('GET', 'data.json', true);
    xhttp.send();
}

function showJson(json){
    let jsonData = JSON.parse(json);
    let lName = document.getElementById('liName').innerHTML = jsonData.library.name;
    let city = document.getElementById('address1').innerHTML = jsonData.library.address.city;
    let zip = document.getElementById('address2').innerHTML = jsonData.library.address.zip;

    document.getElementById("book_table").style.display = "table";
    jsonData.library.sections.forEach(element => {
        console.log(element);
        let sName = document.getElementById('sectionName').innerHTML = element.name;
        element.books.forEach(book => {
            console.log(book);
            let title = document.getElementById('title').innerHTML = book.title;
            let author = document.getElementById('author').innerHTML = book.author;
        });
    });
}