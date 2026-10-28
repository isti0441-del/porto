# Dokumentasi Desain & Panduan Pembuatan di Figma
## Portofolio Web Developer Istiqomah

Dokumentasi ini dibuat khusus sebagai panduan komprehensif bagi UI/UX Designer dan Creative Developer untuk mereplikasi, membangun, atau mengekspor sistem desain portofolio **Istiqomah** ke dalam **Figma**.

---

## 1. Spesifikasi Palet Warna (Color Styles & Variables)

Buat *Color Variables* atau *Color Styles* di Figma dengan token berikut:

| Token Name | Hex Code | Opacity | Deskripsi / Penggunaan |
| :--- | :--- | :--- | :--- |
| **`bg/canvas-mint`** | `#A8E088` | 100% | Warna dasar kanvas / background utama |
| **`brand/magenta-primary`** | `#DB5184` | 100% | Tombol CTA utama, teks sorotan, border aktif |
| **`brand/magenta-hover`** | `#C43F71` | 100% | State hover tombol primer |
| **`brand/magenta-soft`** | `#DB5184` | 10%–15% | Background badge, glow, dan aksen halus |
| **`surface/glass-base`** | `#FFFFFF` | 40%–55% | Fill kartu glassmorphism |
| **`surface/glass-hover`** | `#FFFFFF` | 70% | State hover kartu glassmorphism |
| **`border/glass-stroke`** | `#FFFFFF` | 65%–80% | Border tipis kartu glassmorphism |
| **`border/magenta-stroke`**| `#DB5184` | 35%–50% | Border aktif / fokus |
| **`status/emerald-dot`** | `#10B981` | 100% | Indikator titik "Available for Projects" |
| **`text/primary`** | `#0F172A` | 100% | Heading dan teks utama (Slate 900) |
| **`text/secondary`** | `#334155` | 100% | Teks deskripsi / paragraf (Slate 700) |
| **`text/muted`** | `#64748B` | 100% | Sub-label dan metadata (Slate 500) |
| **`text/white`** | `#FFFFFF` | 100% | Teks pada tombol `#DB5184` dan overlay gelap |

---

## 2. Sistem Tipografi (Typography Styles)

Import Google Fonts berikut di Figma:
- **Heading / Display (Heritage Legacy)**: `Cinzel` & `Syne`
- **Body & Controls**: `Plus Jakarta Sans`
- **Data & Metadata**: `JetBrains Mono`

| Style Name | Font Family | Weight | Size | Line Height | Tracking | Penggunaan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display/Hero** | `Cinzel` | Bold (700) | 56px – 64px | 115% | -0.02em | Judul utama Hero |
| **Display/Coming Soon** | `Cinzel` | Black (900) | 72px – 88px | 100% | -0.03em | Teks melayang Coming Soon |
| **Heading/H1** | `Cinzel` | Bold (700) | 36px – 44px | 120% | -0.01em | Judul section / halaman |
| **Heading/H2** | `Syne` | Bold (700) | 24px – 28px | 130% | 0em | Judul kartu & kartu profil |
| **Heading/H3** | `Syne` | SemiBold (600)| 18px – 20px | 140% | 0em | Sub-judul & fitur |
| **Body/Large** | `Plus Jakarta Sans` | Regular (400) | 18px | 160% | 0em | Lead paragraph Hero |
| **Body/Regular**| `Plus Jakarta Sans` | Regular (400) | 15px – 16px | 155% | 0em | Deskripsi & biografi |
| **Body/Medium** | `Plus Jakarta Sans` | Medium (500) | 14px | 150% | 0em | Teks kartu & opsi filter |
| **Button/Primary**| `Plus Jakarta Sans`| SemiBold (600)| 14px | 100% | 0.01em | Label tombol primer |
| **Button/Small** | `Plus Jakarta Sans`| SemiBold (600)| 12px | 100% | 0.01em | Nav item & filter tab |
| **Mono/Badge** | `JetBrains Mono` | Medium (500) | 11px – 12px | 120% | 0.05em | Kategori & koordinat lokasi |

---

## 3. Efek Glassmorphism di Figma (Effect Styles)

Buat *Effect Styles* dengan konfigurasi berikut:

### A. Style: `Glassmorphism/Card-Default`
- **Fill**: Solid `#FFFFFF`, Opacity `45%`
- **Stroke**: 
  - Color: `#FFFFFF`, Opacity `70%`
  - Width: `1px`, Align: `Inside`
- **Corner Radius**: `24px` (`rounded-3xl`)
- **Effects**:
  1. **Background Blur**: `16px`
  2. **Drop Shadow**:
     - X: `0`, Y: `10`
     - Blur: `30px`, Spread: `-5px`
     - Color: `#173A16` (Opacity `8%`)
  3. **Inner Shadow** (Highlight):
     - X: `0`, Y: `0`
     - Blur: `0`, Spread: `1px`
     - Color: `#FFFFFF` (Opacity `30%`)

