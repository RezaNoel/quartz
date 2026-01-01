---
title: Dataview Tutorial
author: Reza Noel
keywords:
  - Reza Noel
  - Tutorial
  - Markdown
  - MD
  - md-files
  - obsidian
  - dataview
  - Data view
description: توی این مقاله درباره دیتاویو صحبت شده که چی هست و چه کمکی میتونه به ما بکنه در سازماندهی فایل هامون و همینطور قدم به قدم با راهنمای عملی آموزش پیاده سازی تمامی قابلیت های دیتاویو داده شده.
lang: fa
language: fa-IR
slug: dataview-tutorial
date: 2026-01-01
lastmod: 2026-01-01
status: evergreen
zettel_id: markdown-tutorial-youtube-chibodeh
---

> [!summary] خلاصه 
> > دیتا ویو یک پلاگین برای Obsidian است که یادداشت‌های شما را با کمک **Metadata** تبدیل می‌کند به یک **پایگاه داده پویا** (dynamische Datenbank).  
> در این نوت یاد می‌گیری: Properties/YAML، Inline Fields، انواع Query (LIST/TABLE/TASK/CALENDAR)، سینتکس اصلی (FROM/WHERE/SORT/LIMIT)، توابع جذاب، و در آخر یک پروژه واقعی: **سیستم مدیریت کتاب** از صفر تا صد.

> [!tip] Youtube Chibode
><div style="position:relative; width:100%; padding-top:56.25%;"><iframe    src="https://www.youtube.com/embed/OOG5Roex9Yc"  style="position:absolute; top:0; left:0; width:100%; height:100%;"    frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"    allowfullscreen>  </iframe></div>

---

