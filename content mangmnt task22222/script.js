document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("app-form");
  const list = document.getElementById("app-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const jobTitle = document.getElementById("blog-title").value;
    const content = document.getElementById("contents").value;

    const date = document.getElementById("date").value;
    const uploadFile = document.getElementById("file").value;
    const listItem = document.createElement("li");
    const rating = document.getElementById("rating").value;
    listItem.innerHTML = `<strong>${jobTitle}</strong>,
          <br/><strong>Content details:</strong><br/> ${content}, 
          <br/><strong> Applied on:</strong> ${date},<br/>
          File: ${uploadFile},<br/>
          <strong>Rating: ${rating} </strong>`;
    list.appendChild(listItem);
    // Clear the form inputs
    form.reset();
  });
});
