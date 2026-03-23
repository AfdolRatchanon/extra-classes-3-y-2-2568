# 📌 วันที่ 3 — รูปภาพ ลิงก์ & Portfolio ฉบับสมบูรณ์

> **เป้าหมาย:** เพิ่มรูปภาพและลิงก์โซเชียลมีเดีย แล้ว Gen Portfolio ฉบับสมบูรณ์ที่รวมทุกอย่างที่เรียนมา 3 วัน

---

## ⏱️ ตารางเวลา

| เวลา | กิจกรรม |
|---|---|
| 20 นาที | Theory — `<img>`, `<a>`, และ Icon |
| 15 นาที | Prompt Study — วิเคราะห์ Prompt ฉบับสมบูรณ์ |
| 40 นาที | Workshop — ฝึก 5 Prompts |
| 15 นาที | ส่งงานและตรวจสอบ |

---

## 📖 ทฤษฎี — รูปภาพ ลิงก์ และ Portfolio ฉบับสมบูรณ์

### 1. Semantic HTML — โครงสร้างที่ถูกต้อง

วันที่ 1–2 ใช้แค่ `<div>` ทุกอย่าง แต่ HTML มี Tag เฉพาะทางที่ควรใช้ให้ถูกต้อง

```html
<!DOCTYPE html>
<html lang="th">
<head>...</head>
<body>

  <nav>          <!-- แถบนำทาง -->
  </nav>

  <header>       <!-- ส่วนหัว / Hero Section -->
  </header>

  <main>         <!-- เนื้อหาหลัก -->
    <section id="about">    <!-- แต่ละส่วนของเนื้อหา -->
    </section>
    <section id="skills">
    </section>
    <section id="portfolio">
    </section>
    <section id="contact">
    </section>
  </main>

  <footer>       <!-- ส่วนท้าย -->
  </footer>

</body>
</html>
```

::: info ทำไมต้องใช้ Semantic HTML?
- อ่านโค้ดง่ายขึ้น ทั้งคนและ AI
- เบราว์เซอร์เข้าใจโครงสร้างได้ดีขึ้น
- ถ้าบอก AI ว่า "ใช้ semantic HTML" — AI จะจัดโครงสร้างให้ถูกต้องทันที
:::

---

### 2. Navigation Bar + Anchor Link

**Anchor Link** คือลิงก์ที่คลิกแล้ว **scroll ไปยัง section** ภายในหน้าเดียวกัน ไม่ต้องเปิดหน้าใหม่

```html
<!-- Nav bar — href="#id" คือ anchor link -->
<nav>
  <a href="#about">เกี่ยวกับฉัน</a>
  <a href="#skills">ทักษะ</a>
  <a href="#portfolio">ผลงาน</a>
  <a href="#contact">ติดต่อ</a>
</nav>

<!-- Section ที่ nav ชี้ไป — ต้องมี id ตรงกัน -->
<section id="about">
  <h2>เกี่ยวกับฉัน</h2>
  ...
</section>

<section id="skills">
  <h2>ทักษะ</h2>
  ...
</section>
```

**CSS สำหรับ Nav bar บนมือถือ:**

```css
nav {
  position: sticky;       /* ติดอยู่ด้านบนเมื่อ scroll */
  top: 0;
  background: var(--primary);
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 12px;
  flex-wrap: wrap;        /* ขึ้นบรรทัดอัตโนมัติบนจอเล็ก */
  z-index: 100;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s ease;
}

nav a:hover {
  background: rgba(255,255,255,0.2);
}
```

**Smooth Scroll** — scroll แบบ smooth แทนการกระโดดทันที:
```css
html {
  scroll-behavior: smooth;
}
```

::: tip บอกใน Prompt ว่า
`มี sticky navigation bar พร้อม anchor link ทุก section และ smooth scroll`
:::

---

### 3. แท็ก `<img>` — การใส่รูปภาพอย่างละเอียด

#### โครงสร้างพื้นฐาน

```html
<img src="URL_ของรูป" alt="คำอธิบายรูป">
```

| attribute | หน้าที่ | ตัวอย่าง |
|---|---|---|
| `src` | URL หรือ path ของรูป | `src="https://picsum.photos/150"` |
| `alt` | ข้อความแสดงเมื่อรูปโหลดไม่ได้ | `alt="รูปโปรไฟล์"` |
| `width` / `height` | กำหนดขนาด | `width="150"` |

