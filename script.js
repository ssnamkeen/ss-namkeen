function toggleLanguage() {
  const lang = document.getElementById("langSelector").value;
  document.querySelectorAll(".name").forEach(el => el.textContent = el.getAttribute("data-" + lang));
  document.querySelectorAll(".price").forEach(el => el.textContent = el.getAttribute("data-" + lang));
  document.querySelectorAll(".desc").forEach(el => el.textContent = el.getAttribute("data-" + lang));
  document.querySelectorAll(".detailBtn").forEach(el => el.textContent = el.getAttribute("data-" + lang));
  document.getElementById("title").textContent = lang === "hi" ? "एस.एस. नमकीन" : "S.S. Namkeen";
}