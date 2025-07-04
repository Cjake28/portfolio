import { UserPlus , Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Developer & Maker
            </h3>

            <p className="text-muted-foreground">
              I’m a Computer Engineering graduate who loves building both web services 
              and hardware prototypes. From crafting RESTful APIs to tinkering 
              with ESP32 and Raspberry Pi, I enjoy working across the stack.
            </p>
            
            <p className="text-muted-foreground">
              As a freelance developer, I’ve helped small teams and entrepreneurs 
              bring ideas to life—from full‑stack demos to embedded IoT 
              devices—and I’m always up for the next challenge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Christian_Jake_Supnet_CV.pdf"
                download="Supnet_CV.pdf"
                className="px-6 py-2 rounded-full cosmic-button animate-text hover:text-glow"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
						
            <div className="group gradient-border p-6 relative hover:card-shadow">
							<div className="flex items-start  gap-4 group-hover:text-glow">
									<div className="p-3 rounded-full bg-primary/10">
										<Code className="h-6 w-6 text-primary" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold text-lg group-hover:text-primary"> FullStack Development</h4>
										<p className="text-muted-foreground group-hover:animate-text">
											Building responsive front‑ends with React and secure back‑end services
										</p>
									</div>
							</div>
            </div>

            <div className=" gradient-border p-6 group hover:card-shadow relative">
								<div className="flex items-start gap-4 group-hover:text-glow">
									<div className="p-3 rounded-full bg-primary/10">
										<Cpu className="h-6 w-6 text-primary" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold text-lg group-hover:text-primary">Embedded Systems & IoT</h4>
										<p className="text-muted-foreground group-hover:animate-text">
											Building reliable ESP32 & Raspberry Pi–based embedded systems.
										</p>
									</div>
              </div>
            </div>
            <div className="group gradient-border p-6 card-shadow">
              <div className="flex items-start gap-4 group-hover:text-glow">
                <div className="p-3 rounded-full bg-primary/10">
                  <UserPlus  className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg group-hover:text-primary">Freelance Collaboration</h4>
                  <p className="text-muted-foreground group-hover:animate-text">
                    Delivering MVPs and iterating on feedback—on time, on budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};