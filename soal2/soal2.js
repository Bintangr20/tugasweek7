const fs = require("fs");

// Read the contents of the log file
const logFilePath = "./soal2/homework.log";
const dataSample = fs.readFileSync(logFilePath, "utf8");

// Continue with the rest of your code using the dataSample

// Menuliskan data sample ke dalam file log.txt
fs.writeFileSync("log.txt", dataSample, { encoding: "utf8" }, (err) => {
  if (err) {
    console.error("Gagal menulis ke file log.txt", err);
  } else {
    console.log("Data berhasil ditulis ke file log.txt");
  }
});
