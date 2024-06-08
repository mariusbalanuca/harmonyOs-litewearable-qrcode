import app from '@system.app';
import brightness from '@system.brightness';
import device from '@system.device';

export default {
    data: {
        index: 0,
        showElement: false,
        showValue: false,
        todolist: ["0465001052869"],
        // todolist: [],
    },
    onInit() {
        if (this.todolist.length > 0) {
            this.showElement = true;
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
        if (e.direction == "right") {
            app.terminate();
        }
    },
    showValue() {
        this.showValue = !this.showValue;
    },
    onDestroy() {},
}