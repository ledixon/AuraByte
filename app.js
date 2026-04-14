let totalCals = 0;

function calculateMetrics() {
    const w = parseFloat(document.getElementById('weight').value);
    const h = parseFloat(document.getElementById('height').value);
    const a = parseFloat(document.getElementById('age').value);
    const g = document.getElementById('gender').value;

    if (!w || !h || !a) return;

    const bmi = w / ((h / 100) ** 2);
    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr = (g === 'male') ? bmr + 5 : bmr - 161;
    
    const tdee = Math.round(bmr * 1.375); // Active estimate

    document.getElementById('bmi-val').innerText = bmi.toFixed(1);
    document.getElementById('m-cal').innerText = tdee;
    document.getElementById('c-cal').innerText = tdee - 500;
    document.getElementById('b-cal').innerText = tdee + 400;
    document.getElementById('results').classList.remove('hidden');
}

function scanFood() {
    const status = document.getElementById('scan-status');
    status.style.color = "#7ef9ff";
    status.innerText = "AURA AI ANALYZING PIXELS...";
    
    // Simulate food database
    const mockFoods = [
        {name: "Avocado Toast", cal: 350},
        {name: "Chicken Bowl", cal: 620},
        {name: "Protein Shake", cal: 180},
        {name: "Double Burger", cal: 850}
    ];

    setTimeout(() => {
        const item = mockFoods[Math.floor(Math.random() * mockFoods.length)];
        totalCals += item.cal;
        
        document.getElementById('total-calories').innerText = totalCals;
        status.innerText = `IDENTIFIED: ${item.name} (+${item.cal} kcal)`;
        status.style.color = "#2ecc71";
    }, 2500);
}