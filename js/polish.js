const Local = () => {
    const tags = ['firstgroup', 'section', 'sectionInput', 'sectionSecond'];
    const createHtml = tags.map((el) => {

        el.setAttribute('id', `${el}`);
        return el = document.createElement('section');
    })

    return createHtml;
}
export default Local;