import getLocal from './getLocal'
const getVoice = (body) => {

    document.getElementById('microfonIcon').addEventListener('click', () => {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')

            getLocal(transcript);

        })

        recognition.start();

    })


}
export default getVoice;