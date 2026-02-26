const form = document.querySelector("#userForm");
const usernameInput = document.querySelector("#name");
const roleInput = document.querySelector("#role");
const bioInput = document.querySelector("#bio");
const photoInput = document.querySelector("#photo");
const usersContainer = document.querySelector(".users");

const UserManagement = {
  users: [],

  init() {
    this.loadFromLocalStorage(); 
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm(e) {
    e.preventDefault();
    this.addUser();
  },

  addUser() {
    const newUser = {
      username: usernameInput.value.trim(),
      role: roleInput.value.trim(),
      bio: bioInput.value.trim(),
      photo: photoInput.value.trim(),
    };

    this.users.push(newUser);

    this.saveToLocalStorage(); 
    form.reset();
    this.renderUi();
  },

  renderUi() {
    usersContainer.innerHTML = ""; 

    this.users.forEach((user) => {
      const card = document.createElement("div");
      card.className =
        "card max-w-lg w-full border border-red-950 rounded-xl px-6 py-8 text-center shadow-xl bg-white mb-6";

      const img = document.createElement("img");
      img.className =
        "max-w-[200px] max-h-[200px] rounded-full shadow-xl mx-auto mb-4 object-cover";
      img.src = user.photo;
      img.alt = `${user.username}'s photo`;

      const h2 = document.createElement("h2");
      h2.className = "text-3xl font-semibold text-red-950 pt-2";
      h2.textContent = user.username;

      const roleText = document.createElement("p");
      roleText.className = "text-xl font-medium text-gray-500";
      roleText.textContent = user.role;

      const bioText = document.createElement("p");
      bioText.className = "text-lg font-semibold py-2";
      bioText.textContent = user.bio;

      card.appendChild(img);
      card.appendChild(h2);
      card.appendChild(roleText);
      card.appendChild(bioText);

      usersContainer.appendChild(card);
    });
  },

  
  saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
  },

  loadFromLocalStorage() {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.renderUi();
    }
  },
};

UserManagement.init();