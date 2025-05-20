const faqResponses = [
    {//set 3
        keywords: ['nuclear waste', 'radioactive waste', 'where does waste go'],
        answer: 'Nuclear waste is stored in secure facilities, either in pools or dry casks, and can eventually be buried in deep geological repositories.'
    },
    {
        keywords: ['nuclear fusion', 'what is fusion'],
        answer: 'Nuclear fusion is the process of combining two light atomic nuclei into one heavier nucleus, releasing massive amounts of energy.'
    },
    {
        keywords: ['fission', 'what is fission'],
        answer: 'Nuclear fission is when a heavy atomic nucleus splits into smaller parts, releasing energy and neutrons.'
    },
    {
        keywords: ['how safe is fusion', 'fusion safety'],
        answer: 'Fusion is very safe compared to fission. It doesn’t create long-lived waste and cannot cause a meltdown.'
    },
    {
        keywords: ['tritium', 'deuterium', 'fusion fuel'],
        answer: 'Fusion reactions typically use isotopes of hydrogen like deuterium and tritium as fuel.'
    },
    {
        keywords: ['ITER', 'fusion experiment'],
        answer: 'ITER is a large international fusion experiment in France aiming to demonstrate the feasibility of fusion energy.'
    },
    {
        keywords: ['future of nuclear', 'nuclear energy future'],
        answer: 'The future of nuclear energy includes advanced reactors, fusion power, and small modular reactors (SMRs).'
    },
    {
        keywords: ['carbon neutral', 'net zero', 'climate change'],
        answer: 'Nuclear energy can help reach net-zero emissions by replacing fossil fuels with low-carbon power.'
    },
    {
        keywords: ['chernobyl', 'nuclear disaster'],
        answer: 'Chernobyl was a 1986 disaster caused by poor reactor design and operator error. Modern reactors are much safer.'
    },
    {
        keywords: ['fukushima', 'tsunami nuclear'],
        answer: 'Fukushima was a result of an earthquake and tsunami in 2011, which damaged the plant and caused radiation release.'
    },
    {
        keywords: ['three mile island', 'usa nuclear accident'],
        answer: 'Three Mile Island was a partial meltdown in 1979 in the U.S. No one was killed, and the safety systems worked as intended.'
    },
    {
        keywords: ['how long does nuclear last', 'fuel duration'],
        answer: 'Nuclear fuel can last in reactors for several years. Advanced reactors aim to extend this lifespan even further.'
    },
    {
        keywords: ['is nuclear expensive', 'cost of nuclear'],
        answer: 'Building nuclear plants is expensive, but their long-term operation is cost-effective and produces steady electricity.'
    },
    {
        keywords: ['is nuclear renewable'],
        answer: 'Nuclear is not renewable like wind or solar, but it is sustainable and extremely efficient.'
    },
    {
        keywords: ['how many reactors', 'reactors in the world'],
        answer: 'There are over 400 nuclear reactors operating worldwide, with many more under construction or planned.'
    },
    {
        keywords: ['how hot is the core', 'reactor temperature'],
        answer: 'The reactor core can reach temperatures over 300°C (around 570°F), depending on the design.'
    },
    {
        keywords: ['pressurized water reactor', 'PWR'],
        answer: 'A Pressurized Water Reactor (PWR) keeps water under high pressure so it doesn’t boil while absorbing heat from the core.'
    },
    {
        keywords: ['boiling water reactor', 'BWR'],
        answer: 'A Boiling Water Reactor (BWR) boils water directly in the reactor to generate steam for turbines.'
    },
    {
        keywords: ['fusion output', 'energy from fusion'],
        answer: 'Fusion has the potential to produce far more energy than fission, with very little waste and no CO₂.'
    },
    {
        keywords: ['nuclear careers', 'jobs in nuclear'],
        answer: 'Nuclear energy offers careers in engineering, physics, safety analysis, plant operation, and research.'
    },
    {//set 2
        keywords: ['nuclear energy', 'what is nuclear'],
        answer: 'Nuclear energy is the energy released during nuclear fission or fusion, used to generate electricity in power plants.'
    },
    {
        keywords: ['how does a power plant work', 'power plant'],
        answer: 'A nuclear power plant works by using heat from nuclear reactions to produce steam, which spins a turbine to generate electricity.'
    },
    {
        keywords: ['uranium', 'fuel'],
        answer: 'Uranium-235 is the most common fuel used in nuclear reactors because it easily undergoes fission.'
    },
    {
        keywords: ['plutonium'],
        answer: 'Plutonium-239 can also be used as a nuclear fuel, especially in breeder reactors.'
    },
    {
        keywords: ['control rods', 'slow down reaction'],
        answer: 'Control rods absorb neutrons and are used to control the rate of the nuclear reaction in a reactor.'
    },
    {
        keywords: ['coolant', 'water', 'cooling system'],
        answer: 'Coolants like water or liquid metal transfer heat from the reactor core to the steam generator or turbine.'
    },
    {
        keywords: ['meltdown', 'reactor core'],
        answer: 'A meltdown happens when the reactor core overheats, potentially causing radioactive release. Modern reactors are designed to prevent this.'
    },
    {
        keywords: ['SMR', 'small modular reactor'],
        answer: 'Small Modular Reactors (SMRs) are compact, factory-built reactors designed to be safer and more flexible.'
    },
    {
        keywords: ['thorium'],
        answer: 'Thorium is a potential alternative nuclear fuel that is more abundant and produces less long-lived waste than uranium.'
    },
    {
        keywords: ['environment', 'pollution', 'carbon'],
        answer: 'Nuclear energy produces zero carbon emissions during operation, making it environmentally friendly.'
    },
    {
        keywords: ['renewables', 'solar', 'wind'],
        answer: 'Nuclear can work alongside renewables by providing constant power when solar and wind aren’t available.'
    },
    {
        keywords: ['nuclear weapon', 'bomb'],
        answer: 'Nuclear weapons use uncontrolled fission or fusion reactions, while power plants use controlled reactions for peaceful purposes.'
    },
    {
        keywords: ['is nuclear energy safe'],
        answer: 'Yes, with proper regulations and modern technology, nuclear energy is one of the safest forms of power generation.'
    },
    {
        keywords: ['how much energy', 'energy output'],
        answer: 'A single nuclear reactor can power hundreds of thousands of homes — much more than solar or wind at the same scale.'
    },
    {
        keywords: ['reactor pressure vessel', 'containment'],
        answer: 'The reactor pressure vessel houses the nuclear reaction, and containment buildings prevent radiation from escaping.'
    },
    {
        keywords: ['radioactive decay'],
        answer: 'Radioactive decay is the process by which unstable atoms lose energy by emitting radiation.'
    },
    {
        keywords: ['half-life', 'half life'],
        answer: 'Half-life is the time it takes for half of a radioactive substance to decay. It varies widely between isotopes.'
    },
    {
        keywords: ['energy density', 'compare'],
        answer: 'Nuclear fuel has extremely high energy density — millions of times more than fossil fuels or batteries.'
    },
    {
        keywords: ['fusion vs fission', 'compare fusion'],
        answer: 'Fusion joins atoms and is safer and cleaner, but it’s still experimental. Fission splits atoms and is widely used today.'
    },
    {
        keywords: ['decommissioning', 'shutdown'],
        answer: 'Decommissioning is the process of safely shutting down and dismantling a nuclear power plant at the end of its life.'
    },
    {//set 1
        keywords: ['fission', 'split'],
        answer: 'Nuclear fission is the process of splitting an atomic nucleus to release energy. It’s used in nuclear power plants.'
    },
    {
        keywords: ['fusion', 'combine'],
        answer: 'Nuclear fusion combines two light nuclei into a heavier one, releasing massive energy — it powers the sun!'
    },
    {
        keywords: ['safety', 'danger', 'accident'],
        answer: 'Nuclear energy is heavily regulated. Modern plants have multiple safety systems to prevent disasters.'
    },
    {
        keywords: ['three mile island', 'fukushima', 'chernobyl'],
        answer: 'These were notable nuclear incidents. Chernobyl was due to human error, Fukushima was caused by a tsunami, and Three Mile Island resulted in no deaths.'
    },
    {
        keywords: ['cost', 'expensive', 'price'],
        answer: 'While expensive to build, nuclear plants produce cheap and reliable energy long-term.'
    },
    {
        keywords: ['waste', 'radioactive', 'storage'],
        answer: 'Nuclear waste is securely stored in shielded containers. Newer reactor designs produce less waste.'
    },
    {
        keywords: ['future', 'renewable', 'clean'],
        answer: 'Nuclear energy can complement renewables by providing stable baseload power with no carbon emissions.'
    },
    {
        keywords: ['jobs', 'career'],
        answer: 'Nuclear energy offers high-paying jobs in engineering, safety, and operations.'
    },
    {
        keywords: ['reactor', 'type', 'design'],
        answer: 'There are several reactor types, like PWRs, BWRs, and emerging designs like thorium and SMRs.'
    },
    {
        keywords: ['energy output', 'megawatt', 'efficiency'],
        answer: 'Fusion has the potential to produce more energy than fission. Efficiency varies by reactor type and fuel.'
    }
];

