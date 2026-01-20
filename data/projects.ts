// Project data for MI2B PBL landing page
export interface Project {
    id: number;
    name: string;
    description: string;
    category: string;
    url: string;
    features: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        name: "HMJ Tekinfo",
        description: "Website resmi Himpunan Mahasiswa Jurusan Teknologi Informasi Politeknik Negeri Padang. Menampilkan visi misi, struktur organisasi, dan galeri kegiatan.",
        category: "Organisasi",
        url: "https://powderblue-capybara-381773.hostingersite.com/",
        features: ["Visi & Misi", "Struktur Organisasi", "Galeri Kegiatan", "Event TI"]
    },
    {
        id: 2,
        name: "Cafe Pojok Rumah",
        description: "Sistem pemesanan online untuk cafe dengan menu lengkap, fitur keranjang belanja, dan integrasi WhatsApp untuk pemesanan.",
        category: "E-Commerce",
        url: "https://seagreen-rhinoceros-316950.hostingersite.com/",
        features: ["Menu Online", "Keranjang Belanja", "Order via WhatsApp", "Google Maps"]
    },
    {
        id: 3,
        name: "Inventori Santan Ardafa",
        description: "Sistem inventori dan kasir modern untuk UMKM. Membantu pengelolaan stok dan penjualan secara efisien.",
        category: "Business System",
        url: "https://aqua-wildcat-237640.hostingersite.com/",
        features: ["Manajemen Stok", "Point of Sale", "Laporan Penjualan", "Dashboard Admin"]
    },
    {
        id: 4,
        name: "D'four Smart Laundry",
        description: "Layanan laundry profesional dengan sistem pemesanan online. Cuci reguler, express, dan layanan antar-jemput.",
        category: "Service System",
        url: "https://darkslategray-crow-930537.hostingersite.com/",
        features: ["Booking Online", "Tracking Order", "Payment Gateway", "Multi Layanan"]
    },
    {
        id: 5,
        name: "Peminjaman UKS PNP",
        description: "Platform peminjaman peralatan seni untuk mahasiswa PNP. Studio musik, lighting, hingga peralatan panggung.",
        category: "Management System",
        url: "https://slateblue-nightingale-637727.hostingersite.com/",
        features: ["Katalog Peralatan", "Sistem Booking", "Status Ketersediaan", "Riwayat Peminjaman"]
    },
    {
        id: 6,
        name: "Kost Putri 99",
        description: "Sistem pengaduan untuk penghuni kost. Mempermudah komunikasi antara penghuni dan pengelola kost.",
        category: "Management System",
        url: "https://paleturquoise-eel-163491.hostingersite.com/",
        features: ["Pengaduan Online", "Status Kamar", "Manajemen Penghuni", "Notifikasi"]
    }
];
