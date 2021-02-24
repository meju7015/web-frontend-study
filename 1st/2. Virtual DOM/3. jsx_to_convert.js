/** @jsx h **/

/* 1. JSX 에서 아래 HTML 은
<ul className="list">
    <li>list item 1</li>
    <li>list item 2</li>
</ul>
*/

/**
 * 2. 이렇게 변경됩니다.
 * @jsx h 를 선언해주면 React.createElement 대신 h 함수를 사용합니다.
 */
React.createElement('ul', {className: 'list'},
    React.createElement('li', {}, 'list item 1'),
    React.createElement('li', {}, 'list item 2')
);


/**
 * 3. 결과적으로 JSX 아래와 같이 돔을 생성합니다.
 */
const el = (
    <ul className="list">
        <li>list item 1</li>
        <li>list item 2</li>
    </ul>
)

/**
 * Babel 에서 트랜스 파일된 결과 입니다.
 */
const el = (
    h('ul', {className: 'list'},
        h('li', {}, 'list item 1'),
        h('li', {}, 'list item 2')
    )
)

/**
 * 최종적으로 Javascript Object(가상돔)가 반환됩니다.
 */
const el = ({
    type: 'ul', props: {'class': 'list'}, children: [
        {
            type: 'li', props: {}, children: ['list item 1']
        },
        {
            type: 'li', props: {}, children: ['list item 2']
        }
    ]
});
