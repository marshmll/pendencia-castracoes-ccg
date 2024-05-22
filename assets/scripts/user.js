const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.pathname = "/";
} else {
}

const userUtil = {
  user: user,
  logoff: () => {
    localStorage.removeItem("user");
    window.location.pathname = "/";
  },
};

export default Object.freeze(userUtil);
