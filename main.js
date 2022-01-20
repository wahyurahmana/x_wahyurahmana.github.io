const db = [];

function inputBuku() {
    let baris = {}
    let data = document.getElementsByClassName('stylInput')
    for (let i = 0; i < data.length; i++) {
        if (data[i].value === " " || data[i].value === "") {
            return alert("Data Tidak Boleh Kosong!")
        }
        baris[data[i].name] = data[i].value
    }

    let sudahDibaca = document.getElementById("checkboxStyle")
    baris[sudahDibaca.name] = sudahDibaca.checked
    baris.idBook = Math.ceil(Math.random() * 999999999)
    db.push(baris)
    alert("Data Berhasil Ditambahkan!")
    data[0].value = ""
    data[1].value = ""
    data[2].value = ""

    if (sudahDibaca.checked === true) {
        telahDibaca()
    } else {
        belumDibaca()
    }

    sudahDibaca.checked = false

    return db
}

function belumDibaca(load) {
    let dataBelumDibaca = document.getElementById("dataBelumDibaca");
    if (load === undefined) {
        if (db[db.length - 1].sudahDibaca === false) {
            let html = `<tr> <th>Judul</th> <td>: ${db[db.length-1].judul}</td></tr> <tr> <th>Penulis</th> <td>: ${db[db.length-1].penulis}</td></tr> <tr> <th>Tahun Terbit</th> <td>: ${db[db.length-1].tahunTerbit}</td></tr> <tr> <td><button style="font-size: 10px;" onclick="belumToSudah(${db[db.length-1].idBook})">Tandai Sudah Dibaca</button></td> <td><button style="font-size: 10px; background-color:red;" onclick="delBelumDibaca(${db[db.length-1].idBook})">Hapus</button></td> </tr>`;
            dataBelumDibaca.innerHTML += html
        }
    } else {
        let temp = ""
        for (let data in db) {
            if (db[data].sudahDibaca === false) {
                temp += `<tr> <th>Judul</th> <td>: ${db[data].judul}</td></tr> <tr> <th>Penulis</th> <td>: ${db[data].penulis}</td></tr> <tr> <th>Tahun Terbit</th> <td>: ${db[data].tahunTerbit}</td></tr> <tr> <td><button style="font-size: 10px;" onclick="belumToSudah(${db[data].idBook})">Tandai Sudah Dibaca</button></td> <td><button style="font-size: 10px; background-color:red;" onclick="delBelumDibaca(${db[data].idBook})">Hapus</button></td> </tr>`;
            }
        }
        dataBelumDibaca.innerHTML = temp
    }
}

function telahDibaca(load) {
    let dataSudahDibaca = document.getElementById("dataSudahDibaca");
    if (load === undefined) {
        if (db[db.length - 1].sudahDibaca === true) {
            let html = `<tr> <th>Judul</th> <td>: ${db[db.length-1].judul}</td></tr> <tr> <th>Penulis</th> <td>: ${db[db.length-1].penulis}</td></tr> <tr> <th>Tahun Terbit</th> <td>: ${db[db.length-1].tahunTerbit}</td></tr> <tr> <td><button style="font-size: 10px;" onclick="sudahToBelum(${db[db.length-1].idBook})">Tandai Belum Dibaca</button></td><td><button style="font-size: 10px; background-color:red;" onclick="delSudahDibaca(${db[db.length-1].idBook})">Hapus</button></td> </tr>`;
            dataSudahDibaca.innerHTML += html
        }
    } else {
        let temp = ""
        for (let data in db) {
            if (db[data].sudahDibaca === true) {
                temp += `<tr> <th>Judul</th> <td>: ${db[data].judul}</td></tr> <tr> <th>Penulis</th> <td>: ${db[data].penulis}</td> </tr> <tr> <th>Tahun Terbit</th> <td>: ${db[data].tahunTerbit}</td> </tr> <tr> <td><button style="font-size: 10px;" onclick="sudahToBelum(${db[data].idBook})">Tandai Belum Dibaca</button></td> <td><button style="font-size: 10px; background-color:red;" onclick="delSudahDibaca(${db[data].idBook})">Hapus</button></td> </tr>`;
            }
        }
        dataSudahDibaca.innerHTML = temp
    }
}

function delBelumDibaca(iddelBelumDibaca) {
    for (let i = 0; i < db.length; i++) {
        if (db[i].idBook === iddelBelumDibaca) {
            db.splice(i, 1)
        }
    }
    alert("Data Dihapus!")
    belumDibaca("load");
    return db
}

function delSudahDibaca(iddelSudahDibaca) {
    for (let i = 0; i < db.length; i++) {
        if (db[i].idBook === iddelSudahDibaca) {
            db.splice(i, 1)
        }
    }
    alert("Data Dihapus!")
    telahDibaca("load");
    return db
}

function belumToSudah(idBelumToSudah){
    for (let i = 0; i < db.length; i++) {
        if (db[i].idBook === idBelumToSudah) {
            db[i].sudahDibaca = true
        }
    }
    belumDibaca("load");
    telahDibaca("load");
    return db
}

function sudahToBelum(idSudahToBelum){
    for (let i = 0; i < db.length; i++) {
        if (db[i].idBook === idSudahToBelum) {
            db[i].sudahDibaca = false
        }
    }
    telahDibaca("load");
    belumDibaca("load");
    return db
}

function pencarianBuku(){
    let stylInputSearch = document.getElementById("stylInputSearch").value
    let pencarianBukuData = document.getElementById("pencarianBukuData")
    let html = ""
    for(let data in db){
        if(stylInputSearch === db[data].judul || stylInputSearch === db[data].penulis || stylInputSearch === db[data].tahunTerbit){
            html += `<tr> <th>Judul</th> <td>:</td> <td>${db[data].judul}</td> </tr> <tr> <th>Penulis</th> <td>:</td> <td>${db[data].penulis}</td> </tr> <tr> <th>Tahun Terbit</th> <td>:</td> <td>${db[data].tahunTerbit}</td> </tr>`;
        }
    }
    pencarianBukuData.innerHTML = html
    let boxCari = document.getElementsByClassName("result-cari")[0]
    boxCari.style.display = "block"
}