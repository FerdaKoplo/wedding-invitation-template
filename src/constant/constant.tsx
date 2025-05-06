import { FaHome } from "react-icons/fa"
import { FaCalendarDays } from "react-icons/fa6"
import { GiLovers } from "react-icons/gi"
import { RiGalleryFill } from "react-icons/ri"

const BASE = import.meta.env.BASE_URL;

export const NavList = [
    {
        icon: <FaHome />,
        label: "Home",
        key: "home"
    },
    {
        icon: <GiLovers />,
        label: "Pengantar",
        key: "pengantar"
    },
    {
        icon: <FaCalendarDays />,
        label: "Wedding Event",
        key: "weddingevent"
    },
    {
        icon: <RiGalleryFill />,
        label: "Gallery",
        key: "gallery"
    },
]

export const PengantarList = [
    {
        image: `${BASE}assets/pengantar/pria.jpg`,
        name: "Rodrick",
        description: "Putra dari Bapak Veno dan Ibu Sunandar"
    },
    {
        image: `${BASE}assets/pengantar/wanita.jpg`,
        name: "Eleanor",
        description: "Putri dari Bapak Restu dan Ibu Kasih"
    },
]

export const CarouselList = [
    {
        image: `${BASE}assets/carousel/1.jpg`,
    },
    {
        image: `${BASE}assets/carousel/2.jpg`,
    },
    {
        image: `${BASE}assets/carousel/3.jpg`,
    },
    {
        image: `${BASE}assets/carousel/4.jpg`,
    },
]

export const WeddingEventList = [
    {
        title: "Akad Nikah",
        day: "Senin",
        tanggal: "20 Maret 2025",
        waktu: "16.00",
        tempat: "Rumah Mempelai Wanita",
        alamat: "Jl. Melati Indah No. 24 Kelurahan Sukarame, Kecamatan Bunga Raya Kota Seruni, Provinsi Jawa Barat",
        map: "https://maps.app.goo.gl/yZjgrsLjCozmMaok9"
    },
    {
        title: "Resepsi",
        day: "Minggu",
        tanggal: "10 April 2025",
        waktu: "12.30 s/d 14.30",
        tempat: "Gedung BLK",
        alamat: "Jl. Dukuh Menanggal III No.29, Dukuh Menanggal, Kec. Gayungan, Surabaya, Jawa Timur",
        map: "https://maps.app.goo.gl/Womf7fmq7Uc7G2LR8"
    }
]

export const GalleryList = [
    {
        image: `${BASE}assets/gallery/6.jpg`,
    },
    {
        image: `${BASE}assets/gallery/1.jpg`,
    },
    {
        image: `${BASE}assets/gallery/2.jpg`,
    },
    {
        image: `${BASE}assets/gallery/4.jpg`,
    },
    {
        image: `${BASE}assets/gallery/3.jpg`,
    },
    {
        image: `${BASE}assets/gallery/5.jpg`,
    },
]
