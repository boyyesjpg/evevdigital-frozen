/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 07: Toko Frozen Food & Makanan Beku Halal (evevfrozen)
 */

const PROFIL_USAHA = {
  nama: "evevfrozen",
  brandLengkap: "evevfrozen — Pusat Frozen Food Halal",
  sektor: "Toko Frozen Food & Makanan Beku Halal",
  tagline: "Stok Lauk Praktis, 100% Halal & Rantai Dingin -18°C Terjaga",
  deskripsi:
    "Pusat belanja retail dan grosir aneka makanan beku halal—nugget crispy, sosis sapi, bakso urat, dimsum homemade, daging sapi slice, hingga seafood vakum higienis dengan pengiriman cepat ber-cooler box.",
  whatsapp: "62895323418658",
  whatsappDisplay: "+62 895-3234-18658",
  telepon: "0895-3234-18658",
  email: "kontak@evevdigital.com",
  alamat: "Jl. Otista Raya No. 88, Bidara Cina, Jatinegara, Jakarta Timur 13330",
  mapsUrl: "https://maps.google.com/?q=Jl.+Otista+Raya+No.+88,+Jatinegara,+Jakarta+Timur",
  jamOperasional: "Buka Setiap Hari: 07.00 – 21.00 WIB",
  areaLayanan: "Belanja langsung di toko & pesan antar Instan / Sameday ber-cooler box se-Jabodetabek",
  sertifikasi: "100% Halal MUI & Terdaftar BPOM RI",
  copyright: "© 2026 evevfrozen. Hak Cipta Dilindungi.",
  powered: "EvEvDigital",
  layanan: [
    {
      id: "paket-harian",
      badge: "Paling Laris",
      nama: "Paket Lauk Harian Keluarga",
      harga: "Rp 99.000",
      hargaAngka: 99000,
      kemasan: "Isi 4 Pack (±2 kg)",
      rincian: "Nugget Ayam Crispy 500g, Sosis Sapi 500g, Bakso Sapi Urat 250g, dan Kentang Shoestring 500g."
    },
    {
      id: "paket-bekal",
      badge: "Favorit Ibu",
      nama: "Paket Bekal Anak Sekolah",
      harga: "Rp 78.000",
      hargaAngka: 78000,
      kemasan: "Isi 3 Pack (±1,25 kg)",
      rincian: "Nugget Sayur Sehat 500g, Chicken Katsu Fillet 500g, dan Sosis Ayam Cocktail 250g. Siap goreng 5 menit."
    },
    {
      id: "paket-grill",
      badge: "Best Seller",
      nama: "Paket Grill & Shabu Rumahan",
      harga: "Rp 165.000",
      hargaAngka: 165000,
      kemasan: "Porsi 4–5 Orang",
      rincian: "US Beef Shortplate Slice 500g, Mix Bakso Ikan & Chikuwa 500g, plus Saus Teriyaki & Bumbu Tomyam."
    },
    {
      id: "paket-dimsum",
      badge: "Cocok Arisan",
      nama: "Paket Dimsum & Camilan Keluarga",
      harga: "Rp 115.000",
      hargaAngka: 115000,
      kemasan: "Isi 4 Pack (55 pcs)",
      rincian: "Dimsum Ayam Udang 15 pcs, Siomay Mentai 10 pcs, Lumpia Kulit Tahu 10 pcs, dan Cireng Rujak 20 pcs."
    },
    {
      id: "paket-seafood",
      badge: "Vakum -18°C",
      nama: "Paket Seafood Segar Beku",
      harga: "Rp 145.000",
      hargaAngka: 145000,
      kemasan: "Isi 3 Pack Vakum",
      rincian: "Ikan Dori Fillet 500g (glazing tipis), Udang Kupas Ebi Furai 300g, dan Otak-Otak Ikan Tenggiri 500g."
    },
    {
      id: "paket-reseller",
      badge: "Harga Grosir",
      nama: "Paket Usaha Reseller & Kedai",
      harga: "Rp 525.000",
      hargaAngka: 525000,
      kemasan: "15 Pack Mix + Thermal Bag",
      rincian: "Kombinasi 15 pack produk terlaris (sosis, nugget, bakso, kentang, dimsum) plus daftar harga agen."
    }
  ],
  buatPesanWA: function (produk, harga, catatan) {
    var baris = [
      "Halo " + this.nama + ", saya ingin memesan produk frozen food:",
      ""
    ];
    if (produk) {
      baris.push("• Produk/Paket : " + produk);
    }
    if (harga) {
      baris.push("• Estimasi Harga : " + harga);
    }
    if (catatan) {
      baris.push("• Keterangan : " + catatan);
    }
    baris.push("• Jumlah : 1");
    baris.push("• Nama & Alamat Kirim : ");
    baris.push("");
    baris.push("Mohon info ketersediaan stok dan ongkir cooler box ya. Terima kasih!");
    return baris.join("\n");
  },
  getWhatsAppUrl: function (produk, harga, catatan) {
    var teks = produk
      ? this.buatPesanWA(produk, harga, catatan)
      : "Halo " + this.nama + ", saya ingin tanya katalog & stok produk frozen food hari ini.";
    return "https://wa.me/" + this.whatsapp + "?text=" + encodeURIComponent(teks);
  }
};

