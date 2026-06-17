
// Randy Nunez

console.log("=== Blood Bowl Team Stats ===");

const teamName = "Dwellers Spawn";
const touchdowns = 3;
const casualties = 2;
const rerolls = 4;

console.log("Team:", teamName);
console.log("Touchdowns:", touchdowns);
console.log("Casualties:", casualties);
console.log("Rerolls Remaining:", rerolls);

console.log("Total Score Value:", touchdowns * 2 + casualties);

const treasury = 490000;
const playerCost = 95000;

console.log("Treasury:", treasury);
console.log("Can afford new player:", treasury >= playerCost);
