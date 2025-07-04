type SkillCategory = "Frontend" | "Backend" | "Tools" | "Mobile" | "Embedded";

interface Skill {
    category: SkillCategory;
    skill: string;
    level?: number; // Optional for frontend skills}
}
 export const skills: Skill[] = [
    // Frontend Skills
    {category: "Frontend", skill: "HTML/CSS", level: 90},
    {category: "Frontend", skill: "JavaScript", level: 90},
    {category: "Frontend", skill: "TypeScript", level: 70},
    {category: "Frontend", skill: "ReactJS", level: 90},
    {category: "Frontend", skill: "NextJS", level: 50},
    {category: "Frontend", skill: "Tailwind CSS", level: 65},
    {category: "Frontend", skill: "Material UI", level: 60},
		{category: "Frontend", skill: "Google Maps API", level: 70 },
    {category: "Frontend", skill: "React Query", level: 60 },

    //Backend
    {category: "Backend", skill: "NodeJS", level: 85},
    {category: "Backend", skill: "ExpressJS", level: 90},
    {category: "Backend", skill: "NestJS", level: 60},
    {category: "Backend", skill: "Flask", level: 60},
    {category: "Backend", skill: "REST APIs", level: 90},
    {category: "Backend", skill: "MYSQL", level: 85},
    {category: "Backend", skill: "Firebase", level: 75},
		{category: "Backend", skill: "WebSockets", level: 75 },
		{category: "Backend", skill: "Microservices", level: 60},
		{category: "Backend", skill: "JWT", level: 85 },
    

    //tools
    {category: "Tools", skill: "Docker", level: 70},
    {category: "Tools", skill: "Git", level: 90},
    {category: "Tools", skill: "Postman", level: 80},
    {category: "Tools", skill: "Github", level: 90},
    {category: "Tools", skill: "VSCode", level: 90},


    //embedded
    {category: "Embedded", skill: "Arduino", level: 95},
    {category: "Embedded", skill: "Raspberry Pi", level: 85},
    {category: "Embedded", skill: "ESP32/ESP8266", level: 95},
    {category: "Embedded", skill: "FreeRtos", level: 75},

    // Mobile
    {category: "Mobile", skill: "React Native", level: 80},
    {category: "Mobile", skill: "Native Wind", level: 70},
]   