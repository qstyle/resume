# Дмитрий Ордин — резюме

Одностраничное интерактивное резюме. Frontend / Fullstack-разработчик.

**Прод:** https://resume-dmitry-ordin.vercel.app

## Что это

Анимированный single-page: живой WebGL-фон, монохромная тема, поэтапное появление
при загрузке и адаптивная навигация по секциям.

- **Hero** — имя, роль, портрет, контакт-CTA
- **Checker Pro** — флагманский собственный SaaS-продукт (со ссылками)
- **Опыт** — Компэл, Palax, Coala Visionário
- **Стек** — Frontend / Backend / Infra / Testing / AI
- **Контакты** — почта, телефон, GitHub, hh

## Стек

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (тема mist/luma, Nunito Sans, radius none)
- **GSAP** (ScrollTrigger) + **Lenis** — pin-стек и плавный скролл на десктопе
- **Motion** (Framer Motion) — микроанимации, intro-последовательность
- **WebGL1** — кастомный фрагментный шейдер «Mesh drift» (fullscreen triangle, без библиотек)

## Особенности

- **Адаптив:** на десктопе — залипающий стек карточек (один экран = одна карточка),
  на мобиле — обычный вертикальный скролл (длинный контент не обрезается).
- **Intro:** при первом рендере поочерёдно появляются фон → хедер → первая карточка.
- **Индикатор скролла** подстраивается под устройство: «мышка» на десктопе, свайп на тач.
- **Шейдер-фон** ставит RAF на паузу на скрытой вкладке, DPR ограничен до 2.

## Разработка

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
pnpm lint
```

## Структура

```
src/
  app/
    layout.tsx            # шрифты, метаданные
    page.tsx              # сборка страницы + индикатор скролла
    globals.css           # тема (OKLCH-токены), intro-кейфреймы
    icon.svg              # фавиконка (монограмма ДО)
  components/
    shader-background.tsx # WebGL «Mesh drift»
    sticky-card-stack.tsx # GSAP pin-стек + мобильный fallback
    header.tsx            # шапка, навигация по карточкам
    scroll-indicator.tsx  # мышка/свайп
    cards.tsx             # контент всех секций
```

## Деплой

Автодеплой на **Vercel** при пуше в `main`. Требуется **Node.js 24.x**
(в настройках проекта Vercel).
