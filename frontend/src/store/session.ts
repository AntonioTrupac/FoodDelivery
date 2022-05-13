import create from 'zustand';

type Session = {
   email: string;
   firstName: string;
   lastName: string;
   id: string;
   phoneNumber: string;
};

export const useSessionStore = create((set) => ({
   email: '',
   firstName: '',
   lastName: '',
   id: '',
   phoneNumber: '',
   sessionUpdated: (payload: Session) => set(payload),
}));
