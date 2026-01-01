import User from "../models/user.model.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { loginUserI, registerUserI, userI } from "../interfaces/user.interface.ts";
import type { Request, Response } from "express";


export const registerUser = async (req: Request, res: Response) => {
  try {
    // destructure the request body
    const { name, email, password }: registerUserI = req.body;

    // validate req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const user = await User.findOne({ email });

    // if exist handle
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword : string  = await bcrypt.hash(password, 10);

    // created new User 
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    //genrate token
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });
     
    // send token to cookie
    res.cookie("token", token)

    // send response to frontend 
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    // catch error 
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    // destructure req.body
    const { email, password }: loginUserI = req.body;

    // validate req.body
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // compare password
    const isMatch: boolean = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // generate token
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // send token in cookie
    res.cookie("token", token);

    // send response
    res.status(200).json({
      message: "Login successful",
      user,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
