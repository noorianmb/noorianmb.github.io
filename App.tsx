
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import SkillBadge from './components/SkillBadge';
import Icon from './components/Icon';
import type { Experience, SkillCategory } from './types';

const summaryData: string = "Passionate Android Developer with 7+ years of experience across diverse domains like Banking, E-commerce, and Healthcare. Adept in Kotlin, Java, and Clean Architecture. Thrive in Agile environments and possess a strong ability to learn new technologies. Eager to contribute my skills to a challenging and rewarding opportunity.";

const experiencesData: Experience[] = [
  {
    role: "Senior Android Engineer",
    company: "Dotin",
    period: "Oct 2021 - Present",
    duration: "3y 2m",
    description: "Dotin is a leading software company specializing in banking and insurance solutions, serving over 11 million users with a team of +1700 skilled professionals.",
    tasks: [
      "Led the successful implementation of Jetpack Compose, Clean Architecture, and MVI within Agile development, ensuring optimal performance and a superior user experience.",
      "Improved the project's structure across 5 features by implementing clean architecture, enhancing code maintainability, scalability, and reusability.",
      "Utilized Dexguard for app obfuscation, resulting in a 43% decrease in the risk of security attacks, validated by the Security team's report.",
      "Designed and deployed 40+ reusable UI components, significantly reducing delivery time by 30%.",
      "Developed and implemented NFC payment functionality, enabling seamless cross-border transactions and allowing users to make payments in local currencies while abroad."
    ]
  },
  {
    role: "Android Developer",
    company: "Doornama",
    period: "Aug 2019 - Oct 2021",
    duration: "2y 3m",
    description: "Doornama provides software solutions for medical startups and e-commerce businesses.",
    tasks: [
      "Developed and maintained Android applications for ZamanHospital (healthcare system) and SamanSough (product marketplace), meeting client requirements.",
      "Implemented cutting-edge features using MVVM architecture, Kotlin, RXJava for reactive programming, and Room for data persistence.",
      "Conducted unit testing and integration testing to validate application functionality.",
      "Refactored over 160 Java classes into Kotlin, resulting in a 32% increase in code readability, reduced development time, and enhanced maintenance efficiency.",
      "Provided mentorship to 2 junior developers, fostering best coding practices and professional growth."
    ]
  },
  {
    role: "Android Developer",
    company: "Radicloud",
    period: "Aug 2016 - Aug 2019",
    duration: "3y 1m",
    description: "RadiCloud is a software company that provides three startups specializing in online food sales and distribution, student management systems, and airline ticket and travel sales.",
    tasks: [
      "Contributed to the development and maintenance of Android applications for Dehkade (B2C e-commerce), Faraghat Portal (youth camp management), and MarcoSafar (all-in-one travel ticketing).",
      "Optimized build time by 40% with a modular structure, saving valuable development time.",
      "Developed and integrated new features using MVVM, Kotlin, RXJava, and Room.",
      "Collaborated with senior developers on projects using MVP architecture, Java, RESTful with Volley, SQLite, and NFC, including multithreading with AsyncTask and Java Thread API."
    ]
  }
];

const skillsData: SkillCategory[] = [
    { title: "Languages", skills: ["Kotlin", "Java"] },
    { title: "Software principles", skills: ["OOP", "SOLID"] },
    { title: "Software Architectural Patterns", skills: ["Clean Architecture", "MVI", "MVVM"] },
    { title: "Methodologies", skills: ["Agile", "Scrum"] },
    { title: "UI Development", skills: ["Jetpack Compose", "XML"] },
    { title: "Dependency Injection", skills: ["Hilt", "Dagger"] },
    { title: "Testing", skills: ["Junit", "Espresso", "Mockk", "Mockito"] },
    { title: "Asynchronous Programming", skills: ["Coroutines", "Flow", "RX", "AsyncTask"] },
    { title: "Version Control", skills: ["Git"] },
    { title: "Database", skills: ["Room", "SQLite"] },
    { title: "Sensor", skills: ["Location", "NFC", "Fingerprint"] },
    { title: "Security", skills: ["DexGuard", "ProGuard", "Encryption"] }
];

const App: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-700">
            <Header />
            <main className="max-w-4xl mx-auto px-6 pb-16">
                <Section title="Summary" icon="person">
                    <p className="text-lg leading-relaxed">{summaryData}</p>
                </Section>

                <Section title="Experience" icon="work">
                    {experiencesData.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} />
                    ))}
                </Section>

                <Section title="Technical Skills" icon="terminal">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        {skillsData.map((category, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                                <h4 className="font-bold text-slate-800 mb-2">{category.title}:</h4>
                                <div>
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillBadge key={skillIndex} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                            <Icon name="school" className="text-teal-500 mr-3 text-3xl" />
                            Education
                        </h2>
                        <h3 className="text-xl font-bold text-slate-900">Computer Software Engineering</h3>
                        <p className="text-lg font-semibold text-teal-600">Bachelor's degree, Ilam University</p>
                        <p className="text-slate-500 mt-1">Sep 2012 - Jul 2015</p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                             <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                                <Icon name="language" className="text-teal-500 mr-3 text-3xl" />
                                Language
                            </h2>
                            <p className="text-lg">English & Persian</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                             <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                                <Icon name="rocket_launch" className="text-teal-500 mr-3 text-3xl" />
                                Activities
                            </h2>
                            <ul className="list-none space-y-2">
                                <li className="flex items-center"><Icon name="group" className="text-teal-500 mr-2"/> Mentorship and Training</li>
                                <li className="flex items-center"><Icon name="campaign" className="text-teal-500 mr-2"/> Speaker at Startup Events</li>
                                <li className="flex items-center"><Icon name="biotech" className="text-teal-500 mr-2"/> Led Internal Tech Discussions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-center py-6 bg-slate-800 text-slate-400 mt-8">
                <p>&copy; {new Date().getFullYear()} M. Bagher Noorian. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
