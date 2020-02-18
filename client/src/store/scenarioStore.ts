// eslint-disable-next-line max-classes-per-file
import {
    decorate, observable, action, configure,
} from 'mobx';
import localForage from 'localforage';
import { Scenario } from 'backstopjs';

configure({ enforceActions: 'observed' });

class Store {
    scenarios: Scenario[] = [];

    addScenario = (scenario: Scenario): void => {
        this.scenarios.push(scenario);
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
    removeScenario: action,
});

const scenarioStore = new Store();

export default scenarioStore;
