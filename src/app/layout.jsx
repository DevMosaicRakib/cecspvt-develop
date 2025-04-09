import "./style/globals.scss";
import "swiper/css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "../store/store";

export const metadata = {
  title: "CECS Engineers | Leading Construction Contracting company in India",
  description:
    "CECS Engineers is a reputable and experienced construction company in India, offering a wide range of construction services for residential, commercial, and industrial projects.",
  keywords:
    "construction company, construction contractors, construction services, India, residential, commercial, industrial",
};

const Content = dynamic(() => import("@/app/components/Content"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Provider store={store}> */}
        <body>
          <Content>{children}</Content>
        </body>
      {/* </Provider> */}
    </html>
  );
}
