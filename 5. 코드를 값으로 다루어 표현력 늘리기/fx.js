        // curry 적용 후
        const curry = (f) => (a, ..._) => 
        _.length ? f(a, ..._) : (..._) => f(a, ..._);

        //filter curry 테스트
        const filter = curry((f, iter) => {
            let res = [];
            for (const p of iter) {
                if (f(p)) res.push(p);
            }
            return res
        });

        //map curry 테스트
        const map = curry((f, iter) => {
            let res = [];
            for (const a of iter) {
                res.push(f(a));
            }

            return res;
        });


        //reduce curry 테스트
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

        //combo curry 적용 전
        go(
        products,
        (products) => filter((p) => p.price < 20000, products),
        (products) => map((p) => p.price, products),
        (prices) => reduce(add, prices),
        console.log
        );


        //combo curry 적용 전
        go(
        products,
        filter((p) => p.price < 20000),
        map((p) => p.price),
        reduce(add),
        console.log
        );
    