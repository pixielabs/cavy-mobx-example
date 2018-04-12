import { containsText } from './helpers';

export default function(spec) {
  spec.describe('Incrementing the counter', function() {
    spec.it('works', async function() {
      await spec.press('button');
      const counter = await spec.findComponent('counter');
      await containsText(counter, 1);
    });
  });
}
