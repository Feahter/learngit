/*
 * @Author: feahter
 * @Date:   2017-08-02 15:38:47
 * @Last Modified by:   feahter
 * @Last Modified time: 2017-08-03 11:57:31
 */

'use strict';

! function(w, d) {
    var _width = w.screen.availWidth;
    var dpr = 0;

    function hitdpr() {
        var isAndroid = w.navigator.appVersion.match(/android/gi);
        var isIPhone = w.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = w.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            if (w.devicePixelRatio) {
                dpr = w.devicePixelRatio;
            } else {
                dpr = 1;
            }

        }
        d.documentElement.setAttribute('data-dpr', dpr);
    }

    function remeta(target) {
        var _meta = d.querySelector('meta[name="viewport"]');
        var scale = _width / target;
        if (scale > 1) { scale = 1; }
        var oString = "width=device-width, initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no";
        if (!_meta) {
            _meta = d.createElement('meta');
            _meta.setAttribute('name', 'viewport');
            _meta.setAttribute('content', oString);
            if (_meta.firstElementChild) {
                _meta.firstElementChild.appendChild(_meta);
            } else {
                var wrap = d.createElement('div');
                wrap.appendChild(_meta);
                document.write(wrap.innerHTML);
            }
        } else {
            _meta.setAttribute('content', oString);
        }
    };
    // 页面加载调用
    (function() {
        if (_width <= 414) {
            remeta(414);
        } else if (_width > 414 && _width <= 768) {
            remeta(768);
        } else if (_width > 768 && _width <= 1200) {
            remeta(1280);
        }
        hitdpr();
    })();
    //用户变化屏幕方向时调用
    w.addEventListener('orientationchange', function(e) {
        if (_width >= 768 && _width <= 1200) {
            location.reload();
        }
    });
}(window, document);