// Campus ke rooms ka data

let rooms = [
    {
        name: "C-101",
        type: "Classroom",
        capacity: 60,
        status: "Available"
    },
    {
        name: "C-102",
        type: "Classroom",
        capacity: 50,
        status: "Occupied"
    },
    {
        name: "L-201",
        type: "Computer Lab",
        capacity: 40,
        status: "Available"
    },
    {
        name: "L-202",
        type: "Computer Lab",
        capacity: 35,
        status: "Occupied"
    }
];

console.log(rooms);
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let searchValue = searchInput.value.toLowerCase();

    let roomCards = document.querySelectorAll(".room");

    roomCards.forEach(room => {

        let text = room.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            room.style.display = "flex";
        } else {
            room.style.display = "none";
        }

    });

});