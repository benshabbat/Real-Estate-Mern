import bcrypt from "bcrypt";

export const register = async(req, res) => {
  // console.log(req.body);
  const{username,email,password}=req.body;

  const hashedPassword = await bcrypt.hash(password,12);
  console.log(hashedPassword);
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
