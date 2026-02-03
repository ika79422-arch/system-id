const kodeInput = document.getElementById("kode");
const form = document.getElementById("lockForm");
const toast = document.getElementById("toast");

/* Format ribuan */
function formatRibuan(value) {
  return value.replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

kodeInput.addEventListener("input", () => {
  const cursor = kodeInput.selectionStart;
  kodeInput.value = formatRibuan(kodeInput.value);
  kodeInput.setSelectionRange(cursor, cursor);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numericValue = parseInt(kodeInput.value.replace(/\./g, ""), 10);
  console.log("Kode Aktivasi (numeric):", numericValue);

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
});
