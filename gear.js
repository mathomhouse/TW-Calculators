 function compareGear() {
    // Gear 1 stats
    const gear1DamageIncrease = parseFloat(document.getElementById('gear1-damage-increase').value) || 0;
    const gear1Attack = parseFloat(document.getElementById('gear1-attack').value) || 0;
    const gear1Defense = parseFloat(document.getElementById('gear1-defense').value) || 0;
    const gear1HP = parseFloat(document.getElementById('gear1-hp').value) || 0;
    const gear1DamageDecrease = parseFloat(document.getElementById('gear1-damage-decrease').value) || 0;

    // Gear 2 stats
    const gear2DamageIncrease = parseFloat(document.getElementById('gear2-damage-increase').value) || 0;
    const gear2Attack = parseFloat(document.getElementById('gear2-attack').value) || 0;
    const gear2Defense = parseFloat(document.getElementById('gear2-defense').value) || 0;
    const gear2HP = parseFloat(document.getElementById('gear2-hp').value) || 0;
    const gear2DamageDecrease = parseFloat(document.getElementById('gear2-damage-decrease').value) || 0;

    // Calculate offense and defense values for both gear
    const gear1Offense = (gear1DamageIncrease * 9) + gear1Attack;
    const gear2Offense = (gear2DamageIncrease * 9) + gear2Attack;

    const gear1DefenseScore = (gear1Defense * 17) + gear1HP + (gear1DamageDecrease * 6);
    const gear2DefenseScore = (gear2Defense * 17) + gear2HP + (gear2DamageDecrease * 6);

    // Display calculated stats based on input
    let result = '';

    const gear1HasOffense = gear1DamageIncrease || gear1Attack;
    const gear2HasOffense = gear2DamageIncrease || gear2Attack;
    const gear1HasDefense = gear1Defense || gear1HP || gear1DamageDecrease;
    const gear2HasDefense = gear2Defense || gear2HP || gear2DamageDecrease;

    // Offense comparison
    if (gear1HasOffense || gear2HasOffense) {
        result += `Gear 1 Total Attack: ${gear1Offense.toString()}%\n`;
        result += `Gear 2 Total Attack: ${gear2Offense.toString()}%\n\n`;

        if (gear1Offense > gear2Offense) {
            result += 'Gear 1 has better offense.\n\n';
            document.getElementById('gear1-box').style.backgroundColor = '#d4edda';
            document.getElementById('gear2-box').style.backgroundColor = '';
        } else if (gear2Offense > gear1Offense) {
            result += 'Gear 2 has better offense.\n\n';
            document.getElementById('gear2-box').style.backgroundColor = '#d4edda';
            document.getElementById('gear1-box').style.backgroundColor = '';
        } else {
            result += 'Both gears have equal offense.\n\n';
            document.getElementById('gear1-box').style.backgroundColor = '';
            document.getElementById('gear2-box').style.backgroundColor = '';
        }
    }

    // Defense comparison
    if (gear1HasDefense || gear2HasDefense) {
        result += `Gear 1 Total HP: ${gear1DefenseScore.toString()}%\n`;
        result += `Gear 2 Total HP: ${gear2DefenseScore.toString()}%\n\n`;

        if (gear1DefenseScore > gear2DefenseScore) {
            result += 'Gear 1 has better defense.\n';
            document.getElementById('gear1-box').style.backgroundColor = '#d4edda';
            document.getElementById('gear2-box').style.backgroundColor = '';
        } else if (gear2DefenseScore > gear1DefenseScore) {
            result += 'Gear 2 has better defense.\n';
            document.getElementById('gear2-box').style.backgroundColor = '#d4edda';
            document.getElementById('gear1-box').style.backgroundColor = '';
        } else {
            result += 'Both gears have equal defense.\n';
            document.getElementById('gear1-box').style.backgroundColor = '';
            document.getElementById('gear2-box').style.backgroundColor = '';
        }
    }

    document.getElementById('result').textContent = result;
}

function resetValues() {
    document.getElementById('gear1-damage-increase').value = 0;
    document.getElementById('gear1-attack').value = 0;
    document.getElementById('gear1-defense').value = 0;
    document.getElementById('gear1-hp').value = 0;
    document.getElementById('gear1-damage-decrease').value = 0;

    document.getElementById('gear2-damage-increase').value = 0;
    document.getElementById('gear2-attack').value = 0;
    document.getElementById('gear2-defense').value = 0;
    document.getElementById('gear2-hp').value = 0;
    document.getElementById('gear2-damage-decrease').value = 0;

    document.getElementById('gear1-box').style.backgroundColor = '';
    document.getElementById('gear2-box').style.backgroundColor = '';
    document.getElementById('result').textContent = '';
}

