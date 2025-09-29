import { ArticleSection, MinimizedText, TitleSection, ProjectListSection } from "../components";
import { FooterSection } from "../components/footerSection";
import type { Project } from "../types/Project";

const Portfolio = () => {
  
  const projects: Project[] = [
    {
      source: "https://github.com/inkaudofalk/Trigraphic-GameEngineV1",
      image: "https://repository-images.githubusercontent.com/845072531/3bc3a97f-7d4c-4cbc-b61a-fb4ca234c8d4",
      title: undefined,
      description: undefined,
      details: "Gebaut als Konsolen-App. Fenster und Low-Level Grafik-Bibliothek über OpenTk (OpenGL4 Wrapper für C#), Bildimport über StbImageSharp und Import von Schriftaren über StbTrueTypeSharp. Nativer Import von 3D-Meshes über eigenes Dateiformat.",
      languages: undefined,
      date: undefined,
      preview: undefined,
    },
    {
      source: undefined,
      image: undefined,
      title: undefined,
      description: undefined,
      details: undefined,
      languages: undefined,
      date: undefined,
      preview: undefined,
    },
  ];

  return (
    <div className="dark:bg-black dark:text-white bg-white text-black transition-colors">
      
      <TitleSection lastUpdated="sept 25" />

      <ArticleSection title="Über Mich">
        Hallo,
        <br />
        <br />
        Mein Name ist Udo Falk, ich
        {new Date().getMonth() === 11 ? 
          ` werde diesen Monat ${new Date().getFullYear() - 2006} ` : ` bin ${new Date().getFullYear() - 2007} `
        } 
        Jahre alt, und interessiere mich für alles was mit Technik, Netzwerken und vor allem der Programmierung zu tun hat.
        <br />
        <br />
        In meiner Freizeit arbeite ich eigenständig an persönlichen Projekten, die von simplen Modifikationen an eimem Headset, 
        über das aufsetzen eines Homeservers, bis hin zum Entwicklen von Webanwendungen und Desktop-Apps reichen.
        <br />
        <br />
        Dabei macht es mir Spaß mich immer neuen Herausforderungen zu stellen, dabei den Umgang mit neuen Technologien und Techniken zu lernen 
        und so meine Fähigkeiten zu verbessern und zu erweitern.
        <br />
        <br />
        Nach dem Absolvieren meines Abiturs im Juli
        {new Date().getFullYear() === 2025 ? " diesen Jahres " : new Date().getFullYear() === 2026 ? " letzten Jahres " : " 2025 "}
        habe ich mich nun dazu entschieden, in meine Leidenschaft für die Felder der Informatik zu investieren und diese zum Beruf zu machen.
      </ArticleSection>

      <ArticleSection title="Meine Projekte">
        Meine Leidenschaft für die Informatik begann schon früh in der Unterstufe des Gymnasiums mit meinem ersten Computer und meinem großen Interesse an Videospielen, 
        dem schon bald die Bestrebungen folgten, ein eigenes Computerspiel zu entwickeln.
        <br />
        <br />
        Von diesem Punkt an tauchte ich mit der Zeit tiefer in die Welt der Desktop-Programmierung ein und drang auch in weitere Felder der Informatik vor.
        <br />
        <br />
        Seitdem arbeitete ich an zahllosen Programmierprojekten, wovon im folgenden ein kleiner Teil zu sehen ist.
        <br />
        <br />       
        <span className="opacity-50 block max-w-2xl">
          <MinimizedText buttonHint="Hinweis">
            Viele Projekte dienten über die Jahre hauptsächlich dazu, meine technischen Fähigkeiten herauszufordern und weiterzuentwickeln.
            <br />
            <br />
            Viele weitere verfolgten das simple Zeil, einfach etwas cooles zu programmieren.
            <br />
            <br />
            Der Fokus lag daher nicht darauf, eine Produktionsfertige Anwendung zu entwickeln, weswegen ich darum bitte, die folgenden
            Projekte eher als Work-In-Progress oder als Tech-Demo zu betrachten.
            <br />
            <br />
          </MinimizedText>
        </span>
      </ArticleSection>

      <ProjectListSection projects={projects} />

      <FooterSection />
    </div>
  );
}

export default Portfolio;