import create from 'zustand';

type Session = {
   email: string;
   firstName: string;
   lastName: string;
   userId: string;
   phoneNumber: string;
};

export const useSessionStore = create((set) => ({
   email: '',
   firstName: '',
   lastName: '',
   userId: '',
   phoneNumber: '',
   sessionUpdated: (payload: Session) => set(payload),
}));
