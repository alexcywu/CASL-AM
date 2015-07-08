  angular.module('caslam.services.models', ['ngResource'])

    .factory( 'Models', function ($resource, Constants) {

        var constant_timeout = 10000;

        return{

          /**
          * @summary appMaster
          */

            appMaster_user_session: $resource(Constants.API.appMasterPath + '/user/session',
                {
                    app_name: Constants.API.appName
                },
                {
                    'post': {method:'POST'},
                    'put': {method: 'PUT'}
                }
            ),
            appMaster: $resource(Constants.API.appMasterPath + '/mydb/Appmaster',
                {
                    app_name: Constants.API.appName
                },
                {
                    'get': {
                        method:'GET'
                    }
                }
            ),
            appMaster_appinfo: $resource(Constants.API.appMasterPath + '/db/appinfo',
                {
                    app_name: Constants.API.appName
                },
                {
                    'get': {
                        method:'GET'
                    }
                }
            ),
            appMaster_appmarket: $resource(Constants.API.appMasterPath + '/db/appmarket',
                {
                    app_name: Constants.API.appName
                },
                {
                    'get': {
                        method:'GET'
                    }
                }
            ),

            warehouses: $resource('http://:url/rest/prolis/WHMstr/:id',
                { id: '@id',
                    app_name: Constants.API.appName,
                    timeout: constant_timeout,
                    responseType: JSON
                }
            ),
            gatepass: $resource('http://:url/rest/db/gatepass',
                { id: '@id',
                    fields: '@fields',
                    filter: '@filter',
                    app_name: Constants.API.appName,
                    timeout: constant_timeout
                },{
                    'post': {method:'POST'},
                    'put': {method: 'PUT'}
                }
            ),
            truckorders: $resource('http://:url/rest/prolis/TruckOrder',
                {

                    app_name: Constants.API.appName,
                    timeout: constant_timeout
                },{
                    'save': {method:'PUT'},
                    'PUT': {method:'PUT'}
                }
            ),
            casl_getGatePass: $resource('http://:url/rest/casl_getGatePass',
                { id: '@id',
                    fields: '@fields',
                    filter: '@filter',
                    app_name: Constants.API.appName,
                    timeout: constant_timeout
                },{
                    'POST': {method:'POST'},
                    'PUT': {method:'PUT'}
                }
            ),
            TSJobDetail: $resource('http://:url/rest/prolis/TSJobDetail',
                { id: '@id',
                    fields: '@fields',
                    filter: '@filter',
                    app_name: Constants.API.appName
                },{
                    'put': {method:'PUT'},
                }
            ),
            driver: $resource('http://:url/rest/db/driver/',
                {

                    fields: '@fields',
                    filter: '@filter',
                    app_name: Constants.API.appName
                },{
                    'save': {method:'PUT'},
                    'post': {method:'POST'}
                }
            ),
            userSession: $resource('http://:url/rest/user/session',
                {
                    app_name: Constants.API.appName,
                    action: '/user/session'
                },
                {
                    'login': { method:'POST' }
                }
            ),
            userPassword: $resource('http://:url/rest/user/password',
                {
                    app_name: Constants.API.appName,

                },
                {
                    'post': { method:'POST' }
                }
            ),
            userRegister: $resource('http://:url/rest/user/register',
                {
                    app_name: Constants.API.appName
                },
                {
                    'post': { method:'POST'}
                }
            ),
            userCustom: $resource('http://:url/rest/user/custom',
                {
                    app_name: Constants.API.appName
                },
                {
                    'post': { method:'POST'},
                    'get': { method:'GET'}

                }
            ),
            LogTruckGPSData: $resource('http://:url/rest/prolis/_proc/LogTruckGPSData',
                {
                    app_name: Constants.API.appName
                },
                {
                    'post': { method:'POST'}
                }
            ),
            ExpenseCodes: $resource('http://:url/rest/prolis/ExpenseCodes',
                {
                    app_name: Constants.API.appName
                },
                {
                    'post': { method:'POST'},
                    'get': {method:'GET'}
                }
            ),
            UploadExpenseRecords: $resource('http://:url/rest/prolis/_proc/UploadExpenseRecords',
                {
                    app_name: Constants.API.appName
                },
                {
                    'post': { method:'POST'},
                    'get': {method:'GET'}
                }
            ),
            readExpenses: $resource('http://:url/rest/db/expense',
                {
                    app_name: Constants.API.appName
                },
                {
                    'post': { method:'POST'},
                    'get': {method:'GET'},
                    'put': {method:'PUT'}
                }
            ),
            updatetruckorderphoto: $resource('http://:url/rest/prolis/_proc/updatetruckorderphoto',
                {
                    app_name: Constants.API.appName
                },
                {
                    'post': { method:'POST'},
                    'get': {method:'GET'},
                    'put': {method:'PUT'}
                }
            )

        }
        /** Default
         { 'get':    {method:'GET'},
           'save':   {method:'POST'},
           'query':  {method:'GET', isArray:false},
           'remove': {method:'DELETE'},
           'delete': {method:'DELETE'}
         }
         **/



    });