#### Placeholder Image ที่ใช้บ่อย

| URL | ลักษณะ |
|---|---|
| `https://picsum.photos/150` | รูปภาพสุ่ม สวย 150×150 |
| `https://picsum.photos/150/150?grayscale` | รูปขาว-ดำ |
| `https://placehold.co/150x150` | สีเทา มีตัวเลขขนาด |
| `https://placehold.co/150x150/6c63ff/fff` | ปรับสีได้ (bg/text) |

#### object-fit — ควบคุมการแสดงผลรูปภาพ

ปัญหาที่พบบ่อย: รูปขนาดต่างกัน ทำให้ card เบี้ยว
`object-fit` แก้ปัญหานี้ได้

```css
/* ① cover — ตัดให้เต็มกรอบ ไม่บิดเบี้ยว (แนะนำ) */
.profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

/* ② contain — แสดงเต็มรูป อาจมีขอบขาว */
.card-img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
```

```
object-fit: fill;      → ยืดให้เต็มกรอบ (บิดเบี้ยว)
object-fit: cover;     → ตัดให้เต็มกรอบ (ไม่บิดเบี้ยว) ✅
object-fit: contain;   → แสดงเต็มรูป มีพื้นที่ว่างรอบ
object-fit: none;      → ขนาดจริง ไม่ปรับ
```

#### รูปภาพที่โหลดไม่ได้

```html
<!-- onerror — แสดง placeholder ถ้ารูปหลักโหลดไม่ได้ -->
<img src="my-photo.jpg"
     alt="รูปโปรไฟล์"
     onerror="this.src='https://placehold.co/150x150'">
```

::: tip บอกใน Prompt ว่า
`รูปโปรไฟล์กลม ใช้ picsum.photos ขนาด 150px มี object-fit: cover`
:::

---

### 4. แท็ก `<a>` — ลิงก์ทุกประเภท

#### ประเภทของ href

```html
<!-- ① ลิงก์ภายนอก — เปิดแท็บใหม่ -->
<a href="https://www.facebook.com/ชื่อ"
   target="_blank"
   rel="noopener noreferrer">Facebook</a>

<!-- ② Anchor Link — scroll ภายในหน้า -->
<a href="#contact">ไปหน้าติดต่อ</a>

<!-- ③ อีเมล -->
<a href="mailto:email@example.com">ส่งอีเมล</a>

<!-- ④ โทรศัพท์ -->
<a href="tel:0812345678">โทรหาฉัน</a>
```

::: warning rel="noopener noreferrer" คืออะไร?
เมื่อใช้ `target="_blank"` เพื่อเปิดแท็บใหม่ ควรใส่ `rel="noopener noreferrer"` ด้วยเสมอ เพื่อความปลอดภัย (ป้องกันหน้าที่เปิดจาก access กลับมาที่หน้าเดิมได้)

บอก AI ว่า "ลิงก์โซเชียลเปิดแท็บใหม่" — AI จะใส่ทั้งคู่ให้อัตโนมัติ
:::

#### ตกแต่ง `<a>` เป็นปุ่ม

```css
/* ลบ style default ของลิงก์ */
a {
  text-decoration: none;  /* เอาเส้นใต้ออก */
  color: inherit;         /* ใช้สีจาก parent */
}

/* ทำเป็นปุ่ม */
.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #1877f2;    /* Facebook blue */
  color: white;
  border-radius: 24px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.social-btn:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}
```

#### Emoji เป็น Icon

ใช้ Emoji แทน icon library — ง่ายและไม่ต้องติดตั้งอะไรเพิ่ม

```html
<a href="#" class="social-btn">📘 Facebook</a>
<a href="#" class="social-btn">📸 Instagram</a>
<a href="#" class="social-btn">💬 Line</a>
<a href="#" class="social-btn">▶️ YouTube</a>
<a href="#" class="social-btn">🐦 Twitter/X</a>
```

---

### 5. CSS Grid — จัดวาง Card ผลงาน

Flexbox เหมาะกับ **1 แถว** (เช่น badge, nav)
**CSS Grid** เหมาะกับ **หลายแถว + หลายคอลัมน์** เช่น กริด card ผลงาน

```css
/* Grid พื้นฐาน — 2 คอลัมน์ */
.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;   /* 2 คอลัมน์เท่ากัน */
  gap: 16px;
}

/* Grid ปรับตัวอัตโนมัติตามขนาดจอ */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}
```

