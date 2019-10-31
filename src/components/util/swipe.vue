<template>
  <div @touchstart="start" @touchmove="move" @touchend="end">
    <slot name="hhhh"></slot>
  </div>
</template>
<script>
export default {
  props: ["left", "right","up","down"],
  name: "SWIPE",
  data() {
    return { sava: { time: [0, 0], site:[{ x: 0, y: 0 }, { x: 0, y: 0 }], old: { x: 0, y: 0 } } }
  },
  methods: {
    init() {},
    start(e) {
      let me = this;
      let t = new Date();
      me.sava.time[0] = t;
      me.sava.time[1] = t;
      me.sava.site[0].x = e.touches[0].pageX;
      me.sava.site[0].y = e.touches[0].pageY;
      me.sava.site[1].x = e.touches[0].pageX;
      me.sava.site[1].y = e.touches[0].pageY;
      me.sava.old.x = e.touches[0].pageX;
      me.sava.old.y = e.touches[0].pageY;
    },
    move(e) {
      let me = this;
      let t = new Date();
      if (t - me.sava.time[0] > 50) {
        me.sava.time[0] = me.sava.time[1];
        me.sava.time[1] = t;
        me.sava.site[0] = me.sava.site[1];
        me.sava.site[1].x = e.touches[0].pageX;
        me.sava.site[1].y = e.touches[0].pageY;
      }
      me.sava.old.x = e.touches[0].pageX;
      me.sava.old.y = e.touches[0].pageY;
    },
    end(e) {
      let me = this;
      let index = 0;
      if (new Date() > me.sava.time[1] + 30) {
        index = 1;
      }
      let dx = me.sava.old.x - me.sava.site[index].x;
      let dy = me.sava.old.y - me.sava.site[index].y;
      let s = dx * dx + dy * dy;
      if (s < 100 || new Date() - me.sava.time[index] > 300)
        return;
      let dr = Math.abs(dx / dy);
      if (Math.sqrt(s) / (new Date() - me.sava.time[index]) > 0.05) {
        if (dx < 0 && dr > 1) {
          // alert();
          me.left && me.left();
        }
        if (dx > 0 && dr > 1) {
          // alert();
          me.right && me.right();
        }
        if (dy < 0 && dr < 1) {
          me.up && me.up();
        }
        if (dy > 0 && dr < 1) {
          me.down && me.down();
        }
      }
    }
  },
  mounted(){
  	let me=this;
  	// console.log(me.left,me.right);
  }
}

</script>
