function bamDi(event) {
    event.preventDefault();
    var nhaDoanhNghiep = document.getElementById("nhaOrDoanhNghiep").Value;
    var hoaDon = document.getElementById("hoaDon").Value;
    var dichVu = document.getElementById("dichVuCoBan").Value;
    var thueKenh = document.getElementById("kenhCaoCap").Value;
    switch (nhaDoanhNghiep) {
        case 1:
            var tongTien = hoaDon + dichVu * 20.5 + thueKenh * 7.5;
            break;
        case 2:
            tongTien = hoaDon + (75 * 10 + (dichVu - 10) * 5) + thueKenh * 50;
            break;
        default:
            tongTien = "sai rồi";
            break;
    }
    document.getElementById("footer").innerHTML = tongTien;
}