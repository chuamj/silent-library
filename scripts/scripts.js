    function validateForm() {
      const name = document.getElementById("query").value;
      document.getElementById("message").innerText = name
        ? alert("Backend server not ready yet!")
        : alert("Name cannot be empty.");
    }

    function userSignIn() {
        alert("Backend server not ready yet!")
    }

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }
    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }