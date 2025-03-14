export const validateData = (name, email, password) => {
  const nameValid =
    name !== null ? /^(?!.*([a-zA-Z])\1{3})(?!^$).*$/.test(name) : true;
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!nameValid) return "Please enter valid name";
  if (!validEmail) return "Email ID is not valid";
  if (!validPassword) return "Password is not valid";

  return null;
};
