class TempoPlugin {
    constructor() {
        this.name = "TempoPlugin"
    }

    install(hooks) {
        hooks.global.tapPromise(this.name, async source => {
            return { tempo: "Muito bom", ...source };
        });
    }
}

module.exports = TempoPlugin