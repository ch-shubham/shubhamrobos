export const getUsers = async () => {
  try {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    return users.json();
  } catch (err) {
    alert(err);
  }
};
