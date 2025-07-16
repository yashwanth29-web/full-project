import User from '../models/User.js';

export const getUserMessage = (req, res) => {
  res.send('Hello Express!');
};

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json("User Saved sucsses");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