### B. Style: `Glassmorphism/Card-Hover`
- **Fill**: Solid `#FFFFFF`, Opacity `65%`
- **Stroke**: Color `#DB5184`, Opacity `35%`, Width `1.5px`
- **Effects**:
  1. **Background Blur**: `20px`
  2. **Drop Shadow**: X: `0`, Y: `20`, Blur: `40px`, Spread: `-10px`, Color `#DB5184` (Opacity `15%`)

### C. Style: `Glow/Ambient-Blob`
- **Ellipse**: W: `500px`, H: `500px`
- **Fill**: Linear Gradient dari `#DB5184` (Opacity `25%`) ke `#A8E088` (Opacity `0%`)
- **Effect**: **Layer Blur**: `100px`

---

## 4. Struktur Frame & Auto-Layout Figma

Ukuran Canvas Standar Desktop: **1440px** (Lebar) × **Auto/Scroll** (Tinggi).  
Container Max Width: **1280px** dengan Padding Kiri-Kanan: **32px** (Auto-Layout Center).

```
Desktop 1440 (Frame)
├── 0. Background Canvas (Fixed layer di belakang)
│   ├── Rectangle (#A8E088, 100%)
│   ├── Blob Top-Left (Blur 100px, White 40%)
│   ├── Blob Top-Right (Blur 100px, Magenta 25%)
│   └── Vector Wave Lines (Stroke 1px, Dark Slate, Opacity 14%)
│
├── 1. Top Navbar (Frame Auto-Layout Horizontal, W: 1440, H: 72, Padding: 16 64)
│   ├── Left Zone: Wordmark "ISTIQOMAH" (Cinzel Bold 22px, Slate 900)
│   ├── Center Zone: Nav Tabs Frame (Auto-Layout Horizontal, Gap: 8, Padding: 6 8, Radius: 16, Glass Background)
│   │   ├── Tab: Beranda (Active: Fill #DB5184, Text White)
│   │   ├── Tab: Tentang (Inactive: Text Slate 700)
│   │   ├── Tab: Keahlian
│   │   ├── Tab: Proyek
│   │   ├── Tab: Layanan
│   │   └── Tab: Kontak
│   └── Right Zone: Button "Mulai Diskusi" (Fill Slate 900, Text White, Radius: 12)
│
├── 2. Hero Section Frame (W: 1280, Auto-Layout Vertical, Gap: 48, Padding: 120 0 80 0)
│   ├── Two-Column Split Frame (Auto-Layout Horizontal, Gap: 48, Space Between)
│   │   ├── Left Column (W: 720, Auto-Layout Vertical, Gap: 24)
│   │   │   ├── Status Badge Frame (Auto-Layout Horizontal, Gap: 8, Radius: 999, Glass Fill)
│   │   │   │   ├── Pulsing Green Dot (Ellipse 10x10, #10B981)
│   │   │   │   └── Text: "Available for Projects · Q4 2026"
│   │   │   ├── Hero Title: "Membangun Pengalaman Web yang Hidup & Presisi"
│   │   │   ├── Hero Description Text
│   │   │   ├── Location & Tech Tags Frame (Gap: 12)
│   │   │   │   ├── Tag 1: [MapPin] Plered, Jawa Barat, Indonesia
│   │   │   │   └── Tag 2: [Code] React · TypeScript · Motion
│   │   │   └── Action Buttons Frame (Gap: 16)
│   │   │       ├── Primary Button: "Mulai Kolaborasi" (Fill #DB5184, Radius: 14)
│   │   │       └── Glass Button: "Jelajahi Karya" (Glass Fill, Radius: 14)
│   │   │
│   │   └── Right Column (W: 420, Auto-Layout Center)
│   │       └── 3D Portrait Glass Card (W: 380, H: 475, Radius: 28, Glass Effect)
│   │           ├── Profile Photo Mask (Radius: 20, Fill image/istiqomah_portrait)
│   │           └── Floating Bio Glass Card (W: 340, Radius: 16, Bottom Anchor)
│   │
│   └── KPI Strip Row (W: 1280, Auto-Layout Horizontal, Gap: 32, Border-Top: Slate 10%)
│       ├── Stat 1: 100% Custom Frontend Code
│       ├── Stat 2: 60fps Micro-interactions
│       ├── Stat 3: WCAG AA Accessibility Standard
│       └── Stat 4: Fast Delivery & Response
│
├── 3. Halaman "Proyek" (Floating Coming Soon Centerpiece)
│   └── Section Container (W: 1280, Center Aligned, Min-H: 700)
│       ├── Header: "03. PORTOFOLIO & EKSPLORASI DIGITAL"
│       └── Floating Glass Stage Card (W: 880, Radius: 32, Glass Effect, Border: 2px White/80)
│           ├── Status Pill: "UNDER ACTIVE CRAFTING" (#DB5184 dot)
│           ├── Floating Title: "COMING SOON ✦" (Cinzel Black 80px, #0F172A & #DB5184)
│           ├── Description Paragraph
│           ├── Floating Tags: [Web Apps] [Design Systems] [Creative Web]
│           └── Early Notification Box (Input Frame + Button "Beri Tahu Saya")
│
├── 4. Halaman "Tentang" (Biografi & Geografi)
│   └── Split Grid: Bio Narrative Card (7 cols) + Geographic Card Plered (5 cols with Local Time WIB)
│
├── 5. Halaman "Keahlian" (Arsenal Teknologi)
│   └── Category Filter Bar + 12 Tech Cards (4 Columns × 3 Rows, Radius: 20)
│
├── 6. Halaman "Layanan" (4 Pilar Kapabilitas Industri)
│   └── 4-Column Bento Cards (Arsitektur, Motion, Glassmorphism, WCAG AA)
│
├── 7. Halaman "Kontak"
│   └── Two-Column Split: Direct Email & Instagram Cards (5 cols) + Form Kirim Pesan (7 cols)
│
└── 8. Footer (W: 1440, Glass Background, Padding: 48 64)
    ├── Brand Wordmark "ISTIQOMAH"
    ├── Quick Page Nav Links
    └── Copyright © 2026
```

