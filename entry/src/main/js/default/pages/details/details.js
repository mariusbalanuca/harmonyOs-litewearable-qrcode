import router from '@system.router';
import vibrator from '@system.vibrator';
import storage from '@system.storage';

export default {
    data: {
        index: 0,
        qrCodeList: [],
    },
    onInit() {
    },
    swipeEvent(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/show/show',
                params: {
                    qrCodeList: this.qrCodeList,
                }
            });
        }
    },
    clickGoBack() {
        router.replace({
            uri: 'pages/show/show',
            params: {
                index: this.index,
                qrCodeList: this.qrCodeList,
            }
        });
    },
    remove() {
        this.qrCodeList.splice(this.index, 1);
        vibrator.vibrate({
            mode: 'short'
        });
        storage.set({
            key: 'qrCodeList',
            value: this.qrCodeList.toString(),
            success: function() {
                console.log('details remove call storage.set success: ' + this.qrCodeList.toString());
            },
            fail: function(data, code) {
                console.log('details call storage set fail, code: ' + code + ', data: ' + data);
            },
        });
        router.replace({
            uri: 'pages/show/show',
            params: {
                qrCodeList: this.qrCodeList,
            }
        });
    },
}