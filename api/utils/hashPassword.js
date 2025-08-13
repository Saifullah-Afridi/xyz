import bcryptjs from "bcryptjs";

const hashPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
};

export default hashPassword;
