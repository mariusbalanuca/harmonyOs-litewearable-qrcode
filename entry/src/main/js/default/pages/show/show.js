import brightness from '@system.brightness';
import router from '@system.router';

export default {
    data: {
        index: 0,
        qrCodeList: []
    },
    onInit() {
        if (!this.qrCodeList) {
            router.replace({
                uri: 'pages/add/add'
            });
        }
        brightness.setKeepScreenOn({
            keepScreenOn: true,
            success: function() {
                console.info("screen on success");
            },
            fail: function() {
                console.info("screen on failed");
            }
        });
    },
    swipeEvent(e) {
        if (e.direction == "up") {
            router.replace({
                uri: 'pages/add/add',
                params: {
                    qrCodeList: this.qrCodeList,
                }
            });
        }
    },
    showValue(index) {
        router.replace({
            uri: 'pages/details/details',
            params: {
                index: index,
                qrCodeList: this.qrCodeList,
            }
        });
    },
}