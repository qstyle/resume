# AI-отзывы — лендинг (MVP smoke-test)

Маркетинговый лендинг для проверки спроса на сервис: **сбор настоящих отзывов у гостей кафе/ресторанов + ответы на отзывы с ИИ** (Яндекс Карты, 2ГИС).

Отдельный лёгкий проект, не связан с боевым `checker_pro`. Трекер: проект **Aiотзывы** в moongatracker.

## Стек

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- **shadcn/ui** (new-york, base color neutral) — настроен вручную
- Источники компонентов: **React Bits** (анимации, напр. TextPressure), 21st.dev, Tailark

## Команды

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

## Заметки по компонентам

- В этом окружении `ui.shadcn.com` и `tailark.com` отдают 403 — базовые примитивы (button и т.п.) добавлены вручную стандартным кодом shadcn.
- `reactbits.dev` доступен: компоненты тянутся через `pnpm dlx shadcn@latest add @react-bits/<Component>-TS-TW`.
- Реестры `@tailark` и `@react-bits` прописаны в `components.json`.

## Дальше (см. трекер Aiотзывы)

- Hero с TextPressure-заголовком + структурные блоки (how-it-works, pricing, demo).
- Демо-блок ИИ-ответа → Go-бэкенд `POST /generate-reply`.
- Fake-door форма заявки + Яндекс.Метрика (замер воронки).
- Деплой на RU-хостинг.

## 152-ФЗ

Форма заявки — отдельный, не предзаполненный чекбокс согласия; демо-бэкенд не логирует тексты/контакты; данные в РФ.
