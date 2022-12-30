
const CheckUser = () => {
  if (localStorage.getItem("email")) {
    return true;
  } else {
    return false;
  }
};

export default CheckUser;
