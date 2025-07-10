    function validateForm() {
      const name = document.getElementById("query").value;
      document.getElementById("message").innerText = name
        ? alert("Backend server not ready yet!")
        : alert("Name cannot be empty.");
    }

    function userSignIn() {
        alert("Backend server not ready yet!")
    }

    function getMoreEvents() {
        alert("Sorry, temporary disabled!")
    }

    function getMoreBooks() {
        alert("Sorry, temporary disabled!")
    }

    // function cart() {
    //     alert("Item added!")
    // }

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }
    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }

    // Dialog functions
    function toggleDropdown() {
      document.querySelector('.dropdown').classList.toggle('show');
    }

    function openDialog(id) {
      document.getElementById(id).showModal();
      document.querySelector('.dropdown').classList.remove('show');
    }

    function closeDialog(id) {
      document.getElementById(id).close();
    }

       // Login Submit
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const username = this.username.value;
      const password = this.password.value;
      alert(`Logged in as ${username}`);
      closeDialog('loginDialog');
    });

    // Signup Submit
    document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const username = this.username.value;
      const email = this.email.value;
      const password = this.password.value;
      alert(`Signup successful for ${username}`);
      closeDialog('signupDialog');
    });

    // Forgot Submit
    document.getElementById("forgotForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = this.email.value;
      alert(`Recovery email sent to ${email}`);
      closeDialog('forgotDialog');
    });

    // Close dropdown when clicking outside
    window.onclick = function(e) {
      if (!e.target.closest('.menu-icon')) {
        document.querySelector('.dropdown')?.classList.remove('show');
      }
    };