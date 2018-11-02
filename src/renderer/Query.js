import Service from "./Service";
import Vue from 'vue';
import Stateable from "../utils/Stateable";

class QueryResultSet extends Stateable {

    constructor(tabId, rows, columns, chunkId, total, index) {
        super();

        this.rows = rows || [];
        this.columns = columns || [];
        this.chunkId = chunkId;
        this.total = total;
        this.hasMoreRows = !! chunkId;
        this.index = index;
        this.tabId = tabId;

        this.loadingMore = false;
    }

    next() {
        if(! this.hasMoreRows || this.loadingMore) {
            return;
        }

        this.loadingMore = true;

        Service.sendTo(this.tabId, 'QueryController@nextChunk', this.chunkId)
            .then(rows => {
                if(! rows || ! Array.isArray(rows)) {
                    this.hasMoreRows = false;
                    this.loadingMore = false;

                    return;
                }

                for(let row of rows) {
                    this.rows.push(row);
                }

                this.loadingMore = false;
            })
            .catch(err => console.log(err));
    }

    static createState() {
        return {
            scrollTop: 0,
            scrollLeft: 0,
        }
    }

}

export default class Query extends Stateable {

    constructor(database) {
        super();

        this.database = database;
        this.resultsSets = [];
        this.append = false;
        this.sqlHistory = [];
        this.lastSql = '';
    }

    async exec(sql) {
        this.lastSql = sql.trim();

        if(this.append) {
            this.sqlHistory.push(sql);
        } else  {
            this.clearSets();
            this.sqlHistory.length = 0;
        }

        let sets = [];

        try {
            let results = await Service.sendTo(this.tabId, 'QueryController@exec', this.database.name, sql),
                set,
                resultSetsIndex = 0;

            for(let set of results) {
                this.tab.log.info(set.head, this.database.name);

                if(set.columns && set.columns.length > 0) {
                    this.resultsSets.push(new QueryResultSet(
                        this.tabId,
                        set.rows,
                        set.columns,
                        set.chunkId,
                        set.head.rowsCount,
                        resultSetsIndex
                    ));

                    resultSetsIndex++;
                }
            }

        }
        catch (e) {
            this.tab.log.error(e, this.database.name);
        }


        return Vue.nextTick();
    }

    clearSets() {
        for(let setIndex in this.resultsSets) {
            if(! this.resultsSets[setIndex]) {
                return;
            }

            this.deleteSet(setIndex);
        }

        this.resultsSets.length = 0;
    }

    deleteSet(setIndex) {
        let set = this.resultsSets[setIndex];

        if(set.chunkId) {
            Service.send('QueryController@deleteChunk', set.chunkId)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

        Vue.delete(this.resultsSets, setIndex);
    }

    get tab() {
        return this.database.tab;
    }

    get tabId() {
        return this.database.tabId;
    }

    static createState() {
        return {
            splitTop: 40,
            splitBottom: 60,
        }
    }

}