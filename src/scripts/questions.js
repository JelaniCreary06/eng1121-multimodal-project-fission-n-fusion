let allQuestions = [
  {
    q: "What is the primary byproduct of nuclear fusion involving hydrogen isotopes?",
    a: ["Carbon dioxide", "Helium", "Uranium", "Plutonium"],
    c: 1,
    exp: "Fusion reactions using hydrogen isotopes primarily produce helium as a harmless byproduct.",
    difficulty: "easy"
  },
  {
    q: "Which isotope of hydrogen is commonly used in fusion experiments?",
    a: ["Protium", "Deuterium", "Tritium", "Hydronium"],
    c: 2,
    exp: "Tritium, along with deuterium, is often used in experimental fusion due to its favorable reaction properties.",
    difficulty: "medium"
  },
  {
    q: "Which fusion reaction is considered most promising for power generation?",
    a: ["Deuterium-Deuterium", "Deuterium-Tritium", "Tritium-Tritium", "Hydrogen-Helium"],
    c: 1,
    exp: "Deuterium-Tritium fusion is currently the most promising due to its high energy output and achievable reaction conditions.",
    difficulty: "hard"
  },
  {
    q: "How does nuclear fission differ from fusion in terms of energy input?",
    a: ["Fission requires more energy to start", "Fusion requires more energy to initiate", "Both require equal energy", "Neither needs energy input"],
    c: 1,
    exp: "Fusion requires extremely high temperatures to overcome repulsive forces between nuclei, making it harder to initiate.",
    difficulty: "medium"
  },
  {
    q: "What is the 'Coulomb barrier' in nuclear fusion?",
    a: ["The waste from fusion", "A type of reactor", "Electrostatic repulsion between nuclei", "A physical wall in reactors"],
    c: 2,
    exp: "The Coulomb barrier refers to the repulsive force between positively charged nuclei that must be overcome to allow fusion.",
    difficulty: "medium"
  },
  {
    q: "What international treaty limits the use of nuclear weapons?",
    a: ["Kyoto Protocol", "Nuclear Non-Proliferation Treaty", "Geneva Convention", "Paris Agreement"],
    c: 1,
    exp: "The Nuclear Non-Proliferation Treaty aims to prevent the spread of nuclear weapons and promote peaceful uses of nuclear energy.",
    difficulty: "easy"
  },
  {
    q: "What is a benefit of using thorium in fission reactors?",
    a: ["It produces more plutonium", "It has a shorter half-life", "It’s more abundant and produces less long-lived waste", "It requires no cooling"],
    c: 2,
    exp: "Thorium is more abundant than uranium and generates less long-lived radioactive waste when used in reactors.",
    difficulty: "medium"
  },
  {
    q: "Which type of radiation is most penetrating?",
    a: ["Alpha", "Beta", "Gamma", "Neutron"],
    c: 2,
    exp: "Gamma radiation is highly penetrating and requires thick shielding to block.",
    difficulty: "medium"
  },
  {
    q: "Which particle is released in both fission and fusion reactions?",
    a: ["Electron", "Photon", "Neutron", "Proton"],
    c: 2,
    exp: "Neutrons are released in both fusion and fission reactions and often play a key role in sustaining reactions.",
    difficulty: "medium"
  },
  {
    q: "Why is plasma essential in fusion?",
    a: ["It cools the core", "It prevents radiation", "It allows nuclei to move freely for collision", "It reflects light"],
    c: 2,
    exp: "Fusion occurs in plasma because it's an ionized gas where nuclei can move and collide under high temperature and pressure.",
    difficulty: "medium"
  },
  {
    q: "Which process, fission or fusion, occurs in hydrogen bombs?",
    a: ["Fission only", "Fusion only", "Both", "Neither"],
    c: 2,
    exp: "Hydrogen bombs use fission to trigger a fusion reaction, combining both processes for a massive explosion.",
    difficulty: "hard"
  },
  {
    q: "What do control rods do in a fission reactor?",
    a: ["Increase temperature", "Absorb neutrons to control the chain reaction", "Cool the reactor", "Generate electricity"],
    c: 1,
    exp: "Control rods absorb neutrons and help regulate or stop the nuclear chain reaction.",
    difficulty: "easy"
  },
  {
    q: "What element is commonly used in fusion as fuel besides hydrogen isotopes?",
    a: ["Plutonium", "Helium-3", "Boron", "Nitrogen"],
    c: 1,
    exp: "Helium-3 is a potential future fusion fuel because of its clean energy output and low radiation production.",
    difficulty: "hard"
  },
  {
    q: "Which has more radioactive waste: fission or fusion?",
    a: ["Fission", "Fusion", "Equal", "Neither"],
    c: 0,
    exp: "Fission generates more radioactive waste compared to fusion, which produces minimal long-lived waste.",
    difficulty: "medium"
  },
  {
    q: "What is tritium's atomic structure?",
    a: ["1 proton, 2 neutrons", "1 proton, 1 neutron", "2 protons, 1 neutron", "2 protons, 2 neutrons"],
    c: 0,
    exp: "Tritium has 1 proton and 2 neutrons, making it a heavy isotope of hydrogen.",
    difficulty: "medium"
  },
  {
    q: "Why is fusion considered safer than fission?",
    a: ["It can’t release radiation", "It’s already used safely", "It doesn’t risk runaway chain reactions", "It’s completely renewable"],
    c: 2,
    exp: "Fusion reactions are inherently safe since they require extreme conditions and stop naturally if containment fails.",
    difficulty: "medium"
  },
  {
    q: "What is the primary energy source of stars?",
    a: ["Combustion", "Fission", "Fusion", "Gravitational collapse"],
    c: 2,
    exp: "Stars like the Sun shine due to nuclear fusion of hydrogen into helium in their cores.",
    difficulty: "easy"
  },
  {
    q: "Which of these is NOT used in fusion experiments?",
    a: ["Tokamak", "Stellarator", "Pressurized water reactor", "Laser confinement"],
    c: 2,
    exp: "Pressurized water reactors are used for fission, not fusion. Tokamaks and stellarators are for fusion.",
    difficulty: "medium"
  },
  {
    q: "What does ITER stand for?",
    a: ["International Tokamak Energy Reactor", "International Thermonuclear Experimental Reactor", "Ionic Thermal Energy Reactor", "Integrated Tokamak Energy Research"],
    c: 1,
    exp: "ITER stands for International Thermonuclear Experimental Reactor—a large-scale fusion research facility.",
    difficulty: "medium"
  },
  {
    q: "What happens to mass in a nuclear reaction?",
    a: ["It disappears", "It increases", "Some mass is converted into energy", "Mass is constant"],
    c: 2,
    exp: "In nuclear reactions, a small amount of mass is converted into energy following Einstein’s E=mc².",
    difficulty: "medium"
  },//set 8
  {
    q: "Which process is more common in nuclear power plants today?",
    a: ["Fusion", "Fission", "Combustion", "Radiation"],
    c: 1,
    exp: "Nuclear fission is the process used in current nuclear power plants to generate electricity.",
    difficulty: "easy"
  },
  {
    q: "Which of the following is NOT a challenge of nuclear fusion?",
    a: ["High operational temperatures", "Radiation shielding", "Plasma confinement", "Carbon emissions"],
    c: 3,
    exp: "Fusion doesn't produce carbon emissions, making it environmentally friendly.",
    difficulty: "medium"
  },
  {
    q: "Why is helium often produced in nuclear fusion reactions?",
    a: ["It's used as a catalyst", "It’s the result of combining hydrogen isotopes", "It powers the reactor", "It absorbs radiation"],
    c: 1,
    exp: "Fusion of deuterium and tritium produces helium and a neutron.",
    difficulty: "medium"
  },
  {
    q: "What is the main goal of nuclear fusion research?",
    a: ["Create radioactive materials", "Develop new weapons", "Provide clean and limitless energy", "Reduce sunlight dependency"],
    c: 2,
    exp: "Fusion aims to generate clean, abundant energy with minimal environmental impact.",
    difficulty: "easy"
  },
  {
    q: "What is the source of energy in the sun?",
    a: ["Nuclear fission", "Solar panels", "Nuclear fusion", "Radioactive decay"],
    c: 2,
    exp: "The sun produces energy through nuclear fusion, fusing hydrogen into helium.",
    difficulty: "medium"
  },
  {
    q: "Which nuclear process is considered cleaner and safer?",
    a: ["Combustion", "Fission", "Fusion", "Fracking"],
    c: 2,
    exp: "Fusion produces minimal radioactive waste and carries a lower meltdown risk.",
    difficulty: "medium"
  },
  {
    q: "How do fusion reactions affect the environment compared to fission?",
    a: ["They release greenhouse gases", "They produce long-lived radioactive waste", "They are more polluting", "They are cleaner with less long-lived waste"],
    c: 3,
    exp: "Fusion is considered more environmentally friendly with less problematic waste.",
    difficulty: "medium"
  },
  {
    q: "What is a fusion reactor prototype being developed in the UK?",
    a: ["ITER", "SPARC", "JET", "DEMO"],
    c: 2,
    exp: "JET (Joint European Torus) is a major fusion research facility based in the UK.",
    difficulty: "hard"
  },
  {
    q: "What role do magnetic fields play in fusion reactors?",
    a: ["They cool the plasma", "They contain the plasma", "They produce electricity", "They split atoms"],
    c: 1,
    exp: "Strong magnetic fields are used to contain the superheated plasma in fusion reactors.",
    difficulty: "medium"
  },
  {
    q: "What fusion fuel is abundant in seawater?",
    a: ["Tritium", "Plutonium", "Deuterium", "Uranium"],
    c: 2,
    exp: "Deuterium is found in water and is considered a virtually limitless fuel source for fusion.",
    difficulty: "medium"
  },
  {
    q: "Why is nuclear waste from fission a concern?",
    a: ["It's explosive", "It's highly flammable", "It remains radioactive for thousands of years", "It's biodegradable"],
    c: 2,
    exp: "Fission waste can remain hazardous for thousands of years, requiring secure storage.",
    difficulty: "medium"
  },
  {
    q: "What causes a meltdown in a fission reactor?",
    a: ["Excessive plasma", "Too much deuterium", "Loss of coolant and uncontrolled heating", "Magnetic failure"],
    c: 2,
    exp: "If cooling fails in a fission reactor, the core can overheat and melt, causing a meltdown.",
    difficulty: "medium"
  },
  {
    q: "Which is a common coolant in fission reactors?",
    a: ["Liquid nitrogen", "Water", "Liquid helium", "Carbon dioxide"],
    c: 1,
    exp: "Water is typically used to cool and moderate the reaction in fission reactors.",
    difficulty: "easy"
  },
  {
    q: "What energy equation explains mass-to-energy conversion in nuclear reactions?",
    a: ["F=ma", "E=hv", "E=mc²", "PV=nRT"],
    c: 2,
    exp: "Einstein’s equation E=mc² shows how mass is converted into energy in nuclear reactions.",
    difficulty: "medium"
  },
  {
    q: "Which of these is a challenge for scaling up fusion energy?",
    a: ["Fuel cost", "Overproduction", "Plasma instability", "Radiation shielding"],
    c: 2,
    exp: "Maintaining stable plasma at extreme temperatures remains a major fusion challenge.",
    difficulty: "hard"
  },
  {
    q: "What is a neutron’s role in a fission chain reaction?",
    a: ["It absorbs heat", "It causes atoms to fuse", "It splits more nuclei", "It stabilizes the core"],
    c: 2,
    exp: "Neutrons released during fission continue the reaction by splitting other nuclei.",
    difficulty: "medium"
  },
  {
    q: "Why don’t we use fusion in homes today?",
    a: ["It’s illegal", "It’s not discovered", "We can't yet build small, safe, sustained reactors", "It produces toxic gas"],
    c: 2,
    exp: "Fusion is not yet commercially viable due to technical limitations, not safety or legality.",
    difficulty: "hard"
  },
  {
    q: "What makes fusion energy 'limitless'?",
    a: ["It generates infinite waste", "It’s derived from common elements like hydrogen", "It creates infinite mass", "It regenerates fuel"],
    c: 1,
    exp: "Hydrogen isotopes used in fusion are plentiful in nature, making fusion energy effectively limitless.",
    difficulty: "medium"
  },
  {
    q: "What happens if a fusion reactor’s magnetic field fails?",
    a: ["Explosion", "Meltdown", "Plasma disperses and reaction stops", "Radiation leak"],
    c: 2,
    exp: "Fusion reactions are self-limiting; if containment fails, the reaction stops safely.",
    difficulty: "medium"
  },
  {
    q: "Why is controlling fusion power important for the future?",
    a: ["It replaces food", "It offers clean energy with no emissions", "It powers diesel engines", "It helps grow crops"],
    c: 1,
    exp: "Fusion promises a clean, sustainable energy source with minimal environmental footprint.",
    difficulty: "easy"
  },//set 7
  {
    q: "What is the primary fuel used in most nuclear fission reactors?",
    a: ["Uranium-235", "Plutonium-240", "Hydrogen", "Carbon"],
    c: 0,
    exp: "Uranium-235 is widely used in nuclear fission reactors due to its ability to sustain a chain reaction.",
    difficulty: "easy"
  },
  {
    q: "What are the two main isotopes used in nuclear fusion research?",
    a: ["Uranium and Plutonium", "Hydrogen and Helium", "Deuterium and Tritium", "Oxygen and Nitrogen"],
    c: 2,
    exp: "Deuterium and Tritium, isotopes of hydrogen, are the primary fuels for nuclear fusion.",
    difficulty: "medium"
  },
  {
    q: "What type of nuclear reaction occurs in an atomic bomb?",
    a: ["Fusion", "Fission", "Combustion", "Radioactive decay"],
    c: 1,
    exp: "Atomic bombs rely on uncontrolled nuclear fission to release massive energy.",
    difficulty: "medium"
  },
  {
    q: "Why is tritium difficult to obtain for fusion?",
    a: ["It decays quickly", "It is toxic", "It is only found in stars", "It reacts with helium"],
    c: 0,
    exp: "Tritium is radioactive and decays quickly, making it rare and hard to source naturally.",
    difficulty: "medium"
  },
  {
    q: "What does the acronym ITER stand for?",
    a: ["International Thermonuclear Experimental Reactor", "Internal Temperature Energy Reactor", "Ion Transport and Energy Reactor", "International Technology for Energy Research"],
    c: 0,
    exp: "ITER stands for International Thermonuclear Experimental Reactor, a global project for nuclear fusion research.",
    difficulty: "hard"
  },
  {
    q: "What particles are released during a fission reaction?",
    a: ["Electrons", "Neutrons", "Protons", "Alpha particles"],
    c: 1,
    exp: "Fission reactions release free neutrons, which can initiate further reactions in a chain.",
    difficulty: "medium"
  },
  {
    q: "What is the role of a moderator in a nuclear reactor?",
    a: ["Accelerate neutrons", "Control temperature", "Slow down neutrons", "Absorb radiation"],
    c: 2,
    exp: "Moderators slow down neutrons so they are more likely to cause fission in Uranium-235.",
    difficulty: "medium"
  },
  {
    q: "Which element is most commonly used in nuclear fission reactions?",
    a: ["Thorium", "Plutonium", "Uranium", "Hydrogen"],
    c: 2,
    exp: "Uranium, specifically Uranium-235, is the most commonly used element in fission reactors.",
    difficulty: "easy"
  },
  {
    q: "What is a tokamak?",
    a: ["A fusion fuel", "A type of fission reactor", "A magnetic confinement device", "A type of particle detector"],
    c: 2,
    exp: "A tokamak is a device that uses magnetic fields to confine plasma for nuclear fusion.",
    difficulty: "hard"
  },
  {
    q: "How does nuclear fusion generate energy?",
    a: ["By burning hydrogen", "By splitting heavy atoms", "By combining light nuclei into heavier ones", "By absorbing neutrons"],
    c: 2,
    exp: "Fusion generates energy by combining light atomic nuclei into heavier ones, releasing energy in the process.",
    difficulty: "medium"
  },
  {
    q: "What is the main byproduct of nuclear fission that poses waste disposal challenges?",
    a: ["Water vapor", "Carbon dioxide", "Radioactive isotopes", "Helium"],
    c: 2,
    exp: "Fission produces radioactive isotopes as waste, which require careful long-term disposal.",
    difficulty: "medium"
  },
  {
    q: "What is plasma in the context of nuclear fusion?",
    a: ["A solid fuel", "A gas of charged particles", "Frozen deuterium", "Nuclear waste"],
    c: 1,
    exp: "In fusion, plasma is a hot, ionized gas of charged particles necessary to sustain the reaction.",
    difficulty: "medium"
  },
  {
    q: "How hot must a fusion reactor be to sustain a reaction?",
    a: ["100°C", "1,000°C", "10,000°C", "Over 100 million °C"],
    c: 3,
    exp: "Fusion requires temperatures over 100 million °C to overcome the repulsive forces between nuclei.",
    difficulty: "hard"
  },
  {
    q: "Why is nuclear fusion considered safer than fission?",
    a: ["It uses solid fuels", "It doesn't produce energy", "It produces less radioactive waste and can't cause meltdowns", "It occurs at lower temperatures"],
    c: 2,
    exp: "Fusion reactions don't produce long-lived radioactive waste and have no risk of runaway reactions.",
    difficulty: "medium"
  },
  {
    q: "What is the primary challenge with achieving controlled nuclear fusion?",
    a: ["Fuel availability", "Containment of extremely hot plasma", "Regulations", "Lack of research"],
    c: 1,
    exp: "Containing the superheated plasma needed for fusion is one of the biggest technical challenges.",
    difficulty: "hard"
  },
  {
    q: "Which nuclear process releases more energy per reaction: fission or fusion?",
    a: ["Fission", "Fusion", "They release equal energy", "Depends on the fuel"],
    c: 1,
    exp: "Fusion reactions release significantly more energy per reaction compared to fission.",
    difficulty: "easy"
  },
  {
    q: "What does 'critical mass' mean in a fission chain reaction?",
    a: ["The amount of fuel needed to prevent fission", "The fuel's boiling point", "The amount of fissile material needed to sustain a chain reaction", "The temperature of a reactor"],
    c: 2,
    exp: "Critical mass is the minimum amount of fissile material needed to maintain a self-sustaining chain reaction.",
    difficulty: "medium"
  },
  {
    q: "What happens to the mass of atoms during fusion?",
    a: ["It stays the same", "It increases", "It decreases and is converted into energy", "It splits"],
    c: 2,
    exp: "In fusion, some mass is lost and converted into energy, as described by E=mc².",
    difficulty: "medium"
  },
  {
    q: "What country is leading the ITER fusion project?",
    a: ["United States", "France", "Japan", "Russia"],
    c: 1,
    exp: "ITER is being constructed in France, though it is an international collaboration.",
    difficulty: "hard"
  },
  {
    q: "What is neutron activation in a fission environment?",
    a: ["Heating of neutrons", "Fusion of two neutrons", "Absorption of neutrons by surrounding materials, making them radioactive", "Neutralizing radioactive material"],
    c: 2,
    exp: "Neutron activation occurs when materials absorb neutrons and become radioactive themselves.",
    difficulty: "medium"
  },//set 6
  {
    q: "What is nuclear fission?",
    a: [
      "The combining of atomic nuclei",
      "The splitting of atomic nuclei",
      "A type of solar reaction",
      "An energy storage process"
    ],
    c: 1,
    exp: "Nuclear fission is the process of splitting a heavy atomic nucleus into two lighter nuclei, releasing energy.",
    difficulty: "easy"
  },
  {
    q: "What is nuclear fusion?",
    a: [
      "The splitting of atoms",
      "A fossil fuel reaction",
      "The combining of atomic nuclei",
      "Energy from wind power"
    ],
    c: 2,
    exp: "Nuclear fusion is the process where two light atomic nuclei combine to form a heavier nucleus, releasing energy—just like the Sun does.",
    difficulty: "easy"
  },
  {
    q: "Which nuclear process powers the sun?",
    a: [
      "Fission",
      "Fusion",
      "Radioactive decay",
      "Combustion"
    ],
    c: 1,
    exp: "The sun is powered by nuclear fusion, where hydrogen nuclei fuse to form helium and release massive energy.",
    difficulty: "easy"
  },
  {
    q: "What is a major advantage of nuclear fusion over fission?",
    a: [
      "Fusion creates more radioactive waste",
      "Fusion is easier to achieve",
      "Fusion can be done at room temperature",
      "Fusion produces less long-lived radioactive waste"
    ],
    c: 3,
    exp: "Unlike fission, fusion produces minimal long-lived radioactive waste, making it a cleaner energy source.",
    difficulty: "medium"
  },
  {
    q: "Which international project aims to demonstrate nuclear fusion at scale?",
    a: [
      "CERN",
      "ITER",
      "LHC",
      "NASA"
    ],
    c: 1,
    exp: "ITER (International Thermonuclear Experimental Reactor) is a collaborative global project aimed at proving the viability of fusion power.",
    difficulty: "hard"
  },
  {
    q: "What is a common fuel used in nuclear fission reactors?",
    a: [
      "Hydrogen",
      "Helium",
      "Uranium-235",
      "Carbon dioxide"
    ],
    c: 2,
    exp: "Uranium-235 is commonly used in fission reactors because of its ability to sustain a chain reaction.",
    difficulty: "medium"
  },
  {
    q: "What happens during a chain reaction in a fission reactor?",
    a: [
      "Atoms freeze",
      "Neutrons split more nuclei, releasing energy",
      "Electrons bond atoms together",
      "The core cools down"
    ],
    c: 1,
    exp: "In a chain reaction, neutrons from fission events split more nuclei, continuing the energy-releasing process.",
    difficulty: "medium"
  },
  {
    q: "Why is nuclear fusion so difficult to achieve on Earth?",
    a: [
      "It requires extreme pressure and low temperatures",
      "It needs stable helium sources",
      "It requires extremely high temperatures and control of plasma",
      "It relies on rare earth metals"
    ],
    c: 2,
    exp: "Fusion needs temperatures over 100 million degrees Celsius and stable plasma confinement, which are technically challenging.",
    difficulty: "hard"
  },
  {
    q: "What is one safety concern with nuclear fission?",
    a: [
      "Lack of fuel",
      "Explosion from fusion",
      "Production of radioactive waste",
      "Overheating of solar panels"
    ],
    c: 2,
    exp: "Fission reactors produce radioactive waste that must be carefully managed to avoid environmental harm.",
    difficulty: "medium"
  },
  {
    q: "Which of the following is a real-world application of nuclear fission?",
    a: [
      "Generating electricity in nuclear power plants",
      "Powering cars",
      "Space travel propulsion",
      "Food preservation"
    ],
    c: 0,
    exp: "Fission is currently used to generate electricity in nuclear power plants worldwide.",
    difficulty: "easy"
  },//set 5
  {
    q: "Which element is commonly used as fuel in nuclear fusion research?",
    a: ["Uranium", "Plutonium", "Deuterium", "Lead"],
    c: 2,
    exp: "Deuterium, a stable isotope of hydrogen, is commonly used in fusion experiments due to its availability and reactivity.",
    difficulty: "medium"
  },
  {
    q: "What is the role of helium in a fusion reaction?",
    a: ["It's a byproduct", "It's the main fuel", "It starts the reaction", "It cools the plasma"],
    c: 0,
    exp: "Helium is typically produced as a byproduct in hydrogen fusion reactions.",
    difficulty: "easy"
  },
  {
    q: "Why is radioactive waste a concern with fission but not fusion?",
    a: ["Fusion produces unstable byproducts", "Fission uses cleaner fuel", "Fusion produces minimal long-lived waste", "Fusion is not used yet"],
    c: 2,
    exp: "Fusion produces far less long-lived radioactive waste compared to fission, making it safer in that regard.",
    difficulty: "medium"
  },
  {
    q: "Which of these is a real-world use of nuclear fission?",
    a: ["Artificial lighting", "Water purification", "Nuclear submarines", "Solar panels"],
    c: 2,
    exp: "Nuclear submarines use fission reactors to generate power and operate underwater for long periods.",
    difficulty: "easy"
  },
  {
    q: "What is a neutron moderator used for in a nuclear reactor?",
    a: ["To speed up reactions", "To cool the core", "To slow down neutrons", "To increase radiation"],
    c: 2,
    exp: "Neutron moderators slow down neutrons so they can effectively cause further fission reactions in the reactor.",
    difficulty: "medium"
  },
  {
    q: "What happens to mass during a nuclear fusion reaction?",
    a: ["It increases", "It stays the same", "It is destroyed", "It converts into energy"],
    c: 3,
    exp: "In fusion, a small amount of mass is converted into energy, as explained by Einstein's equation E=mc².",
    difficulty: "medium"
  },
  {
    q: "What international facility is building a large fusion reactor?",
    a: ["LHC", "ITER", "NASA", "UNESCO"],
    c: 1,
    exp: "ITER is an international collaborative project in France working on building a large-scale fusion reactor.",
    difficulty: "hard"
  },
  {
    q: "Which of these is NOT a challenge of nuclear fusion?",
    a: ["Plasma confinement", "Waste storage", "High energy input", "Maintaining stability"],
    c: 1,
    exp: "Unlike fission, fusion generates very little long-lived radioactive waste, making waste storage less of a concern.",
    difficulty: "medium"
  },
  {
    q: "What is one of the primary goals of fusion research?",
    a: ["Replace wind power", "Create fusion bombs", "Develop a sustainable and clean energy source", "Improve fossil fuel efficiency"],
    c: 2,
    exp: "Fusion research aims to develop a sustainable, clean, and nearly limitless energy source for the future.",
    difficulty: "easy"
  },
  {
    q: "Why does fusion have potential as a long-term energy solution?",
    a: ["It is already widely used", "It produces carbon emissions", "It uses abundant hydrogen fuel", "It depends on rare materials"],
    c: 2,
    exp: "Fusion uses isotopes of hydrogen, which are abundant in nature, making it a promising long-term energy source.",
    difficulty: "medium"
  },//set 4
  {
    q: "What is the main product of nuclear fusion in the sun?",
    a: ["Helium", "Carbon", "Oxygen", "Uranium"],
    c: 0,
    exp: "In the sun, hydrogen nuclei fuse to form helium, releasing enormous amounts of energy.",
    difficulty: "easy"
  },
  {
    q: "Which nuclear process is currently used in power plants?",
    a: ["Fusion", "Combustion", "Fission", "Photosynthesis"],
    c: 2,
    exp: "Nuclear fission is used in power plants to generate electricity by splitting heavy atomic nuclei.",
    difficulty: "easy"
  },
  {
    q: "Why does fusion require plasma confinement?",
    a: ["To reduce radiation", "To cool the core", "To sustain high pressure and temperature", "To shield the reactor"],
    c: 2,
    exp: "Fusion reactions occur in a superheated plasma that must be confined under high pressure and temperature.",
    difficulty: "hard"
  },
  {
    q: "What is a tokamak?",
    a: ["A nuclear fission reactor", "A cooling system", "A plasma confinement device", "A radiation detector"],
    c: 2,
    exp: "A tokamak is a donut-shaped magnetic confinement device used to control plasma for fusion reactions.",
    difficulty: "medium"
  },
  {
    q: "What challenge makes fusion reactors expensive to build?",
    a: ["Cost of uranium", "High water consumption", "Extreme heat and material stress", "Need for solar panels"],
    c: 2,
    exp: "Fusion reactors must withstand extreme heat and plasma, requiring advanced and expensive materials.",
    difficulty: "hard"
  },
  {
    q: "Which reaction releases more energy per unit of mass?",
    a: ["Fission", "Combustion", "Fusion", "Chemical reactions"],
    c: 2,
    exp: "Fusion releases significantly more energy per unit mass than fission or chemical reactions.",
    difficulty: "medium"
  },
  {
    q: "What is tritium?",
    a: ["An unstable isotope of hydrogen used in fusion", "A type of uranium", "A shielding material", "A fusion byproduct"],
    c: 0,
    exp: "Tritium is a radioactive isotope of hydrogen used with deuterium as fuel in fusion reactors.",
    difficulty: "medium"
  },
  {
    q: "What safety feature do most fission reactors have?",
    a: ["Jet engines", "Control rods", "Steam vents", "Cooling tunnels"],
    c: 1,
    exp: "Control rods absorb excess neutrons in a fission reactor to regulate or stop the chain reaction.",
    difficulty: "easy"
  },
  {
    q: "Which of these is a benefit of fusion energy?",
    a: ["More carbon emissions", "Abundant fuel and low waste", "Requires oil", "Only usable in space"],
    c: 1,
    exp: "Fusion uses abundant hydrogen and produces minimal long-lived waste, making it a promising energy source.",
    difficulty: "medium"
  },
  {
    q: "What does E=mc² explain in nuclear reactions?",
    a: ["Wave behavior", "Time dilation", "Mass-energy conversion", "Magnetism"],
    c: 2,
    exp: "E=mc² describes how a small amount of mass is converted into a large amount of energy in nuclear reactions.",
    difficulty: "medium"
  }, //set 3
    {
    q: "What type of waste is a major issue in nuclear fission?",
    a: ["Plastic waste", "Radioactive waste", "Carbon dioxide", "Ash"],
    c: 1,
    exp: "Fission produces radioactive waste that must be carefully managed and stored for long periods.",
    difficulty: "easy"
  },
  {
    q: "Which nuclear process requires temperatures hotter than the sun’s core?",
    a: ["Fission", "Combustion", "Fusion", "Ionization"],
    c: 2,
    exp: "Fusion reactions require temperatures of over 100 million degrees Celsius to occur.",
    difficulty: "medium"
  },
  {
    q: "Which is a major hurdle preventing commercial use of nuclear fusion?",
    a: ["Lack of research funding", "Inability to achieve ignition", "Too much radioactive waste", "Not enough fuel"],
    c: 1,
    exp: "Achieving sustained ignition and net energy gain in fusion is still a major technical barrier.",
    difficulty: "hard"
  },
  {
    q: "Which of the following is NOT typically a fuel for fusion?",
    a: ["Deuterium", "Tritium", "Uranium-235", "Hydrogen isotopes"],
    c: 2,
    exp: "Uranium-235 is used in fission, not fusion. Fusion typically uses isotopes of hydrogen like deuterium and tritium.",
    difficulty: "medium"
  },
  {
    q: "Which process involves combining light atomic nuclei?",
    a: ["Nuclear decay", "Fission", "Fusion", "Electrolysis"],
    c: 2,
    exp: "Fusion combines light nuclei like hydrogen to form heavier nuclei and release energy.",
    difficulty: "easy"
  },
  {
    q: "Which organization is leading a large-scale international fusion project?",
    a: ["NASA", "ITER", "WHO", "LIGO"],
    c: 1,
    exp: "ITER (International Thermonuclear Experimental Reactor) is a global fusion energy project based in France.",
    difficulty: "medium"
  },
  {
    q: "How is energy released during nuclear fission?",
    a: ["From heat produced by electricity", "From electrons jumping orbits", "From the mass lost as binding energy", "From sunlight"],
    c: 2,
    exp: "In fission, energy is released from the mass difference between the reactants and products, converted via E=mc².",
    difficulty: "medium"
  },
  {
    q: "What makes fusion a cleaner option compared to fission?",
    a: ["It uses gasoline", "It produces more CO₂", "It has less radioactive waste", "It doesn’t need heat"],
    c: 2,
    exp: "Fusion produces minimal radioactive waste, unlike fission, which generates long-lived radioactive byproducts.",
    difficulty: "medium"
  },
  {
    q: "What material is often used to moderate neutrons in a fission reactor?",
    a: ["Concrete", "Water", "Hydrogen gas", "Aluminum"],
    c: 1,
    exp: "Water is commonly used as a neutron moderator in fission reactors to slow neutrons for efficient reactions.",
    difficulty: "easy"
  },
  {
    q: "What device is used to sustain a fission chain reaction and harness energy?",
    a: ["Cyclotron", "Steam turbine", "Nuclear reactor", "Solar panel"],
    c: 2,
    exp: "A nuclear reactor is designed to sustain and control a fission chain reaction for power generation.",
    difficulty: "easy"
  }, //set 2
    {
    q: "What is the primary reaction used in nuclear power plants to generate electricity?",
    a: ["Nuclear fusion", "Nuclear fission", "Radioactive decay", "Combustion"],
    c: 1,
    exp: "Nuclear fission is the process where the nucleus of an atom splits into smaller parts, releasing a significant amount of energy, which is harnessed in nuclear power plants.",
    difficulty: "easy"
  },
  {
    q: "Which element is most commonly used as fuel in nuclear reactors?",
    a: ["Plutonium", "Thorium", "Uranium", "Carbon"],
    c: 2,
    exp: "Uranium, particularly Uranium-235, is widely used due to its ability to sustain a chain reaction.",
    difficulty: "easy"
  },
  {
    q: "What is the term for the time it takes for half of a radioactive substance to decay?",
    a: ["Decay constant", "Half-life", "Radiation period", "Isotope duration"],
    c: 1,
    exp: "Half-life is the period required for half the quantity of a radioactive substance to undergo decay.",
    difficulty: "easy"
  },
  {
    q: "Which country generates the highest percentage of its electricity from nuclear energy?",
    a: ["United States", "France", "China", "Russia"],
    c: 1,
    exp: "France relies heavily on nuclear power, with approximately 70% of its electricity coming from nuclear energy.",
    difficulty: "medium"
  },
  {
    q: "What does the acronym 'NORM' stand for in nuclear terminology?",
    a: ["Normal Operational Radiation Monitoring", "Naturally Occurring Radioactive Material", "Nuclear Operational Risk Management", "National Organization for Radiation Measurement"],
    c: 1,
    exp: "NORM refers to materials that naturally contain radioactive elements, such as uranium, thorium, and potassium.",
    difficulty: "hard"
  },
  {
    q: "Which of the following is NOT a type of nuclear reactor?",
    a: ["Pressurized Water Reactor (PWR)", "Boiling Water Reactor (BWR)", "Fast Breeder Reactor (FBR)", "Solar Thermal Reactor (STR)"],
    c: 3,
    exp: "Solar Thermal Reactor is not a type of nuclear reactor; it's related to solar energy technologies.",
    difficulty: "easy"
  },
  {
    q: "What is the main challenge associated with nuclear fusion as a power source?",
    a: ["Lack of fuel resources", "High greenhouse gas emissions", "Difficulty in achieving and maintaining the necessary conditions for fusion", "Excessive radioactive waste"],
    c: 2,
    exp: "Nuclear fusion requires extremely high temperatures and pressures, making it challenging to sustain reactions for energy production.",
    difficulty: "medium"
  },
  {
    q: "Which radioactive isotope is commonly used in smoke detectors?",
    a: ["Uranium-235", "Plutonium-239", "Americium-241", "Carbon-14"],
    c: 2,
    exp: "Americium-241 emits alpha particles, which are used in ionization smoke detectors to detect smoke particles.",
    difficulty: "medium"
  },
  {
    q: "What is the primary purpose of control rods in a nuclear reactor?",
    a: ["To initiate the nuclear reaction", "To cool down the reactor core", "To absorb neutrons and regulate the fission process", "To contain radioactive waste"],
    c: 2,
    exp: "Control rods absorb neutrons, thus controlling the rate of the nuclear reaction within the reactor.",
    difficulty: "easy"
  },
  {
    q: "Which nuclear disaster occurred in 1986 and is considered one of the worst in history?",
    a: ["Three Mile Island", "Fukushima Daiichi", "Chernobyl", "Windscale"],
    c: 2,
    exp: "The Chernobyl disaster in Ukraine was a catastrophic nuclear accident with widespread environmental and health impacts.",
    difficulty: "easy"
  },
  {
    q: "What is the role of a moderator in a nuclear reactor?",
    a: ["To increase the speed of neutrons", "To decrease the speed of neutrons", "To cool the reactor core", "To shield radiation"],
    c: 1,
    exp: "Moderators slow down neutrons, increasing the likelihood of sustaining a controlled nuclear chain reaction.",
    difficulty: "medium"
  },
  {
    q: "Which of the following particles has no electric charge?",
    a: ["Proton", "Electron", "Neutron", "Alpha particle"],
    c: 2,
    exp: "Neutrons are neutral particles found in the nucleus of an atom, having no electric charge.",
    difficulty: "easy"
  },
  {
    q: "What is the term for the process of combining two light atomic nuclei to form a heavier nucleus?",
    a: ["Fission", "Fusion", "Decay", "Ionization"],
    c: 1,
    exp: "Fusion is the process where two light nuclei merge to form a heavier nucleus, releasing energy.",
    difficulty: "easy"
  },
  {
    q: "Which gas is commonly used as a coolant in gas-cooled nuclear reactors?",
    a: ["Hydrogen", "Helium", "Carbon dioxide", "Nitrogen"],
    c: 2,
    exp: "Carbon dioxide is often used as a coolant due to its favorable thermal properties and chemical stability.",
    difficulty: "medium"
  },
  {
    q: "What is the primary concern regarding the disposal of nuclear waste?",
    a: ["High cost", "Radioactive contamination", "Lack of storage space", "Public opposition"],
    c: 1,
    exp: "Radioactive contamination poses long-term environmental and health risks, making waste disposal a critical issue.",
    difficulty: "medium"
  },
  {
    q: "Which international agency promotes the peaceful use of nuclear energy?",
    a: ["NATO", "IAEA", "UNESCO", "WHO"],
    c: 1,
    exp: "The International Atomic Energy Agency (IAEA) works to promote safe, secure, and peaceful nuclear technologies.",
    difficulty: "easy"
  },
  {
    q: "What is the term for the minimum mass of fissile material needed to maintain a nuclear chain reaction?",
    a: ["Critical mass", "Threshold mass", "Sustainable mass", "Chain mass"],
    c: 0,
    exp: "Critical mass is the smallest amount of fissile material needed for a sustained nuclear chain reaction.",
    difficulty: "medium"
  },
  {
    q: "Which of the following is a common use of radioisotopes in medicine?",
    a: ["Power generation", "Sterilization of equipment", "Diagnostic imaging", "Water purification"],
    c: 2,
    exp: "Radioisotopes are used in diagnostic imaging techniques, such as PET scans, to visualize internal body structures.",
    difficulty: "easy"
  },
  {
    q: "What is the primary function of a containment structure in a nuclear power plant?",
    a: ["To generate electricity", "To house administrative offices", "To prevent the release of radioactive materials", "To store nuclear fuel"],
    c: 2,
    exp: "Containment structures are designed to prevent the escape of radioactive substances into the environment.",
    difficulty: "easy"
  },
  {
    q: "Which process involves the spontaneous emission of particles or energy from an unstable atomic nucleus?",
    a: ["Ionization", "Radiation", "Radioactive decay", "Fusion"],
    c: 2,
    exp: "Radioactive decay is the process by which unstable atomic nuclei lose energy by emitting radiation.",
    difficulty: "easy"
  }
], easyQuestions = [], mediumQuestions = [], hardQuestions = [], questions = [];

console.log(allQuestions.length + " questions");
allQuestions.forEach((q) => { 
  if (q.difficulty == "easy") easyQuestions.push(q);
  else if (q.difficulty == "medium") mediumQuestions.push(q);
  else hardQuestions.push(q);
});

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}