---

## 5. Komponen Master & Varian di Figma (Component Set)

Buat *Component Set* untuk elemen yang sering digunakan:

### 1. `Button/Main`
- **Properties**:
  - `Variant`: `Primary` (#DB5184), `Secondary` (Slate 900), `Glass` (Translucent White)
  - `State`: `Default`, `Hover`, `Pressed`
  - `Size`: `Medium` (H: 44px, Padding: 12 24), `Small` (H: 36px, Padding: 8 16)
  - `Icon`: `None`, `Right-Arrow`, `Left-Icon`

### 2. `Card/Glass`
- **Properties**:
  - `Elevation`: `Base`, `Hover-Glow`
  - `Padding`: `Compact` (20px), `Spacious` (32px)
  - `Border`: `Subtle White` (1px), `Active Accent` (1.5px)

### 3. `Badge/Status`
- **Variants**:
  - `Available`: Background `White/70`, Border `White/80`, Dot `#10B981` (dengan outer pulse circle)
  - `Coming-Soon`: Background `#DB5184/15`, Text `#DB5184`, Dot `#DB5184`
  - `Tech-Tag`: Background `White/60`, Text `Slate 700`, Radius `8px`

---

## 6. Token Format JSON (Import ke Token Studio for Figma)

Bagi pengguna plugin **Tokens Studio for Figma** atau **Style Dictionary**, gunakan JSON berikut:

```json
{
  "color": {
    "canvas": { "value": "#A8E088", "type": "color" },
    "brand": {
      "primary": { "value": "#DB5184", "type": "color" },
      "hover": { "value": "#C43F71", "type": "color" },
      "soft": { "value": "rgba(219, 81, 132, 0.12)", "type": "color" }
    },
    "glass": {
      "surface": { "value": "rgba(255, 255, 255, 0.50)", "type": "color" },
      "surfaceHover": { "value": "rgba(255, 255, 255, 0.70)", "type": "color" },
      "stroke": { "value": "rgba(255, 255, 255, 0.75)", "type": "color" }
    },
    "text": {
      "heading": { "value": "#0F172A", "type": "color" },
      "body": { "value": "#334155", "type": "color" },
      "muted": { "value": "#64748B", "type": "color" }
    }
  },
  "borderRadius": {
    "sm": { "value": "8px", "type": "borderRadius" },
    "md": { "value": "12px", "type": "borderRadius" },
    "lg": { "value": "16px", "type": "borderRadius" },
    "xl": { "value": "24px", "type": "borderRadius" },
    "pill": { "value": "9999px", "type": "borderRadius" }
  },
  "fontFamilies": {
    "heading": { "value": "Cinzel", "type": "fontFamilies" },
    "display": { "value": "Syne", "type": "fontFamilies" },
    "body": { "value": "Plus Jakarta Sans", "type": "fontFamilies" },
    "mono": { "value": "JetBrains Mono", "type": "fontFamilies" }
  }
}
```

---

## 7. Rekomendasi Plugin Figma untuk Alur Kerja Cepat

1. **HTML to Design / Anima**: Untuk mengimpor URL aplikasi secara langsung menjadi layer Figma yang dapat diedit (*editable vectors & auto-layout*).
2. **Tokens Studio for Figma**: Untuk menyinkronkan token warna, tipografi, dan spasi secara otomatis.
3. **SmoothShadow**: Untuk membuat bayangan drop-shadow bertingkat yang halus (*layered ambient shadow*).
4. **Noise & Texture**: Untuk menambahkan tekstur frosted grain halus di atas lapisan glassmorphism.
