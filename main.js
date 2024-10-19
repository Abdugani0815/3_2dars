


const list = document.getElementById("list");
function myList(data) {
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;

    list.appendChild(li);
  });
}

