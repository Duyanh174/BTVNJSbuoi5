/** BAI TAP 1
 * 
 *  INPUT
 * 
 * 
 * 
 * PROCESS
 * 
 * 
 * OUTPUT
 * 
 * 
 * 
 */

// }   
// CÁCH 1 

//  function exercise1 () {
//     var bigPoint = document.getElementById('diemChuan').value;

//     //  KHU VUC  
//     var khuVuc0 = document.getElementById('area0');
//     var khuVuc1 = document.getElementById('area1');
//     var khuVuc2 = document.getElementById('area2');
//     var khuVuc3 = document.getElementById('area3');
//     var areaType;


//     // DOI TUONG 
//     var doiTuong0 = document.getElementById('taget0');
//     var doiTuong1 = document.getElementById('taget1');
//     var doiTuong2 = document.getElementById('taget2');
//     var doiTuong3 = document.getElementById('taget3');
//     var targetType;

//     // DIEM
//     var point1 = +document.getElementById('diem1').value;
//     var point2 = +document.getElementById('diem2').value;
//     var point3 = +document.getElementById('diem3').value;


//     //  KHU VUC

//     if (khuVuc1.checked === true) {
//         areaType = 1;
//     } else if (khuVuc2.checked === true) {
//         areaType = 2;
//     } else if (khuVuc3.checked === true) {
//         areaType = 3;
//     } else if(khuVuc0.checked === true){
//         areaType = 0;

//     }else {
//         alert('Vui lòng chọn khu vực ưu tiên ')
//     }
//     // DIEM UU TIEN KHU VUC

//     var diemUuTien;
//     if (areaType === 1) {
//         diemUuTien = 2;
//     } else if (areaType === 2) {
//         diemUuTien = 1;
//     } else if (areaType === 3) {
//         diemUuTien = 0.5;
//     } else if( areaType === 0) {
//         diemUuTien = 0;
//     }



//     //  DOI TUONG 
//     if (doiTuong1.checked === true) {
//         targetType = 1;
//     } else if (doiTuong2.checked === true) {
//         targetType = 2;
//     } else if (doiTuong3.checked === true) {
//         targetType = 3;
//     } else if (doiTuong0.checked === true){
//         targetType = 0;

//     }else{
//         alert('Vui lòng chọn đối tượng ưu tiên')
//     }

//     // DIEM UU TIEN DOI TUONG 

//     var diemUuTienTarget;
//     if (targetType === 1) {
//         diemUuTienTarget = 2.5;
//     } else if (targetType === 2) {
//         diemUuTienTarget = 1.5 ;
//     } else if (targetType === 3) {
//         diemUuTienTarget = 1;
//     } else if(targetType === 0) {
//         diemUuTienTarget = 0;
//     }

//     // DIEM LIET 
//     var diemLiet;
//     if (point1 <= 0 || point2 <= 0 || point3 <= 0 ){
//         diemLiet = true;
//     }else{
//         diemLiet = false;
//     }

//     // TINH DIEM TB 
//      var totalPoint; 
//      totalPoint= point1 + point2 + point3 + diemUuTien + diemUuTienTarget;
//     var ketQua = '';

//     // KET QUA 
//     if(totalPoint >= bigPoint && diemLiet === false){
//         ketQua = 'Chúc mừng bạn đã Đậu    ' + 'Tổng điểm : ' + totalPoint;
//     }else if(totalPoint >= bigPoint && diemLiet === true){
//         ketQua = 'Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0';
//     }else{
//         ketQua = 'Bạn đã rớt    ' + 'Tổng điểm : ' + totalPoint;
//     }
//     document.getElementById('ketQua').innerHTML = ketQua;





// }   
// document.getElementById('btnTinhDTB').onclick = exercise1;

//  CÁCH 2 

function diemKhuVuc(dKV) {


    if (dKV === 'A') return 2;


    if (dKV === "B") return 1;

    if (dKV === "C") return 0.5;

    return 0
}

function diemDoiTuong(dDT) {


    if (dDT === '1') return 2.5;


    if (dDT === "2") return 1.5;

    if (dDT === "3") return 1;

    return 0
}

function exercise1() {

    var bigPoint = document.getElementById('diemChuan').value;

    if (bigPoint === '') alert('Vui lòng nhập điểm chuẩn ')

    var point1 = +document.getElementById('diem1').value;
    var point2 = +document.getElementById('diem2').value;
    var point3 = +document.getElementById('diem3').value;
    var areaVal = document.getElementById('areaSelect').value;
    var typeVal = document.getElementById('typeSelect').value;


    var areaGrade = diemKhuVuc(areaVal);
    var typeGrade = diemDoiTuong(typeVal);

    //  DIEM LIET
    var diemLiet;
    if (point1 <= 0 || point2 <= 0 || point3 <= 0) {
        diemLiet = true;
    } else {
        diemLiet = false;
    }

    //  TINH DIEM TB 
    var totalPoint;
    totalPoint = point1 + point2 + point3 + areaGrade + typeGrade;

    var ketQua = '';

    // KET QUA 
    if (totalPoint >= bigPoint && diemLiet === false) {
        ketQua = 'Chúc mừng bạn đã Đậu    ' + 'Tổng điểm : ' + totalPoint;
    } else if (totalPoint >= bigPoint && diemLiet === true) {
        ketQua = 'Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0';
    } else if (totalPoint < bigPoint && diemLiet === true) {
        ketQua = 'Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0';
    } else if (totalPoint < bigPoint) {
        ketQua = 'Bạn đã rớt    ' + 'Tổng điểm : ' + totalPoint;
    }

    document.getElementById('ketQuaDiem').innerHTML = ketQua;


}
document.getElementById('btnTinhDTB').onclick = exercise1;

