import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Projects from "./sections/Projects";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="min-h-screen flex flex-col items-center text-center p-8 pb-20">
      <header>
        <h1>{t("title")}</h1>
        <Link href="/about">{t("about")}</Link>
      </header>
      <nav></nav>
      <main>
        <Projects />
      </main>
      <footer></footer>
    </div>
  );
}
