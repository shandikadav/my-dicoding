try {
  console.log("Ini try block");
  throw new Error("Error : Program berhenti");
} catch (error) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}
