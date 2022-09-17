// Thêm số nguyên vào mảng
var arays = [];
document.getElementById("themSo").addEventListener("click", function () {
    var soNguyen = document.getElementById("soNguyen").value * 1;
    arays.push(soNguyen);
    // console.log(mang);
    document.getElementById("mang").innerHTML = arays;



});

// Câu 1: Tổng các số dương trong mảng 
document.getElementById("tongSoduong").addEventListener("click", function () {
    var sum = 0;
    for (var i = 0; i < arays.length; i++) {
        if (arays[i] > 0) {
            sum = sum + arays[i];

        }
    }
    var result = sum;
    // console.log(result);
    document.getElementById("kq1").innerHTML = sum;


})


//Câu 2
document.getElementById("slSoduong").addEventListener("click", function () {
    var count = 0;
    for (var i = 0; i < arays.length; i++) {
        if (arays[i] > 0) {
            count++
        }
    }
    var result2 = count;
    // console.log(result2);
    document.getElementById("kq2").innerHTML = result2;
})

//Câu 3
document.getElementById("min").addEventListener("click", function () {
    var soNhonhat = arays[0];
    for (var i = 0; i < arays.length; i++) {
        if (soNhonhat > arays[i]) {
            soNhonhat = arays[i]
        }
    }
    var result3 = soNhonhat;
    document.getElementById("soMin").innerHTML = result3;
})

// Câu 4
document.getElementById("btnsoDuongmin").addEventListener("click", function () {
    var duongMin = arays[0];
    
    for (var i = 0; i < arays.length; i++) {
        if (arays[i] > 0) {
            if (arays[i] < arays[0] || arays[i] == 0) {
                duongMin = arays[i];
            }
            else if (arays[i] > arays[0] && arays[0] > 0) {
                duongMin = arays[0];
            }
            else {
                duongMin = "không có số dương nhỏ nhất";
            }
        }
        else {
            duongMin = "không có số dương nhỏ nhất";
        }

    }
    var result4 = duongMin;
    document.getElementById("soDuongmin").innerHTML = result4;
})

//Câu 5
document.getElementById("btnsoChan").addEventListener("click", function () {
    var soChan = 0;
    for (var i = arays.length - 1; i < arays.length; i--) {
        if (arays[i] % 2 === 0) {
            soChan = arays[i];
            break;
        } 
        if(arays[i] % 2 != 0){
            soChan = -1;
            break;
        }
    }
    var result5 = soChan;
    document.getElementById("showSochan").innerHTML = result5;

})

// Câu 6
document.getElementById("btnDoicho").addEventListener("click", function () {
    document.getElementById("mang").innerHTML = arays;

    var viTri1 = document.getElementById("viTri1").value * 1;
    var viTri2 = document.getElementById("viTri2").value * 1;

    // console.log(arays);
    var temp = 0;
    temp = arays[viTri1];
    arays[viTri1] = arays[viTri2];
    arays[viTri2] = temp;
    document.getElementById("showDoicho").innerHTML = arays;

})

//Câu 7

document.getElementById("btnSapxep").addEventListener("click", function () {
    var temp = 0;
    for (var i = 0; i < arays.length; i++) {
        for (var j = i + 1; j < arays.length; j++) {
            if (arays[i] > arays[j]) {
                temp = arays[i];
                arays[i] = arays[j];
                arays[j] = temp
            }
        }
    }
    document.getElementById("showSapxep").innerHTML = arays;
})

//Câu 8
document.getElementById("btnSoNguyenTo").addEventListener("click", function () {
    var arr = [];
    var kq = [];
    for (var i = 0; i < arays.length; i++) {
        var thamso = arays[i];

        if (songuyento(arays[i]) == 1)
            arr.push(arays[i]);
        kq = arr[0];
        if (songuyento(mang[i]) != 1)
            kq = -1;

    }
    document.getElementById("showSoNguyenTo").innerHTML = kq;
})

function songuyento(thamso) {

    var textSoNT = 1;
    if (thamso == 1 || thamso == 0) {
        return (textSoNT = 0)
    }
    for (var i = 2; i < thamso; i++) {
        if (thamso % i == 0) {
            return (textSoNT = 0);
        }
    }

    return (textSoNT = 1);
};

//Câu 9

var arr9 = [];
document.getElementById("btnthemSo").addEventListener("click", function () {
    var num9 = document.getElementById("num9").value * 1;
    arr9.push(num9);
    document.getElementById("showCau9").innerHTML = arr9;
})

document.getElementById("btnCau9").addEventListener("click", function () {
    var result9 = 0;
    for (var i = 0; i < arr9.length; i++) {
        if (Number.isInteger(arr9[i]) == true)

            result9++;

    }
    document.getElementById("showKQcau9").innerHTML = result9;
})

//Câu 10

document.getElementById("btnSosanh").addEventListener("click", function () {
    // Đếm số dương
    var demSoduong = 0;
    for (var i = 0; i < arays.length; i++) {
        if (arays[i] > 0) {
            demSoduong++;
        }
    }
    //Đếm số âm
    var demSoam = 0;
    for (var i = 0; i < arays.length; i++) {
        if (arays[i] < 0) {
            demSoam++;
        }
    }
    //So sánh
    var result10 = "";
    if (demSoduong > demSoam) {
        result10 = "số dương > số âm"
    } else if (demSoam > demSoduong) {
        result10 = "số âm > số dương"
    }
    document.getElementById("showSosanh").innerHTML = result10;

})





