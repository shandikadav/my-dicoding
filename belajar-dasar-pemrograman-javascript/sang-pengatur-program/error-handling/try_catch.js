try {
  console.log("memulai program");
  throw new Error("Terjadi error");
  console.log("mengakhiri program");
} catch (error) {
  console.log("karena tidak ada error, blok ini akan diabaikan");
}
