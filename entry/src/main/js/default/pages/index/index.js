import app from '@system.app';
import brightness from '@system.brightness';

export default {
    onInit() {
       console.info("onInit()");
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
        console.info("swipeEvent()");
        console.info(e.direction);
        if (e.direction == "right") {
            app.terminate();
        }
    },
    onDestroy() {},
}