**เปรียบเทียบ Flexbox vs Grid:**

| | Flexbox | CSS Grid |
|---|---|---|
| เหมาะกับ | 1 มิติ (แถวหรือคอลัมน์) | 2 มิติ (แถว + คอลัมน์) |
| ใช้กับ | Badge, Nav, ปุ่ม | Card ผลงาน, Layout หลัก |
| keyword | `display: flex` | `display: grid` |

```html
<!-- ตัวอย่าง Card ผลงาน -->
<section id="portfolio">
  <h2>ผลงานของฉัน</h2>
  <div class="portfolio-grid">
    <div class="card">
      <img src="https://picsum.photos/300/200" alt="ผลงาน 1">
      <h3>ชื่อผลงาน</h3>
      <p>คำอธิบายสั้นๆ</p>
    </div>
    <div class="card">...</div>
  </div>
</section>
```

```css
.card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;       /* ตัดส่วนที่เกินออก รวมถึงรูปภาพ */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card h3, .card p {
  padding: 0 16px;
}
```

::: tip บอกใน Prompt ว่า
`section ผลงานใช้ CSS Grid 2 คอลัมน์ แต่ละ card มีรูปภาพ ชื่อ และคำอธิบาย`
:::

---

## 🧠 Prompt Study — วิเคราะห์ Prompt ฉบับสมบูรณ์

### สังเกตความแตกต่างของ 3 วัน

| วัน | Prompt เน้นอะไร |
|---|---|
| วันที่ 1 | โครงสร้าง HTML + Section พื้นฐาน |
| วันที่ 2 | CSS Style + Font + Responsive ที่ดีขึ้น |
| วันที่ 3 | รูปภาพ + ลิงก์ + รวมทุกอย่างให้สมบูรณ์ |

### สิ่งที่ต้องเพิ่มใน Prompt วันที่ 3

```
+ รูปโปรไฟล์ (ใช้ placeholder)
+ ปุ่มโซเชียลมีเดีย (Facebook, Line ฯลฯ)
+ Section ผลงาน หรือ ประวัติการศึกษา
+ Navigation bar (ถ้าต้องการ)
```

---

## ✋ Workshop — ฝึก 5 Prompts

---

### 🟢 Prompt 1 — เพิ่มรูปโปรไฟล์
**(อาจารย์เตรียมให้ — ใช้ได้เลย)**

::: info คัดลอก Prompt นี้ไปวางใน Gemini
```
คุณคือนักพัฒนาเว็บมืออาชีพ สร้าง Portfolio โดยใช้ HTML และ Internal CSS เท่านั้น มี: 1) Header พร้อมรูปโปรไฟล์กลม (ใช้ picsum.photos/150) ชื่อและตำแหน่ง 2) เกี่ยวกับฉัน 3) ทักษะ (badge) ใช้ฟอนต์ Sarabun ธีมสีฟ้า-ขาว รองรับมือถือ
```
:::

**หลังรัน:**
- [ ] รูปโปรไฟล์แสดงผลไหม?
- [ ] รูปเป็นวงกลมไหม?
- [ ] Header ดูเป็น Professional ไหม?

---

### 🟢 Prompt 2 — เพิ่มปุ่มโซเชียลมีเดีย
**(อาจารย์เตรียมให้ — ใช้ได้เลย)**

::: info คัดลอก Prompt นี้ไปวางใน Gemini
```
คุณคือนักพัฒนาเว็บมืออาชีพ สร้าง Portfolio โดยใช้ HTML และ Internal CSS เท่านั้น มี: 1) Header พร้อมรูปโปรไฟล์กลม 2) เกี่ยวกับฉัน 3) ทักษะ (badge) 4) ติดต่อฉัน มีปุ่มโซเชียล Facebook, Line, Instagram ปุ่มมีสีตามแบรนด์ มีมุมโค้ง ใช้ Sarabun รองรับมือถือ
```
:::

**หลังรัน:**
- [ ] ปุ่มโซเชียลแสดงผลไหม?
- [ ] สีปุ่มตรงกับโซเชียลไหม? (Facebook=น้ำเงิน, Instagram=ม่วง-ส้ม)

---

### 🟡 Prompt 3 — เพิ่ม Section ผลงาน
**(ดัดแปลง — เพิ่ม Section ใหม่)**

