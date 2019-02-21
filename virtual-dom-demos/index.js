import VNode from './VNode'
import TextNode from './TextNode'

let virtualDom = new VNode('div', {class: 'container'}, [
    new TextNode('some content'),
    new VNode('span', {}, [
        new TextNode('other content')
    ])
])

let realDom =  virtualDom.render()

document.body.appendChild(realDom)