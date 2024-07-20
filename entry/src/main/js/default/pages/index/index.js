import router from '@system.router';
import storage from '@system.storage';

export default {
    data: {
        qrCodeList: []
    },
    onInit() {
        storage.get({
            key: 'qrCodeList',
            success: function (data) {
                console.log('data: ' + data);
                if (data.length > 0) {
                    this.qrCodeList = data.split(",");
                }
            },
            fail: function (data, code) {
                console.log('index storage get fail, code: ' + code + ', data: ' + data);
            },
            complete: function () {
                console.log('index call complete');
                router.replace({
                    uri: 'pages/show/show',
                    params: {
                        qrCodeList: this.qrCodeList
                    }
                });
        },
    });
}
,
}