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

ค่า default ของเบราว์เซอร์คือฟอนต์ที่ดูไม่สวย การใช้ Google Fonts ทำให้ข้อความภาษาไทยอ่านง่ายและสวยงามขึ้นมาก

```html
<head>
  <!-- เพิ่มบรรทัดนี้ใน <head> -->
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Sarabun', sans-serif;
    }
  </style>
</head>
```

**ฟอนต์ภาษาไทยที่นิยม:**

| ฟอนต์ | สไตล์ |
|---|---|
| `Sarabun` | เรียบร้อย อ่านง่าย |
| `Kanit` | ทันสมัย หนักแน่น |
| `Prompt` | กลมเกลี้ยง เป็นมิตร |
| `Mitr` | เบา สบายตา |

::: tip บอกใน Prompt ว่า
`ใช้ฟอนต์ [ชื่อฟอนต์] จาก Google Fonts` — AI จะใส่ link และ font-family ให้อัตโนมัติ
:::

---

### 2. CSS Variables — ระบบธีมสีที่ปรับได้

CSS Variables คือการตั้งชื่อให้ค่า CSS เพื่อให้แก้ครั้งเดียวแล้วเปลี่ยนทั้งเว็บ

```css
:root {
  --primary: #6c63ff;      /* สีหลัก */
  --secondary: #f5f5f5;    /* สีรอง */
  --text: #333333;         /* สีตัวอักษร */
  --card-bg: #ffffff;      /* สีพื้นหลัง card */
}

h1 { color: var(--primary); }
.card { background: var(--card-bg); }
```

::: info ทำไมต้องรู้เรื่องนี้?
เวลาสั่ง AI สร้าง Dark Mode หรือต้องการเปลี่ยนธีมสีทั้งหมด — AI จะใช้ CSS Variables ให้โดยอัตโนมัติถ้าเราบอกในชัดเจนใน Prompt
:::

---

### 3. Flexbox — จัดวาง Layout จริงๆ

Flexbox ช่วยจัดวางของใน Container ได้อย่างยืดหยุ่น

```css
.container {
  display: flex;
  flex-direction: row;       /* แนวนอน (default) */
  justify-content: center;   /* จัดกลางแนวหลัก */
  align-items: center;       /* จัดกลางแนวตั้ง */
  gap: 16px;                 /* ช่องว่างระหว่าง item */
  flex-wrap: wrap;           /* ขึ้นบรรทัดใหม่อัตโนมัติ */
}
```

**ตัวอย่างการใช้งานจริงใน Portfolio:**

```css
/* Badge ทักษะเรียงแนวนอน */
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Header ชื่อและรูปอยู่ข้างกัน */
.header {
  display: flex;
  align-items: center;
  gap: 20px;
}
```

---

### 4. CSS Transition & Hover Effect

Transition ทำให้การเปลี่ยนแปลงเกิดขึ้นแบบ smooth ไม่กระตุก

```css
/* ตัวอย่าง: Card ที่ลอยขึ้นเมื่อ hover */
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);    /* ลอยขึ้น 4px */
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

/* Badge ที่เปลี่ยนสีเมื่อ hover */
.badge:hover {
  background: var(--primary);
  color: white;
  transition: all 0.2s ease;
}
```

::: tip เคล็ดลับ
บอกใน Prompt ว่า `มี hover effect ที่ card` หรือ `card ลอยขึ้นเมื่อแตะ` — AI จะใส่ transition ให้
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
