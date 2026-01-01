  import User from "../models/user.model.ts";
  import { Request, Response } from "express";
  import bcrypt from "bcrypt";
  import jwt from "jsonwebtoken";
  import { IUser } from "../interfaces/user.interface";