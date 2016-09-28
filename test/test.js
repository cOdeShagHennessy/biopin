import test from 'ava';
//
test('joo', t => {
    t.pass();
});

test('car', async t => {
    const bar = Promise.resolve('car');

    t.is(await bar, 'car');
});
