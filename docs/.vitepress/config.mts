import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'สร้างเว็บด้วย AI บนมือถือ',
  description: 'หลักสูตรการสร้าง Web Portfolio ด้วย AI บนสมาร์ทโฟน สำหรับนักเรียน ปวช./ปวส.',
  lang: 'th',
  base: '/extra-classes-3-y-2-2568/',

  themeConfig: {
    logo: '🌐',
    siteTitle: 'AI Web Creator',

    nav: [
      { text: 'หน้าแรก', link: '/' },
      { text: 'Course Outline', link: '/outline' },
      {
        text: 'บทเรียน',
        items: [
          { text: 'วันที่ 1 — HTML & Portfolio แรก', link: '/day1' },
          { text: 'วันที่ 2 — CSS & Responsive', link: '/day2' },
          { text: 'วันที่ 3 — รูปภาพ ลิงก์ & ฉบับสมบูรณ์ (เร็วๆ นี้)', link: '/day1' },
          { text: 'วันที่ 4 — การประเมินผล (เร็วๆ นี้)', link: '/day1' },
        ]
      }
    ],

    sidebar: [
      {
        text: '📋 ภาพรวมหลักสูตร',
        items: [
          { text: '🏠 หน้าแรก', link: '/' },
          { text: '📑 Course Outline', link: '/outline' },
        ]
      },
      {
        text: '📚 บทเรียนแต่ละวัน',
        items: [
          { text: '📌 วันที่ 1 — HTML & Portfolio แรก', link: '/day1' },
          { text: '📌 วันที่ 2 — CSS & Responsive', link: '/day2' },
          { text: '🔒 วันที่ 3 — รูปภาพ ลิงก์ & ฉบับสมบูรณ์', link: '/day1' },
          { text: '🔒 วันที่ 4 — การประเมินผล', link: '/day1' },
        ]
      }
    ],

    footer: {
      message: 'หลักสูตรการสร้างเว็บไซต์ด้วย AI บนสมาร์ทโฟน',
      copyright: 'ปีการศึกษา 2568 ภาคเรียนที่ 2'
    },

    docFooter: {
      prev: 'บทเรียนก่อนหน้า',
      next: 'บทเรียนถัดไป'
    },

    outline: {
      label: 'เนื้อหาในหน้านี้'
    },

    returnToTopLabel: 'กลับด้านบน',
    darkModeSwitchLabel: 'ธีม',
    lightModeSwitchTitle: 'เปลี่ยนเป็นโหมดสว่าง',
    darkModeSwitchTitle: 'เปลี่ยนเป็นโหมดมืด',
  }
})
