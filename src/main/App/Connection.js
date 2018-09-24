import * as connectors from './Connections';
import * as drivers from './Drivers';
import uuid from 'uuid/v4';

const connections = {};

export default class Connection {

    constructor(connectionForm) {
        let {type, driver, config, dbConfig} = Connection.transformConnectionForm(connectionForm);

        this._type = type;
        this._driver = driver;
        this._config = config;
        this._dbConfig = dbConfig;
        this.id = uuid();

        const Connector = connectors[this._type],
            Driver = drivers[this._driver];

        if (!Connector) {
            throw new Error(`Connector with the name ${type} not found.`);
        }

        if (!Driver) {
            throw new Error(`Driver with the name ${driver} not found.`);
        }

        this._connection = new Connector(this._config, this._dbConfig, Driver);
        this.driver = null;
    }

    test() {
        return this._connection.test();
    }

    async connect() {
        try {
            this.driver = await this._connection.connect();
            connections[this.id] = this;
        } catch (e) {
            throw e;
        }

        return this;
    }

    getStartData() {
        return this.driver.startData()
            .then(data => {
                return {
                    id: this.id,
                    ...data
                }
            });
    }

    static getConnection(id) {
        return connections[id];
    }

    static testConnection(connectionForm) {
        let inst = new Connection(connectionForm);

        return inst.test();
    }

    static createConnection(connectionForm) {
        let inst = new Connection(connectionForm);

        return inst.connect()
            .then(c => c.getStartData());
    }

    static transformConnectionForm(form) {
        return {
            type: form.connectionType,
            driver: form.driver,
            dbConfig: {
                host: form.dbHost,
                port: form.dbPort,
                user: form.dbUsername,
                password: form.dbPassword,
                database: form.dbName,
            },
            config: {
                host: form.sshHost,
                port: form.sshPort,
                user: form.sshUsername,
                password: form.sshPassword,
                key: form.sshKeyFilePath,
                socket: form.socketPath
            }
        }
    }

}