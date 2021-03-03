/*
    커스텀 엘리먼트
    쉐도우돔
    슬롯 (or template)
    이용하여 Custom modal 작성
 */
class LgModal extends HTMLElement {

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: "open"});

        let template = document.createElement('div');
        let style = document.createElement('style');

        template.innerHTML = `
                <div class="modal-wrap">
                    <div class="modal-box">
                        <span class="close">&times;</span>
                        <div class="modal-title">
                            <slot name="title"></slot>
                        </div>
                        <div class="modal-body">
                            <slot name="content"></slot>
                        </div>
                    </div>
                </div>`;

        style.textContent = `
            .modal-wrap {
                display: none;
                position: fixed;
                background-color: rgb(0, 0, 0);
                background-color: rgba(0, 0, 0, 0.4);
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
            }

            .modal-box {
                background-color: #efefef;
                margin: 15% auto;
                padding: 20px;
                border: 1px solid #888;
                width: 50%;
                border-radius: 15px;
            }

            .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
            }

            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }`;

        this
            .appendShadowChild(style)
            .appendShadowChild(template);
    }

    /**
     * 가상 트리가 document 에 연결된후 콜백
     */
    connectedCallback() {
        this.shadowRoot.querySelector('.modal-box').style.backgroundColor
            = this.getAttribute('bgcolor');

        this.shadowRoot.querySelector('.close').addEventListener('click', e => {
            this.style.display = "none";
        })
    }

    appendShadowChild(child) {
        this.shadow.appendChild(child);
        return this;
    }
}

customElements.define('lg-modal', LgModal);
