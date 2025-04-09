"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { verifyCaptcha } from "@/app/ServerAction";

const schema = z.object({
  name: z
    .string()
    .min(2, "Required min 2 character")
    .max(50, { message: "Too long" }),
  surname: z.string().min(2, { message: "Required min 2 character" }),
  email: z.string().email(),
  phone: z.string().min(4, { message: "Too short" }),
  message: z.string().min(1),
});

export default function Form() {
  const [formState, setFormStates] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef(null);
  const inputs = useRef(null);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => console.log("test"))
      .catch(() => setIsVerified(false));
  }

  // Submitting data to emailjs
  const sendData = (data) => {
    setFormStates(true);
    console.log("test");
    emailjs
      .sendForm(
        "service_ozqgmuj",
        "template_hmw4x6f",
        formRef.current,
        "H1tcsrmWPtu8qy6Wc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Setting inputs and inputs events
  useEffect(() => {
    inputs.current = document.querySelectorAll(".inputs input");
  }, []);
  useEffect(() => {
    inputs.current.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focus");
      });
      input.addEventListener("blur", () => {
        if (input.value === "") {
          input.parentElement.classList.remove("focus");
        }
      });
    });

    return () => {
      inputs.current.forEach((input) => {
        input.removeEventListener("focus", () => {
          input.parentElement.classList.add("focus");
        });
        input.removeEventListener("blur", () => {
          if (input.value === "") {
            input.parentElement.classList.remove("focus");
          }
        });
      });
    };
  }, [inputs.current]);

  return (
    <form ref={formRef} onSubmit={handleSubmit(sendData)}>
      <div className="inputs">
        <div>
          <label>First Name</label>
          <input type="text" name="name" {...register("name")} />
          <span>{errors.name && errors.name.message}</span>
        </div>
        <div>
          <label htmlFor="surname">Last Name</label>
          <input type="text" {...register("surname")} />
          <span>{errors.surname && errors.surname.message}</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} />
          <span>{errors.email && errors.email.message}</span>
        </div>
        <div>
          <label htmlFor="number">Phone</label>
          <input type="text" {...register("phone")} />
          <span>{errors.phone && errors.phone.message}</span>
        </div>
      </div>
      <div className="message">
        <label htmlFor="message">Your Message</label>
        <textarea {...register("message")} placeholder="" />
      </div>
      <div className="button">
        <ReCAPTCHA
          sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}`}
          ref={recaptchaRef}
          onChange={handleCaptchaSubmission}
        />
        <label>
          Protected by reCAPTCHA. Google Privacy Policy and Terms of Service
          apply.
        </label>
        <button type="submit" className="buf buf-primary" disabled={isVerified}>
          {formState ? "Sent" : "Send"}
        </button>
      </div>
    </form>
  );
}
