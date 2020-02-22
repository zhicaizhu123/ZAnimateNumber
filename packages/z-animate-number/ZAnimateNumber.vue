<template>
  <span>
    {{ displayValue }}
  </span>
</template>

<script lang="ts">
import { requestAnimationFrame, cancelAnimationFrame } from "./utils";

export default {
  name: "ZAnimateNumber",
  props: {
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    decimals: {
      type: Number,
      default: 0,
      validator: val => val >= 0
    },
    decimal: {
      type: String,
      default: "."
    },
    separator: {
      type: String,
      default: ","
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    },
    useEasing: {
      type: Boolean,
      default: true
    },
    easingFn: {
      type: Function,
      default(t, b, c, d) {
        return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
      }
    }
  },
  data() {
    return {
      localStart: this.start,
      displayValue: "",
      printVal: null,
      paused: false,
      startTime: null,
      timestamp: null,
      remaining: null,
      rAF: null
    };
  },

  computed: {
    countDown() {
      return this.start > this.end;
    }
  },

  watch: {
    start() {
      if (this.autoplay) {
        this.run();
      }
    },
    end() {
      if (this.autoplay) {
        this.run();
      }
    }
  },

  created() {
    this.displayValue = this.formatNumber(this.start);
  },

  mounted() {
    if (this.autoplay) {
      this.run();
    }
    this.$emit("mountedCallback");
  },

  destroyed() {
    cancelAnimationFrame(this.rAF);
  },

  methods: {
    run() {
      this.localStart = this.start;
      this.startTime = null;
      this.localDuration = this.duration;
      this.paused = false;
      this.rAF = requestAnimationFrame(this.count);
    },

    pauseResume() {
      if (this.paused) {
        this.resume();
        this.paused = false;
      } else {
        this.pause();
        this.paused = true;
      }
    },

    pause() {
      cancelAnimationFrame(this.rAF);
    },

    resume() {
      this.startTime = null;
      this.localDuration = +(this.remaining || 0);
      this.localStart = +(this.printVal || 0);
      requestAnimationFrame(this.count);
    },

    reset() {
      this.startTime = null;
      cancelAnimationFrame(this.rAF);
      this.displayValue = this.formatNumber(this.start);
    },

    count(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      this.timestamp = timestamp;
      const progress = timestamp - (this.startTime || 0);
      this.remaining = this.localDuration - progress;
      if (this.useEasing) {
        if (this.countDown) {
          this.printVal =
            this.localStart -
            this.easingFn(
              progress,
              0,
              this.localStart - this.end,
              this.localDuration
            );
        } else {
          this.printVal = this.easingFn(
            progress,
            this.localStart,
            this.end - this.localStart,
            this.localDuration
          );
        }
      } else {
        if (this.countDown) {
          this.printVal =
            this.localStart -
            (this.localStart - this.end) * (progress / this.localDuration);
        } else {
          this.printVal =
            this.localStart +
            (this.end - this.localStart) * (progress / this.localDuration);
        }
      }
      if (this.countDown) {
        this.printVal =
          (this.printVal || 0) < this.end ? this.end : this.printVal;
      } else {
        this.printVal =
          (this.printVal || 0) > this.end ? this.end : this.printVal;
      }
      this.displayValue = this.formatNumber(this.printVal);
      if (progress < this.localDuration) {
        this.rAF = requestAnimationFrame(this.count);
      } else {
        this.$emit("callback");
      }
    },

    isNumber(val) {
      return !isNaN(parseFloat(val));
    },

    formatNumber(num) {
      num = num.toFixed(this.decimals);
      num += "";
      const x = num.split(".");
      let x1 = x[0];
      const x2 = x.length > 1 ? this.decimal + x[1] : "";
      const rgx = /(\d+)(\d{3})/;
      if (this.separator && !this.isNumber(this.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, "$1" + this.separator + "$2");
        }
      }
      return this.prefix + x1 + x2 + this.suffix;
    }
  }
};
</script>

<style lang="scss" scoped></style>
