import userValidator from "../utils/user.validator";

export const register = async (req, res) => {
  try {
    const result = userValidator.safeParse(req.body);
    console.log(result);
  } catch (error) {}
};
