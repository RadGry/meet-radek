import { content } from "@/lib/content";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import HumanStuff from "@/components/HumanStuff";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero
        name={content.profile.name}
        tagline={content.profile.tagline}
        roleTags={content.profile.roleTags}
      />
      <Story heading={content.story.heading} body={content.story.body} stats={content.stats} />
      <Projects projects={content.projects} />
      <Experience entries={content.experience} />
      <Skills skills={content.skills} />
      <HumanStuff interests={content.interests} />
      <Contact
        heading={content.contact.heading}
        body={content.contact.body}
        email={content.contact.email}
        linkedin={content.contact.linkedin}
      />
    </main>
  );
}
