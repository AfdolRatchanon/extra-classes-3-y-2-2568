# 📌 วันที่ 2 — Visual Design & CSS ขั้นสูง

> **เป้าหมาย:** เรียนรู้เทคนิค CSS ที่ทำให้เว็บสวยขึ้น ได้แก่ Google Fonts, CSS Variables, Flexbox layout จริงๆ และ Hover/Transition — แล้ว Gen Portfolio ใหม่ที่มีดีไซน์โดดเด่นกว่าวันที่ 1

---

## ⏱️ ตารางเวลา

| เวลา | กิจกรรม |
|---|---|
| 20 นาที | Theory — Visual Design & CSS |
| 15 นาที | Prompt Study — การระบุสไตล์ใน Prompt |
| 45 นาที | Workshop — ฝึก 5 Prompts |
| 10 นาที | ส่งงาน |

---

## 📖 ทฤษฎี — Visual Design & CSS

### 1. Google Fonts — ฟอนต์ภาษาไทยบนเว็บ

#### ฟอนต์ default ของเบราว์เซอร์คืออะไร?

เมื่อไม่ได้กำหนดฟอนต์ เบราว์เซอร์จะใช้ฟอนต์ที่ติดตั้งในเครื่องของผู้ใช้ ซึ่งแต่ละคนจะเห็นไม่เหมือนกัน และมักดูไม่สวย **Google Fonts** คือบริการฟรีของ Google ที่ให้ใช้ฟอนต์สวยๆ ได้ทันทีโดยไม่ต้องติดตั้ง

#### วิธีหาฟอนต์ที่ Google Fonts

