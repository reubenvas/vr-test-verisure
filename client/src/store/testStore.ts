import {
    decorate, observable, action, configure,
} from 'mobx';
import { create, persist } from 'mobx-persist';
import localForage from 'localforage';

configure({ enforceActions: 'observed' });

class Store {
    @observable @persist timesClicked = 0

    increaseTimesClicked = (newNumber: number): void => {
        this.timesClicked = newNumber;
    }
}

decorate(Store, {
    timesClicked: [persist, observable],
    increaseTimesClicked: action,
});

const hydrate = create({
    storage: localForage,
    jsonify: false,
});

const testStore = new Store();

hydrate('testStore', testStore).then((a) => console.log('testStore hydrated.', a)).catch((e) => console.error(e));

export default testStore;
