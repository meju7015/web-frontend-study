/**
 * 노드가 새로 추가된 경우 ?
 * @param $parent
 * @param newNode
 * @param oldNode
 */
function updateElement($parent, newNode, oldNode) {
    if (!oldNode) {
        $parent.appendChild(
            createElement(newNode)
        )
    }
}

/**
 * 노드를 삭제 해야하는 경우 ?
 * @param $parent
 * @param newNode
 * @param oldNode
 * @param index
 */
function updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
        $parent.appendChild(
            createElement(newNode)
        );
    } else if (!newNode) {
        $parent.removeChild(
            $parent.childNodes[index]
        )
    }
}

/**
 * 노드가 변경되었는지 알아보자
 *
 * @param node1
 * @param node2
 * @returns {boolean}
 */
function changed(node1, node2) {
    return typeof node1 !== typeof node2
        || typeof node1 === 'string' && node1 !== node2
        || node1.type !== node2.type;
}

/**
 * 생성, 삭제, 변경까지 처리
 *
 * @param $parent
 * @param newNode
 * @param oldNode
 * @param index
 */
function updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
        $parent.appendChild(
            createElement(newNode)
        );
    } else if (!newNode) {
        $parent.removeChild(
            $parent.childNodes[index]
        );
    } else if (changed(newNode, oldNode)) {
        $parent.replaceChild(
            createElement(newNode),
            $parent.childNodes[index]
        )
    }
}

/**
 * 자식 요소까지 변경 (재귀)
 *
 * @param $parent
 * @param newNode
 * @param oldNode
 * @param index
 */
function updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
        $parent.appendChild(
            createElement(newNode)
        );
    } else if (!newNode) {
        $parent.removeChild(
            $parent.childNodes[index]
        );
    } else if (changed(newNode, oldNode)) {
        $parent.replaceChild(
            createElement(newNode),
            $parent.childNodes[index]
        );
    } else if (newNode.type) {
        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;

        for (let i = 0; i< newLength || i < oldLength; i++) {
            updateElement(
                $parent.childNodes[index],
                newNode.children[i],
                oldNode.children[i],
                i
            );
        }
    }
}
