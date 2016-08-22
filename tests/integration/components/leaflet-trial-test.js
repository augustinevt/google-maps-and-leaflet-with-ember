import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('leaflet-trial', 'Integration | Component | leaflet trial', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{leaflet-trial}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#leaflet-trial}}
      template block text
    {{/leaflet-trial}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