1. เปิด **[fonts.google.com](https://fonts.google.com)**
2. ช่องค้นหาบนสุด — พิมพ์ชื่อฟอนต์ เช่น `Sarabun`
3. คลิกฟอนต์ที่ต้องการ → เลือก **weight** (ความหนา) ที่ต้องการ
4. คลิกปุ่ม **"Get embed code"** → เลือก `<link>` → คัดลอก code ไปใส่ใน `<head>`

::: info ฟอนต์ภาษาไทยที่นิยม

| ฟอนต์ | สไตล์ | เหมาะกับ |
|---|---|---|
| `Sarabun` | เรียบร้อย บาง อ่านง่าย | เนื้อหาทั่วไป ทางการ |
| `Kanit` | ทันสมัย หนักแน่น มีน้ำหนัก | หัวข้อ Portfolio มืออาชีพ |
| `Prompt` | กลมเกลี้ยง เป็นมิตร | เว็บน่ารัก ทั่วไป |
| `Mitr` | เบา สบายตา ดูสะอาด | Minimalist, Portfolio |
| `Noto Sans Thai` | อ่านง่ายมาก รองรับทุก device | เว็บที่ต้องการ accessibility |
:::

#### วิธีใช้ฟอนต์ในโค้ด

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- ① ใส่ link ฟอนต์ก่อน <style> เสมอ -->
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;700&display=swap" rel="stylesheet">

  <style>
    /* ② เรียกใช้ใน CSS ด้วย font-family */
    body {
      font-family: 'Sarabun', sans-serif; /* 'Sarabun' ต้องตรงกับชื่อใน link */
    }

    h1 {
      font-weight: 700;   /* หนา */
    }

    p {
      font-weight: 300;   /* บาง เบา */
    }
  </style>
</head>
```

#### ความหมายของ weight ใน URL

```
family=Sarabun:wght@300;400;700
                        ↑   ↑   ↑
                       บาง ปกติ หนา
```

| weight | ลักษณะ |
|---|---|
| 300 | บาง เบา (Light) |
| 400 | ปกติ (Regular) |
| 600 | กึ่งหนา (Semi-bold) |
| 700 | หนา (Bold) |

::: tip บอกใน Prompt ว่า
`ใช้ฟอนต์ Kanit จาก Google Fonts น้ำหนัก 400 และ 700` — AI จะใส่ link และ font-family ให้อัตโนมัติ
:::

---

### 2. CSS Variables — ระบบธีมสีที่ปรับได้

#### ปัญหาก่อนมี CSS Variables

ถ้าใช้สีตรงๆ ในโค้ด แล้วอยากเปลี่ยนสีหลักทั้งเว็บ ต้องไล่แก้ทีละจุด:

```css
/* แบบเก่า — ถ้าอยากเปลี่ยน #6c63ff ต้องหาและแก้ทุกจุด */
h1       { color: #6c63ff; }
.btn     { background: #6c63ff; }
.badge   { border-color: #6c63ff; }
.active  { color: #6c63ff; }
```

#### วิธีใช้ CSS Variables

```css
/* ① ประกาศตัวแปรใน :root (ใช้ได้ทั้งหน้า) */
:root {
  --primary:   #6c63ff;   /* สีหลัก */
  --bg:        #ffffff;   /* สีพื้นหลัง */
  --text:      #333333;   /* สีตัวอักษร */
  --card-bg:   #f8f8f8;   /* สีพื้นหลัง card */
  --border:    #e0e0e0;   /* สีเส้นขอบ */
}

/* ② เรียกใช้ด้วย var(--ชื่อตัวแปร) */
body         { background: var(--bg);      color: var(--text); }
h1           { color: var(--primary); }
.card        { background: var(--card-bg); border: 1px solid var(--border); }
.badge       { border: 2px solid var(--primary); color: var(--primary); }
```

ตอนนี้ถ้าจะเปลี่ยนสีหลักทั้งเว็บ แก้แค่ `--primary` ใน `:root` จุดเดียวพอ

#### ประยุกต์: สร้าง Light Mode / Dark Mode

```css
/* Light Mode (ค่า default) */
:root {
  --bg:        #ffffff;
  --card-bg:   #f5f5f5;
  --text:      #222222;
  --primary:   #6c63ff;
}

/* Dark Mode — override ค่าเดิมทั้งหมด */
body.dark-mode {
  --bg:        #1a1a2e;
  --card-bg:   #16213e;
  --text:      #e0e0e0;
  --primary:   #a29bfe;
}
```

```html
<!-- ปุ่มสลับธีม -->
<button onclick="document.body.classList.toggle('dark-mode')">
  🌙 สลับธีม
</button>
```

::: info วิธีทำงาน
- ปกติ `body` ใช้ค่าจาก `:root` → Light Mode
- เมื่อกดปุ่ม → `body` ได้ class `dark-mode` → CSS ใน `body.dark-mode` override ค่าสีทั้งหมด
- เพราะ element ทุกอันใช้ `var(--bg)` แทนสีตรงๆ → ทั้งเว็บเปลี่ยนสีทันที
:::

::: warning สังเกตในโค้ดที่ AI Gen ให้
ถ้า Prompt บอกว่า "ใช้ CSS Variables" ให้ค้นหาคำว่า `:root` ในโค้ด — ถ้าเจอแสดงว่า AI ใช้ CSS Variables แล้ว
:::

---

### 3. Flexbox — จัดวาง Layout อย่างละเอียด

#### Flexbox คืออะไร?

Flexbox คือระบบ Layout ของ CSS ที่ช่วยจัดวาง element ลูกๆ ภายใน container ได้อย่างยืดหยุ่น ก่อนมี Flexbox การจัดของให้อยู่กลางหน้าจอทำได้ยากมาก

**แนวคิดหลัก:**
```
Container (display: flex)
├── Item 1
├── Item 2
└── Item 3
```

เมื่อ container มี `display: flex` → item ลูกทั้งหมดจะเรียงตาม **Main Axis** (แนวหลัก)

#### Properties ของ Container

```css
.container {
  display: flex;                    /* เปิดใช้ Flexbox */

  /* ทิศทางการเรียง */
  flex-direction: row;              /* → แนวนอน (default) */
  flex-direction: column;           /* ↓ แนวตั้ง */
  flex-direction: row-reverse;      /* ← แนวนอนกลับหัว */

  /* การจัดตำแหน่งบน Main Axis (แนวหลัก) */
  justify-content: flex-start;      /* ชิดซ้าย (default) */
  justify-content: center;          /* กลาง */
  justify-content: flex-end;        /* ชิดขวา */
  justify-content: space-between;   /* กระจาย ชิดขอบ */
  justify-content: space-around;    /* กระจาย มีขอบ */

  /* การจัดตำแหน่งบน Cross Axis (แนวตั้งฉาก) */
  align-items: stretch;             /* ยืดเต็มความสูง (default) */
  align-items: center;              /* กลางแนวตั้ง */
  align-items: flex-start;          /* บน */
  align-items: flex-end;            /* ล่าง */

  /* การขึ้นบรรทัดใหม่ */
  flex-wrap: nowrap;                /* ไม่ขึ้นบรรทัด (default) */
  flex-wrap: wrap;                  /* ขึ้นบรรทัดใหม่อัตโนมัติ */

  /* ระยะห่างระหว่าง item */
  gap: 16px;                        /* ช่องว่างทุกทิศ */
  gap: 8px 16px;                    /* row-gap column-gap */
}
```

#### ตัวอย่างการใช้งานจริงใน Portfolio

```css
/* ① Badge ทักษะเรียงแนวนอน และขึ้นบรรทัดอัตโนมัติ */
.skills-container {
  display: flex;
  flex-wrap: wrap;    /* ถ้าพื้นที่ไม่พอ → ขึ้นบรรทัดใหม่ */
  gap: 8px;
}

/* ② Header: รูปโปรไฟล์ + ชื่อ อยู่ข้างกัน จัดกลางแนวตั้ง */
.header {
  display: flex;
  flex-direction: row;
  align-items: center;    /* รูปและชื่ออยู่กลางแนวตั้งเสมอ */
  gap: 20px;
}

/* ③ Section หัวข้อ + icon อยู่ข้างกัน */
.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ④ ปุ่ม Social Media เรียงกัน จัดกลาง */
.social-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
```

#### ภาพรวม justify-content

```
flex-start:      [A] [B] [C] · · · · ·
center:          · · · [A] [B] [C] · · ·
flex-end:        · · · · · [A] [B] [C]
space-between:   [A] · · · [B] · · · [C]
space-around:    · [A] · · [B] · · [C] ·
```

::: tip เคล็ดลับ
บอกใน Prompt ว่า `badge ทักษะจัดด้วย Flexbox` หรือ `header รูปและชื่ออยู่ข้างกัน` — AI จะเลือก Flexbox ให้เองโดยอัตโนมัติ
:::

---

### 4. CSS Transition & Hover Effect

Transition ทำให้การเปลี่ยนแปลงเกิดขึ้นแบบ smooth ไม่กระตุก

```css
/* รูปแบบ: transition: property duration timing-function */
/*                      ↑สิ่งที่เปลี่ยน ↑ความเร็ว  ↑ลักษณะการเปลี่ยน */

transition: all 0.3s ease;              /* เปลี่ยนทุก property */
transition: background 0.2s linear;     /* เปลี่ยนแค่สีพื้นหลัง */
transition: transform 0.3s ease, box-shadow 0.3s ease;  /* หลาย property */
```

```css
/* ตัวอย่าง: Card ที่ลอยขึ้นเมื่อ hover */
.card {
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);              /* ลอยขึ้น 4px */
  box-shadow: 0 8px 24px rgba(0,0,0,0.15); /* เงาชัดขึ้น */
}

/* Badge ที่เปลี่ยนสีเมื่อ hover */
.badge {
  transition: all 0.2s ease;
}

.badge:hover {
  background: var(--primary);
  color: white;
  cursor: pointer;
}
```

::: tip บอกใน Prompt ว่า
`card ลอยขึ้นเมื่อแตะ` หรือ `มี hover effect ที่ badge` — AI จะใส่ transition ให้
:::

---

## 🧠 Prompt Study — การระบุสไตล์ใน Prompt

### วันที่ 1 vs วันที่ 2 — ต่างกันอย่างไร?

| วันที่ 1 — บอกโครงสร้าง | วันที่ 2 — บอกสไตล์ |
|---|---|
| "มี Section: Header, เกี่ยวกับฉัน, ทักษะ" | "card มี shadow, hover ลอยขึ้น" |
| "ธีมสีฟ้า-ขาว" | "ธีมสี gradient ม่วง-ชมพู, ใช้ CSS Variables" |
| "ข้อความภาษาไทย" | "ฟอนต์ Kanit จาก Google Fonts" |

### คำศัพท์สไตล์ที่ใช้ใน Prompt ได้เลย

```
minimalist      → เรียบง่าย สีน้อย whitespace เยอะ
glassmorphism   → กระจกใส มี backdrop-filter blur
dark mode       → พื้นหลังมืด ตัวอักษรสว่าง
gradient        → ไล่สี
neumorphism     → นูนออกมาจากพื้นหลัง เหมือน clay
card layout     → จัดเนื้อหาเป็น card มี shadow
```

::: warning สังเกต
วันนี้โจทย์เปลี่ยนจาก "สร้างอะไร" → "ดีไซน์ยังไง"
:::

---

## ✋ Workshop — ฝึก 5 Prompts

> **หมายเหตุ:** วันนี้ Gen โค้ดใหม่ทั้งหมด — แต่ละ Prompt เน้นเทคนิค CSS ที่ต่างกัน

---

### 🟢 Prompt 1 — Dark Mode Portfolio พร้อม CSS Variables
**(อาจารย์เตรียมให้ — ใช้ได้เลย)**

::: info คัดลอก Prompt นี้ไปวางใน Gemini
```
คุณคือนักพัฒนาเว็บมืออาชีพ สร้างหน้าเว็บ Portfolio ส่วนตัวโดยใช้ HTML และ Internal CSS เท่านั้น ให้ใช้ Dark Mode (พื้นหลังมืด ตัวอักษรสว่าง) และใช้ CSS Variables สำหรับสีทั้งหมด โดยมี: 1) Header ชื่อ+ตำแหน่ง 2) เกี่ยวกับฉัน 3) ทักษะ (badge) 4) ความสนใจ ใช้ฟอนต์ Kanit จาก Google Fonts card มี border-radius และ subtle glow ข้อความภาษาไทย รองรับมือถือ
```
:::

**หลังรัน สังเกตดูว่า:**
- [ ] พื้นหลังเป็นสีมืดไหม?
- [ ] มี `:root { --variable }` ในโค้ดไหม?
- [ ] ฟอนต์เปลี่ยนเป็น Kanit ไหม?
- [ ] ต่างจาก Prompt วันที่ 1 อย่างไร? `_______________`

---

### 🟢 Prompt 2 — Glassmorphism Portfolio
**(อาจารย์เตรียมให้ — ใช้ได้เลย)**

::: info คัดลอก Prompt นี้ไปวางใน Gemini
```
คุณคือนักพัฒนาเว็บมืออาชีพ สร้าง Portfolio ใช้ HTML และ Internal CSS เท่านั้น สไตล์ Glassmorphism: พื้นหลัง gradient ม่วง-ชมพู, card เป็นกระจกใส (background: rgba + backdrop-filter: blur) มี: 1) Header 2) เกี่ยวกับฉัน 3) ทักษะ (badge) ใช้ฟอนต์ Sarabun จาก Google Fonts ข้อความภาษาไทย รองรับมือถือ
```
:::

**หลังรัน ค้นหาในโค้ดว่ามี:**
- [ ] `backdrop-filter: blur` ไหม?
- [ ] `rgba` ที่ background ของ card ไหม?
- [ ] พื้นหลังเป็น gradient ไหม?

::: tip อยากรู้ว่า Glassmorphism คืออะไร?
ลองค้นหา "glassmorphism CSS" ใน Google แล้วดูตัวอย่างครับ
:::

---

### 🟡 Prompt 3 — เพิ่ม Hover Effect และ Transition
**(ดัดแปลงจาก Prompt 1 — เพิ่ม interaction)**

นำ **Prompt 1** มาแล้ว **เพิ่มเงื่อนไข Hover** เข้าไปต่อท้าย:

::: tip เพิ่มข้อความต่อท้าย Prompt 1 แบบนี้
```
...และเพิ่ม hover effect: card ลอยขึ้นเล็กน้อยเมื่อแตะ (transform translateY) badge เปลี่ยนสีเมื่อ hover ทุก transition ใช้เวลา 0.3s ease
```
:::

**บันทึกผล:**
- Hover effect ที่ card: `_______________`
- Hover effect ที่ badge: `_______________`
- ดูโค้ดส่วน `:hover` — มีกี่จุด? `_______________`

---

### 🟠 Prompt 4 — ออกแบบธีมสีด้วย CSS Variables + ข้อมูลจริง
**(กึ่งอิสระ — กำหนด Color Palette เอง)**

เติมข้อมูลในช่องว่างแล้วนำไปวางใน Gemini:

::: tip แก้ข้อมูลแล้วนำไปวางใน Gemini
```
คุณคือนักพัฒนาเว็บมืออาชีพ สร้าง Portfolio ของ [ชื่อ-นามสกุล] นักเรียนสาขา [สาขา] โดยใช้ HTML และ Internal CSS เท่านั้น ใช้ CSS Variables สำหรับสี โดยกำหนด --primary: [สีหลักที่ชอบ], --bg: [สีพื้นหลัง], --text: [สีตัวอักษร] มี: 1) Header: [ชื่อ] [สาขา] 2) เกี่ยวกับฉัน: [แนะนำตัว 2 ประโยค] 3) ทักษะ: [5 ทักษะ] (badge พร้อม hover) 4) เป้าหมาย: [3 ข้อ] ใช้ฟอนต์ [ฟอนต์ที่ชอบ] จาก Google Fonts card มี hover effect รองรับมือถือ
```
:::

**Color Palette ที่ฉันเลือก:**
- `--primary`: `_______________`
- `--bg`: `_______________`
- `--text`: `_______________`

---

### 🔴 Prompt 5 — Portfolio ดีไซน์อิสระ พร้อมสไตล์ที่ชัดเจน
**(อิสระ — เลือก Visual Style เองทั้งหมด)**

วันนี้ต้องเลือก **1 สไตล์** แล้วเขียน Prompt ให้ครบ

::: warning เงื่อนไขบังคับ
Prompt ต้องระบุ:
- ✅ สไตล์ที่ชัดเจน (เลือก 1: minimalist / dark mode / glassmorphism / gradient / อื่นๆ)
- ✅ ฟอนต์จาก Google Fonts
- ✅ CSS Variables
- ✅ Hover effect อย่างน้อย 1 จุด
- ✅ ข้อมูลจริงของตนเอง
:::

**สไตล์ที่ฉันเลือก:** `_______________`

**Prompt ของฉัน:**
```
(เขียนเอง)
```

---

## 📤 การส่งงานวันที่ 2

ส่งใน **Google Classroom** ภายในวันนี้:

::: danger ต้องส่ง 2 อย่าง
1. **Source Code** — คัดลอกโค้ดจาก Prompt 5 (หรือ Prompt ที่ดีที่สุด)
2. **ภาพการแสดงผล** — ถ่ายภาพหน้าจอจาก W3Schools หรือ Gemini
:::

**Checklist ก่อนส่ง:**
- [ ] โค้ดรันได้ ไม่ error
- [ ] ดีไซน์ต่างจากวันที่ 1 อย่างชัดเจน
- [ ] มี CSS Variables (`:root`) ในโค้ด
- [ ] มีฟอนต์จาก Google Fonts
- [ ] ข้อมูลเป็นของจริง ไม่มี Lorem Ipsum
- [ ] แสดงผลได้ดีบนหน้าจอมือถือ