/** BÀI TẬP 2 
 * 
 *  INPUT
 * 
 * 
 * 
 * PROCESS
 * 
 * 
 * OUTPUT
 * 
 * 
 * 
 */
document.getElementById('btnTinhTienDien').onclick = function () {
    var fullName = document.getElementById('nameID').value;
    var numberKw = +document.getElementById('soKw').value;
    var totalMoney;
    if (numberKw <= 50) {
        totalMoney = numberKw * 500;

    } else if (numberKw > 50 && numberKw <= 100) {
        totalMoney = 50 * 500 + (numberKw - 50) * 650;

    } else if (numberKw > 100 && numberKw <= 200) {
        totalMoney = 50 * 500 + 50 * 650 + (numberKw - 100) * 850;
    } else if (numberKw > 200 && numberKw <= 350) {
        totalMoney = 50 * 500 + 50 * 650 + 100 * 850 + (numberKw - 200) * 1100;
    } else if (numberKw > 350) {
        totalMoney = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (numberKw - 350) * 1300;

    }

    document.getElementById('ketQuaTienDien').innerHTML = 'Họ và tên: ' + fullName + ' ; ' + 'Tổng tiền điện: ' + new Intl.NumberFormat('vn-VN').format(totalMoney) + "VND"
}


// BÀI TẬP 3 

function taxableInc(bigMoney, amountPerson) {
    // var bigMoney = +document.getElementById('aggegateInc').value;
    // var amountPerson = +document.getElementById('depentdentPerson').value;
    var TTNCT;
    TTNCT = bigMoney - 4e+6 - amountPerson * 1.6e+6;
    return TTNCT;

}




function tienThue() {
    var nameThue = document.getElementById('nameThue').value;
    var TongThuNhapNam = +document.getElementById('aggegateInc').value;
    var soNguoiPhuThuoc = +document.getElementById('depentdentPerson').value;

    var ThueThuNhapCaNhan = taxableInc(TongThuNhapNam, soNguoiPhuThuoc)

    if (TongThuNhapNam == '') {
        alert('Số tiền thu nhập không hợp lệ ')

    } else if (soNguoiPhuThuoc == '') {
        alert('Số người phụ thuộc không hợp lệ ')
    }

    var taxMoney;
    if (ThueThuNhapCaNhan >= 0 && ThueThuNhapCaNhan <= 60e+6) {
        taxMoney = ThueThuNhapCaNhan * 0.05;
    } else if (ThueThuNhapCaNhan > 60e+6 && ThueThuNhapCaNhan <= 120e+6) {
        taxMoney = ThueThuNhapCaNhan * 0.1;
    } else if (ThueThuNhapCaNhan > 120e+6 && ThueThuNhapCaNhan <= 210e+6) {
        taxMoney = ThueThuNhapCaNhan * 0.15;
    } else if (ThueThuNhapCaNhan > 210e+6 && ThueThuNhapCaNhan <= 384e+6) {
        taxMoney = ThueThuNhapCaNhan * 0.2;
    } else if (ThueThuNhapCaNhan > 384e+6 && ThueThuNhapCaNhan <= 624e+6) {
        taxMoney = ThueThuNhapCaNhan * 0.25;
    } else if (ThueThuNhapCaNhan > 624e+6 && ThueThuNhapCaNhan <= 960e+6) {
        taxMoney = ThueThuNhapCaNhan * 0.3;
    } else if (ThueThuNhapCaNhan > 960e+6) {
        taxMoney = ThueThuNhapCaNhan * 0.35;
    } else {
        alert('Số tiền thu nhập không hợp lệ')
        return
    }

    document.getElementById('ketQuaTienThue').innerHTML = 'Thuế thu nhập cá nhân của bạn ' + nameThue + ' ' + 'là: ' + new Intl.NumberFormat('vn-VN').format(taxMoney) + 'VNĐ';
}

document.getElementById('btnTinhTienThue').onclick = tienThue;


// BAI TAP 4 


function hiddenShow() {
    var hidTest = +document.getElementById('typeCustomer').value;
    // var hiddenTest = typeCustom(hidTest);
    var show = document.getElementById('hiddenOverlay');
    if (hidTest === 2) {
        show.hidden = false;
    }
    else {
        show.hidden = true;
    }


}

function typeCilent(LKH) {
    if (LKH === 0) {
        alert('Vui lòng chọn loại khách hàng ');
        return
    }
    if (LKH === 1) return 1;
    if (LKH === 2) return 2;
    return LKH
}



document.getElementById('btnTinhTienCap').onclick = function () {
    var nameCustomer = document.getElementById('customerID').value;
    var soKenh = +document.getElementById('numberKenh').value;
    var soKetNoi = +document.getElementById('connetionNumber').value;
    var loaiKhachHang = +document.getElementById('typeCustomer').value;
    var customer = typeCilent(loaiKhachHang);

    var tienCap;

    if (customer === 1) {
        tienCap = 4.5 + 20.5 + 7.5 * soKenh;

    } if (customer === 2 && soKetNoi <= 10) {
        tienCap = 15 + 75 + 50 * soKenh;
    } else if (customer === 2 && soKetNoi > 10) {
        tienCap = 15 + 75 + 50 * soKenh + (soKetNoi - 10) * 5;

    }
    const amount = tienCap;
    const options2 = { style: 'currency', currency: 'USD' };
    const numberFormat2 = new Intl.NumberFormat('en-US', options2);

    document.getElementById('ketQuaTienCap').innerHTML = 'Mã Khách Hàng: ' + nameCustomer + ' ' + 'Tiền Cáp: ' + numberFormat2.format(amount);

}

