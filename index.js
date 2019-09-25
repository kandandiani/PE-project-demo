(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            console.log(clientWidth) // 640px你知道pc端多大吗  pc端最小能到500
            if (!clientWidth) return;
            if (clientWidth >= 640) { // 绝大部分都是大于640px。 所以你的总是100px  0.98rem 对应的始终是98px
                docEl.style.fontSize = '100px';
            } else { // 这个else基本上就是废。因为pc端基本上缩小不到640以下。
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);