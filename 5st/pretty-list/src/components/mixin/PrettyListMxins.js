let commons = {
    data() {
        return {
            LIST_TYPE: {
                LIST: 'list',
                GALLERY: 'gallery',
                WEBZINE: 'webzine'
            }
        }
    }
};

let properties = {
    props: {
        columns: {
            type: Array,
            validator: (list => list.length > 0)
        },

        rows: {
            type: Array,
            validator: (list => list.length > 0)
        },

        columnLabel: {
            type: String,
            default: 'label'
        },

        rowValue: {
            type: String,
            default: 'value'
        }
    }
}

export {commons, properties}
