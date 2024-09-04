export function makeCoffee() {
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
  );

  setTimeout(() => {
    console.log("Pramusaji selesai membaut kopi.");
  }, estimationTime);
}
