export default function abilityScoreModifier(amount) {
    const mod = Math.floor((amount - 10) / 2);
    return mod > 0 ? `+${mod}` : mod;
};
