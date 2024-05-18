const user = localStorage.getItem("user");

if (!user) {
  window.location.pathname = "/";
} else {
}

export default user;
