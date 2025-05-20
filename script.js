function submitForm() {
  const city = document.getElementById("city").value;
  const crime = document.getElementById("crime").value;
  const year = document.getElementById("year").value;

  const query = `result.html?city=${encodeURIComponent(city)}&crime=${encodeURIComponent(crime)}&year=${encodeURIComponent(year)}`;
  window.location.href = query;
}
