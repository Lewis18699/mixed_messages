const starSigns = ['cancer','gemini','taurus','pisces','leo','libra',
'sagittarius','aquarius','scorpio','capricorn','virgo','aries'];

const moods = ['happy','sad','angry','fearful','joyful','excited','anxious',
'worried','hopeful','loved','confused','grateful'];

const outcome = ['have fun','smile','laugh','love','cry','explore','go for it',
'do what feels right','be cautious','go on an adventure','give up','carry on'];

const randomElement = (array) => {
    return array[Math.floor(Math.random() * 12)];
};

const finalOutput = () => {
    let starSign = randomElement(starSigns);
    let mood = randomElement(moods);
    let action = randomElement(outcome);
    return `Your star sign is ${starSign}. You are most likely to be ${mood}. 
    I think that you should ${action}.`;
};

