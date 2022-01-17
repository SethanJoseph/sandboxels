elements.test = {
    color: "#ff0000",
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 10,
};
elements.Neutronium = {
    color: "#aaffff",
    behavior: behaviors.POWDER,
    tempHigh: 1000,
    stateHigh: "molten_neutronium",
    category: "energy",
    state: "solid",
    density: 100000000000000000,
};
    elements.Molten_Neutronium = {
    color: "#ffffaa",
    behavior: behaviors.LIQUID,
    tempHigh: 5000,
    stateHigh: "Neutronium_Gas",
    tempLow: 1000,
    stateLow: "Neutronium",
    viscosity: 10,
    category: "energy",
    state: "liquid",
    density: 100000000000000000,
};
    elements.Neutronium_Gas = {  
    color: "#abcdef",
    behavior: behaviors.GAS,
    tempLow: 5000,
    stateLow: "molten_neutronium",
    category: "energy",
    state: "gas",
    density: 100000000000000000,
};
