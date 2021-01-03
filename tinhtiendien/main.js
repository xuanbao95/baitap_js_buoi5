function bamDi(event) {
    event.preventDefault();
    var soKwDaDung = document.getElementById("soKw").valuel;
    if (soKwDaDung === 50) {
        var ketQua = Math.sqrt(soKwDaDung * 500);
    } else if (soKwDaDung > 50 && soKwDaDung < 100 && soKwDaDung > 0) {
        ketQua = Math.sqrt(50 * 500 + (soKwDaDung - 50) * 650);
    } else if (soKwDaDung > 100 && soKwDaDung == 200) {
        ketQua = Math.sqrt(50 * 500 + 50 * 650 + (soKwDaDung - 100) * 850);
    } else if (soKwDaDung > 200 && soKwDaDung == 350) {
        ketQua = Math.sqrt(50 * 500 + 50 * 650 + 100 * 850 + (soKwDaDung - 200) * 1100);
    } else {
        ketQua = Math.sqrt(50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwDaDung - 350) * 1300);
    }
    document.getElementById("footer").innerHTML = ketQua;
}
