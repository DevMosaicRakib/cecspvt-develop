import "./style.scss";
import Link from "next/link";
import Form from "@/app/components/Form";

export default function Contact() {
  return (
    <div id="contact">
      <p>
        We appreciate your interest. Whether you&apos;re initiating a project,
        seeking assistance, or simply have a general inquiry, we&apos;re happy
        to assist. <br />
        <span>Drop us a line and we will get back to you.</span>
      </p>
      <div className="contact">
        <div className="info">
          <div>
            <h3>PROJECT ENQUIRIES</h3>
            <p>+91 2246048985</p>
            <p>+91 9867189909</p>
            <p>info@cecsengineer.com</p>
          </div>
          <div>
            <h3>ADDRESS</h3>
            <p>
              The Landmark, Office No. 806, 8th Floor,
              Plot No. 26/A, Sector 7, Kharghar, Navi Mumbai, Maharashtra
              410210, India
            </p>
          </div>
          <button className="buf buf-primary">
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/CEC+Construction+%26+Skill+Engineers+LLP/@19.033505,73.065546,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c26ab5e15555:0x27928c90136dc8a1!8m2!3d19.033505!4d73.065546!16s%2Fg%2F11lg0j8nz7?entry=ttu"
            >
              View on maps
            </Link>
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
}
