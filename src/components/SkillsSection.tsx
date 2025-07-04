import { useState, useEffect, useCallback} from "react"
import {Tabs} from "./tabs";
import {skills} from "../utils/skillsData";
import { TiltCard } from "./TiltCard";

interface TabItems {
  id: number;
  category: string;
}

const tabs: TabItems[] = [
	{
		id: 0,
		category: "All",
	},
	{
		id: 1,
		category: "Frontend",
	},
	{
		id: 2,
		category:"Backend",
	},
	{
		id:3,
		category: "Embedded",
	},
	{
		id: 4,
		category: "Tools",
	},
	{
		id: 5,
		category: "Mobile",
	}
]

export const SkillsSection = () => {
	const [category, setCategory] = useState<string>("All");

	const filteredSkills = skills.filter(skill =>
		category === "All" || skill.category === category
		);

	const handleCategoryChange = useCallback((newCategory: string) => {
			setCategory(newCategory);
	}, []);

		useEffect(() => {
		console.log(`Selected category: ${category}`);
		}, [category]);


  return (
		<section id="skills" className="py-24 px-4 relative">
			<div className="container max-w-5xl mx-auto">
				{""} 
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary animate-text"> Skills</span>
        </h2>
				<Tabs 
					tabs={tabs}
					setCategory={handleCategoryChange}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">					
					{filteredSkills.map((skill, key) =>(
						<TiltCard key={key} className="p-0.5 hover:scale-[1.12]">
							      <div className="hover:animate-border-rotate
                      hover:bg-conic/[from_var(--border-angle)]
                      via-primary to-purple-400 from-70% via-85% to-100%
                      p-0.5 rounded-lg relative
                      size-full">
								<div className="bg-card size-full p-5 rounded-lg shadow-xs">
									<div className="text-left mb-4">
										<h3 className="font-semibold text-lg"> {skill.skill}</h3>
									</div>
									<div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
										<div
											className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
											style={{ width: skill.level + "%" }}
										/>
									</div>
									<div className="text-right mt-1">
										<span className="text-sm text-muted-foreground">
											{skill.level}%
										</span>
									</div>

								</div>

							</div>
						</TiltCard>
					))}			
				</div>
			</div>

		</section>
  );
}