window.PROFIL_USAHA = PROFIL_USAHA;

document.addEventListener("DOMContentLoaded", function () {
  // 1. Auto-Hydrate elemen berbasis atribut data-config
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (typeof PROFIL_USAHA[key] === "string") {
      el.textContent = PROFIL_USAHA[key];
    }
  });

  // 2. Auto-Hydrate link WhatsApp untuk produk & paket
  document.querySelectorAll("[data-wa-produk]").forEach(function (link) {
    var namaProduk = link.getAttribute("data-wa-produk");
    var hargaProduk = link.getAttribute("data-wa-harga") || "";
    var ketProduk = link.getAttribute("data-wa-ket") || "";
    link.setAttribute("href", PROFIL_USAHA.getWhatsAppUrl(namaProduk, hargaProduk, ketProduk));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 3. Auto-Hydrate tombol WhatsApp umum
  document.querySelectorAll("[data-wa-umum]").forEach(function (link) {
    var customMsg = link.getAttribute("data-wa-umum");
    var url = customMsg
      ? "https://wa.me/" + PROFIL_USAHA.whatsapp + "?text=" + encodeURIComponent(customMsg)
      : PROFIL_USAHA.getWhatsAppUrl();
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 4. Render otomatis grid paket hemat jika kontainer tersedia
  var paketContainer = document.getElementById("paket-usaha-grid");
  if (paketContainer && Array.isArray(PROFIL_USAHA.layanan)) {
    paketContainer.innerHTML = PROFIL_USAHA.layanan
      .map(function (item) {
        var waHref = PROFIL_USAHA.getWhatsAppUrl(item.nama, item.harga, item.kemasan);
        return (
          '<div class="col-md-6 col-lg-4">' +
            '<div class="evev-paket-card">' +
              '<div class="evev-paket-card__top">' +
                '<span class="evev-paket-card__badge">' + item.badge + '</span>' +
                '<span class="evev-paket-card__pack">' + item.kemasan + '</span>' +
              '</div>' +
              '<h3 class="evev-paket-card__title">' + item.nama + '</h3>' +
              '<p class="evev-paket-card__desc">' + item.rincian + '</p>' +
              '<div class="evev-paket-card__footer">' +
                '<div class="evev-paket-card__price-wrap">' +
                  '<span class="evev-paket-card__price-label">Harga Paket</span>' +
                  '<div class="evev-paket-card__price">' + item.harga + '</div>' +
                '</div>' +
                '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" class="evev-paket-card__btn">' +
                  '<i class="fab fa-whatsapp"></i> Pesan WA' +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
      })
      .join("");
  }

  // 5. Intercept form untuk UX interaktif & auto-routing WhatsApp
  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // A: Newsletter / Info Promo
      if (form.classList.contains("mc-form") || form.querySelector('input[type="email"], input[name="EMAIL"]')) {
        var emailInput = form.querySelector('input[type="email"], input[name="EMAIL"]');
        var email = emailInput ? emailInput.value.trim() : "";
        var responseBox = form.parentElement ? form.parentElement.querySelector(".mc-form__response") : null;
        if (!email) {
          if (responseBox) {
            responseBox.textContent = "Silakan masukkan alamat email atau nomor WA Anda terlebih dahulu.";
            responseBox.style.color = "#f87171";
          }
          return;
        }
        if (responseBox) {
          responseBox.textContent = "Terima kasih! Info promo mingguan " + PROFIL_USAHA.nama + " akan dikirim ke " + email + ".";
          responseBox.style.color = "#4ade80";
        }
        if (emailInput) emailInput.value = "";
        return;
      }

      // B: Form Pencarian Produk -> Cek stok via WA
      if (form.classList.contains("search-popup__form") || form.getAttribute("role") === "search") {
        var searchInput = form.querySelector('input[type="search"], input[name="s"], input[type="text"]');
        var query = searchInput ? searchInput.value.trim() : "";
        if (query) {
          var waUrl = PROFIL_USAHA.getWhatsAppUrl(query, "", "Cek ketersediaan stok & harga terbaru");
          window.open(waUrl, "_blank", "noopener,noreferrer");
        } else {
          var shopEl = document.querySelector("#pricing, #shop");
          if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      // C: Form Pemesanan / Kontak Umum
      var inputs = form.querySelectorAll("input, textarea, select");
      var detail = [];
      inputs.forEach(function (input) {
        var label = input.getAttribute("data-label") || input.name || input.placeholder || "Keterangan";
        var val = input.value ? input.value.trim() : "";
        if (val && input.type !== "submit" && input.type !== "button") {
          detail.push("• " + label + " : " + val);
        }
      });
      var pesan =
        "Halo " + PROFIL_USAHA.nama + ", saya ingin memesan produk frozen food:\n\n" +
        (detail.length ? detail.join("\n") : "• Mohon info katalog & daftar harga terbaru.");
      window.open(
        "https://wa.me/" + PROFIL_USAHA.whatsapp + "?text=" + encodeURIComponent(pesan),
        "_blank",
        "noopener,noreferrer"
      );
    });
  });

  // 6. Smooth scroll untuk tautan internal
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
