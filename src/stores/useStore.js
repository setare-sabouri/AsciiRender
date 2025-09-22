
import { create } from "zustand";

export const useStore = create((set) => ({
  color: "#ff6347",
  setColor: (color) => set({ color }),

  ScrollOffset: 0,
  setScrollOffset: (ScrollOffset) => set({ ScrollOffset }),

  ShowAscii: true,
  setShowAscii: (ShowAscii) => set({ ShowAscii }),

  Inverted:false,
  setInverted:(Inverted)=>set({Inverted}),

  CharsValue:' .:-+*=%@#',
  setCharsValue:(CharsValue)=>set({CharsValue})


}));