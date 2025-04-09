import { create } from "zustand";
import { gsap } from "gsap";

const tl = gsap.timeline({
  defaults: { duration: 1.2, ease: "Power4.easeInOut" },
});

const useFStore = create((set, get) => ({
  isLoading: true,
  overlayElement: null,
  globalLenis: null,
  setLenis: (data) => set({ globalLenis: data }),
  setIsLoading: (data) => set({ isLoading: data }),
  setOverlayElement: (data) => set({ overLayElement: data }),
  ins: () => {
    tl.to(get().overLayElement, {
      scaleY: 1,
    });
  },
  out: () => {
    tl.to(
      get().overLayElement,
      {
        scaleY: 0,
      },
      "+=0.5"
    );
  },
}));

export default useFStore;