const groupedKeywords = [];

for (const answers of faqResponses) {
    answers.keywords.forEach((k) => {
        groupedKeywords.push(k);
    });
}

console.log(groupedKeywords);

function getAnswer() {
    const question = document.getElementById('user-question').value.toLowerCase();
    let response = "I'm not sure how to answer that. Try rephrasing or asking about nuclear fusion, fission, or safety.";

    for (const item of faqResponses) {
      if (item.keywords.some(keyword => question.includes(keyword))) {
        response = item.answer;
        break;
      }
    }

    document.getElementById('answer').textContent = response;
}

function fillSuggestion(text) {
    document.getElementById("user-question").value = text;
    document.getElementById("user-question").focus();
}

function setSuggestion(element) {
    const suggestion = Math.floor(Math.random() * (groupedKeywords.length + 1));
    console.log(groupedKeywords[suggestion]);

    element.textContent = "Ask about " + groupedKeywords[suggestion] + "?";
    groupedKeywords.splice(suggestion, 1);
}

setSuggestion(document.getElementById('suggestion-one'));
setSuggestion(document.getElementById('suggestion-two'));
setSuggestion(document.getElementById('suggestion-three'));
setSuggestion(document.getElementById('suggestion-four'));
setSuggestion(document.getElementById('suggestion-five'));

document.querySelectorAll('button').forEach((button) => {
    if (button.className === "suggestion") {
        button.addEventListener('click', (event) => {
            fillSuggestion(event.target.textContent);
        });
    }
});
