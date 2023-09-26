import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ExternalUserProfile, userProfile } from 'src/types/userProfile';
import { ApiResponseProduct, TypeProduct } from 'src/types/typeProduct';

type State = {
  tokenUser: string;
  tokenAdmin: string;
  userExternal: ExternalUserProfile;
  loggedUser: userProfile;
  rawProducts: Array<ApiResponseProduct>;
  bucket: Array<TypeProduct>;
  products: Array<TypeProduct>;
};
type Action = {
  setTokenUser: (token: State['tokenUser']) => void;
  setTokenAdmin: (token: State['tokenAdmin']) => void;
  clearTokens: () => void;
  setRawProducts: (arr: State['rawProducts']) => void;
  setExternalUser: (user: State['userExternal']) => void;
  setLoggedUser: (user: State['loggedUser']) => void;
  editLoggedUser: (user: State['loggedUser']) => void;
  setBucket: (product: TypeProduct) => void;
  getProductById: (idProduct: number) => TypeProduct;
  setProducts: (products: Array<TypeProduct>) => void;
  isUserAuth: () => boolean;
};
export const useStore = create(
  immer<State & Action>((set, get) => ({
    tokenUser: null,
    tokenAdmin: null,
    userExternal: null,
    rawProducts: null,
    loggedUser: null,
    bucket: null,
    products: null,
    setTokenUser: (newToken: string) => set(() => ({ tokenUser: newToken })),
    setTokenAdmin: (newTokenAdm: string) => set(() => ({ tokenAdmin: newTokenAdm })),
    clearTokens: () =>
      set(() => ({
        tokenUser: null,
        tokenAdmin: null,
      })),
    setRawProducts: (arr: Array<ApiResponseProduct>) => set(() => ({ rawProducts: arr })),
    setExternalUser: (user: ExternalUserProfile) => set(() => ({ userExternal: user })),
    setLoggedUser: (user: userProfile) =>
      set((state) => {
        if (!state.loggedUser) state.loggedUser = user;
      }),
    editLoggedUser: (user: userProfile) => {
      set((state) => {
        state.loggedUser.username = user.username;
        state.loggedUser.about = user.about;
      });
    },
    setBucket: (product: TypeProduct) =>
      set((state) => {
        state.bucket = [...state.bucket, product];
      }),
    setProducts: (products: Array<TypeProduct>) =>
      set((state) => {
        const currentState = state?.products || new Array<TypeProduct>();
        state.products = [...currentState, ...products];
      }),
    getProductById: (id: number) => {
      const allProducts = get().products || new Array<TypeProduct>();
      return allProducts.filter((p) => p.id == id)[0];
    },
    isUserAuth: () => {
      return Boolean((get().tokenUser || get().tokenAdmin) && Boolean(get().loggedUser?.id));
    },
  }))
);
