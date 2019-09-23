new Vue({
  el: ".container",
  created() {
    setInterval(e => {
      this.tlacitka.push(this.pocettlac + 1);
      this.pocettlac++;
    }, 1000);
  },
  data: {
    nazevtlac: 1,
    vybuch: false,
    tlbarva: "btn-primary",
    pocettlac: 0,
    tlacitka: [],
    barvy: ["btn-primary", "btn-danger", "btn-dark"]
  },
  methods: {
    bum(obsahtextu) {
      if (!obsahtextu) {
        console.log("Bum...");
      } else {
        console.log(obsahtextu);
      }
      this.tlbarva = "btn-danger";
      this.vybuch = true;
      this.pocettlac++;
      this.nazevtlac++;
    },
    pridejtlac(t, i) {
      console.log("test");
      this.tlacitka.splice(i, 0, t);
      // this.tlacitka.push(t);
    }
  }
});