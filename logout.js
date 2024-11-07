// Mendapatkan elemen tombol logout berdasarkan id
const logoutButton = document.getElementById("logout-btn");

// Menambahkan event listener pada tombol logout
logoutButton.addEventListener("click", function() {
    // Menampilkan dialog konfirmasi untuk logout
    const confirmLogout = confirm("Apakah Anda yakin ingin logout?");

    // Jika pengguna mengonfirmasi logout
    if (confirmLogout) {
        console.log("Pengguna logout, mengalihkan ke index.html");  // Menampilkan log jika logout berhasil
        window.location.href = "index.html";  // Mengarahkan pengguna ke index.html
    } else {
        console.log("Pengguna membatalkan logout");  // Menampilkan log jika pengguna membatalkan logout
    }
});
