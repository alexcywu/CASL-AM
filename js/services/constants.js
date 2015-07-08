/*
 * common/constants.js
 *
 * (c) 2015 CASL Ltd. By Alex Wu
 */

angular.module('caslam.services.constants', [])

    .service('Constants', [function ($scope) {
        var xip = "";

        var _API = {
            appMasterPath: "http://120.24.249.164/rest",
            publicServerPath: "120.24.249.164",
            baseIP: "http://" + xip,
            baseUrl: "http://:url/rest",
            providerPath: "/system/provider_user/",
            providerCallbackPath: "/system/provider/callback?type=",
            sessionPath: "/user/session?app_name=GRS",
            userProfilePath: "/user/profile?app_name=GRS",
            userPath: "/user?app_name=GRS",
            registerPath: "/user/register?app_name=GRS",
            appNamePrm: "?app_name=GRS",
            db_Path_userDriver: "/db/driver?app_name=GRS",
            db_Path_GatePass: "/db/gatepass?app_name=GRS",
            db_Path_GatePass: "/db/gatepass",
            appName: "actcurate",
            accessTokenName: "X-DreamFactory-Session-Token"
        }

        var _config = {
          adminEmail: "grsadmin@caslog.com.hk"
        }

        var _img = {
            avatar: "img/avatar.png",
            profile_bg: "img/bg_new.png"
        }

        var _timeouts = {
            collection: {
                user: 0
            }
        }

        var constants = {
            config: _config,
            DEBUGMODE: true,
            SHOWBROADCAST_EVENTS: true,
            API: _API,
            IMG: _img,
            timeouts: _timeouts,
        };


        return constants
    }])

;
