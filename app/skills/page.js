"use client";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaBootstrap,
  FaAngular,
} from "react-icons/fa";
import { DiCss3, DiJsBadge, DiMongodb, DiPhp, DiPython } from "react-icons/di";
import {
  SiTypescript,
  SiAngular,
  SiMysql,
  SiFigma,
  SiPostman,
  SiTailwindcss,
  SiAdobephotoshop,
  SiJirasoftware,
  SiVercel,
  SiExpress,
  SiFirebase,
  SiSequelize,
  SiIonic,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-[var(--color-background)] text-[var(--color-text-primary)] px-6 pt-16 pb-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4"> 
          My Skills
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
          Below are the technologies and tools I've worked with, categorized by areas of expertise.
        </p>
      </header>

      {/* Frontend Section */}
      <section className="mt-10 w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Frontend Development
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<FaReact />}
            label="React"
            color="text-blue-500"
            level="Intermediate"
          />
          <SkillCard
            icon={<RiNextjsFill />}
            label="Next.js"
            color="text-gray-800"
            level="Intermediate"
          />
          <SkillCard
            icon={<FaHtml5 />}
            label="HTML5"
            color="text-orange-500"
            level="Expert"
          />
          <SkillCard
            icon={<DiCss3 />}
            label="CSS"
            color="text-blue-400"
            level="Intermediate"
          />
          <SkillCard
            icon={<SiTailwindcss />}
            label="Tailwind CSS"
            color="text-teal-500"
            level="Beginner"
          />
          <SkillCard
            icon={<DiJsBadge />}
            label="JavaScript"
            color="text-yellow-400"
            level="Intermediate"
          />
          <SkillCard
            icon={<SiTypescript />}
            label="TypeScript"
            color="text-blue-500"
            level="Beginner"
          />
          <SkillCard
            icon={<FaAngular />}
            label="Angular"
            color="text-red-500"
            level="Beginner"
          />
           <SkillCard
            icon={<FaBootstrap />}
            label="Bootstrap"
            color="text-purple-500"
            level="Expert"
          />
           <SkillCard
            icon={<SiIonic />}
            label="Ionic"
            color="text-blue-400"
            level="Beginner"
          />
          <SkillCard
            icon={<TbBrandReactNative />}
            label="React Native"
            color="text-blue-200"
            level="Intermediate"
          />
          <SkillCard
            icon={<SiFigma />}
            label="Figma"
            color="text-pink-500"
            level="Expert"
          />
          <SkillCard
            icon={<SiAdobephotoshop />}
            label="Photoshop"
            color="text-blue-900"
            level="Beginner"
          />
        </div>
      </section>

      {/* Backend Section */}
      <section className="mt-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Backend Development
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<FaNodeJs />}
            label="Node.js"
            color="text-green-500"
            level="Intermediate"
          />
          <SkillCard
            icon={<SiExpress />}
            label="Express.js"
            color="text-gray-500"
            level="Beginner"
          />
          <SkillCard
            icon={<DiPython />}
            label="Python"
            color="text-blue-400"
            level="Beginner"
          />
           <SkillCard
            icon={<DiPhp />}
            label="Php"
            color="text-purple-600"
            level="Beginner"
          />
          <SkillCard
            icon={<SiMysql />}
            label="MySQL"
            color="text-blue-500"
            level="Intermediate"
          />
          <SkillCard
            icon={<DiMongodb />}
            label="MongoDB"
            color="text-green-500"
            level="Intermediate"
          />
          <SkillCard
            icon={<SiFirebase />}
            label="Firebase"
            color="text-orange-500"
            level="Intermediate"
          />
          <SkillCard
            icon={<SiSequelize />}
            label="Sequelize"
            color="text-blue-500"
            level="Expert"
          />
        </div>
      </section>

      {/* Tools Section */}
      <section className="mt-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Others
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<FaGitAlt />}
            label="Git"
            color="text-orange-400"
            level="Expert"
          />
          <SkillCard
            icon={<FaGithub />}
            label="GitHub"
            color="text-gray-400"
            level="Expert"
          />
          <SkillCard
            icon={<SiPostman />}
            label="Postman"
            color="text-orange-500"
            level="Intermediate"
          />
          <SkillCard
            icon={<SiJirasoftware />}
            label="Jira"
            color="text-blue-400"
            level="Intermediate"
          />
          <SkillCard
            icon={<SiVercel />}
            label="Vercel"
            color="text-white-500"
            level="Intermediate"
          />
          <SkillCard
            icon={
              <img
                src="https://clickup.com/images/for-se-page/clickup.png"
                alt="ClickUp Logo"
                className="w-12 h-12"
              />
            }
            label="ClickUp"
            level="Intermediate"
          />
          <SkillCard
            icon={
              <img
                src="https://raw.githubusercontent.com/expo/expo/f9daf2b387e5c632248f6cedbaedbc5f07c9bd99/.github/resources/banner.png"
                alt="Expo Logo"
                className="w-12 h-12"
              />
            }
            label="Expo"
            level="Beginner"
          />
           <SkillCard
            icon={
              <img
                src="https://cdn-cashy-static-assets.lucidchart.com/app/webroot/favicons/favicon_chart_v5.ico"
                alt="Lucidchart Logo"
                className="w-12 h-12"
              />
            }
            label="Lucidchart"
            level="Beginner"
          />
           <SkillCard
            icon={
              <img
                src="https://static-00.iconduck.com/assets.00/marvel-icon-2048x1417-bzexe0pv.png"
                alt="Marvelapp Logo"
                className="w-12 h-12"
              />
            }
            label="Marvelapp"
            level="Beginner"
          />
        </div>
      </section>
    </main>
  );
}

function SkillCard({ icon, label, color, level }) {
  return (
    <div className="bg-[var(--color-card)] text-[var(--color-text-primary)] rounded-lg p-4 text-center shadow-md transform hover:scale-105 transition-transform">
      <div className={`text-5xl mb-4 ${color}`}>{icon}</div>
      <h3 className="text-lg font-bold">{label}</h3>
      <p className="text-sm text-[var(--color-text-secondary)]">{level} Level</p>
    </div>
  );
}

