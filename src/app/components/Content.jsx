"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/footer";
import { Suspense } from "react";
import Lenify from "@/app/components/LenisScroller";
import PageTransition from "@/app/components/PageTransition";
import Loader from "@/app/components/Loader";
import useFStore from "@/app/store";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function Content({ children }) {
  const { isLoading } = useFStore();

  const persistor = persistStore(store);
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Lenify />
          <Loader />
          <PageTransition />
          <Suspense fallback={null}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </PersistGate>
      </Provider>
    </div>
  );
}
