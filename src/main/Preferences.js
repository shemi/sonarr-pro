import Store from './Store';
import config from '../utils/config';
import moment from 'moment';
import defaultPreferences from '../utils/default_preferences';

let instance;

class Preferences {

    constructor() {
        this.store = Store.instance(config.preferencesFileName, false);

        this.setDefaultsIfNew();
    }

    get(key, defaultValue = null) {
        return this.store.get(key, defaultValue);
    }

    set(key, value = null) {
        if(typeof key !== 'object') {
            key = {[key]: value}
        }

        for(let storeKey of Object.keys(key)) {
            console.log('set param: ', key);
            this.store.set(storeKey, key[storeKey]);
        }

        this.store.set('last_modified', moment().toISOString());
    }

    setDefaultsIfNew() {
        if(this.get('last_modified')) {
           return;
        }

        this.set(defaultPreferences);
    }

    static instance() {
        if(! instance) {
            instance = new Preferences();
        }

        return instance;
    }

}

export default Preferences;