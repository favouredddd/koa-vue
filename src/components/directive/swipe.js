
let start = function(e,dom) {
  var me = dom;
  var t = new Date();
  me.sava.time.push(t);
  me.sava.time.push(t);
  me.sava.site.push({
    x: e.touches[0].pageX,
    y: e.touches[0].pageY,
  });
  me.sava.site.push({
    x: e.touches[0].pageX,
    y: e.touches[0].pageY,
  });
  me.sava.odl = {
    x: e.touches[0].pageX,
    y: e.touches[0].pageY,
  };
}
let move = function(e,dom) {
  var me = dom;
  var t = new Date();
  if (t - me.sava.time[0] > 50) {
    me.sava.time[0] = me.sava.time[1];
    me.sava.time[1] = t;
    me.sava.site[0] = me.sava.site[1];
    me.sava.site[1] = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY,
    }
  }
  me.sava.old = {
    x: e.touches[0].pageX,
    y: e.touches[0].pageY,
  };
}
let end = function(e,dom) {
  var me = dom;
  var index = 0;
  if (new Date() > me.sava.time[1] + 30) {
    index = 1;
  }
  var dx = me.sava.old.x - me.sava.site[index].x;
  var dy = me.sava.old.y - me.sava.site[index].y;
  var s = dx * dx + dy * dy;
  if (s < 100 || new Date() - me.sava.time[index] > 300)
    return;
  var dr = Math.abs(dx / dy);

  if (Math.sqrt(s) / (new Date() - me.sava.time[index]) > 0.05) {
    if (dx < 0 && dr > 1) {
      me.event.left && me.event.left();
    }
    if (dx > 0 && dr > 1) {
      me.event.right && me.event.right();
    }
    if (dy < 0 && dr < 1) {
      me.event.up && me.event.up();
    }
    if (dy > 0 && dr < 1) {
      me.event.down && me.event.down();
    }
  }
}
let addFunc = function(dom) {
  var me = this;
  dom.addEventListener("touchstart", function(e) {
    start(e,dom);
  }, false);
  dom.addEventListener("touchmove", function(e) {
    move(e,dom)
  }, false);
  dom.addEventListener("touchend", function(e) {
    end(e,dom);
  }, false);
}
let swiper = {
  bind(el, binding, vn, oldVn) {
    let me = this;
    el.sava = {
      time: [],
      site: [],
      old: {}
    };
    el.event = {
      left: function() {},
      up: function() {},
      down: function() {},
      right: function() {}
    };
    el.event[binding.arg] = binding.value;
    addFunc(el);
  }
}
export default swiper;
