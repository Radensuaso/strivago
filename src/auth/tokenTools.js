import JWT from "jsonwebtoken";

//============== Generate JWT Token
const generateJWT = (user) =>
  new Promise((resolve, reject) =>
    JWT.sign(
      user._id,
      process.env.JWT_SECRET,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    )
  );

export const generateJWTToken = async (user) => {
  const accessToken = await generateJWT({ _id: user._id });
  return accessToken;
};

//=================== Verify JWT Token

export const verifyJWTToken = async (token) => {
  return new Promise((resolve, reject) =>
    JWT.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        reject(err);
      } else {
        resolve(decodedToken);
      }
    })
  );
};