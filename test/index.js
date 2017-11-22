import axeCheck from 'axe-testcafe';

fixture `TestCafe tests with Axe`
    .page `http://0.0.0.0:4000`;

test('Automated accessibility testing of t12t', async t => {
    await axeCheck(t);
});
