import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  Phone,
  FileText,
  Boxes,
  Server,
  Cpu,
  Cloud,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GithubMark } from "@/components/icons";

const GITHUB_URL = "https://github.com/qstyle";
const HH_URL = "https://resume-dmitry-ordin.vercel.app";
const CHECKER_URL = "https://checkerpro.ru";
const REVIEW_URL = "https://review.checkerpro.ru";
const EMAIL = "ordin404@gmail.com";
const PHONE = "+7 922 936-15-70";

/** Full-screen card: transparent, frosted content panel centered over the shader. */
function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative flex w-full items-center justify-center px-5 py-4 sm:px-8 md:min-h-[100svh] md:py-24">
      <div
        data-fade-on-scroll
        className={cn(
          "w-full max-w-5xl border border-border bg-background p-7 shadow-2xl shadow-black/10 sm:p-9 md:p-12",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </p>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </span>
  );
}

// ---------------------------------------------------------------- HERO --------
export function HeroCard() {
  return (
    <Card>
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <Eyebrow>Frontend / Fullstack-разработчик</Eyebrow>
          <h1 className="text-balance text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
            Дмитрий
            <br />
            Ордин
          </h1>
          <p className="mx-auto mt-6 max-w-md text-pretty text-base text-muted-foreground sm:text-lg md:mx-0">
            5+ лет в вебе. Микрофронтенды, React&nbsp;/&nbsp;Next.js,
            Node.js&nbsp;/&nbsp;NestJS. Автор SaaS-продукта{" "}
            <span className="font-semibold text-foreground">
              Checker&nbsp;Pro
            </span>{" "}
            — собираю продукты целиком, от интерфейса до инфраструктуры.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Button asChild size="lg">
              <a href={`mailto:${EMAIL}`}>
                <Mail className="size-4" />
                Связаться
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <GithubMark className="size-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="w-48 shrink-0 sm:w-56 md:w-72">
          <div className="aspect-[4/5] overflow-hidden border border-border bg-secondary shadow-xl shadow-black/20">
            <Image
              src="/portrait2.jpg"
              alt="Дмитрий Ордин"
              width={608}
              height={760}
              priority
              className="size-full object-cover grayscale-[0.75] brightness-95 contrast-[1.02] transition duration-500 hover:grayscale-0 hover:brightness-100"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

// ----------------------------------------------------------- CHECKER PRO ------
const CHECKER_POINTS = [
  {
    icon: Boxes,
    title: "Микросервисы",
    text: "Кабинет на Next.js 15 (React Query, i18n RU/EN), backend на NestJS, MongoDB, Redis/BullMQ, админ-панель и 10+ фоновых воркеров синхронизации отчётов Wildberries.",
  },
  {
    icon: Cpu,
    title: "Расчёты на Go",
    text: "Отдельный сервис оцифровки юнит-экономики поверх Mongo: себестоимость, логистика, комиссии, налоги, прибыль по каждому SKU.",
  },
  {
    icon: Server,
    title: "AI-фичи",
    text: "Авто-ответы на отзывы покупателей через LLM (батчинг, тон под бренд) и RAG-служба поддержки по документации продукта.",
  },
  {
    icon: Cloud,
    title: "Infra / DevOps",
    text: "Docker Swarm, Traefik (SSL), CI/CD с пушем образов в Yandex Container Registry, мониторинг Prometheus / Grafana / Loki, бэкапы MongoDB.",
  },
];

export function CheckerCard() {
  return (
    <Card>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Флагман · собственный продукт в проде</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Checker&nbsp;Pro
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={CHECKER_URL} target="_blank" rel="noopener noreferrer">
              checkerpro.ru
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
              AI-отзывы
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
      <p className="mt-4 max-w-3xl text-pretty text-muted-foreground sm:text-lg">
        SaaS-аналитика для продавцов Wildberries: оцифровка юнит-экономики,
        автоматическая синхронизация отчётов WB, управление подписками и
        уведомления. Спроектировал и вывел в прод с нуля — сейчас это
        самостоятельный бизнес с платными подписками. Отвечаю за весь цикл:
        архитектура, фронтенд, бэкенд-микросервисы, инфраструктура и деплой.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {CHECKER_POINTS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="border border-border bg-background/40 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Icon className="size-4" />
              <h3 className="font-bold">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {["Next.js", "NestJS", "MongoDB", "Redis/BullMQ", "Go", "Docker Swarm", "LLM/RAG"].map(
          (s) => (
            <Chip key={s}>{s}</Chip>
          ),
        )}
      </div>
    </Card>
  );
}

// ------------------------------------------------------------- EXPERIENCE -----
const JOBS = [
  {
    period: "Март 2023 — сейчас",
    company: "Компэл",
    role: "Программист-разработчик",
    text: "Работа на трёх проектах: легаси на классовой MVC-архитектуре (поддержка), B2B-маркетплейс, разработанный командой с нуля, и микросервисная платформа для сборки бизнес-сервисов под разные задачи. Разрабатывал 10+ микрофронтендов, участвую в разработке общей дизайн-системы компании (Storybook + design-токены) и в принятии архитектурных решений.",
    stack: "TypeScript · React · Webpack + Module Federation · Mantine · React Query · Storybook",
  },
  {
    period: "Ноя 2022 — Мар 2023",
    company: "Palax",
    role: "Senior Frontend / TeamLead",
    text: "Старший фронтенд-разработчик и руководитель группы: разработка клиентских компонентов, руководство командой из двух разработчиков, код-ревью, техническая экспертиза и менторинг, постановка задач и контроль сроков.",
    stack: "React · TypeScript",
  },
  {
    period: "Окт 2020 — Ноя 2022",
    company: "Coala Visionário",
    role: "Web-разработчик",
    text: "TactivePro — платформа для организации спортивных событий, и Friisbi — No-Code конструктор бизнес-процессов. Разработка компонентов и логики приложений, участие в проектировании GraphQL API, самостоятельные UX-решения по компонентам; микрофронтенд-архитектура на клиенте.",
    stack: "React · Redux · Redux-Thunk · Effector · GraphQL",
  },
];

export function ExperienceCard() {
  return (
    <Card>
      <Eyebrow>Опыт работы</Eyebrow>
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
        5+ лет в продуктовой разработке
      </h2>
      <div className="space-y-6">
        {JOBS.map((j) => (
          <div
            key={j.company}
            className="grid gap-1 border-l-2 border-border pl-5 sm:grid-cols-[160px_1fr] sm:gap-4"
          >
            <div className="font-mono text-xs text-muted-foreground sm:pt-1">
              {j.period}
            </div>
            <div>
              <h3 className="font-bold">
                {j.company}{" "}
                <span className="font-normal text-muted-foreground">
                  — {j.role}
                </span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{j.text}</p>
              <p className="mt-1.5 font-mono text-xs text-muted-foreground/80">
                {j.stack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------- STACK -------
const STACK_GROUPS = [
  {
    title: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Module Federation",
      "Webpack",
      "Vite",
      "React Query",
      "Redux / Effector",
      "React Hook Form + Zod",
      "Tailwind",
      "SASS / CSS Modules",
      "Storybook",
      "i18next / next-intl",
      "Framer Motion / GSAP",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express / Fastify",
      "MongoDB / Mongoose",
      "PostgreSQL",
      "Redis / BullMQ",
      "GraphQL",
      "REST API",
      "SSE / WebSocket",
      "JWT / Auth",
      "Go",
      "Микросервисы",
      "Cron",
    ],
  },
  {
    title: "Infra & Tooling",
    items: [
      "Docker",
      "Docker Swarm",
      "Docker Compose",
      "CI/CD",
      "GitHub Actions",
      "Traefik / Nginx",
      "Ansible",
      "Yandex Cloud",
      "Prometheus / Grafana",
      "Loki",
      "Nx monorepo",
      "Git",
    ],
  },
  {
    title: "Testing",
    items: [
      "TDD",
      "BDD (Gherkin)",
      "jest-cucumber",
      "Jest",
      "Testing Library",
      "Vitest",
      "Playwright",
      "MSW",
      "Unit / Integration",
      "E2E",
      "Coverage",
    ],
  },
  {
    title: "AI / Нейросети",
    items: [
      "Cursor",
      "Claude Code",
      "Anthropic API",
      "MCP-серверы",
      "LLM / RAG",
      "Эмбеддинги",
      "Векторный поиск",
      "Function calling",
      "AI-агенты",
      "Промпт-инжиниринг",
    ],
  },
];

export function StackCard() {
  return (
    <Card>
      <Eyebrow>Технологический стек</Eyebrow>
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Чем работаю
      </h2>
      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {STACK_GROUPS.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <Chip key={i}>{i}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        …и ещё много всего — быстро осваиваю новое под задачу.
      </p>
    </Card>
  );
}

// --------------------------------------------------------------- CONTACT ------
export function ContactCard() {
  const links = [
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
    { icon: GithubMark, label: "github.com/qstyle", href: GITHUB_URL },
    { icon: FileText, label: "Резюме на hh / PDF", href: HH_URL },
  ];
  return (
    <Card>
      <Eyebrow>Контакты</Eyebrow>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        Давайте&nbsp;поговорим
      </h2>
      <p className="mt-4 max-w-xl text-muted-foreground sm:text-lg">
        Открыт к предложениям. Frontend, fullstack, продуктовая разработка.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex items-center justify-between border border-border bg-background/40 px-4 py-3 transition-colors hover:bg-secondary"
          >
            <span className="flex items-center gap-3">
              <Icon className="size-4" />
              <span className="text-sm">{label}</span>
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
    </Card>
  );
}
