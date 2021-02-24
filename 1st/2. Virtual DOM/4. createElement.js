/**
 * 가상돔을 입력해 실제 돔을 생성하는 함수
 *
 * @param node
 * @returns {Text|*}
 */
function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    return document.createElement(node.type);
}

/**
 * 자식 요소도 함께 만듭니다.
 *
 * @param node
 * @returns {Text|*}
 */
function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);

    node.children
        .map(createElement)
        .forEach($el.appendChild.bind($el));

    return $el;
}
