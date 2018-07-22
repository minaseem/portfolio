/**
 * Created by imamudinnaseem on 7/22/18
 */

'use strict';

import sw from 'sw-helper';

var cacheFiles = [
    {
        url: "index.html",
        maxAgeSeconds: 604800,  // 1 week
        strategy: 'cacheFirstUpdate'
    },
    {
        url: new RegExp("((?!\/sw\\.js).)*((\\.)(js)){1}.*$")
    },
    {
        url: new RegExp(".*\\.(css|jpg|png|svg)")
    }];

var cacheName = 'v1';
const strategy = 'cacheFirst';
sw({cacheName, cacheFiles, strategy});
