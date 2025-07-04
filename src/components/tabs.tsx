import {useState, useEffect, useRef} from "react";

interface TabItem {
  id: number;
  category: string;
}

interface TabsProps {
  tabs: TabItem[];
	setCategory: (category: string) => void; // Uncomment if you need to pass a function to handle category changes
}
export const Tabs = ({tabs, setCategory}: TabsProps) => {
	const tabRef = useRef<HTMLDivElement | null>(null);
	const [tabWidth, setTabWidth] = useState<number>(0);
	const [currentTab, setCurrentTab] = useState<number>(0);

	const updateTabWidth = () => {
		const parentWidth = tabRef.current?.getBoundingClientRect().width;
		const numberOfTabs = tabs.length;
		const newTabWidth = parentWidth ? parentWidth / numberOfTabs : 0;
		setTabWidth(newTabWidth);	
	}
	
	
	useEffect(() => {
		const resizeObserver = new ResizeObserver(updateTabWidth);
		if (tabRef.current) {
			resizeObserver.observe(tabRef.current);
		}
	
		return () => {
			if (tabRef.current) {
				resizeObserver.unobserve(tabRef.current);
			}
		};
	}, [tabs.length]);

    return(
			<div 
				className=" hidden md:flex gradient-border  w-[100%] lg:w-[85%] relative mx-auto  items-center justify-between mb-8"
				ref={tabRef}
			>
				{tabs.map((tab, index) => {
					return(
						<button
							className="realative py-3 text-sm font-semibold hover:cursor-pointer"
							style={{
								width: tabWidth,
							}}
							key={index}
							onClick={() => {
								setCurrentTab(tab.id);
								setCategory(tab.category); // Uncomment if you need to set the category
								console.log(`Clicked on tab: ${tab.category}`);
							}}
						>
							{tab.category}
						</button>
					);
				})}
				<div 
					className=" absolute inset-0 bg-primary rounded-md mix-blend-screen transition-all duration-700 ease-in-out"
					style={{
						width: tabWidth,
						translate: `${currentTab * tabWidth}px 0px`
					}}
				/>
		</div>
	);
}