const numMap = {
    0: ["t", "tr", "tl", "br", "bl", "b"],
    1: ["tr", "br"],
    2: ["t", "tr", "m", "bl", "b"],
    3: ["t", "tr", "m", "br", "b"],
    4: ["tl", "m", "tr", "br"],
    5: ["t", "tl", "m", "br", "b"],
    6: ["t", "tl", "m", "bl", "br", "b"],
    7: ["t", "tr", "br"],
    8: ["t", "tr", "tl", "m", "br", "bl", "b"],
    9: ["t", "tl", "tr", "m", "br"]
  };
  
  Vue.component("DigitalNumber", {
    props: ["number"],
    template: "#digital-number",
    computed: {
      activePieces() {
        return numMap[this.number];
      }
    }
  });
  
  Vue.component("DigitalClock", {
    template: "#digital-clock",
    data() {
      return {
        hours1: 0,
        hours2: 0,
        minutes1: 0,
        minutes2: 0,
        seconds1: 0,
        seconds2: 0
      };
    },
    created() {
      setInterval(() => {
        const time = new Date();
        const minutes = time.getMinutes();
        const hours = time.getHours();
        const seconds = time.getSeconds();
  
        const stringMinutes = minutes.toString();
        const stringHours = hours.toString();
        const stringSeconds = seconds.toString();
  
        this.hours1 =
          stringHours.length === 1 ? 0 : Number(stringHours.slice(0, 1));
        this.hours2 =
          stringHours.length === 1 ? hours : Number(stringHours.slice(1));
  
        this.minutes1 =
          stringMinutes.length === 1 ? 0 : Number(stringMinutes.slice(0, 1));
        this.minutes2 =
          stringMinutes.length === 1 ? minutes : Number(stringMinutes.slice(1));
  
        this.seconds1 =
          stringSeconds.length === 1 ? 0 : Number(stringSeconds.slice(0, 1));
        this.seconds2 =
          stringSeconds.length === 1 ? seconds : Number(stringSeconds.slice(1));
      }, 1000);
    }
  });
  
  new Vue({
    el: "#app",
    data() {
      return {
        sliderNumber: 0
      };
    }
  });
  