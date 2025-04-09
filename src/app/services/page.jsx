import "./style.scss";
import Link from "next/link";
import OurExperience from "@/app/components/services/OurExperience";
import Main from "@/app/components/services/Main";
import OurMarkets from "@/app/components/services/OurMarkets";

export default function Services() {
  return (
    <div id="services">
      <Main />
      <OurExperience />
      <OurMarkets />
      <div id="bottom">
        <p>
          Whether you&apos;re initiating a project, seeking assistance, or
          simply have a general inquiry, we&apos;re happy to assist.
        </p>
        <button className="buf buf-primary">
          <Link href="/contact">Reach us out</Link>
        </button>
      </div>
    </div>
  );
}
