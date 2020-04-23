function clock() {
  let waktu = new Date();

  let jam = waktu.getHours();
  let menit = waktu.getMinutes();
  let detik = waktu.getSeconds();

  let amPm = jam < 12 ? "AM" : "PM";

  jam = jam > 12 ? jam - 12 : jam;

  jam = ("0" + jam).slice(-2);
  menit = ("0" + menit).slice(-2);
  detik = ("0" + detik).slice(-2);

  document.getElementById("clock").innerHTML =
    jam + "  :  " + menit + "  :  " + detik + " " + amPm;

  let t = setTimeout(clock, 500);
}

console.log(clock());
