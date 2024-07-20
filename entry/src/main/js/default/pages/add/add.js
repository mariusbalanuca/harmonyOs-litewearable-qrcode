import router from '@system.router';
import storage from '@system.storage';

export default {
    data: {
        qrCodeList: [],
    },
    onInit() {
    },
    swipeEvent(e) {
        if (e.direction == "right" || e.direction == "down") {
            router.replace({
                uri: 'pages/show/show',
                params: {
                    qrCodeList: this.qrCodeList,
                }
            });
        }
    },
    add() {
        router.replace({
            uri: 'pages/keyboard/keyboard',
            params: {
                qrCodeList: this.qrCodeList,
            }
        });
    },

}