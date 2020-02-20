
import {
    decorate, observable, action, configure,
} from 'mobx';
import { Scenario } from 'backstopjs';

configure({ enforceActions: 'observed' });

class Store {
    scenarios: Scenario[] = [];

    addScenario = (scenario: Scenario): void => {
        this.scenarios.push(scenario);
    }

    changeScenarioKeyVal = (
        index: number, key: string,
        value: string | number | string[],
    ): void => {
        this.scenarios[index][key] = value;
    }

    removeScenario = (index: number): Scenario => {
        const scenario = this.scenarios[index];
        this.scenarios.splice(index, 1);
        return scenario;
    }
}

decorate(Store, {
    scenarios: observable,
    addScenario: action,
    changeScenarioKeyVal: action,
    removeScenario: action,
});

const scenarioStore = new Store();

export default scenarioStore;
