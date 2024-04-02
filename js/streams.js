const OcaLogo = ".././images/oca.png";
const capitalFMLogo = ".././images/radio-nig.png";

const streams = [
  {
    id: 1,
    name: "Freedom Radio",
    description:
      "In defense of the freedoms and rights of the Indigenous People of Biafra",
    stream: "https://14223.live.streamtheworld.com/SP_R3546957.mp3",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FhK2FIdmm7oIaF4DEXw0PM8ZgJDc_qsoNiKcSF_Ar0q4%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNBNkx5azhBb01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUNBNE1TdW5Rb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjA4NTYyODIwMDA.webp&w=1080&q=100",
    location: "London, UK",
  },
  {
    id: 2,
    name: "Oca Media",
    description:
      "I speak the language of the web, and I love bridging the gap between ideas and action",
    stream:
      "https://stream-058.zeno.fm/yi1znummsq7vv?zs=VinFI3kETOCktlxmbqjNuQ",
    imageUrl: OcaLogo,
    location: "Jos, Nigeria",
  },
  {
    id: 3,
    name: "Wazobia FM 95.1",
    description:
      "Wazobia FM, The People's Station, ranked #1 radio station all over Nigeria",
    stream: "https://stream.zeno.fm/uhwcx1ennfeuv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FhCYUT6gY3ZvAEeCMwpFUJBRK6wedtST_Tdy2027takc%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNBNExMd3pnZ01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUNBd042Zmxnb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjA4NTY0ODEwMDA.webp&w=1920&q=100",
    location: "Lagos, Nigeria",
  },
  {
    id: 4,
    name: "Arewa Radio 93.1FM",
    description: "",
    stream: "https://stream.zeno.fm/egqx0us8tc9uv",
    imageUrl: `https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2Fkh5fJPCm47wKXtEfuOyLCm-NOgi6yv37WoagTa5s_rU%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSURRM0l6OTZBc01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUR3NFkzb3Bna01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2MzcxNTczNzgwMDA.webp&w=1080&q=100`,
    location: "Kano, Nigeria",
  },
  {
    id: 5,
    name: "Liveway Radio Niigeria",
    description: "",
    stream:
      "https://stream-157.zeno.fm/mxkretn6n0quv?zs=z1leKOdHQEab2wOH4CUL4A",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FqO0vlwiQMn0cVlqPFTH2sBLgiS_2sqsyBsiPOAyBv88%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNndk1QSzVnb01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUNnZ3FUSzdRa01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjEwMDgyNDIwMDA.webp&w=1920&q=100",
    location: "Nigeria",
  },

  {
    id: 7,
    name: "Cool FM 96.9",
    description: "Cool FM, Your #1 Hit Music Station. ",
    stream: "https://stream.zeno.fm/gbpqc7umnfeuv",
    imageUrl: `https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FQ0won7-1J1KiFtJVGGwj7vDtwdqqpvSNL0GgsIQonAM%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNBNExMd3pnZ01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUNBd082Y213b01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjA4NTYzMDkwMDA.webp&w=1080&q=100`,
    location: "Lagos",
  },
  {
    id: 8,
    name: "Fresh 105.3 FM",
    description: "Fresh 105.3 FM is here to stay in Lagos Nigeria.",
    stream: "https://stream.zeno.fm/fgcaapesa78uv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FbkN-spriZjYbh7fTioZDL3d-SIQaYmxrby9DHeG_rlo%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUR3aElEam9nb01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUR3NlByMDFnb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjE5MDA1OTEwMDA.webp&w=1080&q=100",
    location: "Lagos",
  },

  {
    id: 9,
    name: "Wazobia FM 95.1",
    description: "Wazobia FM, The People's Station",
    stream: "https://stream.zeno.fm/uhwcx1ennfeuv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FhCYUT6gY3ZvAEeCMwpFUJBRK6wedtST_Tdy2027takc%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNBNExMd3pnZ01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUNBd042Zmxnb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjA4NTY0ODEwMDA.webp&w=1080&q=100",
    location: "Lagos",
  },

  {
    id: 10,
    name: "Wazobia FM 99.5",
    description: "Wazobia FM, The People's Station",
    stream: "https://stream.zeno.fm/ns1h3pennfeuv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FzLWwtYLISIFreDc_f5ejirAjpB1N4mKaK3W775Kc1Cs%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNBNExMd3pnZ01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUNBd0o3bmpRb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjE1MDcxMjIwMDA.webp&w=1080&q=100",
    location: "Abuja",
  },
  {
    id: 11,
    name: "NGM Radio",
    description:
      "We are the best in delivering inspirational music of Nigerian Gospel.",
    stream: "https://stream.zeno.fm/3fmqr74a7f8uv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2F0hETvek4kqS1o9d1nW0bkQwdvfvKIJb86Uh8myLCNA0%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSURRelp5a3FBZ01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSURRbmJIUi1Bb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjY4NjUyNDcwMDA.webp&w=1080&q=100",
    location: "Lagos",
  },
  {
    id: 12,
    name: "Raypower 100.5FM",
    description: "",
    stream: "https://stream.zeno.fm/zm1u715m0k0uv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FSRX4vRwNj_NW81gZ1QzAyAGlrZGrEwm--ErnFSDMMKQ%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNBZ0l1UnR3c01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSURRd2RlQTB3c01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjA4NTQzMjUwMDA.webp&w=1080&q=100",
    location: "Abuja",
  },

  {
    id: 13,
    name: "Rhythm 94.7FM",
    description: "Silverbird’s Rhythm 94.7FM- news, entertainment, sports, etc",
    stream: "https://stream.zeno.fm/av5gn0a5138uv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2Fb8QL42AqDdhT1NzjJZLGqe77XKSEw0A7R_LmaBzZgqQ%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUN3MjhXa2dnb01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUN3bTdIaThnb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjE4NTQwODkwMDA.webp&w=1080&q=100",
    location: "Abuja",
  },
  {
    id: 14,
    name: "Liberty Radio",
    description: "Voice For All! / Tashar 'Yanci!",
    stream: "https://stream.zeno.fm/ebt2pkyfxuquv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FuGnlc0xQn0WiftbG8J1ChXHoGWp0jJkxSt7El9mWO7s%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNBME1Tdmd3b01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUNBZ0lqb2xBb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjE5NjI3NjgwMDA.webp&w=1080&q=100",
    location: "Abuja",
  },
  {
    id: 15,
    name: "Cool FM 96.9",
    description: "",
    stream: "https://stream.zeno.fm/smwgrptmnfeuv",
    imageUrl:
      "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2F-JaPPkinxyYtVi4CMnJau42PhLYWNIJdqiY7LeG_CZc%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUNBNExMd3pnZ01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUNBd0s2amdnb01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NjE1MDgyODQwMDA.webp&w=1080&q=100",
    location: "Abuja",
  },
  {
    id: 16,
    name: "Radio Nig Capital FM",
    description: "",
    stream: "https://radionghq.radioca.st/;/'",
    imageUrl: capitalFMLogo,
    location: "Abuja",
  },
  {
    id: 17,
    name: "Radio Nig Pyramid FM",
    description: "",
    stream: "https://eu8.fastcast4u.com/proxy/pyramidfmkn?mp=/1",
    imageUrl: capitalFMLogo,
    location: "Kano",
  },
  {
    id: 18,
    name: "Radio Nig Metro FM",
    description: "",
    stream: "https://go.webgateready.com/metrofm/radio.mp3",
    imageUrl: capitalFMLogo,
    location: "Lagos",
  },
  {
    id: 19,
    name: "Radio Nig Bond FM",
    description: "",
    stream: "https://go.webgateready.com/bondfm/radio.mp3",
    imageUrl: capitalFMLogo,
    location: "Lagos",
  },
  {
    id: 20,
    name: "Radio Nig BondOne",
    description: "",
    stream: "https://go.webgateready.com/radioonefm/radio.mp3",
    imageUrl: capitalFMLogo,
    location: "Lagos",
  },
];

export default streams;
