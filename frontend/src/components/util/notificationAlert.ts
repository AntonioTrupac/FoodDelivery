import {store} from "react-notifications-component"

export const notificationStart = () => {
    store.addNotification({
        title: 'Item added',
        message: 'U have added a new item to the basket!',
        type: 'default',
        insert: 'top',
        container: 'bottom-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
           duration: 2000,
           onScreen: true,
        },
     });
}