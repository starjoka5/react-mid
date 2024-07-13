export const getRandomWord = async () => {
    try {
        const response = await fetch(`https://random-word-api.herokuapp.com/word`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const randomWord = await response.json();
        console.log(randomWord);
        return randomWord;
    } catch (err) { /* empty */ }
}