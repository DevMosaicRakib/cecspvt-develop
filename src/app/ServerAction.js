"use server";

import axios from "axios";

export async function verifyCaptcha(token) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRETKEY}&response=${token}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      method: "POST",
    }
  );
  if (res.data.success) {
    return "success!";
  } else {
    throw new Error("Failed Captcha");
  }
}
