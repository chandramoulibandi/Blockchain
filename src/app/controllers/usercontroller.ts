import { Request, Response, NextFunction, Errback } from "express";
import { User } from "../models/User";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";

let private_Key: string = "";

export class UserController {
  static login(req: Request, res: Response, next: NextFunction) {
    // private_Key = process.env.PRIVATEKEY || '';
    User.findOne({ email: req.body.email }, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "Success",
          message: "Login Succuss!",
          data: result,
        });
      }
      // else {
      //   if (result != undefined) {
      //     if (compareSync(req.body.password, result.password)) {
      //       const token = sign({ id: result._id }, "TESTKEY", {
      //         expiresIn: "1h",
      //       });
      //       res.json({
      //         status: "Success",
      //         message: "Login Succuss!",
      //         data: token,
      //       });
      //     } else {
      //       res.json({
      //         status: "failed",
      //         message: "UserName and Password is incorrect!",
      //       });
      //     }
      //   } else {
      //     res.json({
      //       status: "failed",
      //       message: "UserName and Password is incorrect!",
      //     });
      //   }
      // }
    });
  }

  static registration(req: Request, res: Response, next: NextFunction) {
    const user = new User(req.body);
    User.create(user, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "success",
          message: "Registration Successful",
          data: result,
        });
      }
    });
  }

  static updateProfile(req: Request, res: Response, next: NextFunction) {
    const userid = req.body.userId;
    User.findByIdAndUpdate(
      userid,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          addressInfo: req.body.addressInfo,
        },
      },
      (err: Errback, result: any) => {
        if (err) {
          res.status(500).json({ status: "failed", message: err });
        } else {
          res.json({
            status: "success",
            message: "Profile updated successful",
            data: null,
          });
        }
      }
    );
  }

  static getProfile(req: Request, res: Response, next: NextFunction) {
    const userid = req.body.userId;
    //console.log(userid);
    User.find((err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        //console.log(result);
        res.json({
          status: "Success",
          message: "Profile Updated !",
          data: result,
        });
      }
    });
  }
}
