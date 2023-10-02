document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    
    const apiUrl = 'https://randomuser.me/api/?results=5';

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            users.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.className = "user-item";
                userDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                    <p>${user.name.first} ${user.name.last}</p>
                    <p>Email: ${user.email}</p>
                `;
                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error("Error al obtener usuarios aleatorios:", error);
        });
});
