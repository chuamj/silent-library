    function validateForm() {
      const name = document.getElementById("query").value;
      document.getElementById("message").innerText = name
        ? alert("Search Engine not ready yet!")
        : alert("Name cannot be empty.");
    }