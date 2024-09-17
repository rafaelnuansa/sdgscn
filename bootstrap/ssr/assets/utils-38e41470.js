import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatRupiah(angka) {
  var number_string = angka.toString().replace(/[^,\d]/g, ""), split = number_string.split(","), sisa = split[0].length % 3, rupiah = split[0].substr(0, sisa), ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);
  if (ribuan) {
    var separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  rupiah = split[1] != void 0 ? rupiah + "," + split[1] : rupiah;
  return "Rp " + rupiah;
}
function formatDateTime(dateTime) {
  const optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString("id-ID", optionsDate);
  const formattedTime = date.toLocaleTimeString("id-ID", optionsTime);
  return `${formattedDate} ${formattedTime.replace(/:/g, ".")}`;
}
function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString("id-ID", options);
}
function flashMessage(params) {
  return params.props.flash_message;
}
export {
  flashMessage as a,
  formatDateTime as b,
  formatRupiah as c,
  cn as d,
  formatDate as f
};
