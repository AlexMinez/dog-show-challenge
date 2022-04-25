
function fetchDogs(){
    return fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then (json => json)
}

function updateDog(id,name,breed,sex){
    return fetch(`http://localhost:3000/dogs/${id}` , {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: JSON.stringify({
            name,
            breed,
            sex,
        })
    })
    .then (res => res.json())
    .then (data => data)
}
function passDogInfo(dog){
    const form = document.getElementById('dog-form').elements;
    form['id'].value = dog.id
    form['name'].value = dog.name
    form['breed'].value = dog.breed
    form['sex'].value = dog.sex
}

function retDog(dog){
    const tableBody = document.getElementById('table-body');
    const row = document.createElement('tr');
    let buttonContainer = document.createElement('td');
    let button = document.createElement('button');
    button.innerText = 'Edit'
    button.onclick = () => passDogInfo(dog);

    row.innerHTML += `<td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td>`

    buttonContainer.append(button);
    row.append(buttonContainer);
    tableBody.append(row);
}
    document.addEventListener('DOMContentLoaded', () => {
    fetchDogs().then(dogs => {
        dogs.forEach(dog => retDog(dog))
    })
    document.getElementById('dog-form').addEventListener('submit', () => {
        const form = document.getElementById('dog-form').elements;

        updateDog(form['id'].value,form['name'].value,form['breed'].value,form['sex'].value, )
    })
})