::: tip แนวทาง
นำ Prompt 2 มาแก้ โดย **เพิ่ม Section ผลงานหรือโปรเจกต์** เช่น:
- ผลงาน 3 ชิ้น แสดงเป็น card
- โปรเจกต์ที่เคยทำในโรงเรียน
:::

**Prompt ที่ฉันเขียน:**
```
(เขียนเองโดยแก้จาก Prompt 2 เพิ่ม Section ผลงาน)
```

**หลังรัน:**
- [ ] Section ผลงานแสดงเป็น card ได้ไหม?
- [ ] มีชื่อผลงานและคำอธิบายไหม?

---

### 🟠 Prompt 4 — Portfolio ที่มีข้อมูลจริงครบถ้วน
**(กึ่งอิสระ — เติมข้อมูลของตนเอง)**

::: tip แก้ข้อมูลตามนี้แล้วนำไปวางใน Gemini
```
คุณคือนักพัฒนาเว็บมืออาชีพ สร้าง Portfolio ของ [ชื่อ-นามสกุล] นักเรียนสาขา [สาขา] โดยใช้ HTML และ Internal CSS เท่านั้น มี: 1) Header รูปโปรไฟล์กลม (picsum.photos/150) ชื่อ [ชื่อ] 2) เกี่ยวกับฉัน: [แนะนำตัว 2-3 ประโยค] 3) ทักษะ: [5 ทักษะ] (badge) 4) ผลงาน: [ผลงาน 2 ชิ้น] 5) ติดต่อ: ปุ่ม [โซเชียลที่ใช้] ใช้ฟอนต์ Sarabun ธีมสี [สีที่ชอบ] รองรับมือถือ
```
:::

**ข้อมูลที่ฉันใส่:**
- ผลงาน 1: `_______________`
- ผลงาน 2: `_______________`
- โซเชียล: `_______________`

---

### 🔴 Prompt 5 — Portfolio ฉบับสมบูรณ์ของฉัน
**(อิสระ — เขียน Prompt เองทั้งหมด)**

นี่คือ **ชิ้นงานสุดท้ายของหลักสูตร** — รวมทุกอย่างที่เรียนมา 3 วัน

::: warning เงื่อนไขบังคับ (Portfolio ฉบับสมบูรณ์)
Prompt ต้องระบุครบ:
- ✅ รูปโปรไฟล์ (placeholder)
- ✅ ข้อมูลจริงของตนเอง (ชื่อ, สาขา, แนะนำตัว)
- ✅ ทักษะ (badge) อย่างน้อย 5 อย่าง
- ✅ ผลงานหรือโปรเจกต์ อย่างน้อย 2 ชิ้น
- ✅ ปุ่มติดต่อ/โซเชียลมีเดีย
- ✅ ฟอนต์ภาษาไทย
- ✅ รองรับมือถือ
- ✅ Design สวยงาม (มี shadow, border-radius, color theme)
:::

**Prompt ของฉัน (ฉบับสมบูรณ์):**
```
(เขียนเอง — นี่คือ Prompt ที่ดีที่สุดของหลักสูตร)
```

---

## 📤 การส่งงานวันที่ 3

ส่งใน **Google Classroom** ภายในวันนี้:

::: danger ต้องส่ง 2 อย่าง
1. **Source Code** — คัดลอกโค้ดทั้งหมดจาก Prompt 5
2. **ภาพการแสดงผล** — ถ่ายภาพหน้าจอจาก W3Schools หรือ Gemini
:::

**Checklist ก่อนส่ง:**
- [ ] โค้ดรันได้ ไม่ error
- [ ] มีรูปโปรไฟล์
- [ ] มีปุ่มโซเชียลหรือลิงก์ติดต่อ
- [ ] มีผลงานอย่างน้อย 2 ชิ้น
- [ ] ข้อมูลเป็นของจริงทั้งหมด
- [ ] แสดงผลได้ดีบนมือถือ
- [ ] Design สวยกว่าวันที่ 1 และ 2

::: info เปรียบเทียบ 3 วัน
| วัน | สิ่งที่ส่ง |
|---|---|
| วันที่ 1 | Portfolio โครงสร้างพื้นฐาน |
| วันที่ 2 | Portfolio + CSS Style + ข้อมูลจริง |
| วันที่ 3 | Portfolio ฉบับสมบูรณ์ + รูปภาพ + ลิงก์ |

ดูพัฒนาการของตนเองทั้ง 3 วัน!
:::
