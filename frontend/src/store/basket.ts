import create from "zustand";
import {produce} from "immer";

type BasketItem = {
    menuItemId: number;
    name: string;
    imageUrl?: string;
    quantity: number;
}

type BasketState = {
    items: BasketItem[];
}

type BasketActions = {
    itemAdded: (item: Pick<BasketItem, 'menuItemId' | 'name' | 'imageUrl'>) => void;
    itemIncremented: (menuItemId: number) => void;
    itemSubtracted: (menuItemId: number) => void;
    itemRemoved: (menuItemId: number) => void;
}

type BasketStore = BasketState & BasketActions;

export const useBasketStore = create<BasketStore>(set => ({
    items: [],
    itemAdded(item) {
        set(
            produce(
                (draft: BasketState) => {
                    const target = draft.items.find(i => i.menuItemId === item.menuItemId);
                    if (!target) {
                        draft.items.push({...item, quantity: 1})
                    }
                }
            )
        )
    },
    itemIncremented(id) {
        set(
            produce(
                (draft: BasketState) => {
                    const item = draft.items.find(i => i.menuItemId === id);
                    if (item) {
                        item.quantity += 1;
                    }
                }
            )
        )
    },
    itemRemoved(id) {
        set(
            produce(
                (draft: BasketState) => {
                    const targetIndex = draft.items.findIndex(i => i.menuItemId === id);
                    console.log(targetIndex)
                    if (targetIndex >= 0) draft.items.splice(targetIndex, 1);
                }
            )
        )
    },
    itemSubtracted(id) {
        set(
            produce(
                (draft: BasketState) => {
                    const item = draft.items.find(i => i.menuItemId === id);
                    if (item) {
                        if (item.quantity > 1) {
                            item.quantity -= 1;
                        } else {
                            draft.items.splice(draft.items.findIndex(i => i.menuItemId === id), 1)
                        }
                    }
                }
            )
        )
    }
}));