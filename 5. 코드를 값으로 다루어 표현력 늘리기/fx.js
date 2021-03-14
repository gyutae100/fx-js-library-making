
        const curry = (f) => (a, ..._) => 
        _.length ? f(a, ..._) : (..._) => f(a, ..._);

        const filter = curry((f, iter) => {
            let res = [];
            for (const p of iter) {
                if (f(p)) res.push(p);
            }
            return res
        });

        const map = curry((f, iter) => {
            let res = [];
            for (const a of iter) {
                res.push(f(a));
            }

            return res;
        });


        const reduce = curry((f, acc, iter) => {
            if (!iter) {
                iter = acc[Symbol.iterator]();
                acc = iter.next().value;
            }

            for (const a of iter) {
                acc = f(acc, a);
            }
        return acc;
        });


        const go = (...args) => {
        reduce((a, f) => f(a), args);
        };

        const add = (a,b)=> a+b

        const products = [
        { name: "1", price: 1 },
        { name: "2", price: 2 },
        { name: "3", price: 3 },
        { name: "4", price: 4 },
        { name: "5", price: 5 },
        ];
        const mult = curry((a, b) => a * b);

    