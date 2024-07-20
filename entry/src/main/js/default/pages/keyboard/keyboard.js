import router from '@system.router';
import vibrator from '@system.vibrator';
import storage from '@system.storage';

export default {
    data: {
        qrCodeList: [],
        input: [""],
        keyboardLetters: [['del', '', '', 'ok',],['a', 'b', 'c', 'd',], ['e', 'f', 'g', 'h'],['i', 'j','k', 'l'], ['m', 'n', 'o', 'p'], ['q', 'r', 's', 't'], ['u', 'v', 'w', 'x'], ['y', 'z', '0', '1'], ['2', '3', '4', '5'], ['6', '7', '8', '9']],
    },
    onInit() {
        console.info("keyboard");
    },
    selectLetter(index1, index2) {
        if (index1 == 0 && index2 == 0) {
            this.input.pop();
        } else if (index1 == 0 && index2 == 3) {
           this.qrCodeList.push(this.input.join("").toUpperCase());
            vibrator.vibrate({
                mode: 'short'
            });
            router.replace({
                uri: 'pages/show/show',
                params: {
                    qrCodeList: this.qrCodeList,
                }
            });
        } else {
            this.input.push(this.keyboardLetters[index1][index2]);
        }
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/show/show',
                params: {
                    qrCodeList: this.qrCodeList,
                }
            });
        }
    },
    onDestroy() {
        storage.set({
            key: 'qrCodeList',
            value: this.qrCodeList.toString(),
            success: function() {
                console.log('keyboard call storage set success with: ' + this.qrCodeList.toString());
            },
            fail: function(data, code) {
                console.log('keyboard call storage set fail, code: ' + code + ', data: ' + data);
            },
        });
    },
}
