'use strict';

define('craftberi/tests/adapters/photo.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/photo.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/photo.js should pass ESLint.\n');
  });
});
define('craftberi/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('craftberi/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('craftberi/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('craftberi/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'craftberi/tests/helpers/start-app', 'craftberi/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _craftberiTestsHelpersStartApp, _craftberiTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _craftberiTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _craftberiTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('craftberi/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('craftberi/tests/helpers/resolver', ['exports', 'craftberi/resolver', 'craftberi/config/environment'], function (exports, _craftberiResolver, _craftberiConfigEnvironment) {

  var resolver = _craftberiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _craftberiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _craftberiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('craftberi/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('craftberi/tests/helpers/start-app', ['exports', 'ember', 'craftberi/app', 'craftberi/config/environment'], function (exports, _ember, _craftberiApp, _craftberiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _craftberiConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _craftberiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('craftberi/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('craftberi/tests/helpers/strip-tags.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/strip-tags.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/strip-tags.js should pass ESLint.\n');
  });
});
define('craftberi/tests/models/beer.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/beer.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/beer.js should pass ESLint.\n');
  });
});
define('craftberi/tests/models/brewery.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/brewery.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/brewery.js should pass ESLint.\n');
  });
});
define('craftberi/tests/models/dummy.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/dummy.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/dummy.js should pass ESLint.\n');
  });
});
define('craftberi/tests/models/photo.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/photo.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/photo.js should pass ESLint.\n');
  });
});
define('craftberi/tests/models/tap.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/tap.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/tap.js should pass ESLint.\n');
  });
});
define('craftberi/tests/pods/components/beer-list/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/beer-list/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/beer-list/component.js should pass ESLint.\n5:15  - \'later\' is defined but never used. (no-unused-vars)');
  });
});
define('craftberi/tests/pods/components/beer-list/item/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/beer-list/item/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/beer-list/item/component.js should pass ESLint.\n');
  });
});
define('craftberi/tests/pods/components/eq-sticky/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/eq-sticky/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/eq-sticky/component.js should pass ESLint.\n');
  });
});
define('craftberi/tests/pods/components/layout-main/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/layout-main/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/layout-main/component.js should pass ESLint.\n');
  });
});
define('craftberi/tests/pods/components/layout-main/footer/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/layout-main/footer/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/layout-main/footer/component.js should pass ESLint.\n');
  });
});
define('craftberi/tests/pods/components/layout-main/header/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/layout-main/header/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/layout-main/header/component.js should pass ESLint.\n');
  });
});
define('craftberi/tests/pods/components/pa-ge/index/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/pa-ge/index/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/pa-ge/index/component.js should pass ESLint.\n');
  });
});
define('craftberi/tests/pods/components/photo-feed/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/photo-feed/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/photo-feed/component.js should pass ESLint.\n');
  });
});
define('craftberi/tests/pods/components/yandex-map/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/yandex-map/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/yandex-map/component.js should pass ESLint.\n3:8  - \'computed\' is defined but never used. (no-unused-vars)\n3:19  - \'filterBy\' is defined but never used. (no-unused-vars)\n3:29  - \'reads\' is defined but never used. (no-unused-vars)');
  });
});
define('craftberi/tests/pods/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/route.js should pass ESLint.\n');
  });
});
define('craftberi/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('craftberi/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('craftberi/tests/serializers/photo.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/photo.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/photo.js should pass ESLint.\n');
  });
});
define('craftberi/tests/test-helper', ['exports', 'craftberi/tests/helpers/resolver', 'ember-qunit'], function (exports, _craftberiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_craftberiTestsHelpersResolver['default']);
});
define('craftberi/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('craftberi/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
