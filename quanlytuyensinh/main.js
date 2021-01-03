function bamDi(event) {
    event.preventDefault();
    var tenSv = document.getElementById("tenSv");
    var mon_1 = document.getElementById("mon_1").Value;
    var mon_2 = document.getElementById("mon_2").Value;
    var mon_3 = document.getElementById("mon_3").Value;
    var diemChuan = document.getElementById("diemChuan").value;
    var tong_3_mon = (mon_1 + mon_2 + mon_3);
    var ketQua = tong_3_mon + checkDoiTuong(1, 2, 3) + checkKhuVuc(1, 2, 3);
    if (ketQua < diemChuan) {
        var check = "Đậu";
    } else {
        check = "rớt";
    }
    document.getElementById("footer").innerHTML = tenSv + " " + check;
}
function checkKhuVuc(a, b, c) {
    var khuVuc = document.getElementById("khuVuc").Value;
    if (khuVuc === a) {
        return 2;
    } else if (khuVuc === b) {
        return 1;
    } else if (khuVuc === c) {
        return 0.5;
    } else {
        return 0;
    }
}
function checkDoiTuong(d, e, f) {
    var doiTuong = document.getElementById("doiTuong").Value;
    if (doiTuong === d) {
        return 2.5;
    } else if (doiTuong === e) {
        return 1.5;
    } else if (doiTuong === f) {
        return 1;
    } else {
        return 0;
    }
}