## فهرست
- [[#1 مقدمات و چرایی استفاده]]
- [[#2 مفهوم Metadata ستون فقرات Dataview]]
- [[#3 چهار روش نمایش داده‌ها Query Types]]
- [[#4 ساختار اصلی یک Query سینتکس]]
- [[#5 عملگرها و توابع کاربردی بخش جذاب]]
- [[#6 نکات حرفه‌ای و ترفندها]]
- [[#7 پروژه واقعی سیستم مدیریت کتاب از صفر تا صد]]
- [[#ضمیمه A چیت‌شیت سریع Dataview]]
- [[#نوت‌های مرتبط Related Notes]]

---

## 1) مقدمات و چرایی استفاده

### Dataview چیست؟
دیتاویو یک پلاگین Community است که فایل‌های `.md` شما را اسکن می‌کند و از روی **Metadata** (مثل YAML یا فیلدهای داخل متن) جدول/لیست/تقویم می‌سازد. یعنی به جای اینکه دستی لیست بسازی، Obsidian خودش **automatisch** به‌روزرسانی می‌کند.

### چرا به درد می‌خورد؟
سناریوهای خیلی کاربردی:
- نمایش لیست **کتاب‌های خوانده‌شده** و در حال خواندن
- نمایش **پروژه‌های فعال** و Deadlines
- نمایش **یادداشت‌های اخیر** در یک داشبورد
- جمع‌آوری **تسک‌ها** از کل والت (Vault)

> [!tip] ایده داشبورد
> یک نوت بساز به اسم `Dashboard` و داخلش کوئری‌ها رو بذار. هر چی یادداشت جدید بسازی/تغییر بدی، داشبورد خودکار آپدیت می‌شه.

### نصب و فعال‌سازی
1) Settings → Community plugins  
2) Safe mode خاموش  
3) Browse → سرچ: **Dataview**  
4) Install → Enable  

---

## 2) مفهوم Metadata (ستون فقرات Dataview)

دیتاویو بدون Metadata مثل ماشین بدون بنزینه. Metadata یعنی «داده‌های ساختاریافته» که به یادداشتت اضافه می‌کنی.

### 2.1) Properties / Frontmatter (YAML)
بالای هر نوت (اول فایل) یک بخش YAML می‌ذاری:

~~~yaml
---
type: book
status: reading
author: "George Orwell"
pages: 328
rating: 4
started: 2025-12-01
finished: null
price: 12.99
tags: [books, dystopia]
---
~~~

- `type/status/author/...` اسم ستون‌هاست
- مقدارها می‌تونن متن، عدد، تاریخ، لیست و… باشند

> [!note] نکته Obsidian
> توی Obsidian جدید، Properties رو UI هم می‌تونی پر کنی و لازم نیست دستی YAML تایپ کنی.

### 2.2) Inline Fields (داخل متن)
اگر نخوای YAML داشته باشی یا وسط متن بخوای فیلد تعریف کنی:

~~~md
Author:: George Orwell
Status:: reading
Pages:: 328
Started:: 2025-12-01
~~~

فرمتش:
- `Key:: Value`

> [!tip] کاربرد Inline
> برای نوت‌های روزانه یا نوت‌های کوتاه خیلی کاربردیه.

### 2.3) انواع داده‌ها (Data Types)
Dataview به نوع داده حساسه. فرق‌ها:

- **متن (Text)**: `"Orwell"` یا `Orwell`
- **عدد (Number)**: `328`
- **تاریخ (Date)**: `2025-12-27`  
- **لینک (Link)**: `[[Book - 1984]]` یا لینک به فایل

> [!warning] هشدار
> تاریخ را با فرمت استاندارد مثل `YYYY-MM-DD` بنویس تا توابع زمانی درست کار کنند.

---

## 3) چهار روش نمایش داده‌ها (Query Types)

Dataview چهار خروجی معروف دارد: **LIST / TABLE / TASK / CALENDAR**

### 3.1) LIST (ساده‌ترین)
نمایش فقط اسم فایل‌ها (و نهایتاً چند فیلد ساده)

~~~dataview
LIST
FROM "100 Zettelkasten/100 Reference Notes/Book"
~~~

### 3.2) TABLE (چند ستون)
برای داشبوردها بهترین گزینه است.

~~~dataview
TABLE author, totalPage, publishDate
FROM "100 Zettelkasten/100 Reference Notes/Book"
~~~

### 3.3) TASK (استخراج چک‌لیست‌ها)
تسک‌ها را از همه یادداشت‌ها جمع می‌کند.

~~~dataview
TASK
FROM "500 Deutsche Classes"
~~~

یا اگر فقط تسک‌های تیک‌نخورده:

~~~dataview
TASK
FROM "999 Setup/Templates"
WHERE !completed
~~~

### 3.4) CALENDAR (نمایش بر اساس تاریخ)
مثلاً نمایش نوت‌ها بر اساس تاریخ `finished`:

~~~dataview
CALENDAR j
FROM "00 Daily"

~~~

> [!note] نکته
> CALENDAR باید یک فیلد تاریخ معتبر داشته باشد.

---

## 4) ساختار اصلی یک Query (سینتکس)

قالب رایج:

- **FROM**: منبع
- **WHERE**: فیلتر
- **SORT**: مرتب‌سازی
- **LIMIT**: محدودسازی خروجی

### 4.1) FROM — تعیین منبع
- فولدر: `FROM "Books"`
- تگ: `FROM #books`
- کل والت: `FROM ""`

مثال:

~~~dataview
TABLE status, author
FROM #تودو 
~~~

### 4.2) WHERE — فیلتر کردن
مثلاً پروژه‌های در جریان:

~~~dataview
TABLE status, deadline
FROM "Projects"
WHERE status = "in-progress"
~~~

### 4.3) SORT — مرتب‌سازی
مثلاً کتاب‌های جدیدتر بالا:

~~~dataview
TABLE author, started, status
FROM "Books"
SORT started desc
~~~

### 4.4) LIMIT — خروجی خلوت
مثلاً 10 یادداشت اخیر:

~~~dataview
LIST
FROM ""
SORT file.mtime desc
LIMIT 10
~~~

> [!tip] ترفند
> `file.mtime` زمان آخرین تغییر فایل است. برای داشبورد خیلی خوبه.

---

## 5) عملگرها و توابع کاربردی (بخش جذاب)

### 5.1) فیلترهای زمانی با date(today)
مثلاً کتاب‌هایی که امروز شروع شده:

~~~dataview
TABLE author, started
FROM "Books"
WHERE started = date(today)
~~~

یا آیتم‌هایی که تاریخ‌شان در 7 روز اخیر است:

~~~dataview
LIST
FROM ""
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime desc
LIMIT 3
~~~

> [!note] کلمه کلیدی
> `dur(7 days)` یعنی مدت زمان.

### 5.2) محاسبات ساده (جمع/میانگین)
مثلاً مجموع صفحات کتاب‌های خوانده‌شده:

~~~dataview
TABLE sum(totalPage) AS "Total Pages"
FROM "100 Zettelkasten/100 Reference Notes/Book"
WHERE status = "finished"
~~~

میانگین امتیاز:

~~~dataview
TABLE round(avg(rating), 2) AS "Avg Rating"
FROM "Books"
WHERE rating
~~~

### 5.3) تغییر نام ستون‌ها با AS
قشنگ‌سازی جدول:

~~~dataview
TABLE author AS "نویسنده", pages AS "صفحه", status AS "وضعیت"
FROM "Books"
~~~

---

## 6) نکات حرفه‌ای و ترفندها

### 6.1) DataviewJS (فقط معرفی)
اگر کدنویسی بلدی DataviewJS قدرتش خیلی بالاتر می‌ره:
- شرط‌های پیچیده‌تر
- خروجی‌های سفارشی
- ساخت ویجت‌ها و نمودار (با پلاگین‌های جانبی)

نمونه اسکلت:

~~~dataviewjs
const pages = dv.pages('"Books"').where(p => p.status === "finished");
dv.paragraph("Finished books: " + pages.length);
~~~

> [!warning] نکته
> DataviewJS نیاز به کمی JavaScript دارد، ولی ارزشش برای داشبوردهای حرفه‌ای خیلی بالاست.

### 6.2) بروزرسانی خودکار (automatisch)
هر بار که:
- یک فیلد را تغییر بدهی
- یک فایل اضافه/حذف کنی  
تمام جدول‌ها و لیست‌ها خودکار آپدیت می‌شوند. این یعنی داشبوردت همیشه زنده است.

### 6.3) استفاده در Template ها (Templates)
اگر از **Templater** یا Template ساده Obsidian استفاده می‌کنی:
- یک Template برای “Book Note” بساز
- یک Template برای “Project Note” بساز
- و یک Template برای “Dashboard” بساز

نمونه Template کتاب:

~~~md
---
type: book
status: reading
author: ""
pages: 0
rating: null
started: 2026-01-01
finished: null
---

# نوشتن dataview داخل obsidian

## یادداشت‌ها
- 

## نقل‌قول‌ها
- 

## تسک‌ها
- [ ] خلاصه فصل 1
- [ ] نکات کلیدی را استخراج کن
~~~

---

## 7) پروژه واقعی: سیستم مدیریت کتاب (از صفر تا صد)

### هدف پروژه
یک فولدر کتاب داشته باشی، هر کتاب یک نوت با Metadata، و یک داشبورد که:
- در حال خواندن‌ها را نشان بدهد
- تمام‌شده‌ها را نشان بدهد
- Wishlist را نشان بدهد
- آمار (صفحات، میانگین امتیاز) بدهد
- تسک‌های مربوط به کتاب‌ها را جمع کند
- یک تقویم برای تاریخ اتمام بسازد

---

### 7.1) ساختار فولدر پیشنهادی
~~~md
Vault/
  Books/
    Book - 1984.md
    Book - Atomic Habits.md
  Dashboards/
    📚 Library Dashboard.md
  Templates/
    tpl - book.md
~~~

---

### 7.2) نمونه نوت کتاب (Book - 1984.md)
~~~md
---
type: book
status: finished
author: "George Orwell"
pages: 328
rating: 4
started: 2025-11-10
finished: 2025-12-05
genre: ["Dystopia", "Political"]
---

# 1984

## خلاصه
یک خلاصه کوتاه…

## نکات کلیدی
- نکته ۱
- نکته ۲

## تسک‌ها
- [x] خلاصه فصل 1
- [x] نکات کلیدی را استخراج کن
- [ ] یک نقد کوتاه بنویس
~~~

---

### 7.3) داشبورد اصلی (📚 Library Dashboard.md)

#### A) کتاب‌های در حال خواندن
~~~dataview
TABLE author AS "نویسنده", pages AS "صفحه", started AS "شروع"
FROM "Books"
WHERE status = "reading"
SORT started desc
~~~

#### B) کتاب‌های تمام‌شده (جدیدتر بالا)
~~~dataview
TABLE author AS "نویسنده", pages AS "صفحه", rating AS "امتیاز", finished AS "تمام شد"
FROM "Books"
WHERE status = "finished"
SORT finished desc
LIMIT 20
~~~

#### C) Wishlist (لیست ساده)
~~~dataview
LIST
FROM "Books"
WHERE status = "wishlist"
SORT file.name asc
~~~

#### D) آمار کلی
~~~dataview
TABLE 
  sum(pages) AS "جمع صفحات (Finished)",
  round(avg(rating), 2) AS "میانگین امتیاز"
FROM "Books"
WHERE status = "finished"
~~~

#### E) استخراج تمام تسک‌های مربوط به کتاب‌ها
~~~dataview
TASK
FROM "Books"
WHERE !completed
~~~

#### F) تقویم اتمام کتاب‌ها
~~~dataview
CALENDAR finished
FROM "Books"
WHERE finished
~~~

> [!tip] نتیجه
> از این به بعد فقط کتاب جدید اضافه کن و Metadata رو پر کن؛ داشبوردت خودش همه‌چیز رو مدیریت می‌کنه. 

---

## ضمیمه A) چیت‌شیت سریع Dataview

### فیلدهای آماده فایل (file.\*)
- `file.name` اسم فایل
- `file.path` مسیر
- `file.ctime` زمان ایجاد
- `file.mtime` زمان آخرین تغییر
- `file.tags` تگ‌ها

### توابع رایج
- `date(today)` تاریخ امروز
- `dur(7 days)` مدت زمان
- `sum(x)` `avg(x)` `min(x)` `max(x)`
- `round(x, 2)` گرد کردن

### عملگرها
- = برابر
- `!=` نابرابر
- `>` `<` `>=` `<=`
- `AND` `OR`

---
> [!todo] تمرین
> 1) یک فولدر `Books` بساز  
> 2) 3 تا نوت کتاب بساز و `status` را متفاوت بذار (reading/finished/wishlist)  
> 3) داشبورد را بساز و کوئری‌های A تا F را پیست کن  
> 4) یک مقدار را تغییر بده و ببین چطور همه‌چیز خودکار آپدیت می‌شود
