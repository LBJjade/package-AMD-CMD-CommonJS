export default class TextNode {
    constructor(content) {
        this.content = content
    }

    render() {
        return document.createTextNode(this.content)
    }
}