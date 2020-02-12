export default { // https://jsonschema.net/
    type: 'object',
    properties: {
        scenarios: {
            type: 'array',
            minItems: 3,
            maxItems: 5,
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        unique: true,
                        minimum: 1,
                    },
                    label: {
                        type: 'string',
                        faker: 'random.words',
                    },
                    cookiePath: {
                        type: 'string',
                        pattern: 'backstop_data/engine_scripts/cookies.json',
                    },
                    url: {
                        type: 'string',
                        faker: 'internet.url',
                    },
                    referenceUrl: {
                        type: 'string',
                        faker: 'internet.url',
                    },
                    readyEvent: {
                        $id: '#/properties/scenarios/items/properties/readyEvent',
                        type: 'string',
                        title: 'The Readyevent Schema',
                        default: '',
                        examples: [
                            '',
                        ],
                        pattern: '^(.*)$',
                    },
                    readySelector: {
                        $id: '#/properties/scenarios/items/properties/readySelector',
                        type: 'string',
                        title: 'The Readyselector Schema',
                        default: '',
                        examples: [
                            '',
                        ],
                        pattern: '^(.*)$',
                    },
                    delay: {
                        $id: '#/properties/scenarios/items/properties/delay',
                        type: 'integer',
                        title: 'The Delay Schema',
                        default: 0,
                        examples: [
                            0,
                        ],
                    },
                    hideSelectors: {
                        $id: '#/properties/scenarios/items/properties/hideSelectors',
                        type: 'array',
                        title: 'The Hideselectors Schema',
                    },
                    removeSelectors: {
                        $id: '#/properties/scenarios/items/properties/removeSelectors',
                        type: 'array',
                        title: 'The Removeselectors Schema',
                    },
                    hoverSelector: {
                        $id: '#/properties/scenarios/items/properties/hoverSelector',
                        type: 'string',
                        title: 'The Hoverselector Schema',
                        default: '',
                        examples: [
                            '',
                        ],
                        pattern: '^(.*)$',
                    },
                    clickSelector: {
                        $id: '#/properties/scenarios/items/properties/clickSelector',
                        type: 'string',
                        title: 'The Clickselector Schema',
                        default: '',
                        examples: [
                            '',
                        ],
                        pattern: '^(.*)$',
                    },
                    postInteractionWait: {
                        $id: '#/properties/scenarios/items/properties/postInteractionWait',
                        type: 'integer',
                        title: 'The Postinteractionwait Schema',
                        default: 0,
                        examples: [
                            0,
                        ],
                    },
                    selectors: {
                        $id: '#/properties/scenarios/items/properties/selectors',
                        type: 'array',
                        title: 'The Selectors Schema',
                    },
                    selectorExpansion: {
                        $id: '#/properties/scenarios/items/properties/selectorExpansion',
                        type: 'boolean',
                        title: 'The Selectorexpansion Schema',
                        default: false,
                        examples: [
                            true,
                        ],
                    },
                    expect: {
                        $id: '#/properties/scenarios/items/properties/expect',
                        type: 'integer',
                        title: 'The Expect Schema',
                        default: 0,
                        examples: [
                            0,
                        ],
                    },
                    misMatchThreshold: {
                        $id: '#/properties/scenarios/items/properties/misMatchThreshold',
                        type: 'number',
                        title: 'The Mismatchthreshold Schema',
                        default: 0.0,
                        examples: [
                            0.1,
                        ],
                    },
                    requireSameDimensions: {
                        $id: '#/properties/scenarios/items/properties/requireSameDimensions',
                        type: 'boolean',
                        title: 'The Requiresamedimensions Schema',
                        default: false,
                        examples: [
                            true,
                        ],
                    },
                    firstName: {
                        type: 'string',
                        faker: 'name.firstName',
                    },
                    lastName: {
                        type: 'string',
                        faker: 'name.lastName',
                    },
                    email: {
                        type: 'string',
                        faker: 'internet.email',
                    },
                },
                required: ['id', 'label', 'cookiePath', 'url', 'referenceUrl', 'readyEvent', 'readySelector', 'delay', 'hideSelectors', 'removeSelectors', 'hoverSelector', 'clickSelector', 'postInteractionWait', 'selectors', 'selectorExpansion', 'expect', 'misMatchThreshold', 'requireSameDimensions'],
            },
        },
    },
    required: ['scenarios'],
};
